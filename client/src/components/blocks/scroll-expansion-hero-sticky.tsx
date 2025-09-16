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
  const [animationProgress, setAnimationProgress] = useState<number>(0);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const initialScrollRef = useRef<number>(0);
  const scrollRangeRef = useRef<number>(800); // Pixels to scroll for full animation

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
    const handleScroll = (): void => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      
      // Check if section should be sticky (when top reaches top of viewport)
      if (sectionTop <= 0 && sectionTop > -scrollRangeRef.current) {
        // Section is sticky
        if (!isSticky) {
          setIsSticky(true);
          initialScrollRef.current = window.scrollY;
        }
        
        // Calculate animation progress based on scroll distance
        const scrollDistance = window.scrollY - initialScrollRef.current;
        const progress = Math.min(Math.max(scrollDistance / scrollRangeRef.current, 0), 1);
        
        setAnimationProgress(progress);
        
        // Show content when animation is partially complete
        if (progress > 0.3) {
          setShowContent(true);
        } else {
          setShowContent(false);
        }
      } else {
        // Section is not sticky
        setIsSticky(false);
        
        // Keep animation at end state if scrolled past
        if (sectionTop < -scrollRangeRef.current) {
          setAnimationProgress(1);
        } else {
          setAnimationProgress(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSticky]);

  // Calculate sizes and positions based on animation progress
  const mediaWidth = 250 + animationProgress * (isMobileState ? 650 : 1350);
  const mediaHeight = 250 + animationProgress * (isMobileState ? 400 : 600);
  const textTranslateX = animationProgress * (isMobileState ? 25 : 35);
  const bgOpacity = 1 - animationProgress * 0.7;

  return (
    <div
      ref={sectionRef}
      className='relative'
      style={{
        height: `calc(100vh + ${scrollRangeRef.current}px)`,
      }}
    >
      <div 
        className={`w-full ${isSticky ? 'fixed top-0 left-0 right-0' : 'absolute top-0 left-0 right-0'}`}
        style={{
          height: '100vh',
          zIndex: isSticky ? 20 : 1,
        }}
      >
        <section className='relative flex flex-col items-center justify-center h-screen overflow-hidden'>
          {/* Background Image - stays fixed */}
          <motion.div
            className='absolute inset-0 z-0'
            initial={{ opacity: 1 }}
            animate={{ opacity: bgOpacity }}
            transition={{ duration: 0.1 }}
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

          {/* Video/Media Container */}
          <div className='absolute inset-0 flex flex-col items-center justify-center z-10'>
            <div
              className='relative rounded-2xl overflow-hidden'
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
                animate={{ opacity: 0.7 - animationProgress * 0.5 }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Text that slides apart */}
            <div className='absolute flex flex-col items-center gap-2 pointer-events-none'>
              <motion.h2
                className='text-4xl md:text-5xl lg:text-6xl font-bold text-white font-mono'
                style={{ 
                  transform: `translateX(-${textTranslateX}vw)`,
                  fontFamily: 'JetBrains Mono, monospace',
                  transition: 'transform 0.1s ease-out',
                  mixBlendMode: textBlend ? 'difference' : 'normal',
                }}
              >
                {firstLine}
              </motion.h2>
              <motion.h2
                className='text-4xl md:text-5xl lg:text-6xl font-bold text-white font-mono'
                style={{ 
                  transform: `translateX(${textTranslateX}vw)`,
                  fontFamily: 'JetBrains Mono, monospace',
                  transition: 'transform 0.1s ease-out',
                  mixBlendMode: textBlend ? 'difference' : 'normal',
                }}
              >
                {secondLine}
              </motion.h2>
            </div>

            {/* Additional text elements */}
            {(date || scrollToExpand) && (
              <div className='absolute bottom-20 flex flex-col items-center gap-2'>
                {date && (
                  <p
                    className='text-xl text-white font-mono opacity-90'
                    style={{ 
                      fontFamily: 'JetBrains Mono, monospace',
                      transform: `translateX(-${textTranslateX * 0.5}vw)`,
                      transition: 'transform 0.1s ease-out',
                    }}
                  >
                    {date}
                  </p>
                )}
                {scrollToExpand && animationProgress < 0.2 && (
                  <motion.p
                    className='text-white font-mono opacity-70'
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: animationProgress > 0.1 ? 0 : 0.7 }}
                    style={{ 
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    {scrollToExpand}
                  </motion.p>
                )}
              </div>
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
    </div>
  );
};

export default ScrollExpandMedia;