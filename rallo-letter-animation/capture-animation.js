const puppeteer = require('puppeteer');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

async function captureAnimation() {
    console.log('Starting automated animation capture...');
    
    // Launch browser in headless mode
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    
    // Load the HTML file
    const htmlPath = `file://${path.resolve(__dirname, 'index.html')}`;
    console.log(`Loading: ${htmlPath}`);
    await page.goto(htmlPath, { waitUntil: 'networkidle0' });
    
    // Wait for animation to be ready
    await page.waitForSelector('#letter-container');
    
    // Start the animation by clicking play
    await page.evaluate(() => {
        // Directly start the animation if there's a play button
        const playBtn = document.querySelector('#playBtn');
        if (playBtn) {
            playBtn.click();
        }
        // Or trigger animation start directly
        if (window.animationController) {
            window.animationController.startAnimation();
        }
    });
    
    console.log('Animation started, capturing frames...');
    
    // Take screenshots at intervals
    const framesDir = path.join(__dirname, 'frames');
    if (!fs.existsSync(framesDir)) {
        fs.mkdirSync(framesDir);
    }
    
    // Capture frames for 15 seconds (30 fps = 450 frames)
    const fps = 30;
    const duration = 15;
    const totalFrames = fps * duration;
    
    for (let i = 0; i < totalFrames; i++) {
        const framePath = path.join(framesDir, `frame_${String(i).padStart(5, '0')}.png`);
        await page.screenshot({ path: framePath });
        await page.waitForTimeout(1000 / fps); // Wait for next frame
        
        if (i % 30 === 0) {
            console.log(`Captured frame ${i}/${totalFrames}`);
        }
    }
    
    await browser.close();
    console.log('Frame capture complete. Creating video...');
    
    // Convert frames to video using ffmpeg
    const outputPath = '/Users/rodericandrews/Downloads/rallo-animation-final.mp4';
    const ffmpegCmd = `ffmpeg -y -framerate ${fps} -i ${framesDir}/frame_%05d.png -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p -movflags +faststart ${outputPath}`;
    
    exec(ffmpegCmd, (error, stdout, stderr) => {
        if (error) {
            console.error(`FFmpeg error: ${error}`);
            return;
        }
        console.log(`Video created successfully at: ${outputPath}`);
        
        // Clean up frames
        exec(`rm -rf ${framesDir}`, () => {
            console.log('Cleaned up temporary frames');
        });
    });
}

captureAnimation().catch(console.error);