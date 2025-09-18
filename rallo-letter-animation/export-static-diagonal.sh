#!/bin/bash

echo "🎬 Creating Static Diagonal Mug Animation Video..."
echo "📍 NO MOVEMENT - Mugs appear in fixed positions with opacity fade"

# Output settings
OUTPUT_DIR="$HOME/Downloads"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
OUTPUT_FILE="$OUTPUT_DIR/mug-static-diagonal-$TIMESTAMP.mp4"

# Navigate to the animation directory
cd /Users/rodericandrews/Obsidian/Master/_Projects/Rallo/a-rallo-home-desktop/rallo-letter-animation

# Create static diagonal animation - mugs in FIXED positions, only opacity changes
ffmpeg -f lavfi -i color=white:s=1920x1080:d=5 \
  -loop 1 -i assets/images/trans-mug.png \
  -filter_complex "\
    [1:v]scale=200:200,fade=in:st=0:d=0.5:alpha=1,fade=out:st=3.5:d=0.5:alpha=1[mug0]; \
    [0:v][mug0]overlay=1620:780:enable='between(t,0,5)'[v0]; \
    [1:v]scale=180:180,fade=in:st=0.2:d=0.5:alpha=1,fade=out:st=3.5:d=0.5:alpha=1[mug1]; \
    [v0][mug1]overlay=1440:680:enable='between(t,0.2,5)'[v1]; \
    [1:v]scale=160:160,fade=in:st=0.4:d=0.5:alpha=1,fade=out:st=3.5:d=0.5:alpha=1[mug2]; \
    [v1][mug2]overlay=1260:580:enable='between(t,0.4,5)'[v2]; \
    [1:v]scale=140:140,fade=in:st=0.6:d=0.5:alpha=1,fade=out:st=3.5:d=0.5:alpha=1[mug3]; \
    [v2][mug3]overlay=1080:480:enable='between(t,0.6,5)'[v3]; \
    [1:v]scale=120:120,fade=in:st=0.8:d=0.5:alpha=1,fade=out:st=3.5:d=0.5:alpha=1[mug4]; \
    [v3][mug4]overlay=900:380:enable='between(t,0.8,5)'[v4]; \
    [1:v]scale=100:100,fade=in:st=1.0:d=0.5:alpha=1,fade=out:st=3.5:d=0.5:alpha=1[mug5]; \
    [v4][mug5]overlay=720:280:enable='between(t,1.0,5)'[v5]; \
    [1:v]scale=80:80,fade=in:st=1.2:d=0.5:alpha=1,fade=out:st=3.5:d=0.5:alpha=1[mug6]; \
    [v5][mug6]overlay=540:180:enable='between(t,1.2,5)'[v6]; \
    [1:v]scale=60:60,fade=in:st=1.4:d=0.5:alpha=1,fade=out:st=3.5:d=0.5:alpha=1[mug7]; \
    [v6][mug7]overlay=360:80:enable='between(t,1.4,5)'[v7]; \
    [1:v]scale=40:40,fade=in:st=1.6:d=0.5:alpha=1,fade=out:st=3.5:d=0.5:alpha=1[mug8]; \
    [v7][mug8]overlay=180:-20:enable='between(t,1.6,5)'[v8]; \
    [1:v]scale=20:20,fade=in:st=1.8:d=0.5:alpha=1,fade=out:st=3.5:d=0.5:alpha=1[mug9]; \
    [v8][mug9]overlay=0:-120:enable='between(t,1.8,5)'[out]" \
  -map "[out]" \
  -t 5 \
  -c:v libx264 \
  -preset medium \
  -crf 18 \
  -pix_fmt yuv420p \
  -movflags +faststart \
  "$OUTPUT_FILE"

echo "✅ Video saved to: $OUTPUT_FILE"

# Create a perfectly looping version (3 loops)
LOOP_FILE="$OUTPUT_DIR/mug-static-diagonal-loop-$TIMESTAMP.mp4"
ffmpeg -stream_loop 3 -i "$OUTPUT_FILE" -c copy "$LOOP_FILE"
echo "✅ Looping video saved to: $LOOP_FILE"

echo ""
echo "🎉 Static diagonal animation complete!"
echo "📁 Videos saved to: $OUTPUT_DIR"
echo ""
echo "Features:"
echo "  ✓ STATIC positioning - NO movement"
echo "  ✓ Mugs in fixed diagonal formation"
echo "  ✓ Scale: 200px (bottom-right) → 20px (top-left)"
echo "  ✓ Sequential opacity fade-in reveal"
echo "  ✓ Fade-out and loop"
echo ""
open "$LOOP_FILE"