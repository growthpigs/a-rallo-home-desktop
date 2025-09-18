#!/bin/bash

echo "🎬 Creating Dramatic Corner-to-Corner Diagonal Animation..."
echo "🔥 HERO MUG at 1.8x scale - Touching/overlapping chain"
echo "📐 85% corner to 15% corner trajectory"

# Output settings
OUTPUT_DIR="$HOME/Downloads"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
OUTPUT_FILE="$OUTPUT_DIR/mug-dramatic-diagonal-$TIMESTAMP.mp4"

# Navigate to the animation directory
cd /Users/rodericandrews/Obsidian/Master/_Projects/Rallo/a-rallo-home-desktop/rallo-letter-animation

# Create dramatic diagonal with HERO sizing and touching formation
# Positions calculated for 85% corner positioning (1632x918 start, 288x162 end)
ffmpeg -f lavfi -i color=white:s=1920x1080:d=5 \
  -loop 1 -i assets/images/trans-mug.png \
  -filter_complex "\
    [1:v]scale=360:360,fade=in:st=0:d=0.4:alpha=1,fade=out:st=3.5:d=0.5:alpha=1[mug0]; \
    [0:v][mug0]overlay=1512:558:enable='between(t,0,5)'[v0]; \
    [1:v]scale=280:280,fade=in:st=0.15:d=0.4:alpha=1,fade=out:st=3.5:d=0.5:alpha=1[mug1]; \
    [v0][mug1]overlay=1360:458:enable='between(t,0.15,5)'[v1]; \
    [1:v]scale=220:220,fade=in:st=0.3:d=0.4:alpha=1,fade=out:st=3.5:d=0.5:alpha=1[mug2]; \
    [v1][mug2]overlay=1220:368:enable='between(t,0.3,5)'[v2]; \
    [1:v]scale=180:180,fade=in:st=0.45:d=0.4:alpha=1,fade=out:st=3.5:d=0.5:alpha=1[mug3]; \
    [v2][mug3]overlay=1090:288:enable='between(t,0.45,5)'[v3]; \
    [1:v]scale=140:140,fade=in:st=0.6:d=0.4:alpha=1,fade=out:st=3.5:d=0.5:alpha=1[mug4]; \
    [v3][mug4]overlay=970:218:enable='between(t,0.6,5)'[v4]; \
    [1:v]scale=100:100,fade=in:st=0.75:d=0.4:alpha=1,fade=out:st=3.5:d=0.5:alpha=1[mug5]; \
    [v4][mug5]overlay=860:158:enable='between(t,0.75,5)'[v5]; \
    [1:v]scale=70:70,fade=in:st=0.9:d=0.4:alpha=1,fade=out:st=3.5:d=0.5:alpha=1[mug6]; \
    [v5][mug6]overlay=760:108:enable='between(t,0.9,5)'[v6]; \
    [1:v]scale=50:50,fade=in:st=1.05:d=0.4:alpha=1,fade=out:st=3.5:d=0.5:alpha=1[mug7]; \
    [v6][mug7]overlay=670:68:enable='between(t,1.05,5)'[v7]; \
    [1:v]scale=30:30,fade=in:st=1.2:d=0.4:alpha=1,fade=out:st=3.5:d=0.5:alpha=1[mug8]; \
    [v7][mug8]overlay=590:38:enable='between(t,1.2,5)'[v8]; \
    [1:v]scale=20:20,fade=in:st=1.35:d=0.4:alpha=1,fade=out:st=3.5:d=0.5:alpha=1[mug9]; \
    [v8][mug9]overlay=520:18:enable='between(t,1.35,5)'[v9]; \
    [1:v]scale=15:15,fade=in:st=1.5:d=0.4:alpha=1,fade=out:st=3.5:d=0.5:alpha=1[mug10]; \
    [v9][mug10]overlay=460:8:enable='between(t,1.5,5)'[v10]; \
    [1:v]scale=10:10,fade=in:st=1.65:d=0.4:alpha=1,fade=out:st=3.5:d=0.5:alpha=1[mug11]; \
    [v10][mug11]overlay=410:3:enable='between(t,1.65,5)'[v11]; \
    [1:v]scale=8:8,fade=in:st=1.8:d=0.4:alpha=1,fade=out:st=3.5:d=0.5:alpha=1[mug12]; \
    [v11][mug12]overlay=370:1:enable='between(t,1.8,5)'[v12]; \
    [1:v]scale=6:6,fade=in:st=1.95:d=0.4:alpha=1,fade=out:st=3.5:d=0.5:alpha=1[mug13]; \
    [v12][mug13]overlay=340:0:enable='between(t,1.95,5)'[v13]; \
    [1:v]scale=4:4,fade=in:st=2.1:d=0.4:alpha=1,fade=out:st=3.5:d=0.5:alpha=1[mug14]; \
    [v13][mug14]overlay=315:0:enable='between(t,2.1,5)'[out]" \
  -map "[out]" \
  -t 5 \
  -c:v libx264 \
  -preset medium \
  -crf 18 \
  -pix_fmt yuv420p \
  -movflags +faststart \
  "$OUTPUT_FILE"

echo "✅ Video saved to: $OUTPUT_FILE"

# Create a perfectly looping version
LOOP_FILE="$OUTPUT_DIR/mug-dramatic-diagonal-loop-$TIMESTAMP.mp4"
ffmpeg -stream_loop 3 -i "$OUTPUT_FILE" -c copy "$LOOP_FILE"
echo "✅ Looping video saved to: $LOOP_FILE"

echo ""
echo "🎉 Dramatic diagonal animation complete!"
echo "📁 Videos saved to: $OUTPUT_DIR"
echo ""
echo "Features:"
echo "  🔥 HERO mug at 1.8x scale (360px)"
echo "  📐 85% corner to 15% corner trajectory"
echo "  🔗 Touching/overlapping formation"
echo "  📊 Scaling: 1.8→1.4→1.1→0.9→0.7→0.5→0.35→0.2→0.1"
echo "  ✨ 15 mugs total for complete corner reach"
echo ""
open "$LOOP_FILE"