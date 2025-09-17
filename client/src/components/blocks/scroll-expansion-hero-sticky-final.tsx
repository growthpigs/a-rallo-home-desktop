import {
  useEffect,
  useRef,
  useState,
  ReactNode,
} from 'react';
import { motion } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);

  // Split text for animation
  const firstLine = 'AI AGENTS';
  const secondLine = 'EVERYWHERE';

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !stickyRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const stickyRect = stickyRef.current.getBoundingClientRect();
      
      // Calculate progress based on how much we've scrolled through the container
      const scrolledIntoContainer = -containerRect.top;
      const maxScroll = containerRef.current.offsetHeight - window.innerHeight;
      
      // Animation happens over first 480px, then dead zone for 400px (20% reduction)
      const animationDistance = 480;
      const deadZoneDistance = 400;
      
      // Only animate when sticky is actually stuck
      if (stickyRect.top <= 0 && scrolledIntoContainer < maxScroll) {
        // Calculate progress only for the animation portion
        const progress = Math.min(1, Math.max(0, scrolledIntoContainer / animationDistance));
        setScrollProgress(progress);
        
        if (progress > 0.3) {
          setShowContent(true);
        } else {
          setShowContent(false);
        }
        
        // During dead zone (after animation completes), maintain full expansion
        if (scrolledIntoContainer >= animationDistance && scrolledIntoContainer < animationDistance + deadZoneDistance) {
          setScrollProgress(1);
          setShowContent(true);
        }
      } else if (scrolledIntoContainer >= maxScroll) {
        // Maintain full expansion when scrolling past
        setScrollProgress(1);
        setShowContent(true);
      } else {
        // Reset when above
        setScrollProgress(0);
        setShowContent(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate sizes based on progress - starts at 400x400, smaller expansion
  const mediaWidth = 400 + scrollProgress * (isMobileState ? 400 : 800);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 180 : 280);
  
  // Text animation - scroll completely off screen
  const textTranslateX = scrollProgress * (isMobileState ? 60 : 80);

  return (
    <div
      ref={containerRef}
      className='relative'
      style={{
        height: 'calc(100vh + 880px)', // 480px animation + 400px dead zone (20% reduction)
        backgroundColor: '#000000', // Black background for dead zone area
      }}
    >
      <div
        ref={stickyRef}
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <section className='relative flex flex-col items-center justify-center w-full h-full overflow-hidden'>
          {/* Background Image - behind everything */}
          <div
            className='absolute inset-0 z-0'
            style={{
              height: '80%', // Crop to 80% height
              top: '10%', // Center the crop (10% from top, 10% from bottom)
              overflow: 'hidden'
            }}
          >
            <img
              src={bgImageSrc}
              alt='Background'
              className='w-full object-cover'
              style={{
                height: '125%', // Scale up to fill the cropped area
                objectPosition: 'center',
                transform: 'translateY(-12.5%)' // Center the image vertically
              }}
            />
            {/* Dark overlay */}
            <div className='absolute inset-0 bg-black/40' />
          </div>

          {/* Video/Media Container - centered */}
          <div className='absolute inset-0 flex items-center justify-center z-10'>
            <motion.div
              className='relative rounded-2xl overflow-hidden'
              animate={{
                width: `${mediaWidth}px`,
                height: `${mediaHeight}px`,
              }}
              transition={{ 
                duration: 0.15, 
                ease: 'linear'
              }}
              style={{
                maxWidth: '95vw',
                maxHeight: '85vh',
              }}
            >
              {mediaType === 'video' ? (
                mediaSrc.includes('youtube.com') ? (
                  <div className='relative w-full h-full'>
                    <iframe
                      width='100%'
                      height='100%'
                      src={
                        mediaSrc.includes('embed')
                          ? mediaSrc +
                            (mediaSrc.includes('?') ? '&' : '?') +
                            'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                          : mediaSrc.replace('watch?v=', 'embed/') +
                            '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                            mediaSrc.split('v=')[1]
                      }
                      className='w-full h-full'
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <video
                    src={mediaSrc}
                    poster={posterSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload='auto'
                    className='w-full h-full object-cover'
                    controls={false}
                  />
                )
              ) : scrollProgress > 0 ? (
                <img
                  src={mediaSrc}
                  alt={title || 'Media content'}
                  className='w-full h-full object-cover'
                />
              ) : (
                <div className='w-full h-full' style={{ backgroundColor: '#fd815aff' }} />
              )}
              
              {/* Orange overlay that fades out as video expands */}
              {scrollProgress < 1 && (
                <motion.div
                  className='absolute inset-0'
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 - scrollProgress }}
                  transition={{ duration: 0.15, ease: 'linear' }}
                  style={{ backgroundColor: '#fd815aff', pointerEvents: 'none' }}
                />
              )}
            </motion.div>
          </div>

          {/* Text that slides apart - overlaid on video */}
          <div className='absolute inset-0 flex items-center justify-center z-20 pointer-events-none'>
            <div className='flex flex-col items-center gap-2'>
              <motion.h2
                className='text-5xl md:text-6xl lg:text-7xl font-thin text-white font-mono tracking-[0.3em]'
                animate={{
                  x: `-${textTranslateX}vw`,
                }}
                transition={{ duration: 0.15, ease: 'linear' }}
                style={{ 
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: 200,
                  mixBlendMode: textBlend ? 'difference' : 'normal',
                }}
              >
                {firstLine}
              </motion.h2>
              <motion.h2
                className='text-5xl md:text-6xl lg:text-7xl font-thin text-white font-mono tracking-[0.3em]'
                animate={{
                  x: `${textTranslateX}vw`,
                }}
                transition={{ duration: 0.15, ease: 'linear' }}
                style={{ 
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: 200,
                  mixBlendMode: textBlend ? 'difference' : 'normal',
                }}
              >
                {secondLine}
              </motion.h2>
            </div>
          </div>

          {/* Additional text elements */}
          {(date || scrollToExpand) && scrollProgress < 0.2 && (
            <motion.div 
              className='absolute bottom-20 flex flex-col items-center gap-2 z-20'
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 - scrollProgress * 5 }}
              transition={{ duration: 0.15 }}
            >
              {date && (
                <p
                  className='text-xl text-white font-mono opacity-90'
                  style={{ 
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  {date}
                </p>
              )}
              {scrollToExpand && (
                <p
                  className='text-white font-mono opacity-70'
                  style={{ 
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  {scrollToExpand}
                </p>
              )}
            </motion.div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ScrollExpandMedia;