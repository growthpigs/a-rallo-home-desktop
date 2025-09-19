#!/bin/bash

# Simple automated video export using screencapture and ffmpeg
# Creates V1 of the multi-word animation

echo "🎬 Rallo Multi-Word Animation Export - V1"
echo "========================================="

# Output file
OUTPUT_FILE="/Users/rodericandrews/Downloads/rallo-multi-word-V1.mp4"
TEMP_VIDEO="/tmp/rallo-screen-recording.mov"

# Open the animation in Chrome
echo "Opening animation in Chrome..."
open -a "Google Chrome" "file:///Users/rodericandrews/Obsidian/Master/_Projects/Rallo/a-rallo-home-desktop/rallo-letter-animation/multi-word-animation.html"

# Wait for Chrome to open and page to load
sleep 3

# Use AppleScript to position and size Chrome window to exactly 1920x1080
osascript <<EOF
tell application "Google Chrome"
    activate
    set bounds of front window to {0, 0, 1920, 1080}
end tell
EOF

sleep 1

# Start screen recording of the Chrome window area
echo "Starting screen capture..."
# Record for 15 seconds (13.5s animation + buffer) at 60fps
screencapture -v -k -T 15 -r 60 -R0,0,1920,1080 "$TEMP_VIDEO" &
CAPTURE_PID=$!

sleep 2

# Auto-click play button using AppleScript
echo "Starting animation..."
osascript <<EOF
tell application "Google Chrome"
    activate
    tell active tab of front window
        execute javascript "document.getElementById('playBtn').click();"
    end tell
end tell
EOF

# Wait for recording to complete
wait $CAPTURE_PID

echo "✅ Screen recording complete"

# Convert and optimize with FFmpeg
echo "Converting to HD MP4..."
ffmpeg -i "$TEMP_VIDEO" \
    -ss 0.5 \
    -t 13.5 \
    -c:v libx264 \
    -preset medium \
    -crf 18 \
    -pix_fmt yuv420p \
    -vf "crop=1920:1080:0:0,scale=1920:1080" \
    -r 60 \
    -y \
    "$OUTPUT_FILE" 2>/dev/null

# Clean up
rm -f "$TEMP_VIDEO"

echo "✅ Video export complete!"
echo "📁 Saved to: $OUTPUT_FILE"
echo ""
ls -lh "$OUTPUT_FILE"