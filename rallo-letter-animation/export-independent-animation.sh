#!/bin/bash

echo "🎬 Creating RALLO Independent Letter Animation..."
echo "📝 Each letter cycles through variations INDEPENDENTLY"
echo "🎯 Random timing pattern for natural animation"

# Output settings
OUTPUT_DIR="$HOME/Downloads"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
OUTPUT_FILE="$OUTPUT_DIR/rallo-independent-letters-$TIMESTAMP.mp4"

# Navigate to images directory
cd /Users/rodericandrews/Obsidian/Master/_Projects/Rallo/a-rallo-home-desktop/rallo-letter-animation/assets/images

# Create complex filter for independent letter animations
# Each letter has its own timing sequence
ffmpeg -f lavfi -i color=white:s=1920x1080:d=10 \
  -loop 1 -i 1-R.jpg -loop 1 -i 2-R.jpg -loop 1 -i 3-R.jpg -loop 1 -i 4-R.jpg -loop 1 -i r-logo-clean.png \
  -loop 1 -i 1-A.jpg -loop 1 -i 2-A.jpg -loop 1 -i 3-A.jpg -loop 1 -i 4-A.jpg -loop 1 -i a-logo-clean.png \
  -loop 1 -i 1-L1.jpg -loop 1 -i 2-L1.jpg -loop 1 -i 3-L1.jpg -loop 1 -i 4-L1.jpg -loop 1 -i l1-logo-clean4.png \
  -loop 1 -i 1-L2.jpg -loop 1 -i 2-L2.jpg -loop 1 -i 3-L2.jpg -loop 1 -i 4-L2.jpg -loop 1 -i l2-logo-clean2.png \
  -loop 1 -i 1-O.jpg -loop 1 -i 2-O.jpg -loop 1 -i 3-O.jpg -loop 1 -i 4-O.jpg -loop 1 -i o-logo-clean.png \
  -filter_complex "\
    [1:v]scale=200:-1,pad=200:260:(ow-iw)/2:(oh-ih)/2:white[r1];\
    [2:v]scale=200:-1,pad=200:260:(ow-iw)/2:(oh-ih)/2:white[r2];\
    [3:v]scale=200:-1,pad=200:260:(ow-iw)/2:(oh-ih)/2:white[r3];\
    [4:v]scale=200:-1,pad=200:260:(ow-iw)/2:(oh-ih)/2:white[r4];\
    [5:v]scale=200:-1,pad=200:260:(ow-iw)/2:(oh-ih)/2:white[r_logo];\
    [6:v]scale=200:-1,pad=200:260:(ow-iw)/2:(oh-ih)/2:white[a1];\
    [7:v]scale=200:-1,pad=200:260:(ow-iw)/2:(oh-ih)/2:white[a2];\
    [8:v]scale=200:-1,pad=200:260:(ow-iw)/2:(oh-ih)/2:white[a3];\
    [9:v]scale=200:-1,pad=200:260:(ow-iw)/2:(oh-ih)/2:white[a4];\
    [10:v]scale=200:-1,pad=200:260:(ow-iw)/2:(oh-ih)/2:white[a_logo];\
    [11:v]scale=200:-1,pad=200:260:(ow-iw)/2:(oh-ih)/2:white[l11];\
    [12:v]scale=200:-1,pad=200:260:(ow-iw)/2:(oh-ih)/2:white[l12];\
    [13:v]scale=200:-1,pad=200:260:(ow-iw)/2:(oh-ih)/2:white[l13];\
    [14:v]scale=200:-1,pad=200:260:(ow-iw)/2:(oh-ih)/2:white[l14];\
    [15:v]scale=200:-1,pad=200:260:(ow-iw)/2:(oh-ih)/2:white[l1_logo];\
    [16:v]scale=200:-1,pad=200:260:(ow-iw)/2:(oh-ih)/2:white[l21];\
    [17:v]scale=200:-1,pad=200:260:(ow-iw)/2:(oh-ih)/2:white[l22];\
    [18:v]scale=200:-1,pad=200:260:(ow-iw)/2:(oh-ih)/2:white[l23];\
    [19:v]scale=200:-1,pad=200:260:(ow-iw)/2:(oh-ih)/2:white[l24];\
    [20:v]scale=200:-1,pad=200:260:(ow-iw)/2:(oh-ih)/2:white[l2_logo];\
    [21:v]scale=200:-1,pad=200:260:(ow-iw)/2:(oh-ih)/2:white[o1];\
    [22:v]scale=200:-1,pad=200:260:(ow-iw)/2:(oh-ih)/2:white[o2];\
    [23:v]scale=200:-1,pad=200:260:(ow-iw)/2:(oh-ih)/2:white[o3];\
    [24:v]scale=200:-1,pad=200:260:(ow-iw)/2:(oh-ih)/2:white[o4];\
    [25:v]scale=200:-1,pad=200:260:(ow-iw)/2:(oh-ih)/2:white[o_logo];\
    [0:v][r1]overlay=260:410:enable='between(t,0,0.3)'[v1];\
    [v1][r2]overlay=260:410:enable='between(t,0.3,0.7)'[v2];\
    [v2][r3]overlay=260:410:enable='between(t,0.7,1.2)'[v3];\
    [v3][r4]overlay=260:410:enable='between(t,1.2,1.8)'[v4];\
    [v4][r1]overlay=260:410:enable='between(t,1.8,2.1)'[v5];\
    [v5][r3]overlay=260:410:enable='between(t,2.1,2.5)'[v6];\
    [v6][r2]overlay=260:410:enable='between(t,2.5,3.0)'[v7];\
    [v7][r4]overlay=260:410:enable='between(t,3.0,3.4)'[v8];\
    [v8][r1]overlay=260:410:enable='between(t,3.4,3.7)'[v9];\
    [v9][r3]overlay=260:410:enable='between(t,3.7,4.2)'[v10];\
    [v10][r2]overlay=260:410:enable='between(t,4.2,4.6)'[v11];\
    [v11][r4]overlay=260:410:enable='between(t,4.6,5.0)'[v12];\
    [v12][r3]overlay=260:410:enable='between(t,5.0,5.4)'[v13];\
    [v13][r1]overlay=260:410:enable='between(t,5.4,5.8)'[v14];\
    [v14][r2]overlay=260:410:enable='between(t,5.8,6.2)'[v15];\
    [v15][r_logo]overlay=260:410:enable='between(t,6.2,10)'[v16];\
    [v16][a1]overlay=520:410:enable='between(t,0,0.4)'[v17];\
    [v17][a2]overlay=520:410:enable='between(t,0.4,0.9)'[v18];\
    [v18][a3]overlay=520:410:enable='between(t,0.9,1.3)'[v19];\
    [v19][a1]overlay=520:410:enable='between(t,1.3,1.7)'[v20];\
    [v20][a4]overlay=520:410:enable='between(t,1.7,2.3)'[v21];\
    [v21][a2]overlay=520:410:enable='between(t,2.3,2.8)'[v22];\
    [v22][a3]overlay=520:410:enable='between(t,2.8,3.2)'[v23];\
    [v23][a4]overlay=520:410:enable='between(t,3.2,3.8)'[v24];\
    [v24][a1]overlay=520:410:enable='between(t,3.8,4.3)'[v25];\
    [v25][a3]overlay=520:410:enable='between(t,4.3,4.8)'[v26];\
    [v26][a2]overlay=520:410:enable='between(t,4.8,5.2)'[v27];\
    [v27][a4]overlay=520:410:enable='between(t,5.2,5.7)'[v28];\
    [v28][a1]overlay=520:410:enable='between(t,5.7,6.0)'[v29];\
    [v29][a3]overlay=520:410:enable='between(t,6.0,6.5)'[v30];\
    [v30][a_logo]overlay=520:410:enable='between(t,6.5,10)'[v31];\
    [v31][l11]overlay=780:410:enable='between(t,0,0.5)'[v32];\
    [v32][l12]overlay=780:410:enable='between(t,0.5,0.8)'[v33];\
    [v33][l13]overlay=780:410:enable='between(t,0.8,1.4)'[v34];\
    [v34][l14]overlay=780:410:enable='between(t,1.4,1.9)'[v35];\
    [v35][l12]overlay=780:410:enable='between(t,1.9,2.4)'[v36];\
    [v36][l11]overlay=780:410:enable='between(t,2.4,2.9)'[v37];\
    [v37][l13]overlay=780:410:enable='between(t,2.9,3.3)'[v38];\
    [v38][l14]overlay=780:410:enable='between(t,3.3,3.9)'[v39];\
    [v39][l11]overlay=780:410:enable='between(t,3.9,4.2)'[v40];\
    [v40][l13]overlay=780:410:enable='between(t,4.2,4.7)'[v41];\
    [v41][l12]overlay=780:410:enable='between(t,4.7,5.1)'[v42];\
    [v42][l14]overlay=780:410:enable='between(t,5.1,5.5)'[v43];\
    [v43][l11]overlay=780:410:enable='between(t,5.5,5.9)'[v44];\
    [v44][l13]overlay=780:410:enable='between(t,5.9,6.3)'[v45];\
    [v45][l12]overlay=780:410:enable='between(t,6.3,6.7)'[v46];\
    [v46][l1_logo]overlay=780:410:enable='between(t,6.7,10)'[v47];\
    [v47][l21]overlay=1040:410:enable='between(t,0,0.2)'[v48];\
    [v48][l22]overlay=1040:410:enable='between(t,0.2,0.6)'[v49];\
    [v49][l23]overlay=1040:410:enable='between(t,0.6,1.1)'[v50];\
    [v50][l21]overlay=1040:410:enable='between(t,1.1,1.5)'[v51];\
    [v51][l24]overlay=1040:410:enable='between(t,1.5,2.0)'[v52];\
    [v52][l22]overlay=1040:410:enable='between(t,2.0,2.6)'[v53];\
    [v53][l23]overlay=1040:410:enable='between(t,2.6,3.1)'[v54];\
    [v54][l21]overlay=1040:410:enable='between(t,3.1,3.5)'[v55];\
    [v55][l24]overlay=1040:410:enable='between(t,3.5,4.0)'[v56];\
    [v56][l22]overlay=1040:410:enable='between(t,4.0,4.4)'[v57];\
    [v57][l23]overlay=1040:410:enable='between(t,4.4,4.9)'[v58];\
    [v58][l24]overlay=1040:410:enable='between(t,4.9,5.3)'[v59];\
    [v59][l21]overlay=1040:410:enable='between(t,5.3,5.6)'[v60];\
    [v60][l23]overlay=1040:410:enable='between(t,5.6,6.1)'[v61];\
    [v61][l22]overlay=1040:410:enable='between(t,6.1,6.4)'[v62];\
    [v62][l24]overlay=1040:410:enable='between(t,6.4,6.9)'[v63];\
    [v63][l2_logo]overlay=1040:410:enable='between(t,6.9,10)'[v64];\
    [v64][o1]overlay=1300:410:enable='between(t,0,0.6)'[v65];\
    [v65][o2]overlay=1300:410:enable='between(t,0.6,1.0)'[v66];\
    [v66][o3]overlay=1300:410:enable='between(t,1.0,1.6)'[v67];\
    [v67][o4]overlay=1300:410:enable='between(t,1.6,2.2)'[v68];\
    [v68][o1]overlay=1300:410:enable='between(t,2.2,2.7)'[v69];\
    [v69][o3]overlay=1300:410:enable='between(t,2.7,3.1)'[v70];\
    [v70][o2]overlay=1300:410:enable='between(t,3.1,3.6)'[v71];\
    [v71][o4]overlay=1300:410:enable='between(t,3.6,4.1)'[v72];\
    [v72][o3]overlay=1300:410:enable='between(t,4.1,4.5)'[v73];\
    [v73][o1]overlay=1300:410:enable='between(t,4.5,5.0)'[v74];\
    [v74][o2]overlay=1300:410:enable='between(t,5.0,5.4)'[v75];\
    [v75][o4]overlay=1300:410:enable='between(t,5.4,5.8)'[v76];\
    [v76][o3]overlay=1300:410:enable='between(t,5.8,6.2)'[v77];\
    [v77][o1]overlay=1300:410:enable='between(t,6.2,6.6)'[v78];\
    [v78][o2]overlay=1300:410:enable='between(t,6.6,7.0)'[v79];\
    [v79][o_logo]overlay=1300:410:enable='between(t,7.0,10)'[out]" \
  -map "[out]" \
  -t 10 \
  -c:v libx264 \
  -preset fast \
  -crf 23 \
  -pix_fmt yuv420p \
  -movflags +faststart \
  "$OUTPUT_FILE"

echo "✅ Video saved to: $OUTPUT_FILE"
echo ""
echo "🎬 Animation Features:"
echo "  • Each letter cycles INDEPENDENTLY"
echo "  • Random timing intervals for natural feel"
echo "  • All letters eventually reach logo state"
echo "  • Total duration: 10 seconds"
echo "  • Proper aspect ratio (1920x1080)"