import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'video' | 'chat' | 'voice' | null;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, type }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const demos = {
    video: {
      icon: '/icons/Video-pyramid.svg',
      title: 'AI VIDEO AGENTS',
      subtitle: 'Your digital twin, available 24/7',
      description: 'Create lifelike AI avatars that represent you in video calls, meetings, and presentations. Record once, and your digital twin handles unlimited conversations.',
      cta: 'Create Your Avatar',
      demoContent: (
        <div className="relative w-full h-[300px] bg-black/50 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          </video>
          <div className="absolute bottom-4 left-4 text-white text-xs font-['JetBrains_Mono'] uppercase tracking-wider">
            LIVE AI AVATAR DEMO
          </div>
        </div>
      )
    },
    chat: {
      icon: '/icons/Chat-cube.svg',
      title: 'INTELLIGENT CHAT AGENTS',
      subtitle: 'Never miss a conversation',
      description: 'Deploy smart chat agents that understand context, remember past interactions, and provide personalized responses across all your channels.',
      cta: 'Start Chatting',
      demoContent: (
        <div className="w-full h-[250px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 overflow-y-auto">
          <div className="space-y-4">
            <motion.div
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-3 rounded-lg max-w-[70%]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-sm text-white">Hi! How can I help you today?</p>
            </motion.div>
            <motion.div
              className="bg-[#fd815a] text-white p-3 rounded-lg shadow-sm max-w-[70%] ml-auto"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-sm">I'd like to learn more about Rallo</p>
            </motion.div>
            <motion.div
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-3 rounded-lg max-w-[70%]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <p className="text-sm text-white">I'd be happy to help! Rallo is an AI Agent platform that...</p>
              <motion.span
                className="inline-block ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              >
                |
              </motion.span>
            </motion.div>
          </div>
        </div>
      )
    },
    voice: {
      icon: '/icons/Voice-hexagon.svg',
      title: 'VOICE AI ASSISTANTS',
      subtitle: 'Natural conversations at scale',
      description: 'Enable natural voice interactions with AI that sounds human. Perfect for customer service, sales calls, and voice-first experiences.',
      cta: 'Try Voice AI',
      demoContent: (
        <div className="w-full h-[250px] bg-black/50 backdrop-blur-sm border border-white/20 rounded-lg p-8 flex flex-col items-center justify-center">
          <motion.div className="flex items-center justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 bg-[#fd815a] rounded-full"
                animate={{
                  height: [20, 60, 20],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
          <p className="text-white mt-8 font-['JetBrains_Mono'] text-sm uppercase tracking-wider">VOICE AI ACTIVE</p>
          <p className="text-gray-400 mt-2 text-xs font-['JetBrains_Mono'] uppercase tracking-wider">CLICK TO SPEAK</p>
        </div>
      )
    }
  };

  const currentDemo = type && demos[type];

  return (
    <AnimatePresence>
      {isOpen && currentDemo && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-lg z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl max-w-3xl w-full mx-4 pointer-events-auto relative overflow-hidden"
              initial={{ 
                scaleY: 0.01,
                scaleX: 1,
                opacity: 0,
                filter: 'brightness(2) contrast(1.5)'
              }}
              animate={{ 
                scaleY: [0.01, 1],
                scaleX: [1, 0.9, 1],
                opacity: [0, 1, 1],
                filter: ['brightness(2) contrast(1.5)', 'brightness(1.5) contrast(1.2)', 'brightness(1) contrast(1)'],
                transition: {
                  duration: 0.5,
                  times: [0, 0.5, 1],
                  ease: "easeOut"
                }
              }}
              exit={{ 
                scaleY: 0.01,
                opacity: 0,
                filter: 'brightness(2) contrast(1.5)',
                transition: { duration: 0.2 }
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Holographic scanline effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.3, 0],
                  transition: {
                    duration: 0.5,
                    ease: "easeOut"
                  }
                }}
                style={{
                  background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
                  mixBlendMode: 'screen'
                }}
              />
              
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="flex flex-col p-6 gap-4">
                {/* Header with icon and title */}
                <div className="flex items-center gap-4">
                  <img
                    src={currentDemo.icon}
                    alt={currentDemo.title}
                    className="w-6 h-6 object-contain"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(100%)'
                    }}
                  />
                  <div>
                    <h2 className="text-xl font-['JetBrains_Mono'] font-normal tracking-wider text-white uppercase">
                      {currentDemo.title}
                    </h2>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-[#fd815a] font-['JetBrains_Mono'] text-sm uppercase tracking-wider">
                    {currentDemo.subtitle}
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    {currentDemo.description}
                  </p>

                  {/* Demo Content */}
                  {currentDemo.demoContent}

                  {/* CTA Button */}
                  <Button
                    className="bg-[#fd815a] hover:bg-[#fd815a]/90 text-white font-['JetBrains_Mono'] uppercase tracking-wider px-6 py-2 text-sm"
                  >
                    {currentDemo.cta}
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};