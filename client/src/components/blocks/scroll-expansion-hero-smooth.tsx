import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  WheelEvent,
  TouchEvent,
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
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const animationCompleteRef = useRef<boolean>(false);

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
    const handleWheel = (e: Event) => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top <= 100 && rect.bottom >= window.innerHeight - 100;
      
      if (inView && !animationCompleteRef.current) {
        e.preventDefault();
        const wheelEvent = e as unknown as WheelEvent;
        const scrollDelta = wheelEvent.deltaY * 0.0009; // Very small increment for smoothness
        
        setScrollProgress((prev) => {
          const newProgress = Math.min(Math.max(prev + scrollDelta, 0), 1);
          
          if (newProgress >= 1) {
            animationCompleteRef.current = true;
            setMediaFullyExpanded(true);
            setShowContent(true);
            // Allow normal scrolling after animation completes
            setTimeout(() => {
              animationCompleteRef.current = false;
            }, 100);
          } else if (newProgress > 0.75) {
            setShowContent(true);
            setMediaFullyExpanded(true);
          } else if (newProgress > 0.3) {
            setShowContent(true);
            setMediaFullyExpanded(false);
          } else {
            setShowContent(false);
            setMediaFullyExpanded(false);
          }
          
          return newProgress;
        });
      } else if (rect.top > 100 && scrollProgress > 0) {
        // Reset when scrolling back up past the section
        setScrollProgress(0);
        setShowContent(false);
        setMediaFullyExpanded(false);
      }
    };

    const handleTouchStart = (e: Event) => {
      const touchEvent = e as unknown as TouchEvent;
      setTouchStartY(touchEvent.touches[0].clientY);
    };

    const handleTouchMove = (e: Event) => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top <= 100 && rect.bottom >= window.innerHeight - 100;
      
      if (inView && !animationCompleteRef.current) {
        e.preventDefault();
        const touchEvent = e as unknown as TouchEvent;
        const touchY = touchEvent.touches[0].clientY;
        const deltaY = touchStartY - touchY;
        
        // Different sensitivity for mobile
        const scrollFactor = deltaY < 0 ? 0.003 : 0.002;
        const scrollDelta = deltaY * scrollFactor;
        
        setScrollProgress((prev) => {
          const newProgress = Math.min(Math.max(prev + scrollDelta, 0), 1);
          
          if (newProgress >= 1) {
            animationCompleteRef.current = true;
            setMediaFullyExpanded(true);
            setShowContent(true);
          } else if (newProgress > 0.75) {
            setShowContent(true);
            setMediaFullyExpanded(true);
          } else if (newProgress > 0.3) {
            setShowContent(true);
            setMediaFullyExpanded(false);
          } else {
            setShowContent(false);
            setMediaFullyExpanded(false);
          }
          
          return newProgress;
        });

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = (): void => {
      setTouchStartY(0);
    };

    // Check if section is in view on mount and scroll
    const checkInView = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top <= window.innerHeight && rect.bottom >= 0;
      setIsActive(inView);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('scroll', checkInView, { passive: true });

    checkInView();

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('scroll', checkInView);
    };
  }, [scrollProgress, touchStartY]);

  // Calculate sizes with smooth interpolation
  const mediaWidth = 250 + scrollProgress * (isMobileState ? 650 : 1350);
  const mediaHeight = 250 + scrollProgress * (isMobileState ? 400 : 600);
  
  // Text animation with ease
  const textTranslateX = scrollProgress * (isMobileState ? 25 : 35);

  return (
    <div
      ref={sectionRef}
      className='relative'
      style={{
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <section className='relative flex flex-col items-center justify-center h-screen'>
        {/* Background Image */}
        <motion.div
          className='absolute inset-0 z-0'
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 - scrollProgress * 0.6 }}
          transition={{ duration: 0.1, ease: 'linear' }}
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
        <div className='absolute inset-0 flex flex-col items-center justify-center z-10'>
          <motion.div
            className='relative rounded-2xl overflow-hidden'
            animate={{
              width: `${mediaWidth}px`,
              height: `${mediaHeight}px`,
            }}
            transition={{ 
              duration: 0.1, 
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
              transition={{ duration: 0.1, ease: 'linear' }}
            />
          </motion.div>

          {/* Text that slides apart */}
          <div className='absolute flex flex-col items-center gap-2 pointer-events-none'>
            <motion.h2
              className='text-4xl md:text-5xl lg:text-6xl font-bold text-white font-mono'
              animate={{
                x: `-${textTranslateX}vw`,
              }}
              transition={{ duration: 0.1, ease: 'linear' }}
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
              transition={{ duration: 0.1, ease: 'linear' }}
              style={{ 
                fontFamily: 'JetBrains Mono, monospace',
                mixBlendMode: textBlend ? 'difference' : 'normal',
              }}
            >
              {secondLine}
            </motion.h2>
          </div>

          {/* Additional text elements */}
          {(date || scrollToExpand) && (
            <motion.div 
              className='absolute bottom-20 flex flex-col items-center gap-2'
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 - scrollProgress }}
              transition={{ duration: 0.2 }}
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
        </div>

        {/* Content that appears after expansion */}
        <motion.div
          className='absolute bottom-0 left-0 right-0 px-8 py-10 md:px-16 lg:py-20 z-20'
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;