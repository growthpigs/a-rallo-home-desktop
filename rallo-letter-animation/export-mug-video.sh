#!/bin/bash

echo "🎬 Creating 16:9 Mug Animation Video..."

# Output settings
OUTPUT_DIR="$HOME/Downloads"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
OUTPUT_FILE="$OUTPUT_DIR/mug-animation-16-9-$TIMESTAMP.mp4"

# Create frames from the transparent mug
cd /Users/rodericandrews/Obsidian/Master/_Projects/Rallo/a-rallo-home-desktop/rallo-letter-animation/assets/images

# Use ffmpeg to create a diagonal movement animation
ffmpeg -f lavfi -i color=white:s=1920x1080:d=4 \
  -loop 1 -i trans-mug.png \
  -filter_complex "\
    [1:v]scale=240:240[mug]; \
    [0:v][mug]overlay=1400:750:enable='between(t,0,4)'[v0]; \
    [1:v]scale=210:210[mug1]; \
    [v0][mug1]overlay=1320-t*400:700-t*200:enable='between(t,0.2,4)'[v1]; \
    [1:v]scale=180:180[mug2]; \
    [v1][mug2]overlay=1240-t*400:650-t*200:enable='between(t,0.4,4)'[v2]; \
    [1:v]scale=150:150[mug3]; \
    [v2][mug3]overlay=1160-t*400:600-t*200:enable='between(t,0.6,4)'[v3]; \
    [1:v]scale=120:120[mug4]; \
    [v3][mug4]overlay=1080-t*400:550-t*200:enable='between(t,0.8,4)'[v4]; \
    [1:v]scale=96:96[mug5]; \
    [v4][mug5]overlay=1000-t*400:500-t*200:enable='between(t,1.0,4)'[v5]; \
    [1:v]scale=74:74[mug6]; \
    [v5][mug6]overlay=920-t*400:450-t*200:enable='between(t,1.2,4)'[v6]; \
    [1:v]scale=56:56[mug7]; \
    [v6][mug7]overlay=840-t*400:400-t*200:enable='between(t,1.4,4)'[v7]; \
    [1:v]scale=40:40[mug8]; \
    [v7][mug8]overlay=760-t*400:350-t*200:enable='between(t,1.6,4)'[v8]; \
    [1:v]scale=24:24[mug9]; \
    [v8][mug9]overlay=680-t*400:300-t*200:enable='between(t,1.8,4)'[out]" \
  -map "[out]" \
  -t 4 \
  -c:v libx264 \
  -preset medium \
  -crf 18 \
  -pix_fmt yuv420p \
  -movflags +faststart \
  "$OUTPUT_FILE"

echo "✅ Video saved to: $OUTPUT_FILE"

# Create a looping version
LOOP_FILE="$OUTPUT_DIR/mug-animation-loop-$TIMESTAMP.mp4"
ffmpeg -stream_loop 3 -i "$OUTPUT_FILE" -c copy "$LOOP_FILE"
echo "✅ Looping video saved to: $LOOP_FILE"

open "$LOOP_FILE"