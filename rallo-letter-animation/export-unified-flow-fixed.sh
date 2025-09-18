#!/bin/bash

echo "🎬 Creating Unified Mug Flow Animation Video..."

# Output settings
OUTPUT_DIR="$HOME/Downloads"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
OUTPUT_FILE="$OUTPUT_DIR/mug-unified-flow-$TIMESTAMP.mp4"

# Navigate to the animation directory
cd /Users/rodericandrews/Obsidian/Master/_Projects/Rallo/a-rallo-home-desktop/rallo-letter-animation

# Create unified flow animation with fixed scale sizes
ffmpeg -f lavfi -i color=white:s=1920x1080:d=6 \
  -loop 1 -i assets/images/trans-mug.png \
  -filter_complex "\
    [1:v]scale=200:200[mug0]; \
    [0:v][mug0]overlay='1720-t*303':'880-t*163':enable='between(t,0,3)'[v0]; \
    [1:v]scale=180:180[mug1]; \
    [v0][mug1]overlay='1720-(t-0.3)*303':'880-(t-0.3)*163':enable='between(t,0.3,3.3)'[v1]; \
    [1:v]scale=160:160[mug2]; \
    [v1][mug2]overlay='1720-(t-0.6)*303':'880-(t-0.6)*163':enable='between(t,0.6,3.6)'[v2]; \
    [1:v]scale=140:140[mug3]; \
    [v2][mug3]overlay='1720-(t-0.9)*303':'880-(t-0.9)*163':enable='between(t,0.9,3.9)'[v3]; \
    [1:v]scale=120:120[mug4]; \
    [v3][mug4]overlay='1720-(t-1.2)*303':'880-(t-1.2)*163':enable='between(t,1.2,4.2)'[v4]; \
    [1:v]scale=100:100[mug5]; \
    [v4][mug5]overlay='1720-(t-1.5)*303':'880-(t-1.5)*163':enable='between(t,1.5,4.5)'[v5]; \
    [1:v]scale=80:80[mug6]; \
    [v5][mug6]overlay='1720-(t-1.8)*303':'880-(t-1.8)*163':enable='between(t,1.8,4.8)'[v6]; \
    [1:v]scale=60:60[mug7]; \
    [v6][mug7]overlay='1720-(t-2.1)*303':'880-(t-2.1)*163':enable='between(t,2.1,5.1)'[v7]; \
    [1:v]scale=40:40[mug8]; \
    [v7][mug8]overlay='1720-(t-2.4)*303':'880-(t-2.4)*163':enable='between(t,2.4,5.4)'[v8]; \
    [1:v]scale=20:20[mug9]; \
    [v8][mug9]overlay='1720-(t-2.7)*303':'880-(t-2.7)*163':enable='between(t,2.7,5.7)'[v9]; \
    [1:v]scale=200:200,fade=in:st=3:d=0.2:alpha=1[mug10]; \
    [v9][mug10]overlay='1720-(t-3)*303':'880-(t-3)*163':enable='between(t,3,6)'[v10]; \
    [1:v]scale=180:180,fade=in:st=3.3:d=0.2:alpha=1[mug11]; \
    [v10][mug11]overlay='1720-(t-3.3)*303':'880-(t-3.3)*163':enable='between(t,3.3,6)'[v11]; \
    [1:v]scale=160:160,fade=in:st=3.6:d=0.2:alpha=1[mug12]; \
    [v11][mug12]overlay='1720-(t-3.6)*303':'880-(t-3.6)*163':enable='between(t,3.6,6)'[v12]; \
    [1:v]scale=140:140,fade=in:st=3.9:d=0.2:alpha=1[mug13]; \
    [v12][mug13]overlay='1720-(t-3.9)*303':'880-(t-3.9)*163':enable='between(t,3.9,6)'[v13]; \
    [1:v]scale=120:120,fade=in:st=4.2:d=0.2:alpha=1[mug14]; \
    [v13][mug14]overlay='1720-(t-4.2)*303':'880-(t-4.2)*163':enable='between(t,4.2,6)'[v14]; \
    [1:v]scale=100:100,fade=in:st=4.5:d=0.2:alpha=1[mug15]; \
    [v14][mug15]overlay='1720-(t-4.5)*303':'880-(t-4.5)*163':enable='between(t,4.5,6)'[v15]; \
    [1:v]scale=80:80,fade=in:st=4.8:d=0.2:alpha=1[mug16]; \
    [v15][mug16]overlay='1720-(t-4.8)*303':'880-(t-4.8)*163':enable='between(t,4.8,6)'[v16]; \
    [1:v]scale=60:60,fade=in:st=5.1:d=0.2:alpha=1[mug17]; \
    [v16][mug17]overlay='1720-(t-5.1)*303':'880-(t-5.1)*163':enable='between(t,5.1,6)'[v17]; \
    [1:v]scale=40:40,fade=in:st=5.4:d=0.2:alpha=1[mug18]; \
    [v17][mug18]overlay='1720-(t-5.4)*303':'880-(t-5.4)*163':enable='between(t,5.4,6)'[v18]; \
    [1:v]scale=20:20,fade=in:st=5.7:d=0.2:alpha=1[mug19]; \
    [v18][mug19]overlay='1720-(t-5.7)*303':'880-(t-5.7)*163':enable='between(t,5.7,6)'[out]" \
  -map "[out]" \
  -t 6 \
  -c:v libx264 \
  -preset medium \
  -crf 18 \
  -pix_fmt yuv420p \
  -movflags +faststart \
  "$OUTPUT_FILE"

echo "✅ Video saved to: $OUTPUT_FILE"

# Create a perfectly looping version
LOOP_FILE="$OUTPUT_DIR/mug-unified-flow-loop-$TIMESTAMP.mp4"
ffmpeg -stream_loop 3 -i "$OUTPUT_FILE" -c copy "$LOOP_FILE"
echo "✅ Looping video saved to: $LOOP_FILE"

echo ""
echo "🎉 Unified flow animation complete!"
echo "📁 Videos saved to: $OUTPUT_DIR"
echo ""
echo "Features:"
echo "  • Single spawn point at bottom-right"
echo "  • Continuous diagonal flow to top-left"
echo "  • New mug every 0.3 seconds"
echo "  • Progressive scaling from 200px to 20px"
echo "  • 10 mugs visible at any time"
echo "  • Seamless looping"
echo ""
open "$LOOP_FILE"