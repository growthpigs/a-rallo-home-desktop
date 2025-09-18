import React, { useRef, useEffect, useState } from "react";

interface LoopingVideoProps {
  src: string;
  className?: string;
  width?: number;
  height?: number;
  alt?: string;
}

export const LoopingVideo: React.FC<LoopingVideoProps> = ({
  src,
  className = "",
  width,
  height,
  alt = "Video",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReverse, setIsReverse] = useState(false);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>(0);
  const phaseDurationRef = useRef<number>(5000); // 5 seconds per phase

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let lastTimestamp = 0;

    // Animation loop for manual forward/backward playback
    const animate = (timestamp: number) => {
      if (!video || video.paused) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      // Initialize start time
      if (startTimeRef.current === 0) {
        startTimeRef.current = timestamp;
        lastTimestamp = timestamp;
      }

      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      const duration = video.duration || 0;
      
      if (duration > 0) {
        // Calculate elapsed time in current phase
        const elapsedInPhase = (timestamp - startTimeRef.current) % (phaseDurationRef.current * 2);
        
        // Determine which phase we're in (forward or backward)
        const shouldReverse = elapsedInPhase >= phaseDurationRef.current;
        
        if (shouldReverse !== isReverse) {
          setIsReverse(shouldReverse);
          startTimeRef.current = timestamp - (shouldReverse ? phaseDurationRef.current : 0);
        }

        // Calculate playback speed to fit video in 5 seconds
        const playbackSpeed = duration / (phaseDurationRef.current / 1000); // duration per second
        const frameAdvance = (deltaTime / 1000) * playbackSpeed;

        if (!isReverse) {
          // Playing forward
          if (video.currentTime >= duration - 0.01) {
            // At end, prepare for reverse
            video.currentTime = duration - 0.01;
            setIsReverse(true);
            startTimeRef.current = timestamp;
          } else {
            // Continue forward
            video.currentTime = Math.min(video.currentTime + frameAdvance, duration);
          }
        } else {
          // Playing backward
          if (video.currentTime <= 0.01) {
            // At beginning, prepare for forward
            video.currentTime = 0.01;
            setIsReverse(false);
            startTimeRef.current = timestamp;
          } else {
            // Continue backward
            video.currentTime = Math.max(video.currentTime - frameAdvance, 0);
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start video and animation
    video.load();
    video.addEventListener('loadeddata', () => {
      video.play().catch(err => console.log('Auto-play prevented:', err));
      video.currentTime = 0;
      startTimeRef.current = 0;
      animate(0);
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      width={width}
      height={height}
      muted
      playsInline
      aria-label={alt}
      style={{ objectFit: 'cover' }}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};