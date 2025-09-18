#!/bin/bash

echo "🎬 Creating Perspective Multiplication Demo Videos..."

# Output settings
OUTPUT_DIR="$HOME/Downloads"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Navigate to the animation directory
cd /Users/rodericandrews/Obsidian/Master/_Projects/Rallo/a-rallo-home-desktop/rallo-letter-animation

echo "📦 Creating Perspective Demo with Mug..."
# Create a demo with locked positioning
ffmpeg -f lavfi -i color=white:s=1920x1080:d=5 \
  -loop 1 -i assets/images/trans-mug.png \
  -filter_complex "\
    [1:v]scale=240:240[mug_orig]; \
    [0:v][mug_orig]overlay=710:540[base]; \
    [1:v]scale=240:240[mug2]; \
    [base][mug2]overlay=1210:540[with_fixed]; \
    [1:v]scale=192:192,fade=in:st=0.3:d=0.2:alpha=1[bg0]; \
    [with_fixed][bg0]overlay='660-t*100':'490-t*50':enable='between(t,0.3,5)'[v0]; \
    [1:v]scale=168:168,fade=in:st=0.45:d=0.2:alpha=1[bg1]; \
    [v0][bg1]overlay='560-t*100':'440-t*50':enable='between(t,0.45,5)'[v1]; \
    [1:v]scale=144:144,fade=in:st=0.6:d=0.2:alpha=1[bg2]; \
    [v1][bg2]overlay='460-t*100':'390-t*50':enable='between(t,0.6,5)'[v2]; \
    [1:v]scale=120:120,fade=in:st=0.75:d=0.2:alpha=1[bg3]; \
    [v2][bg3]overlay='360-t*100':'340-t*50':enable='between(t,0.75,5)'[v3]; \
    [1:v]scale=96:96,fade=in:st=0.9:d=0.2:alpha=1[bg4]; \
    [v3][bg4]overlay='260-t*100':'290-t*50':enable='between(t,0.9,5)'[v4]; \
    [1:v]scale=72:72,fade=in:st=1.05:d=0.2:alpha=1[bg5]; \
    [v4][bg5]overlay='160-t*100':'240-t*50':enable='between(t,1.05,5)'[v5]; \
    [1:v]scale=48:48,fade=in:st=1.2:d=0.2:alpha=1[bg6]; \
    [v5][bg6]overlay='60-t*100':'190-t*50':enable='between(t,1.2,5)'[v6]; \
    [1:v]scale=24:24,fade=in:st=1.35:d=0.2:alpha=1[bg7]; \
    [v6][bg7]overlay='-40-t*100':'140-t*50':enable='between(t,1.35,5)'[out]" \
  -map "[out]" \
  -t 5 \
  -c:v libx264 \
  -preset medium \
  -crf 18 \
  -pix_fmt yuv420p \
  -movflags +faststart \
  "$OUTPUT_DIR/perspective-demo-locked-$TIMESTAMP.mp4"

echo "✅ Demo video saved to: $OUTPUT_DIR/perspective-demo-locked-$TIMESTAMP.mp4"

echo "🔄 Creating looping version..."
ffmpeg -stream_loop 3 -i "$OUTPUT_DIR/perspective-demo-locked-$TIMESTAMP.mp4" \
  -c copy "$OUTPUT_DIR/perspective-demo-loop-$TIMESTAMP.mp4"

echo "✅ Looping video saved to: $OUTPUT_DIR/perspective-demo-loop-$TIMESTAMP.mp4"

echo ""
echo "🎉 Videos created successfully!"
echo "📁 Videos saved to: $OUTPUT_DIR"
echo ""
echo "Opening videos..."
open "$OUTPUT_DIR/perspective-demo-locked-$TIMESTAMP.mp4"
open "$OUTPUT_DIR/perspective-demo-loop-$TIMESTAMP.mp4"