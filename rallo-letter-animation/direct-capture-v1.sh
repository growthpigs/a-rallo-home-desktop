#!/bin/bash

# Direct screen capture of animation for V1

echo "🎬 Rallo Multi-Word Animation - V1 Export"
echo "========================================="

# Output files
OUTPUT_HD="/Users/rodericandrews/Downloads/rallo-multi-word-V1.mp4"
TEMP_REC="/tmp/rallo-animation-capture.mov"

# Open the HTML file
HTML_PATH="/Users/rodericandrews/Obsidian/Master/_Projects/Rallo/a-rallo-home-desktop/rallo-letter-animation/multi-word-animation.html"
open "$HTML_PATH"

echo "Waiting for page to load..."
sleep 4

echo "📹 Starting screen recording..."
echo "Please click PLAY button now!"
echo "(Recording for 16 seconds)"

# Simple screen record without specific region
screencapture -v -T 16 "$TEMP_REC"

echo "✅ Recording complete"

# Check if recording exists
if [ -f "$TEMP_REC" ]; then
    echo "Processing video with FFmpeg..."

    # Create HD version
    ffmpeg -i "$TEMP_REC" \
        -ss 2 \
        -t 13.5 \
        -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
        -c:v libx264 \
        -preset medium \
        -crf 20 \
        -pix_fmt yuv420p \
        -r 60 \
        -y \
        "$OUTPUT_HD"

    if [ -f "$OUTPUT_HD" ]; then
        echo "✅ Success!"
        echo "📁 Video saved to: $OUTPUT_HD"
        ls -lh "$OUTPUT_HD"

        # Clean up
        rm "$TEMP_REC"
    else
        echo "❌ FFmpeg processing failed"
    fi
else
    echo "❌ Screen recording failed"
fi