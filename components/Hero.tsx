
'use client';

import React from 'react';
import { ArrowRight, Play, Image as ImageIcon, Video, Link as LinkIcon, Type, Sparkles, Frown, Smile } from 'lucide-react';
import { motion } from 'framer-motion';

// Cast motion components to any to prevent strict type conflicts in this setup
const MotionDiv = motion.div as any;
const MotionImg = motion.img as any;

const Hero: React.FC = () => {
  // Variants for the flying images
  // custom prop determines the starting position (simulating "sides/top")
  const imageVariants = {
    hidden: (direction: string) => ({
      x: direction === 'left' ? -250 : direction === 'right' ? 250 : 0,
      y: direction === 'top' ? -200 : direction === 'bottom' ? 100 : 0,
      rotate: direction === 'left' ? -15 : direction === 'right' ? 15 : 0,
      opacity: 0,
      scale: 0.8,
    }),
    visible: {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        delay: 0.3, // Delay to let page load slightly
      }
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden w-full flex flex-col items-center">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-hero-glow opacity-60 blur-3xl -z-10 rounded-b-[100%] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center w-full">
        {/* Top Pills */}
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          <a href="#" className="group inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/60 border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-white hover:border-gray-300 transition-all backdrop-blur-sm shadow-sm">
            Portrait launches Public Testnet 
            <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a href="#" className="group inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/60 border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-white hover:border-gray-300 transition-all backdrop-blur-sm shadow-sm">
            <Play size={10} className="fill-gray-600" /> 
            Discover Portrait in 90s
          </a>
        </MotionDiv>

        {/* Headline */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter text-brand-dark leading-[1.1] mb-8">
            Your <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 pr-1">forever</span> space for<br />
            everything you are.
          </h1>
        </MotionDiv>

        {/* Subhead */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            More than a link—a decentralized canvas to share<br className="hidden md:block" />
            your story, your work, and your life—in minutes.
          </p>
        </MotionDiv>

        {/* Input Action */}
        <MotionDiv 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative w-full max-w-[500px] mx-auto mb-16 group z-20"
        >
          {/* Glow behind input */}
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-200 via-pink-200 to-purple-200 rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
          
          <div className="relative flex items-center bg-white rounded-full border border-gray-200 shadow-xl shadow-purple-500/5 p-2 pl-8 transition-all hover:border-purple-200 hover:shadow-2xl hover:shadow-purple-500/10">
            <span className="text-gray-300 text-2xl font-medium tracking-tight select-none">portrait.so/</span>
            <input 
              type="text" 
              placeholder="john" 
              className="flex-1 bg-transparent border-none outline-none text-2xl text-gray-900 placeholder-gray-300 font-medium ml-0.5 w-full min-w-0 ring-0 focus:ring-0"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
            <button className="ml-2 relative p-[2px] rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="bg-white rounded-full px-6 py-2.5">
                <span className="text-sm font-bold text-gray-900 whitespace-nowrap">Sign up</span>
              </div>
            </button>
          </div>
          <div className="mt-6 text-sm text-gray-500 font-medium">
            <a href="#" className="underline decoration-gray-300 underline-offset-4 hover:text-gray-900 transition-colors">Already have a Portrait? Login</a>
          </div>
        </MotionDiv>

        {/* CENTRAL PHONE FRAME CARD - Images fly into here */}
        <div className="relative w-[340px] md:w-[380px] perspective-1000 mt-4 z-20">
          <MotionDiv 
            initial={{ y: 100, opacity: 0, rotateX: 10 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-[2.5rem] shadow-2xl shadow-purple-200/50 p-5 border border-gray-100 relative z-10"
          >
             {/* Card Header */}
             <div className="flex items-start gap-4 mb-6 px-1">
                <MotionImg 
                   src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80" 
                   className="w-12 h-12 rounded-full object-cover border border-gray-100" 
                   alt="Avatar"
                   initial={{ scale: 0 }}
                   animate={{ scale: 1 }}
                   transition={{ delay: 0.5, type: "spring" }}
                />
                <div className="text-left">
                   <h3 className="font-bold text-gray-900 text-lg">Rowan Blake</h3>
                   <p className="text-xs text-gray-500 leading-relaxed max-w-[180px]">
                     I write about LLMs. I garden when it's not raining.
                   </p>
                </div>
             </div>

             {/* Masonry Grid Body */}
             <div className="grid grid-cols-2 gap-3 mb-20"> {/* mb-20 for bottom controls space */}
                
                {/* Column 1 */}
                <div className="flex flex-col gap-3">
                   {/* Slot 1: Image from Top Left (Snow/Winter) */}
                   <div className="relative w-full h-32 rounded-2xl bg-gray-50 overflow-hidden">
                      <MotionImg 
                        custom="left"
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=400&q=80"
                        className="w-full h-full object-cover"
                        alt="Winter"
                      />
                   </div>
                   
                   {/* Slot 2: Image from Bottom Left (Surfer/Friends) */}
                   <div className="relative w-full h-40 rounded-2xl bg-gray-50 overflow-hidden">
                     <MotionImg 
                        custom="top" 
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80"
                        className="w-full h-full object-cover"
                        alt="Friends"
                      />
                   </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-3">
                   {/* Slot 3: Image from Top Right (Salad) */}
                   <div className="relative w-full h-48 rounded-2xl bg-gray-50 overflow-hidden">
                      <MotionImg 
                        custom="right"
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80"
                        className="w-full h-full object-cover"
                        alt="Salad"
                      />
                   </div>
                   
                   {/* Slot 4: Image from Bottom Right (Dog) */}
                   <div className="relative w-full h-24 rounded-2xl bg-gray-50 overflow-hidden">
                      <MotionImg 
                        custom="right"
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=400&q=80"
                        className="w-full h-full object-cover"
                        alt="Dog"
                      />
                   </div>
                </div>
             </div>

             {/* Bottom Dock Controls */}
             <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                <MotionDiv 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex gap-2 bg-white/80 backdrop-blur-md rounded-full border border-gray-100 p-2 shadow-lg"
                >
                  <button className="w-10 h-10 rounded-full hover:bg-gray-50 flex items-center justify-center text-gray-400 transition-colors"><ImageIcon size={18} /></button>
                  <button className="w-10 h-10 rounded-full hover:bg-gray-50 flex items-center justify-center text-gray-400 transition-colors"><Video size={18} /></button>
                  <button className="w-10 h-10 rounded-full hover:bg-gray-50 flex items-center justify-center text-gray-400 transition-colors"><LinkIcon size={18} /></button>
                  <button className="w-10 h-10 rounded-full hover:bg-gray-50 flex items-center justify-center text-gray-400 transition-colors"><Type size={18} /></button>
                </MotionDiv>
             </div>
             
             {/* Floating Sticky Note - Animates in from right */}
             <MotionDiv 
                initial={{ x: 100, opacity: 0, rotate: 20 }}
                animate={{ x: 0, opacity: 1, rotate: 6 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -right-4 md:-right-16 top-32 bg-white p-3 rounded-xl shadow-xl border border-gray-100 z-20 w-32 hidden md:block"
             >
                <div className="flex flex-col gap-1">
                   <div className="flex items-center gap-1 text-[10px] text-gray-400 font-medium">
                      <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                      Site.so
                   </div>
                   <p className="text-[10px] font-bold leading-tight text-gray-800">Lt. Ma for house plants?</p>
                   <div className="h-1 w-12 bg-gray-100 rounded mt-1"></div>
                </div>
             </MotionDiv>

             {/* Floating Decoration Left - Animates in from left */}
             <MotionDiv 
                initial={{ x: -100, opacity: 0, rotate: -20 }}
                animate={{ x: 0, opacity: 1, rotate: -6 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="absolute -left-6 top-48 bg-white p-2 rounded-lg shadow-lg border border-gray-100 z-20 hidden md:block"
             >
                 <Sparkles size={16} className="text-yellow-400 fill-yellow-100" />
             </MotionDiv>

          </MotionDiv>
        </div>

        {/* Emoji Comparison Section - Added Below Card */}
        <MotionDiv 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid md:grid-cols-2 gap-16 md:gap-32 mt-24 md:mt-32 w-full max-w-4xl px-4 relative z-10"
        >
          {/* Divider Line (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px border-l border-dashed border-gray-200 -translate-x-1/2"></div>

          {/* Left: Sad/Single Location */}
          <div className="flex flex-col items-center text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center transform rotate-[-10deg] hover:rotate-0 transition-transform">
               <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center shadow-lg shadow-red-200">
                  <Frown className="text-white fill-red-500" size={24} strokeWidth={2.5} />
               </div>
            </div>
            <p className="text-xl font-bold text-brand-dark leading-snug">
              With normal websites,<br/>
              your data is stored in<br/>
              <span className="font-serif italic text-red-500 text-2xl">a single location.</span>
            </p>
          </div>

          {/* Right: Happy/Decentralized */}
          <div className="flex flex-col items-center text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center transform rotate-[10deg] hover:rotate-0 transition-transform">
               <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-200">
                  <Smile className="text-white fill-cyan-500" size={24} strokeWidth={2.5} />
               </div>
            </div>
            <p className="text-xl font-bold text-brand-dark leading-snug">
              With Portrait, your<br/>
              data is securely hosted<br/>
              <span className="font-serif italic text-cyan-500 text-2xl">all around the world.</span>
            </p>
          </div>
        </MotionDiv>

      </div>
    </section>
  );
};

export default Hero;
