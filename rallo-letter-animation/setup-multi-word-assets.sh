#!/bin/bash

# Setup script for Multi-Word Animation Assets
# Copies required letter images from source to assets folder

SOURCE_DIR="/Users/rodericandrews/Obsidian/Master/_Projects/Rallo/_rallo-design/Video/OUT Letters"
DEST_DIR="/Users/rodericandrews/Obsidian/Master/_Projects/Rallo/a-rallo-home-desktop/rallo-letter-animation/assets/images"

echo "Setting up Multi-Word Animation Assets..."
echo "==========================================="

# Create destination directory if it doesn't exist
mkdir -p "$DEST_DIR"

# Define the letters we need for each word
# CHAT: C, H, A, T
# INTERACTIVE: I, N, T, E, R, A, C, T, I, V, E
# VIDEO: V, I, D, E, O (D is missing)
# VOICE: V, O, I, C, E
# RALLO: R, A, L, L, O (with logo versions)

echo "Copying letter variations..."

# Copy C variations (for CHAT, INTERACTIVE)
for i in 1 2 3 4; do
    if [ -f "$SOURCE_DIR/${i}c.png" ]; then
        cp "$SOURCE_DIR/${i}c.png" "$DEST_DIR/"
        echo "✓ Copied ${i}c.png"
    fi
done

# Copy H variations (for CHAT)
for i in 1 2 3 4; do
    if [ -f "$SOURCE_DIR/${i}h.png" ]; then
        cp "$SOURCE_DIR/${i}h.png" "$DEST_DIR/"
        echo "✓ Copied ${i}h.png"
    fi
done

# Copy A variations (for CHAT, INTERACTIVE, RALLO)
for i in 1 2 3 4; do
    if [ -f "$SOURCE_DIR/${i}-A.jpg" ]; then
        cp "$SOURCE_DIR/${i}-A.jpg" "$DEST_DIR/"
        echo "✓ Copied ${i}-A.jpg"
    fi
done

# Copy T variations (for CHAT, INTERACTIVE)
for i in 1 2 3 4; do
    if [ -f "$SOURCE_DIR/${i}t.png" ]; then
        cp "$SOURCE_DIR/${i}t.png" "$DEST_DIR/"
        echo "✓ Copied ${i}t.png"
    fi
done

# Copy I variations (for INTERACTIVE, VIDEO, VOICE)
for i in 1 2 3 4; do
    if [ -f "$SOURCE_DIR/${i}i.png" ]; then
        cp "$SOURCE_DIR/${i}i.png" "$DEST_DIR/"
        echo "✓ Copied ${i}i.png"
    fi
done

# Copy N variations (for INTERACTIVE)
for i in 1 2 3 4; do
    if [ -f "$SOURCE_DIR/${i}n.png" ]; then
        cp "$SOURCE_DIR/${i}n.png" "$DEST_DIR/"
        echo "✓ Copied ${i}n.png"
    fi
done

# Copy E variations (for INTERACTIVE, VIDEO, VOICE)
for i in 1 2 3 4; do
    if [ -f "$SOURCE_DIR/${i}e.png" ]; then
        cp "$SOURCE_DIR/${i}e.png" "$DEST_DIR/"
        echo "✓ Copied ${i}e.png"
    fi
done

# Copy R variations (for INTERACTIVE, RALLO)
for i in 1 2 3 4; do
    if [ -f "$SOURCE_DIR/${i}-R.jpg" ]; then
        cp "$SOURCE_DIR/${i}-R.jpg" "$DEST_DIR/"
        echo "✓ Copied ${i}-R.jpg"
    fi
done

# Copy V variations (for INTERACTIVE, VIDEO, VOICE)
for i in 1 2 3 4; do
    if [ -f "$SOURCE_DIR/${i}v.png" ]; then
        cp "$SOURCE_DIR/${i}v.png" "$DEST_DIR/"
        echo "✓ Copied ${i}v.png"
    fi
done

# Copy O variations (for VIDEO, VOICE, RALLO)
for i in 1 2 3 4; do
    if [ -f "$SOURCE_DIR/${i}-O.jpg" ]; then
        cp "$SOURCE_DIR/${i}-O.jpg" "$DEST_DIR/"
        echo "✓ Copied ${i}-O.jpg"
    fi
done

# Copy L variations (for RALLO)
for i in 1 2 3 4; do
    if [ -f "$SOURCE_DIR/${i}-L1.jpg" ]; then
        cp "$SOURCE_DIR/${i}-L1.jpg" "$DEST_DIR/"
        echo "✓ Copied ${i}-L1.jpg"
    fi
    if [ -f "$SOURCE_DIR/${i}-L2.jpg" ]; then
        cp "$SOURCE_DIR/${i}-L2.jpg" "$DEST_DIR/"
        echo "✓ Copied ${i}-L2.jpg"
    fi
done

# Copy logo versions for RALLO
for letter in r a l1 l2 o; do
    if [ -f "$SOURCE_DIR/${letter}-logo.png" ]; then
        cp "$SOURCE_DIR/${letter}-logo.png" "$DEST_DIR/"
        echo "✓ Copied ${letter}-logo.png"
    fi
done

# Check for missing D
echo ""
echo "⚠️  WARNING: Letter 'D' is missing for VIDEO sequence"
echo "    VIDEO will not display correctly without it"
echo ""

# Count total files copied
TOTAL_FILES=$(ls -1 "$DEST_DIR" | wc -l)
echo "==========================================="
echo "✅ Setup complete! Copied $TOTAL_FILES files"
echo ""
echo "To run the animation:"
echo "1. Open multi-word-animation.html in a browser"
echo "2. Click 'Play' to start the animation"
echo "3. Click 'Export HD Video' to capture frames"
echo ""