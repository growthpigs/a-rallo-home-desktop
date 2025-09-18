const puppeteer = require('puppeteer');
const { exec } = require('child_process');
const path = require('path');

async function recordAnimation() {
    console.log('Starting animation recording...');
    
    const browser = await puppeteer.launch({ 
        headless: false,
        defaultViewport: null,
        args: ['--window-size=1920,1080']
    });
    
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    
    // Load the HTML file
    const htmlPath = `file://${path.resolve(__dirname, 'index.html')}`;
    console.log(`Loading: ${htmlPath}`);
    await page.goto(htmlPath);
    
    // Wait for animation to be ready
    await page.waitForSelector('#letter-container');
    
    // Start screen recording
    const outputPath = '/Users/rodericandrews/Downloads/rallo-animation-hd.mp4';
    await page.evaluate(() => {
        console.log('Starting animation...');
    });
    
    // Start the actual screen recording
    const client = await page.target().createCDPSession();
    await client.send('Page.startScreencast', { 
        format: 'png', 
        quality: 100,
        maxWidth: 1920,
        maxHeight: 1080
    });
    
    const frames = [];
    let frameCount = 0;
    
    client.on('Page.screencastFrame', async (frameData) => {
        frames.push(frameData.data);
        frameCount++;
        await client.send('Page.screencastFrameAck', { sessionId: frameData.sessionId });
    });
    
    // Click play button to start animation
    await page.click('#playBtn');
    
    // Record for 15 seconds (to capture the full animation including the logo at the end)
    console.log('Recording for 15 seconds...');
    await page.waitForTimeout(15000);
    
    await client.send('Page.stopScreencast');
    
    console.log(`Captured ${frameCount} frames`);
    console.log('Processing frames into video...');
    
    // Save frames and convert to video
    const fs = require('fs');
    const framesDir = path.join(__dirname, 'frames');
    
    if (!fs.existsSync(framesDir)) {
        fs.mkdirSync(framesDir);
    }
    
    // Save all frames
    for (let i = 0; i < frames.length; i++) {
        const framePath = path.join(framesDir, `frame_${String(i).padStart(5, '0')}.png`);
        fs.writeFileSync(framePath, Buffer.from(frames[i], 'base64'));
    }
    
    // Use ffmpeg to create video from frames
    const ffmpegCmd = `ffmpeg -y -framerate 30 -i ${framesDir}/frame_%05d.png -c:v libx264 -pix_fmt yuv420p -crf 18 ${outputPath}`;
    
    exec(ffmpegCmd, (error, stdout, stderr) => {
        if (error) {
            console.error(`FFmpeg error: ${error}`);
            return;
        }
        console.log(`Video saved to: ${outputPath}`);
        
        // Clean up frames
        exec(`rm -rf ${framesDir}`, () => {
            console.log('Cleaned up temporary frames');
        });
    });
    
    await browser.close();
}

recordAnimation().catch(console.error);