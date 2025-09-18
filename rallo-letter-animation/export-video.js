const puppeteer = require('puppeteer');
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
const path = require('path');

async function exportVideo() {
    console.log('🎬 Starting video export...');
    
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    
    // Navigate to the animation
    await page.goto('http://localhost:3001/rallo-letter-animation/', {
        waitUntil: 'networkidle2'
    });
    
    // Wait for animation to load
    await page.waitForTimeout(2000);
    
    // Set up recorder
    const outputPath = path.join(process.env.HOME, 'Downloads', `rallo-animation-${Date.now()}.mp4`);
    const recorder = new PuppeteerScreenRecorder(page, {
        followNewTab: false,
        fps: 30,
        videoFrame: {
            width: 1920,
            height: 1080,
        },
        aspectRatio: '16:9',
    });
    
    console.log('📹 Recording animation...');
    await recorder.start(outputPath);
    
    // Click play button
    await page.click('#playBtn');
    
    // Record for animation duration (7 seconds) + buffer
    await page.waitForTimeout(8000);
    
    await recorder.stop();
    await browser.close();
    
    console.log(`✅ Video exported to: ${outputPath}`);
}

exportVideo().catch(console.error);