#!/bin/bash

# QuickTime recording script
echo "🎬 Rallo Animation Recording with QuickTime"
echo "=========================================="
echo ""

OUTPUT="/Users/rodericandrews/Downloads/rallo-animation-quicktime.mov"
FINAL="/Users/rodericandrews/Downloads/rallo-multi-word-V2.mp4"

# Open the animation
echo "Opening animation in browser..."
open "/Users/rodericandrews/Obsidian/Master/_Projects/Rallo/a-rallo-home-desktop/rallo-letter-animation/multi-word-animation.html"
sleep 3

echo ""
echo "📋 MANUAL RECORDING INSTRUCTIONS:"
echo "=================================="
echo "1. Open QuickTime Player"
echo "2. File → New Screen Recording"
echo "3. Click the red record button"
echo "4. Select 'Record Selected Portion'"
echo "5. Drag to select the browser window"
echo "6. Click 'Start Recording'"
echo "7. Switch to browser and click PLAY"
echo "8. Let animation run (22 seconds)"
echo "9. Click stop button in menu bar"
echo "10. Save as: rallo-animation-quicktime.mov"
echo "    to Downloads folder"
echo ""
echo "Press ENTER when recording is saved to Downloads..."
read

# Check if file exists
if [ -f "$OUTPUT" ]; then
    echo "✅ Recording found!"
    echo "Processing with FFmpeg..."

    # Convert to MP4
    ffmpeg -i "$OUTPUT" \
        -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
        -c:v libx264 \
        -preset slow \
        -crf 18 \
        -pix_fmt yuv420p \
        -r 60 \
        -movflags +faststart \
        -y \
        "$FINAL"

    if [ -f "$FINAL" ]; then
        SIZE=$(ls -lh "$FINAL" | awk '{print $5}')
        echo ""
        echo "✅ SUCCESS! Video processed"
        echo "📁 File: $FINAL"
        echo "📊 Size: $SIZE"

        # Create web version
        WEB_FILE="/Users/rodericandrews/Downloads/rallo-multi-word-V2-web.mp4"
        ffmpeg -i "$FINAL" \
            -vf "scale=1280:720" \
            -c:v libx264 \
            -preset medium \
            -crf 23 \
            -y \
            "$WEB_FILE" 2>/dev/null

        echo "📁 Web version: $WEB_FILE"
    fi
else
    echo "❌ No recording file found at $OUTPUT"
    echo "Please make sure to save the recording as:"
    echo "rallo-animation-quicktime.mov in Downloads folder"
fi