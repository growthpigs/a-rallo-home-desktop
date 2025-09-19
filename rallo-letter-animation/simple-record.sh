#!/bin/bash

# Simple manual recording script
echo "🎬 Rallo Animation Recording - Manual Method"
echo "========================================="
echo ""
echo "INSTRUCTIONS:"
echo "1. Opening animation in browser..."
echo "2. Position browser window as desired"
echo "3. Press ENTER here to start recording"
echo "4. Click PLAY in browser"
echo "5. Press CTRL+C here after animation completes (22 seconds)"
echo ""

# Open the animation
open "/Users/rodericandrews/Obsidian/Master/_Projects/Rallo/a-rallo-home-desktop/rallo-letter-animation/multi-word-animation.html"
sleep 3

echo "Press ENTER when ready to start recording..."
read

echo "🔴 RECORDING - Switch to browser and click PLAY!"
echo "Press CTRL+C after 22 seconds..."

# Start recording - will record until interrupted
OUTPUT="/Users/rodericandrews/Downloads/rallo-animation-manual.mov"
screencapture -v "$OUTPUT"

echo "Recording saved to: $OUTPUT"