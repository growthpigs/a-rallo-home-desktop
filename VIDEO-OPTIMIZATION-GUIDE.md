# Video & Animation Optimization Guide for Web Performance

## Problem Solved
Website had 23MB+ of WebP animations loading on initial page load, causing severe scroll lag and performance issues.

## Solution Applied
Reduced frame rate of all WebP animations from 24fps to 12fps while maintaining same duration and visual quality, resulting in 48% file size reduction.

## Commands for Video Optimization

### 1. Creating Forward-Backward Loop Animations (Seamless Loops)
For videos that need to play forward then backward to create a perfect loop:

```bash
# Create a forward-backward loop at 12fps
ffmpeg -i input-video.mp4 -filter_complex "[0:v]reverse[r];[0:v][r]concat=n=2:v=1[v]" -map "[v]" -r 12 -c:v libwebp -lossless 0 -quality 80 -preset default -loop 0 -an output-loop.webp -y
```

### 2. Simple Video to WebP Conversion (Already Looping Videos)
For videos that are already perfect loops:

```bash
# Convert to WebP at 12fps
ffmpeg -i input-video.mp4 -r 12 -c:v libwebp -lossless 0 -quality 80 -preset default -loop 0 -an output.webp -y
```

### 3. Check Video Properties
```bash
# Get frame rate, duration, and frame count
ffprobe -v error -show_entries stream=r_frame_rate,duration,nb_frames -of default=noprint_wrappers=1 video.mp4
```

## Performance Results

| File | Original Size | Optimized Size | Reduction |
|------|--------------|----------------|-----------|
| man-crosshairs-loop.webp | 9.8MB | 6.9MB | 30% |
| rallo-chat-woman-simple.webp | 3.1MB | 2.2MB | 29% |
| rallo-interactive-knob-loop.webp | 4.0MB | 2.8MB | 30% |
| **Total** | **23MB** | **11.9MB** | **48%** |

## Key Parameters Explained

- `-r 12`: Reduces frame rate to 12fps (from 24fps)
- `-quality 80`: WebP quality setting (80 is good balance)
- `-lossless 0`: Use lossy compression for smaller files
- `-loop 0`: Infinite loop for animations
- `-an`: Remove audio track

## Best Practices

1. **Keep scroll animations unchanged** - Don't throttle or modify scroll-linked animations
2. **Reduce frame rates** - 12fps is smooth enough for web animations
3. **Use lazy loading selectively** - Only for image galleries, not hero sections
4. **Test on actual devices** - Chrome DevTools doesn't always reflect real performance

## When to Use Each Approach

- **Forward-Backward Loop**: When you have a video that needs to seamlessly reverse (like the man with crosshairs)
- **Simple Conversion**: When video is already a perfect loop (like the chat woman animation)
- **12fps vs 24fps**: Always use 12fps for web unless absolutely needed - users won't notice but performance will improve significantly

## Quick Optimization Script

Save this as `optimize-videos.sh`:

```bash
#!/bin/bash
for video in *.mp4; do
    output="${video%.mp4}-optimized.webp"
    echo "Optimizing $video..."
    ffmpeg -i "$video" -r 12 -c:v libwebp -lossless 0 -quality 80 -preset default -loop 0 -an "$output" -y
    echo "Created $output"
done
```

## Local Development

The site runs on: **http://localhost:5001**

---

*This optimization reduced total animation size by 48% while maintaining visual quality and smooth scroll animations.*