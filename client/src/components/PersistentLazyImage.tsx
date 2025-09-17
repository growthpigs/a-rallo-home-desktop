import React, { useState, useEffect, useRef } from 'react';

interface PersistentLazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

// Cache loaded images globally
const loadedImages = new Set<string>();

export const PersistentLazyImage: React.FC<PersistentLazyImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
}) => {
  // Check if image was already loaded before
  const wasLoadedBefore = loadedImages.has(src);
  
  const [hasLoaded, setHasLoaded] = useState(wasLoadedBefore);
  const [shouldRender, setShouldRender] = useState(priority || wasLoadedBefore);
  const imgRef = useRef<HTMLDivElement>(null);

  // Use WebP version if available
  const getOptimizedSrc = () => {
    if (src.includes('.png')) {
      // Check if it's a local asset
      if (src.includes('attached_assets') || src.startsWith('@assets')) {
        const webpSrc = src.replace(/attached_assets/, 'attached_assets/webp').replace('.png', '.webp');
        return webpSrc;
      }
    }
    return src;
  };

  const optimizedSrc = getOptimizedSrc();

  useEffect(() => {
    if (priority || wasLoadedBefore || !imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldRender) {
            setShouldRender(true);
            // Don't disconnect - keep observing but image stays rendered
          }
        });
      },
      {
        rootMargin: '100px', // Start loading 100px before viewport
        threshold: 0.01,
      }
    );

    observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [priority, shouldRender, wasLoadedBefore]);

  const handleImageLoad = () => {
    setHasLoaded(true);
    loadedImages.add(src); // Cache that this image has been loaded
  };

  return (
    <div 
      ref={imgRef}
      className={`${className} relative`}
      style={{ width, height }}
    >
      {/* Placeholder - REMOVED per no-fade requirement */}
      
      {/* Render image once triggered, never unmount */}
      {shouldRender && (
        <picture>
          {/* WebP version */}
          {optimizedSrc !== src && (
            <source srcSet={optimizedSrc} type="image/webp" />
          )}
          {/* Original format fallback */}
          <img
            src={src}
            alt={alt}
            className={`${className} opacity-100`}  // NO FADE - Always 100% opacity
            width={width}
            height={height}
            onLoad={handleImageLoad}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
          />
        </picture>
      )}
    </div>
  );
};