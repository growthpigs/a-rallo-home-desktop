import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  TouchEvent,
  WheelEvent,
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

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
    
    // Check initial scroll position
    setTimeout(() => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = rect.height;
        const scrolledPastTop = windowHeight - rect.top;
        const progress = Math.min(Math.max(scrolledPastTop / (windowHeight + sectionHeight), 0), 1);
        if (progress > 0) {
          setScrollProgress(progress);
        }
      }
    }, 100);
  }, [mediaType]);

  useEffect(() => {
    
    const handleWheel = (e: Event) => {
      // DO NOT PREVENT DEFAULT - ALLOW NORMAL SCROLLING ALWAYS
      // Animation is now non-blocking and based on scroll position only
    };

    const handleTouchStart = (e: Event) => {
      const touchEvent = e as TouchEvent;
      setTouchStartY(touchEvent.touches[0].clientY);
    };

    const handleTouchMove = (e: Event) => {
      const touchEvent = e as TouchEvent;
      if (!touchStartY) return;

      const touchY = touchEvent.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        
        setScrollProgress((prev) => {
          const newProgress = Math.min(Math.max(prev + scrollDelta, 0), 1);
          
          if (newProgress >= 1) {
            setMediaFullyExpanded(true);
            setShowContent(true);
          } else if (newProgress < 0.75) {
            setShowContent(false);
          }
          
          return newProgress;
        });

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = (): void => {
      setTouchStartY(0);
    };

    const handleScroll = (): void => {
      if (!sectionRef.current) return;
      
      // Calculate scroll progress based on section position
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      // Calculate when section is centered in viewport
      // Progress = 0 when entering, 0.5 when centered, 1 when leaving
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      
      // Progress starts when bottom enters viewport
      if (sectionBottom < 0) {
        // Section is above viewport
        setScrollProgress(1);
        return;
      } else if (sectionTop > windowHeight) {
        // Section is below viewport  
        setScrollProgress(0);
        return;
      }
      
      // Calculate progress with balanced ramp-up
      const sectionCenter = rect.top + sectionHeight / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = sectionCenter - viewportCenter;
      
      // Normalize to 0-1 range (0 = entering, 0.5 = centered, 1 = leaving)
      const maxDistance = windowHeight / 2 + sectionHeight / 2;
      const rawProgress = 1 - (distanceFromCenter + maxDistance) / (maxDistance * 2);
      const progress = Math.min(Math.max(rawProgress, 0), 1);
      
      setScrollProgress(progress);
      
      // Peak at 50% (centered), then maintain or reverse
      if (progress >= 0.45 && progress <= 0.55) {
        // Fully expanded when centered
        setMediaFullyExpanded(true);
        setShowContent(true);
      } else if (progress >= 0.25 && progress <= 0.75) {
        setShowContent(true);
        setMediaFullyExpanded(false);
      } else {
        setShowContent(false);
        setMediaFullyExpanded(false);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []); // Empty dependency array to prevent re-attachment

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Video peaks at center (progress = 0.5), then shrinks again
  // Balanced animation speed - not too fast, not too slow
  const centerProgress = scrollProgress <= 0.5 
    ? Math.pow(scrollProgress * 2, 0.6)  // Moderate expand curve
    : Math.pow(2 - scrollProgress * 2, 0.6); // Moderate contract
  
  // Start as visible square (250x250), expand to full viewport
  const mediaWidth = 250 + centerProgress * (isMobileState ? 650 : 1350);
  const mediaHeight = 250 + centerProgress * (isMobileState ? 400 : 600);
  
  // Text slides apart at center, comes back together when leaving
  const textTranslateX = centerProgress * (isMobileState ? 20 : 30);

  // Split into "AI AGENTS" and "EVERYWHERE" 
  const firstLine = 'AI AGENTS';
  const secondLine = 'EVERYWHERE';

  return (
    <div
      ref={sectionRef}
      className='transition-colors duration-700 ease-in-out overflow-x-hidden'
    >
      <section className='relative flex flex-col items-center justify-start min-h-[100dvh]'>
        <div className='relative w-full flex flex-col items-center min-h-[100dvh]'>
          <motion.div
            className='absolute inset-0 z-0 h-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <img
              src={bgImageSrc}
              alt='Background'
              className='w-screen h-screen object-cover'
              style={{
                objectPosition: 'center',
              }}
            />
            <div className='absolute inset-0 bg-black/10' />
          </motion.div>

          <div className='container mx-auto flex flex-col items-center justify-start relative z-10'>
            <div className='flex flex-col items-center justify-center w-full h-[100dvh] relative'>
              <div
                className='absolute z-0 top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl'
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  transition: 'width 0.1s ease-out, height 0.1s ease-out',
                }}
              >
                {mediaType === 'video' ? (
                  mediaSrc.includes('youtube.com') ? (
                    <div className='relative w-full h-full pointer-events-none'>
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
                        className='w-full h-full rounded-xl'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                      />
                      <div
                        className='absolute inset-0 z-10'
                        style={{ pointerEvents: 'none' }}
                      ></div>

                      <motion.div
                        className='absolute inset-0 bg-black/30 rounded-xl'
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  ) : (
                    <div className='relative w-full h-full pointer-events-none'>
                      <video
                        src={mediaSrc}
                        poster={posterSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload='auto'
                        className='w-full h-full object-cover rounded-xl'
                        controls={false}
                        disablePictureInPicture
                        disableRemotePlayback
                      />
                      <div
                        className='absolute inset-0 z-10'
                        style={{ pointerEvents: 'none' }}
                      ></div>

                      <motion.div
                        className='absolute inset-0 bg-black/30 rounded-xl'
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  )
                ) : (
                  <div className='relative w-full h-full'>
                    <img
                      src={mediaSrc}
                      alt={title || 'Media content'}
                      className='w-full h-full object-cover rounded-xl'
                    />

                    <motion.div
                      className='absolute inset-0 bg-black/50 rounded-xl'
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}

                <div className='flex flex-col items-center text-center relative z-10 mt-4 transition-none'>
                  {date && (
                    <p
                      className='text-2xl text-white font-mono'
                      style={{ 
                        transform: `translateX(-${textTranslateX}vw)`,
                        fontFamily: 'JetBrains Mono, monospace'
                      }}
                    >
                      {date}
                    </p>
                  )}
                  {scrollToExpand && (
                    <p
                      className='text-white font-medium text-center font-mono'
                      style={{ 
                        transform: `translateX(${textTranslateX}vw)`,
                        fontFamily: 'JetBrains Mono, monospace'
                      }}
                    >
                      {scrollToExpand}
                    </p>
                  )}
                </div>
              </div>

              <div
                className={`flex items-center justify-center text-center gap-4 w-full relative z-10 transition-none flex-col ${
                  textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                }`}
              >
                <div className='flex flex-col items-center'>
                  <motion.h2
                    className='text-4xl md:text-5xl lg:text-6xl font-bold text-white font-mono'
                    style={{ 
                      transform: `translateX(-${textTranslateX}vw)`,
                      fontFamily: 'JetBrains Mono, monospace',
                      transition: 'transform 0.1s ease-out'
                    }}
                  >
                    {firstLine}
                  </motion.h2>
                  <motion.h2
                    className='text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white font-mono'
                    style={{ 
                      transform: `translateX(${textTranslateX}vw)`,
                      fontFamily: 'JetBrains Mono, monospace',
                      transition: 'transform 0.1s ease-out'
                    }}
                  >
                    {secondLine}
                  </motion.h2>
                </div>
              </div>
            </div>

            <motion.section
              className='flex flex-col w-full px-8 py-10 md:px-16 lg:py-20'
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
