#!/bin/bash

# Create high-res video from image sequence
echo "🎬 Creating high-resolution Rallo animation video..."

# Output path
OUTPUT_DIR="$HOME/Downloads"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
OUTPUT_FILE="$OUTPUT_DIR/rallo-animation-4K-$TIMESTAMP.mp4"

# Navigate to the images directory
cd /Users/rodericandrews/Obsidian/Master/_Projects/Rallo/a-rallo-home-desktop/rallo-letter-animation/assets/images

# Create video from the logo images at 4K resolution
ffmpeg -framerate 4 \
  -i r-logo-clean.png \
  -i a-logo-clean.png \
  -i l1-logo-clean4.png \
  -i l2-logo-clean2.png \
  -i o-logo-clean.png \
  -filter_complex "\
    [0:v]scale=3840:2160,setpts=N/(4*TB),pad=3840:2160:(3840-iw)/2:(2160-ih)/2:white[v0]; \
    [1:v]scale=3840:2160,setpts=N/(4*TB),pad=3840:2160:(3840-iw)/2:(2160-ih)/2:white[v1]; \
    [2:v]scale=3840:2160,setpts=N/(4*TB),pad=3840:2160:(3840-iw)/2:(2160-ih)/2:white[v2]; \
    [3:v]scale=3840:2160,setpts=N/(4*TB),pad=3840:2160:(3840-iw)/2:(2160-ih)/2:white[v3]; \
    [4:v]scale=3840:2160,setpts=N/(4*TB),pad=3840:2160:(3840-iw)/2:(2160-ih)/2:white[v4]; \
    [v0][v1][v2][v3][v4]concat=n=5:v=1:a=0[out]" \
  -map "[out]" \
  -c:v libx264 \
  -preset slow \
  -crf 18 \
  -pix_fmt yuv420p \
  -movflags +faststart \
  "$OUTPUT_FILE"

echo "✅ High-res video saved to: $OUTPUT_FILE"
open "$OUTPUT_FILE"