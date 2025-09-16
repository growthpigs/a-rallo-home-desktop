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
  const [phase, setPhase] = useState<'scrolling' | 'pinned' | 'expanded-scrolling'>('scrolling');
  const [showContent, setShowContent] = useState<boolean>(false);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const pinnedScrollStart = useRef<number>(0);
  const scrollAmountForAnimation = 600; // Pixels needed to fully expand

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

      if (phase === 'scrolling') {
        // Check if square has reached center
        if (Math.abs(sectionCenter - viewportCenter) < 100) {
          setPhase('pinned');
          pinnedScrollStart.current = currentScroll;
        }
      } else if (phase === 'pinned') {
        // Calculate expansion progress while pinned
        const scrolledSincePinned = currentScroll - pinnedScrollStart.current;
        const progress = Math.min(1, Math.max(0, scrolledSincePinned / scrollAmountForAnimation));
        
        setScrollProgress(progress);
        
        if (progress > 0.3) {
          setShowContent(true);
        }

        // When fully expanded, smoothly transition to expanded-scrolling phase
        if (progress >= 1 && scrolledSincePinned > scrollAmountForAnimation) {
          setPhase('expanded-scrolling');
        }

        // If scrolling back up too much, return to scrolling phase
        if (scrolledSincePinned < -50) {
          setPhase('scrolling');
          setScrollProgress(0);
          setShowContent(false);
        }
      } else if (phase === 'expanded-scrolling') {
        // Check if we've scrolled back to where animation should reverse
        const rect = sectionRef.current.getBoundingClientRect();
        
        if (rect.top > -100) {
          // Section is coming back into view from top, return to pinned
          setPhase('pinned');
          pinnedScrollStart.current = currentScroll - scrollAmountForAnimation;
        } else {
          // Stay fully expanded while scrolling
          setScrollProgress(1);
          setShowContent(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [phase]);

  // Calculate sizes based on progress - starts at 400x400, smaller expansion
  const mediaWidth = 400 + scrollProgress * (isMobileState ? 400 : 800);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 180 : 280);
  
  // Text animation - scroll completely off screen
  const textTranslateX = scrollProgress * (isMobileState ? 60 : 80);

  // Determine container styling based on phase
  const getContainerStyle = () => {
    if (phase === 'pinned') {
      return {
        position: 'fixed' as const,
        top: 0,
        left: 0,
        right: 0,
        height: '100vh',
        zIndex: 20,
      };
    } else if (phase === 'expanded-scrolling') {
      // Keep it relative but maintain expanded state
      return {
        position: 'relative' as const,
        height: '100vh',
      };
    }
    return {
      position: 'relative' as const,
      height: '100vh',
    };
  };

  // Add spacer height when pinned to maintain document flow
  const spacerHeight = phase === 'pinned' ? `calc(100vh + ${scrollAmountForAnimation}px)` : 
                       phase === 'expanded-scrolling' ? '100vh' : '100vh';

  return (
    <div
      ref={sectionRef}
      className='relative'
      style={{
        height: phase === 'pinned' ? `calc(100vh + ${scrollAmountForAnimation}px)` : '100vh',
      }}
    >
      <div style={getContainerStyle()}>
        <section className='relative flex flex-col items-center justify-center h-full overflow-hidden'>
          {/* Background Image */}
          <motion.div
            className='absolute inset-0 z-0'
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 - scrollProgress * 0.6 }}
            transition={{ duration: 0.2, ease: 'linear' }}
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
                duration: 0.15, 
                ease: 'linear'
              }}
              style={{
                maxWidth: '95vw',
                maxHeight: '85vh',
                backgroundColor: scrollProgress === 0 ? '#fd815aff' : 'transparent',
              }}
            >
              {scrollProgress > 0 && mediaType === 'video' ? (
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

              <motion.div
                className='absolute inset-0 bg-black/50'
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 0.7 - scrollProgress * 0.5 }}
                transition={{ duration: 0.15, ease: 'linear' }}
              />
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

          {/* Content removed - no children displayed */}
        </section>
      </div>
    </div>
  );
};

export default ScrollExpandMedia;