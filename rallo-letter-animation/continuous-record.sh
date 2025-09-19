#!/bin/bash

# Continuous recording script
echo "🎬 Rallo Animation - Continuous Recording"
echo "========================================="
echo ""

OUTPUT="/Users/rodericandrews/Downloads/rallo-animation-continuous.mov"
FINAL="/Users/rodericandrews/Downloads/rallo-multi-word-V2.mp4"

# Clean up old file
rm -f "$OUTPUT"

# Open the animation
echo "Opening animation in browser..."
open "/Users/rodericandrews/Obsidian/Master/_Projects/Rallo/a-rallo-home-desktop/rallo-letter-animation/multi-word-animation.html"
sleep 4

echo ""
echo "📋 INSTRUCTIONS:"
echo "1. Browser window with animation is now open"
echo "2. Press ENTER here to start recording"
echo "3. Immediately click PLAY in the browser"
echo "4. Let animation run for 22 seconds"
echo "5. Press CTRL+C here to stop recording"
echo ""
echo "Press ENTER when ready to start recording..."
read

echo ""
echo "🔴 RECORDING STARTED!"
echo "➜ Switch to browser and click PLAY now!"
echo "➜ Press CTRL+C after animation completes (22 seconds)"
echo ""

# Start continuous recording
screencapture -v "$OUTPUT"

echo ""
echo "✅ Recording stopped"

# Check if file exists and has content
if [ -f "$OUTPUT" ]; then
    DURATION=$(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$OUTPUT" 2>/dev/null)
    SIZE_BYTES=$(stat -f%z "$OUTPUT")

    echo "Recording duration: ${DURATION}s"
    echo "File size: ${SIZE_BYTES} bytes"

    if [ "$SIZE_BYTES" -gt 10000 ]; then
        echo "Processing video with FFmpeg..."

        # Process to HD MP4
        ffmpeg -i "$OUTPUT" \
            -vf "crop=1920:1080,scale=1920:1080:flags=lanczos" \
            -c:v libx264 \
            -preset slow \
            -crf 18 \
            -pix_fmt yuv420p \
            -r 60 \
            -movflags +faststart \
            -y \
            "$FINAL"

        if [ -f "$FINAL" ]; then
            FINAL_SIZE=$(ls -lh "$FINAL" | awk '{print $5}')
            echo ""
            echo "✅ SUCCESS! V2 video created"
            echo "📁 File: $FINAL"
            echo "📊 Size: $FINAL_SIZE"

            # Create web version
            WEB_FILE="/Users/rodericandrews/Downloads/rallo-multi-word-V2-web.mp4"
            echo "Creating web-optimized version..."
            ffmpeg -i "$FINAL" \
                -vf "scale=1280:720" \
                -c:v libx264 \
                -preset medium \
                -crf 23 \
                -y \
                "$WEB_FILE" 2>/dev/null

            if [ -f "$WEB_FILE" ]; then
                WEB_SIZE=$(ls -lh "$WEB_FILE" | awk '{print $5}')
                echo "📁 Web version: $WEB_FILE"
                echo "📊 Web size: $WEB_SIZE"
            fi

            # Clean up temp file
            rm "$OUTPUT"
        else
            echo "❌ FFmpeg processing failed"
        fi
    else
        echo "❌ Recording file too small (${SIZE_BYTES} bytes)"
        echo "Make sure to let the recording run for the full animation"
    fi
else
    echo "❌ No recording file created"
fi