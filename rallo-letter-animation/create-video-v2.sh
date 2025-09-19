#!/bin/bash

# Create V2 of Multi-Word Animation Video with improved timing
# Direct to Downloads folder

echo "🎬 Creating Rallo Multi-Word Animation V2"
echo "========================================="
echo "Duration: 22 seconds"
echo ""

OUTPUT_FILE="/Users/rodericandrews/Downloads/rallo-multi-word-V2.mp4"
TEMP_REC="/tmp/rallo-v2-recording.mov"
HTML_PATH="/Users/rodericandrews/Obsidian/Master/_Projects/Rallo/a-rallo-home-desktop/rallo-letter-animation/multi-word-animation.html"

# Clean up any old temp files
rm -f "$TEMP_REC"

# Open the animation in Chrome
echo "Opening animation in Chrome..."
open "$HTML_PATH"

# Wait for page to load
sleep 4

echo "📹 Starting screen recording..."
echo "➜ Click the PLAY button when ready"
echo "➜ Recording for 25 seconds (includes buffer)"

# Record the screen
screencapture -v -T 25 "$TEMP_REC"

echo "✅ Recording complete"

# Check if recording exists and has content
if [ -f "$TEMP_REC" ]; then
    # Get video duration
    DURATION=$(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$TEMP_REC" 2>/dev/null)
    echo "Recording duration: ${DURATION}s"

    if (( $(echo "$DURATION > 1" | bc -l) )); then
        echo "Processing video with FFmpeg..."

        # Create HD version - trim to exactly 22 seconds
        ffmpeg -i "$TEMP_REC" \
            -ss 2.5 \
            -t 22 \
            -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
            -c:v libx264 \
            -preset slow \
            -crf 18 \
            -pix_fmt yuv420p \
            -r 60 \
            -movflags +faststart \
            -y \
            "$OUTPUT_FILE" 2>/dev/null

        if [ -f "$OUTPUT_FILE" ]; then
            SIZE=$(ls -lh "$OUTPUT_FILE" | awk '{print $5}')
            echo ""
            echo "✅ Success! V2 video created"
            echo "📁 File: $OUTPUT_FILE"
            echo "📊 Size: $SIZE"

            # Clean up temp file
            rm "$TEMP_REC"

            # Also create a compressed web version
            WEB_FILE="/Users/rodericandrews/Downloads/rallo-multi-word-V2-web.mp4"
            echo ""
            echo "Creating web-optimized version..."

            ffmpeg -i "$OUTPUT_FILE" \
                -vf "scale=1280:720" \
                -c:v libx264 \
                -preset fast \
                -crf 23 \
                -movflags +faststart \
                -y \
                "$WEB_FILE" 2>/dev/null

            if [ -f "$WEB_FILE" ]; then
                WEB_SIZE=$(ls -lh "$WEB_FILE" | awk '{print $5}')
                echo "✅ Web version created"
                echo "📁 File: $WEB_FILE"
                echo "📊 Size: $WEB_SIZE"
            fi
        else
            echo "❌ FFmpeg processing failed"
            echo "Temp recording saved at: $TEMP_REC"
        fi
    else
        echo "❌ Recording is too short (${DURATION}s)"
        echo "Please try again and make sure to click Play"
    fi
else
    echo "❌ Screen recording failed - no file created"
fi

echo ""
echo "Animation complete!"