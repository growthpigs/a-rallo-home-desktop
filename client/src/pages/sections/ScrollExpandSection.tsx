import React, { useEffect } from 'react';
import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero-sticky-final';

// Import the existing background image
import abstract_representation_of_data_flowing_through_geometric_channels_translucent_tubes_and_pathways_s_lcz904f18v0j06fnuwh7_0 from "@assets/abstract_representation_of_data_flowing_through_geometric_channels_translucent_tubes_and_pathways_s_lcz904f18v0j06fnuwh7_0.png";

interface MediaAbout {
  overview: string;
  conclusion: string;
}

const ralloMediaContent = {
  src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  poster: abstract_representation_of_data_flowing_through_geometric_channels_translucent_tubes_and_pathways_s_lcz904f18v0j06fnuwh7_0,
  background: abstract_representation_of_data_flowing_through_geometric_channels_translucent_tubes_and_pathways_s_lcz904f18v0j06fnuwh7_0,
  title: 'AI AGENTS EVERYWHERE',
  date: 'DEPLOY ONCE',
  scrollToExpand: 'Scroll to Experience',
  about: {
    overview: 'Deploy your AI agents across websites, mobile apps, social media, and voice channels. One platform, infinite touchpoints.',
    conclusion: 'Create AI-powered experiences that represent you 24/7 while you focus on what matters most.'
  }
};

const MediaContent = () => {
  return (
    <div className='max-w-4xl mx-auto'>
      <h2 className='text-3xl font-bold mb-6 text-white' style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        DEPLOY ONCE, SCALE EVERYWHERE
      </h2>
      <p className='text-lg mb-8 text-white' style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        {ralloMediaContent.about.overview}
      </p>
      <p className='text-lg mb-8 text-white' style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        {ralloMediaContent.about.conclusion}
      </p>
    </div>
  );
};

export const ScrollExpandSection = (): JSX.Element => {
  useEffect(() => {
    console.log('🚀 [ScrollExpandSection] Component mounted');
    window.scrollTo(0, 0);
    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='w-full relative' data-scroll-expand-section style={{ backgroundColor: '#ded8ca' }}>
      <ScrollExpandMedia
        mediaType='video'
        mediaSrc={ralloMediaContent.src}
        posterSrc={ralloMediaContent.poster}
        bgImageSrc={ralloMediaContent.background}
        title={ralloMediaContent.title}
        date={ralloMediaContent.date}
        scrollToExpand={ralloMediaContent.scrollToExpand}
      />
    </div>
  );
};