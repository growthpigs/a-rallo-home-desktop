#!/bin/bash

echo "==========================================="
echo "RALLO Animation Assets Verification"
echo "==========================================="
echo ""

# Define the expected files in order
declare -a files=(
  "1-R.jpg" "2-R.jpg" "3-R.jpg" "4-R.jpg"
  "1-A.jpg" "2-A.jpg" "3-A.jpg" "4-A.jpg"
  "1-L1.jpg" "2-L1.jpg" "3-L1.jpg" "4-L1.jpg"
  "1-L2.jpg" "2-L2.jpg" "3-L2.jpg" "4-L2.jpg"
  "1-O.jpg" "2-O.jpg" "3-O.jpg" "4-O.jpg"
  "r-logo.png" "a-logo.png" "l1-logo.png" "l2-logo.png" "o-logo.png"
)

IMAGES_DIR="assets/images"
FOUND_COUNT=0
MISSING_COUNT=0
TOTAL_SIZE=0

echo "Checking animation sequence files..."
echo ""

# Check each file
for i in "${!files[@]}"; do
  file="${files[$i]}"
  frame_num=$((i + 1))
  filepath="$IMAGES_DIR/$file"
  
  if [ -f "$filepath" ]; then
    # Get file size in KB
    if [[ "$OSTYPE" == "darwin"* ]]; then
      size=$(stat -f%z "$filepath")
    else
      size=$(stat -c%s "$filepath")
    fi
    
    size_kb=$((size / 1024))
    TOTAL_SIZE=$((TOTAL_SIZE + size))
    
    printf "✅ Frame %02d: %-15s (%d KB)\n" $frame_num "$file" $size_kb
    FOUND_COUNT=$((FOUND_COUNT + 1))
  else
    printf "❌ Frame %02d: %-15s - MISSING\n" $frame_num "$file"
    MISSING_COUNT=$((MISSING_COUNT + 1))
  fi
done

echo ""
echo "==========================================="
echo "Summary"
echo "==========================================="
echo "Total Expected: ${#files[@]} files"
echo "Found: $FOUND_COUNT files"
echo "Missing: $MISSING_COUNT files"

# Calculate total size in MB
TOTAL_SIZE_MB=$((TOTAL_SIZE / 1024 / 1024))
echo "Total Size: ~$TOTAL_SIZE_MB MB"

if [ $MISSING_COUNT -eq 0 ]; then
  echo ""
  echo "✅ All files present and accessible!"
  echo "Animation sequence is ready to play."
else
  echo ""
  echo "❌ Some files are missing!"
fi

echo ""
echo "==========================================="
echo "File Structure:"
echo "==========================================="
echo ""
echo "assets/images/"
echo "├── Letter Variations (JPG):"
echo "│   ├── R: 1-R.jpg, 2-R.jpg, 3-R.jpg, 4-R.jpg"
echo "│   ├── A: 1-A.jpg, 2-A.jpg, 3-A.jpg, 4-A.jpg"
echo "│   ├── L1: 1-L1.jpg, 2-L1.jpg, 3-L1.jpg, 4-L1.jpg"
echo "│   ├── L2: 1-L2.jpg, 2-L2.jpg, 3-L2.jpg, 4-L2.jpg"
echo "│   └── O: 1-O.jpg, 2-O.jpg, 3-O.jpg, 4-O.jpg"
echo "└── Final Logo (PNG):"
echo "    └── r-logo.png, a-logo.png, l1-logo.png, l2-logo.png, o-logo.png"
echo ""
echo "Loading Order: R→A→L1→L2→O→Logo"
echo "Timing: 0.25s per letter variation, 2s for final logo"