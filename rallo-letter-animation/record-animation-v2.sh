#!/bin/bash

# Interactive recording script for V2 animation

echo "🎬 Rallo Multi-Word Animation V2 - Interactive Recording"
echo "========================================================="
echo ""
echo "This will help you record the animation properly."
echo ""

OUTPUT_FILE="/Users/rodericandrews/Downloads/rallo-multi-word-V2.mp4"
TEMP_REC="/tmp/rallo-v2-manual.mov"
HTML_PATH="file:///Users/rodericandrews/Obsidian/Master/_Projects/Rallo/a-rallo-home-desktop/rallo-letter-animation/multi-word-animation.html"

# Clean up old files
rm -f "$TEMP_REC"

echo "📋 INSTRUCTIONS:"
echo "1. Chrome will open with the animation"
echo "2. Wait for it to load completely"
echo "3. When ready, press ENTER here to start recording"
echo "4. Quickly switch to Chrome and click PLAY"
echo "5. Let the animation run (22 seconds)"
echo "6. Press any key to stop recording when done"
echo ""

# Open the animation
echo "Opening animation in Chrome..."
open -a "Google Chrome" "$HTML_PATH"
sleep 3

echo "➜ Press ENTER when ready to start recording..."
read

echo "🔴 RECORDING STARTED!"
echo "➜ Switch to Chrome and click PLAY now!"
echo "➜ Press any key to stop when animation completes (after 22 seconds)"

# Start recording
screencapture -v "$TEMP_REC" &
RECORD_PID=$!

# Wait for user to stop
read -n 1 -s

# Stop recording
kill $RECORD_PID 2>/dev/null
sleep 1

echo ""
echo "✅ Recording stopped"

# Check if file exists and has content
if [ -f "$TEMP_REC" ]; then
    DURATION=$(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$TEMP_REC" 2>/dev/null)
    echo "Recording duration: ${DURATION}s"

    if (( $(echo "$DURATION > 10" | bc -l) )); then
        echo "Processing video..."

        # Process with FFmpeg
        ffmpeg -i "$TEMP_REC" \
            -vf "crop=1920:1080:0:200,scale=1920:1080:flags=lanczos" \
            -c:v libx264 \
            -preset slow \
            -crf 18 \
            -pix_fmt yuv420p \
            -r 60 \
            -movflags +faststart \
            -y \
            "$OUTPUT_FILE"

        if [ -f "$OUTPUT_FILE" ]; then
            SIZE=$(ls -lh "$OUTPUT_FILE" | awk '{print $5}')
            echo ""
            echo "✅ SUCCESS! V2 video created"
            echo "📁 File: $OUTPUT_FILE"
            echo "📊 Size: $SIZE"

            # Create web version
            WEB_FILE="/Users/rodericandrews/Downloads/rallo-multi-word-V2-web.mp4"
            ffmpeg -i "$OUTPUT_FILE" \
                -vf "scale=1280:720" \
                -c:v libx264 \
                -preset medium \
                -crf 23 \
                -y \
                "$WEB_FILE" 2>/dev/null

            echo "📁 Web version: $WEB_FILE"

            # Clean up
            rm "$TEMP_REC"
        else
            echo "❌ Processing failed"
        fi
    else
        echo "❌ Recording too short. Please record the full animation."
    fi
else
    echo "❌ No recording file created"
fi