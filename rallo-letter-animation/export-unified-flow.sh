#!/bin/bash

echo "🎬 Creating Unified Mug Flow Animation Video..."

# Output settings
OUTPUT_DIR="$HOME/Downloads"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
OUTPUT_FILE="$OUTPUT_DIR/mug-unified-flow-$TIMESTAMP.mp4"

# Navigate to the animation directory
cd /Users/rodericandrews/Obsidian/Master/_Projects/Rallo/a-rallo-home-desktop/rallo-letter-animation

# Create unified flow animation with ffmpeg
# All mugs spawn at bottom-right (1870, 1030) and flow to top-left (50, 50)
ffmpeg -f lavfi -i color=white:s=1920x1080:d=6 \
  -loop 1 -i assets/images/trans-mug.png \
  -filter_complex "\
    [1:v]scale=200:200[mug]; \
    [0:v][mug]overlay='1720-t*287':'880-t*147':enable='between(t,0,6)'[v0]; \
    [1:v]scale='200-t*30':'200-t*30'[mug1]; \
    [v0][mug1]overlay='1720-t*287':'880-t*147':enable='between(t,0.3,6)'[v1]; \
    [1:v]scale='200-(t-0.3)*30':'200-(t-0.3)*30'[mug2]; \
    [v1][mug2]overlay='1720-(t-0.3)*287':'880-(t-0.3)*147':enable='between(t,0.6,6)'[v2]; \
    [1:v]scale='200-(t-0.6)*30':'200-(t-0.6)*30'[mug3]; \
    [v2][mug3]overlay='1720-(t-0.6)*287':'880-(t-0.6)*147':enable='between(t,0.9,6)'[v3]; \
    [1:v]scale='200-(t-0.9)*30':'200-(t-0.9)*30'[mug4]; \
    [v3][mug4]overlay='1720-(t-0.9)*287':'880-(t-0.9)*147':enable='between(t,1.2,6)'[v4]; \
    [1:v]scale='200-(t-1.2)*30':'200-(t-1.2)*30'[mug5]; \
    [v4][mug5]overlay='1720-(t-1.2)*287':'880-(t-1.2)*147':enable='between(t,1.5,6)'[v5]; \
    [1:v]scale='200-(t-1.5)*30':'200-(t-1.5)*30'[mug6]; \
    [v5][mug6]overlay='1720-(t-1.5)*287':'880-(t-1.5)*147':enable='between(t,1.8,6)'[v6]; \
    [1:v]scale='200-(t-1.8)*30':'200-(t-1.8)*30'[mug7]; \
    [v6][mug7]overlay='1720-(t-1.8)*287':'880-(t-1.8)*147':enable='between(t,2.1,6)'[v7]; \
    [1:v]scale='200-(t-2.1)*30':'200-(t-2.1)*30'[mug8]; \
    [v7][mug8]overlay='1720-(t-2.1)*287':'880-(t-2.1)*147':enable='between(t,2.4,6)'[v8]; \
    [1:v]scale='200-(t-2.4)*30':'200-(t-2.4)*30'[mug9]; \
    [v8][mug9]overlay='1720-(t-2.4)*287':'880-(t-2.4)*147':enable='between(t,2.7,6)'[v9]; \
    [1:v]scale='200-(t-2.7)*30':'200-(t-2.7)*30'[mug10]; \
    [v9][mug10]overlay='1720-(t-2.7)*287':'880-(t-2.7)*147':enable='between(t,3.0,6)'[v10]; \
    [1:v]scale='200-(t-3.0)*30':'200-(t-3.0)*30'[mug11]; \
    [v10][mug11]overlay='1720-(t-3.0)*287':'880-(t-3.0)*147':enable='between(t,3.3,6)'[v11]; \
    [1:v]scale='200-(t-3.3)*30':'200-(t-3.3)*30'[mug12]; \
    [v11][mug12]overlay='1720-(t-3.3)*287':'880-(t-3.3)*147':enable='between(t,3.6,6)'[v12]; \
    [1:v]scale='200-(t-3.6)*30':'200-(t-3.6)*30'[mug13]; \
    [v12][mug13]overlay='1720-(t-3.6)*287':'880-(t-3.6)*147':enable='between(t,3.9,6)'[v13]; \
    [1:v]scale='200-(t-3.9)*30':'200-(t-3.9)*30'[mug14]; \
    [v13][mug14]overlay='1720-(t-3.9)*287':'880-(t-3.9)*147':enable='between(t,4.2,6)'[v14]; \
    [1:v]scale='200-(t-4.2)*30':'200-(t-4.2)*30'[mug15]; \
    [v14][mug15]overlay='1720-(t-4.2)*287':'880-(t-4.2)*147':enable='between(t,4.5,6)'[v15]; \
    [1:v]scale='200-(t-4.5)*30':'200-(t-4.5)*30'[mug16]; \
    [v15][mug16]overlay='1720-(t-4.5)*287':'880-(t-4.5)*147':enable='between(t,4.8,6)'[v16]; \
    [1:v]scale='200-(t-4.8)*30':'200-(t-4.8)*30'[mug17]; \
    [v16][mug17]overlay='1720-(t-4.8)*287':'880-(t-4.8)*147':enable='between(t,5.1,6)'[v17]; \
    [1:v]scale='200-(t-5.1)*30':'200-(t-5.1)*30'[mug18]; \
    [v17][mug18]overlay='1720-(t-5.1)*287':'880-(t-5.1)*147':enable='between(t,5.4,6)'[v18]; \
    [1:v]scale='200-(t-5.4)*30':'200-(t-5.4)*30'[mug19]; \
    [v18][mug19]overlay='1720-(t-5.4)*287':'880-(t-5.4)*147':enable='between(t,5.7,6)'[out]" \
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
open "$LOOP_FILE"