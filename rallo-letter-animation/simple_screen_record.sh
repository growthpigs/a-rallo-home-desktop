#!/bin/bash

# Simple screen recording of the HTML animation

echo "Opening HTML animation in browser..."
open /Users/rodericandrews/Obsidian/Master/_Projects/Rallo/a-rallo-home-desktop/rallo-letter-animation/index.html

echo "Waiting for page to load..."
sleep 3

echo "Starting screen recording..."
echo "Please position the browser window to fill the screen"
echo "The recording will automatically stop after 15 seconds"

# Use FFmpeg to record the screen for 15 seconds at high quality
ffmpeg -f avfoundation -framerate 30 -i "1:none" -t 15 -vf "scale=1920:1080" -c:v libx264 -crf 18 -preset slow -pix_fmt yuv420p ~/Downloads/rallo-animation-hd.mp4

echo "Recording complete! Video saved to ~/Downloads/rallo-animation-hd.mp4"