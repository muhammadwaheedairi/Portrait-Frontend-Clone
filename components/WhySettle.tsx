
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;
const MotionImg = motion.img as any;

const FloatingImage = ({ src, className, delay }: { src: string; className: string; delay: number }) => (
  <MotionDiv
    initial={{ opacity: 0, y: 20, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className={`absolute hidden md:block ${className}`}
  >
    <MotionImg
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay * 2 }}
      src={src}
      alt="User"
      className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover shadow-lg hover:scale-105 transition-transform duration-300"
    />
  </MotionDiv>
);

const WhySettleSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative min-h-[600px] flex flex-col items-center justify-center">
        
        {/* Central Content */}
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-brand-dark mb-6 tracking-tight leading-tight">
              Why settle for<br />
              <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 pr-2">yesterday's</span>
              <span className="font-serif italic text-brand-dark">internet?</span>
            </h2>
            
            <p className="text-gray-500 text-lg font-medium mb-12 leading-relaxed max-w-lg mx-auto">
              Create a canvas that's forever yours, a place<br className="hidden md:block" />
              where you confidently share your true self.
            </p>
          </MotionDiv>

          {/* Input Field */}
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full max-w-[480px] mx-auto group"
          >
            <div className="relative flex items-center bg-white rounded-full border border-gray-200 shadow-xl shadow-purple-500/5 p-1.5 pl-6 transition-all hover:border-purple-200 hover:shadow-2xl hover:shadow-purple-500/10">
              <span className="text-gray-300 text-xl md:text-2xl font-medium tracking-tight select-none">portrait.so/</span>
              <input 
                type="text" 
                placeholder="mohamed" 
                className="flex-1 bg-transparent border-none outline-none text-xl md:text-2xl text-gray-900 placeholder-gray-800 font-medium ml-0.5 w-full min-w-0 ring-0 focus:ring-0"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
              <button className="ml-2 relative p-[2px] rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 hover:shadow-lg hover:scale-105 transition-all duration-300 shrink-0">
                <div className="bg-white rounded-full px-6 py-2">
                  <span className="text-sm font-bold text-gray-900 whitespace-nowrap">Sign up</span>
                </div>
              </button>
            </div>
            <div className="mt-6 text-sm text-gray-500 font-medium">
              <a href="#" className="underline decoration-gray-300 underline-offset-4 hover:text-gray-900 transition-colors">Already have a Portrait? Login</a>
            </div>
          </MotionDiv>
        </div>

        {/* Floating Images */}
        
        {/* Top Left - Singer */}
        <FloatingImage 
          src="/singgirl.png"
          className="top-[5%] left-[15%] -rotate-12"
          delay={0.1}
        />

        {/* Top Right - Photographer */}
        <FloatingImage 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
          className="top-[10%] right-[15%] rotate-6"
          delay={0.2}
        />

        {/* Middle Left - Painter */}
        <FloatingImage 
          src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=400&q=80"
          className="bottom-[20%] left-[10%] rotate-3"
          delay={0.3}
        />

        {/* Middle Right - Coder */}
        <FloatingImage 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80"
          className="bottom-[30%] right-[8%] -rotate-6"
          delay={0.4}
        />

        {/* Bottom Center Left - Smiling Girl */}
        <FloatingImage 
          src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80"
          className="bottom-[10%] left-[25%] -rotate-6 z-0 opacity-60 scale-90"
          delay={0.5}
        />

        {/* Bottom Center Right - Guy */}
        <FloatingImage 
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
          className="bottom-[5%] right-[28%] rotate-12 z-0 opacity-60 scale-90"
          delay={0.6}
        />

      </div>
    </section>
  );
};

export default WhySettleSection;
