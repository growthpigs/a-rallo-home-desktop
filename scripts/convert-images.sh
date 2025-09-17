#!/bin/bash

# Script to convert PNG images to WebP format
# Requires: brew install webp (on macOS) or apt-get install webp (on Linux)

ASSETS_DIR="../attached_assets"
OUTPUT_DIR="../attached_assets/webp"

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

echo "Converting PNG images to WebP format..."
echo "========================================="

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "Error: cwebp is not installed."
    echo "Please install it with:"
    echo "  macOS: brew install webp"
    echo "  Linux: apt-get install webp"
    exit 1
fi

# Convert each PNG to WebP with 85% quality (good balance of quality vs size)
for png_file in "$ASSETS_DIR"/*.png; do
    if [ -f "$png_file" ]; then
        filename=$(basename "$png_file" .png)
        output_file="$OUTPUT_DIR/${filename}.webp"
        
        echo "Converting: $filename.png -> $filename.webp"
        
        # Convert with high quality settings
        cwebp -q 85 -m 6 "$png_file" -o "$output_file" 2>/dev/null
        
        if [ $? -eq 0 ]; then
            # Get file sizes for comparison
            original_size=$(du -h "$png_file" | cut -f1)
            new_size=$(du -h "$output_file" | cut -f1)
            echo "  ✓ Converted: $original_size -> $new_size"
        else
            echo "  ✗ Failed to convert $filename.png"
        fi
    fi
done

echo "========================================="
echo "Conversion complete!"
echo ""

# Show total size reduction
original_total=$(du -sh "$ASSETS_DIR"/*.png 2>/dev/null | tail -1 | cut -f1)
new_total=$(du -sh "$OUTPUT_DIR"/*.webp 2>/dev/null | tail -1 | cut -f1)

echo "Original total size (PNG): $original_total"
echo "New total size (WebP): $new_total"
echo ""
echo "WebP files saved to: $OUTPUT_DIR"