#!/bin/bash

# Export Multi-Word Animation to High-Resolution Video
# Creates 1920x1080 HD video at 60fps with H.264 encoding

OUTPUT_DIR="./exports"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
OUTPUT_NAME="rallo_multi_word_animation_${TIMESTAMP}"

echo "================================================"
echo " Rallo Multi-Word Animation HD Export"
echo " Output: 1920x1080 @ 60fps"
echo "================================================"

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Function to capture frames using Chrome headless
capture_frames() {
    echo "📸 Capturing animation frames..."

    # Create temporary directory for frames
    TEMP_DIR="$OUTPUT_DIR/temp_frames_${TIMESTAMP}"
    mkdir -p "$TEMP_DIR"

    # Use Chrome headless with puppeteer to capture frames
    cat > "$TEMP_DIR/capture.js" << 'EOF'
const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    // Load the animation page
    await page.goto('file://' + process.cwd() + '/multi-word-animation.html', {
        waitUntil: 'networkidle2'
    });

    // Wait for animation to load
    await page.waitForTimeout(1000);

    // Total duration: 13.5 seconds at 60 fps = 810 frames
    const fps = 60;
    const duration = 13.5;
    const totalFrames = Math.floor(duration * fps);

    console.log(`Capturing ${totalFrames} frames...`);

    // Start animation and capture frames
    await page.evaluate(() => {
        window.animationController.reset();
    });

    for (let frame = 0; frame < totalFrames; frame++) {
        // Set animation to specific time
        await page.evaluate((frameTime) => {
            window.animationController.currentTime = frameTime;
            window.animationController.renderFrame(frameTime);
        }, frame / fps);

        // Capture screenshot
        await page.screenshot({
            path: `temp_frames_${Date.now()}/frame_${String(frame).padStart(5, '0')}.png`,
            clip: { x: 0, y: 0, width: 1920, height: 1080 }
        });

        if (frame % 30 === 0) {
            process.stdout.write(`\rProgress: ${Math.round((frame / totalFrames) * 100)}%`);
        }
    }

    console.log('\n✅ Frame capture complete!');
    await browser.close();
})();
EOF

    # Check if puppeteer is installed
    if ! command -v node &> /dev/null; then
        echo "❌ Node.js is not installed. Please install Node.js first."
        exit 1
    fi

    # Alternative: Use screen recording with manual playback
    echo "Alternative method: Using screen recording..."
    echo ""
    echo "📋 INSTRUCTIONS FOR HIGH-QUALITY CAPTURE:"
    echo "1. Open multi-word-animation.html in Chrome"
    echo "2. Press F11 for fullscreen (or Cmd+Ctrl+F on Mac)"
    echo "3. Open Developer Tools (F12) and set device to 1920x1080"
    echo "4. Start screen recording (QuickTime on Mac, OBS on Windows/Linux)"
    echo "5. Click 'Play' to start the animation"
    echo "6. Stop recording when animation completes (13.5 seconds)"
    echo ""
    read -p "Press Enter when you have the recording ready..."
}

# Function to create video from frames using FFmpeg
create_video() {
    echo "🎬 Creating HD video with FFmpeg..."

    # Check if FFmpeg is installed
    if ! command -v ffmpeg &> /dev/null; then
        echo "❌ FFmpeg is not installed. Installing with Homebrew..."
        brew install ffmpeg
    fi

    # Create video from frames (if using frame capture method)
    if [ -d "$TEMP_DIR" ] && [ "$(ls -A $TEMP_DIR/*.png 2>/dev/null)" ]; then
        echo "Creating video from captured frames..."

        ffmpeg -framerate 60 \
               -pattern_type glob \
               -i "$TEMP_DIR/frame_*.png" \
               -c:v libx264 \
               -preset slow \
               -crf 18 \
               -pix_fmt yuv420p \
               -s 1920x1080 \
               "$OUTPUT_DIR/${OUTPUT_NAME}_HD.mp4"

        echo "✅ HD video created: $OUTPUT_DIR/${OUTPUT_NAME}_HD.mp4"

        # Clean up temporary frames
        rm -rf "$TEMP_DIR"
    else
        echo "No frames found. Using screen recording method instead."
    fi
}

# Function to create 4K upscale version
create_4k_version() {
    echo "🎬 Creating 4K upscale version..."

    if [ -f "$OUTPUT_DIR/${OUTPUT_NAME}_HD.mp4" ]; then
        ffmpeg -i "$OUTPUT_DIR/${OUTPUT_NAME}_HD.mp4" \
               -vf "scale=3840:2160:flags=lanczos" \
               -c:v libx264 \
               -preset slow \
               -crf 18 \
               -pix_fmt yuv420p \
               "$OUTPUT_DIR/${OUTPUT_NAME}_4K.mp4"

        echo "✅ 4K video created: $OUTPUT_DIR/${OUTPUT_NAME}_4K.mp4"
    fi
}

# Function to create optimized web version
create_web_version() {
    echo "🌐 Creating optimized web version..."

    if [ -f "$OUTPUT_DIR/${OUTPUT_NAME}_HD.mp4" ]; then
        # Create WebM for web
        ffmpeg -i "$OUTPUT_DIR/${OUTPUT_NAME}_HD.mp4" \
               -c:v libvpx-vp9 \
               -crf 30 \
               -b:v 2000k \
               -s 1920x1080 \
               "$OUTPUT_DIR/${OUTPUT_NAME}_WEB.webm"

        # Create smaller MP4 for web
        ffmpeg -i "$OUTPUT_DIR/${OUTPUT_NAME}_HD.mp4" \
               -c:v libx264 \
               -preset medium \
               -crf 23 \
               -s 1280x720 \
               -movflags +faststart \
               "$OUTPUT_DIR/${OUTPUT_NAME}_WEB_720p.mp4"

        echo "✅ Web versions created:"
        echo "   - $OUTPUT_DIR/${OUTPUT_NAME}_WEB.webm"
        echo "   - $OUTPUT_DIR/${OUTPUT_NAME}_WEB_720p.mp4"
    fi
}

# Main execution
main() {
    echo "Starting export process..."
    echo ""

    # Option 1: Automated capture (requires additional setup)
    # capture_frames

    # Option 2: Manual screen recording
    echo "📹 MANUAL RECORDING METHOD:"
    echo ""
    echo "Since automated capture requires additional setup,"
    echo "please use screen recording software:"
    echo ""
    echo "🎯 RECOMMENDED TOOLS:"
    echo "   • Mac: QuickTime Player (File > New Screen Recording)"
    echo "   • Windows: OBS Studio (free) or Windows Game Bar (Win+G)"
    echo "   • Linux: OBS Studio or SimpleScreenRecorder"
    echo ""
    echo "📐 SETTINGS:"
    echo "   • Resolution: 1920x1080"
    echo "   • Frame rate: 60 FPS"
    echo "   • Format: MP4 or MOV"
    echo ""
    echo "🎬 RECORDING STEPS:"
    echo "1. Open 'multi-word-animation.html' in Chrome"
    echo "2. Press F11 for fullscreen"
    echo "3. Open DevTools (F12) > Device toolbar > Set to 1920x1080"
    echo "4. Start your screen recorder"
    echo "5. Click 'Play' in the animation"
    echo "6. Stop recording after 13.5 seconds"
    echo "7. Save as '${OUTPUT_NAME}_RAW.mp4'"
    echo ""
    echo "Once you have the recording, this script can optimize it."
    echo ""

    read -p "Do you have a recording ready to optimize? (y/n): " -n 1 -r
    echo ""

    if [[ $REPLY =~ ^[Yy]$ ]]; then
        read -p "Enter the path to your recording: " RECORDING_PATH

        if [ -f "$RECORDING_PATH" ]; then
            # Process the recording
            echo "Processing recording..."

            # Create HD version with proper encoding
            ffmpeg -i "$RECORDING_PATH" \
                   -c:v libx264 \
                   -preset slow \
                   -crf 18 \
                   -pix_fmt yuv420p \
                   -s 1920x1080 \
                   -r 60 \
                   "$OUTPUT_DIR/${OUTPUT_NAME}_HD.mp4"

            echo "✅ HD video created: $OUTPUT_DIR/${OUTPUT_NAME}_HD.mp4"

            # Create additional versions
            create_4k_version
            create_web_version

            echo ""
            echo "================================================"
            echo " ✅ Export Complete!"
            echo "================================================"
            echo ""
            echo "📁 Output files in: $OUTPUT_DIR/"
            echo ""
            ls -lh "$OUTPUT_DIR/${OUTPUT_NAME}"*.mp4 "$OUTPUT_DIR/${OUTPUT_NAME}"*.webm 2>/dev/null
        else
            echo "❌ File not found: $RECORDING_PATH"
        fi
    else
        echo "Please record the animation first, then run this script again."
    fi
}

# Run main function
main