const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

async function captureAnimationFrames() {
    console.log('🎬 Starting Multi-Word Animation Video Export - V1');
    console.log('================================================');

    const tempDir = `/tmp/rallo-frames-${Date.now()}`;
    fs.mkdirSync(tempDir, { recursive: true });

    try {
        // Launch Chrome
        const browser = await puppeteer.launch({
            headless: false, // Set to false to see what's happening
            executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-accelerated-2d-canvas',
                '--disable-gpu'
            ]
        });

        const page = await browser.newPage();
        await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });

        // Load the animation page
        const animationPath = 'file:///Users/rodericandrews/Obsidian/Master/_Projects/Rallo/a-rallo-home-desktop/rallo-letter-animation/multi-word-animation.html';
        console.log('Loading animation page...');
        await page.goto(animationPath, { waitUntil: 'networkidle0' });

        // Wait for animation to fully load
        await page.waitForTimeout(2000);

        // Initialize animation controller
        await page.evaluate(() => {
            if (!window.animationController) {
                window.animationController = new MultiWordAnimationController();
            }
            window.animationController.reset();
            return true;
        });

        const fps = 60;
        const duration = 13.5;
        const totalFrames = Math.floor(duration * fps);

        console.log(`📸 Capturing ${totalFrames} frames at ${fps}fps...`);

        // Capture each frame
        for (let frame = 0; frame < totalFrames; frame++) {
            const currentTime = frame / fps;

            // Set animation to specific time
            await page.evaluate((time) => {
                window.animationController.currentTime = time;

                // Manually update the animation state
                let accumulatedTime = 0;
                for (let i = 0; i < window.animationController.sequences.length; i++) {
                    const seq = window.animationController.sequences[i];
                    if (time >= accumulatedTime && time < accumulatedTime + seq.duration) {
                        const sequenceProgress = (time - accumulatedTime) / seq.duration;

                        if (i !== window.animationController.currentSequenceIndex) {
                            window.animationController.currentSequenceIndex = i;
                            window.animationController.createWordDisplay(seq);
                        }

                        window.animationController.animateLetters(seq, sequenceProgress);
                        break;
                    }
                    accumulatedTime += seq.duration;
                }

                // Update timeline display
                document.getElementById('timeDisplay').textContent = `${time.toFixed(1)}s / 13.5s`;
                document.getElementById('timelineProgress').style.width = `${(time / 13.5) * 100}%`;
            }, currentTime);

            // Wait for render
            await page.waitForTimeout(50);

            // Capture screenshot
            const framePath = path.join(tempDir, `frame_${String(frame).padStart(5, '0')}.png`);
            await page.screenshot({
                path: framePath,
                clip: { x: 0, y: 0, width: 1920, height: 1080 }
            });

            if (frame % 30 === 0) {
                const progress = Math.round((frame / totalFrames) * 100);
                console.log(`Progress: ${progress}%`);
            }
        }

        console.log('✅ Frame capture complete!');
        await browser.close();

        // Create video with FFmpeg
        console.log('🎬 Creating HD video with FFmpeg...');

        const outputPath = '/Users/rodericandrews/Downloads/rallo-multi-word-V1.mp4';

        const ffmpegCommand = `ffmpeg -y -framerate ${fps} -i "${tempDir}/frame_%05d.png" -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p -vf "scale=1920:1080" "${outputPath}"`;

        const { stdout, stderr } = await execPromise(ffmpegCommand);

        console.log('✅ Video created successfully!');
        console.log(`📁 Output: ${outputPath}`);

        // Cleanup
        console.log('Cleaning up temporary files...');
        await execPromise(`rm -rf "${tempDir}"`);

        return outputPath;

    } catch (error) {
        console.error('❌ Error during video creation:', error);
        // Cleanup on error
        try {
            await execPromise(`rm -rf "${tempDir}"`);
        } catch (cleanupError) {
            console.error('Failed to cleanup:', cleanupError);
        }
        throw error;
    }
}

// Run if called directly
if (require.main === module) {
    captureAnimationFrames()
        .then(() => {
            console.log('🎉 Export complete!');
            process.exit(0);
        })
        .catch((error) => {
            console.error('Export failed:', error);
            process.exit(1);
        });
}

module.exports = { captureAnimationFrames };