import React, { useState, useEffect, useRef } from 'react';

interface FastImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
}

// Global cache for already visible images
const visibleImages = new Set<string>();

export const FastImage: React.FC<FastImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  quality = 75,
}) => {
  const wasVisible = visibleImages.has(src);
  const [isVisible, setIsVisible] = useState(priority || wasVisible);
  const [hasLoaded, setHasLoaded] = useState(wasVisible);
  const imgRef = useRef<HTMLDivElement>(null);

  // Convert import paths to public URLs
  const getPublicUrl = (originalSrc: string) => {
    // If it's already a public URL, return as is
    if (originalSrc.startsWith('/') || originalSrc.startsWith('http')) {
      return originalSrc;
    }
    
    // Extract filename from import path
    const filename = originalSrc.split('/').pop() || originalSrc;
    return `/images/${filename}`;
  };

  const publicSrc = getPublicUrl(src);

  useEffect(() => {
    if (priority || wasVisible || !imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            visibleImages.add(src);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Load 50px before entering viewport
        threshold: 0.01,
      }
    );

    observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [priority, isVisible, wasVisible, src]);

  const handleImageLoad = () => {
    setHasLoaded(true);
  };

  return (
    <div 
      ref={imgRef}
      className={`${className} relative overflow-hidden`}
      style={{ width, height }}
    >
      {/* Blur placeholder - REMOVED per no-fade requirement */}
      
      {/* Actual image */}
      {isVisible && (
        <img
          src={publicSrc}
          alt={alt}
          className={`${className} opacity-100`}  // NO FADE - Always 100% opacity
          width={width}
          height={height}
          onLoad={handleImageLoad}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
        />
      )}
    </div>
  );
};