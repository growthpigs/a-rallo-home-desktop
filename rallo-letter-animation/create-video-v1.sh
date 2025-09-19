#!/bin/bash

# Create V1 of Multi-Word Animation Video
# Direct to Downloads folder

echo "🎬 Creating Rallo Multi-Word Animation V1"
echo "========================================="

OUTPUT_FILE="/Users/rodericandrews/Downloads/rallo-multi-word-V1.mp4"
TEMP_DIR="/tmp/rallo-v1-frames"
HTML_FILE="file:///Users/rodericandrews/Obsidian/Master/_Projects/Rallo/a-rallo-home-desktop/rallo-letter-animation/multi-word-animation.html"

# Clean up any previous temp files
rm -rf "$TEMP_DIR"
mkdir -p "$TEMP_DIR"

# Open the animation in Chrome
echo "Opening animation..."
open -a "Google Chrome" "$HTML_FILE"

# Wait for page to load
sleep 3

# Position Chrome window to exact size
osascript <<EOF
tell application "Google Chrome"
    activate
    set bounds of front window to {0, 0, 1920, 1080}
end tell
EOF

sleep 1

# Method 1: Screen recording (simpler, works immediately)
echo "Recording animation (15 seconds)..."

# Record the animation area
screencapture -v -R0,0,1920,1080 -t 15 "$TEMP_DIR/raw-recording.mov" &
RECORD_PID=$!

# Wait a moment then start animation
sleep 2

# Click play button via JavaScript
osascript <<EOF
tell application "System Events"
    tell process "Google Chrome"
        set frontmost to true
        -- Click approximately where the Play button is
        click at {960, 1000}
    end tell
end tell
EOF

# Wait for recording to complete
wait $RECORD_PID

echo "✅ Recording complete"

# Process with FFmpeg - trim to exact 13.5 seconds and optimize
echo "Processing video..."

ffmpeg -i "$TEMP_DIR/raw-recording.mov" \
    -ss 1.5 \
    -t 13.5 \
    -vf "crop=1920:1080:0:0,scale=1920:1080:flags=lanczos" \
    -c:v libx264 \
    -preset slow \
    -crf 18 \
    -pix_fmt yuv420p \
    -r 60 \
    -movflags +faststart \
    -y \
    "$OUTPUT_FILE" 2>/dev/null

# Clean up
rm -rf "$TEMP_DIR"

if [ -f "$OUTPUT_FILE" ]; then
    echo "✅ Success! Video created:"
    echo "📁 $OUTPUT_FILE"
    ls -lh "$OUTPUT_FILE"

    # Also create a smaller web version
    WEB_FILE="/Users/rodericandrews/Downloads/rallo-multi-word-V1-web.mp4"
    echo "Creating web-optimized version..."

    ffmpeg -i "$OUTPUT_FILE" \
        -vf "scale=1280:720" \
        -c:v libx264 \
        -preset medium \
        -crf 23 \
        -movflags +faststart \
        -y \
        "$WEB_FILE" 2>/dev/null

    echo "📁 Web version: $WEB_FILE"
    ls -lh "$WEB_FILE"
else
    echo "❌ Failed to create video"
    exit 1
fi