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
  const [isPinned, setIsPinned] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const pinnedScrollStart = useRef<number>(0);
  const scrollAmount = 800; // Amount of scroll needed for full animation

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
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const currentScroll = window.scrollY;

      // Check if square should be centered
      // The square starts at center of section, so we check when section center aligns with viewport center
      const shouldPin = Math.abs(sectionCenter - viewportCenter) < 50;

      if (shouldPin && !isPinned && scrollProgress < 1) {
        // Start pinning
        setIsPinned(true);
        pinnedScrollStart.current = currentScroll;
      } else if (isPinned) {
        // While pinned, calculate progress
        const scrolledAmount = currentScroll - pinnedScrollStart.current;
        const progress = Math.max(0, Math.min(1, scrolledAmount / scrollAmount));
        
        setScrollProgress(progress);

        // Show content based on progress
        if (progress > 0.3) {
          setShowContent(true);
        } else {
          setShowContent(false);
        }

        // Unpin when animation is complete and user scrolls more
        if (progress >= 1 && scrolledAmount > scrollAmount + 100) {
          setIsPinned(false);
        }
        
        // Also unpin if scrolling back up
        if (scrolledAmount < -100) {
          setIsPinned(false);
          setScrollProgress(0);
          setShowContent(false);
        }
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // Only prevent default when pinned and animation not complete
      if (isPinned && scrollProgress < 1) {
        // Let the scroll happen but control the animation
        const delta = e.deltaY * 0.001;
        setScrollProgress(prev => {
          const newProgress = Math.max(0, Math.min(1, prev + delta));
          if (newProgress > 0.3) {
            setShowContent(true);
          } else {
            setShowContent(false);
          }
          return newProgress;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: true });
    
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isPinned, scrollProgress]);

  // Calculate sizes with smooth interpolation
  const mediaWidth = 250 + scrollProgress * (isMobileState ? 650 : 1350);
  const mediaHeight = 250 + scrollProgress * (isMobileState ? 400 : 600);
  
  // Text animation
  const textTranslateX = scrollProgress * (isMobileState ? 25 : 35);

  return (
    <div
      ref={sectionRef}
      className='relative'
      style={{
        height: isPinned ? `calc(100vh + ${scrollAmount}px)` : '100vh',
      }}
    >
      <div
        className={isPinned ? 'fixed top-0 left-0 right-0 h-screen' : 'relative h-screen'}
        style={{
          zIndex: isPinned ? 20 : 1,
        }}
      >
        <section className='relative flex flex-col items-center justify-center h-full overflow-hidden'>
          {/* Background Image - stays fixed */}
          <motion.div
            className='absolute inset-0 z-0'
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 - scrollProgress * 0.6 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <img
              src={bgImageSrc}
              alt='Background'
              className='w-full h-full object-cover'
              style={{
                objectPosition: 'center',
              }}
            />
            <div className='absolute inset-0 bg-black/10' />
          </motion.div>

          {/* Video/Media Container - centered */}
          <div className='absolute inset-0 flex items-center justify-center z-10'>
            <motion.div
              className='relative rounded-2xl overflow-hidden'
              animate={{
                width: `${mediaWidth}px`,
                height: `${mediaHeight}px`,
              }}
              transition={{ 
                duration: 0.3, 
                ease: 'easeOut'
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
              ) : (
                <img
                  src={mediaSrc}
                  alt={title || 'Media content'}
                  className='w-full h-full object-cover'
                />
              )}

              <motion.div
                className='absolute inset-0 bg-black/50'
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 0.7 - scrollProgress * 0.5 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </motion.div>
          </div>

          {/* Text that slides apart - overlaid on video */}
          <div className='absolute inset-0 flex items-center justify-center z-20 pointer-events-none'>
            <div className='flex flex-col items-center gap-2'>
              <motion.h2
                className='text-4xl md:text-5xl lg:text-6xl font-bold text-white font-mono'
                animate={{
                  x: `-${textTranslateX}vw`,
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{ 
                  fontFamily: 'JetBrains Mono, monospace',
                  mixBlendMode: textBlend ? 'difference' : 'normal',
                }}
              >
                {firstLine}
              </motion.h2>
              <motion.h2
                className='text-4xl md:text-5xl lg:text-6xl font-bold text-white font-mono'
                animate={{
                  x: `${textTranslateX}vw`,
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{ 
                  fontFamily: 'JetBrains Mono, monospace',
                  mixBlendMode: textBlend ? 'difference' : 'normal',
                }}
              >
                {secondLine}
              </motion.h2>
            </div>
          </div>

          {/* Additional text elements */}
          {(date || scrollToExpand) && (
            <motion.div 
              className='absolute bottom-20 flex flex-col items-center gap-2 z-20'
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 - scrollProgress }}
              transition={{ duration: 0.3 }}
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

          {/* Content that appears after expansion */}
          <motion.div
            className='absolute bottom-0 left-0 right-0 px-8 py-10 md:px-16 lg:py-20 z-30'
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default ScrollExpandMedia;