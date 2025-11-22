
'use client';

import React from 'react';
import { Image as ImageIcon, Video, Link as LinkIcon, Type } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

const CreatingSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative z-10 w-full overflow-visible">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-start mb-16 md:mb-0 md:absolute md:top-24 md:left-6 md:w-1/2 z-20 pointer-events-none">
            {/* Mobile Headline Position (or Absolute on Desktop if needed, but mostly standard flow) */}
             {/* We keep the headline in flow but aligned */}
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
           {/* Left Side: Stepper Text */}
           <div className="flex flex-col pl-4 md:pl-0 order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-16">
                Creating is <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">easy.</span>
              </h2>

              <div className="flex flex-col gap-8 relative pl-2">
                 {/* Vertical Line Track */}
                 <div className="absolute left-[3px] top-3 bottom-3 w-[2px] bg-gray-100"></div>

                 {/* Step 1 */}
                 <div className="relative pl-8 group cursor-default">
                    <h3 className="text-xl md:text-2xl font-medium text-gray-300 transition-colors">Pick a frame</h3>
                 </div>

                 {/* Step 2 */}
                 <div className="relative pl-8 group cursor-default">
                    <h3 className="text-xl md:text-2xl font-medium text-gray-300 transition-colors">Adjust the size</h3>
                 </div>

                 {/* Step 3 (Active) */}
                 <div className="relative pl-8">
                    {/* Active Line Indicator */}
                    <div className="absolute left-[3px] top-0 bottom-0 w-[2px] bg-brand-dark"></div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-2">Position it perfectly</h3>
                    <p className="text-gray-500 text-lg leading-relaxed font-medium">
                      Drag and drop each frame to where you want them to be.
                    </p>
                 </div>
              </div>
           </div>

           {/* Right Side: 3D Visual */}
           <div className="relative [perspective:2000px] flex justify-center md:justify-end order-1 md:order-2 pt-10 md:pt-0">
              <MotionDiv 
                 initial={{ rotateY: -12, rotateX: 5, rotateZ: 2, scale: 0.95, opacity: 0 }}
                 whileInView={{ rotateY: -12, rotateX: 5, rotateZ: 2, scale: 1, opacity: 1 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.8, type: "spring", stiffness: 50, damping: 20 }}
                 style={{ transformStyle: 'preserve-3d' }}
                 className="relative bg-white rounded-[2rem] shadow-2xl shadow-purple-200/50 p-3 w-full max-w-[580px]"
              >
                  {/* Browser/App Header Mockup */}
                  {/* The screenshot doesn't emphasize a browser bar, but a clean white frame. We'll keep it minimal. */}
                  
                  {/* Grid Content - Asymmetric Layout */}
                  <div className="grid grid-cols-12 gap-3 h-[340px] md:h-[380px]">
                      {/* Row 1 */}
                      {/* Item 1: Wide (Flowers/Happy) */}
                      <div className="col-span-5 rounded-2xl overflow-hidden relative group bg-gray-100">
                          <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Nature" />
                      </div>
                      
                      {/* Item 2: Square-ish (Campfire) */}
                      <div className="col-span-4 rounded-2xl overflow-hidden relative group bg-gray-100">
                          <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Friends" />
                      </div>

                      {/* Item 3: Tall-ish (Interior) */}
                      <div className="col-span-3 rounded-2xl overflow-hidden relative group bg-gray-100">
                          <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=400&q=80" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Cafe" />
                      </div>

                      {/* Row 2 */}
                      {/* Item 4: Portrait (Woman) */}
                      <div className="col-span-4 rounded-2xl overflow-hidden relative group bg-gray-100">
                          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Person" />
                      </div>

                       {/* Item 5: Wide (Art/Desk) */}
                       <div className="col-span-5 rounded-2xl overflow-hidden relative group bg-gray-100">
                          <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Art" />
                      </div>
                      
                      {/* Item 6: Tall-ish (Laptop) */}
                      <div className="col-span-3 rounded-2xl overflow-hidden relative group bg-gray-100">
                          <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Work" />
                      </div>
                  </div>

                  {/* Bottom Toolbar Pill - Floating 3D */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 translate-z-20 flex gap-2 bg-white/90 backdrop-blur-xl rounded-full shadow-2xl shadow-purple-900/10 border border-white/50 p-2 px-3 z-30">
                      <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors"><ImageIcon size={18} /></button>
                      <button className="w-10 h-10 rounded-full hover:bg-gray-100 text-gray-400 flex items-center justify-center transition-colors"><Video size={18} /></button>
                      <button className="w-10 h-10 rounded-full hover:bg-gray-100 text-gray-400 flex items-center justify-center transition-colors"><LinkIcon size={18} /></button>
                      <button className="w-10 h-10 rounded-full hover:bg-gray-100 text-gray-400 flex items-center justify-center transition-colors"><Type size={18} /></button>
                  </div>

                  {/* Decorative Background Glows */}
                  <div className="absolute -inset-20 bg-gradient-to-tr from-orange-100/40 via-pink-100/40 to-blue-100/40 rounded-[3rem] blur-3xl -z-10 transform translate-z-[-50px]"></div>
              </MotionDiv>
           </div>
        </div>
      </div>
    </section>
  );
};

export default CreatingSection;
    