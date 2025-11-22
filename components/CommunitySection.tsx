'use client';

import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

// Define profiles with specific colors and images to match the aesthetic
const profiles = [
  { 
    id: 1, 
    name: 'Julian', 
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', 
    color: 'bg-amber-600', 
    text: 'text-amber-600' 
  },
  { 
    id: 2, 
    name: 'Naomi', 
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80', 
    color: 'bg-pink-500', 
    text: 'text-pink-500' 
  },
  { 
    id: 3, 
    name: 'Sarah', 
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80', 
    color: 'bg-teal-600', 
    text: 'text-teal-600' 
  },
  { 
    id: 4, 
    name: 'Aldous', 
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=200&q=80', 
    color: 'bg-orange-400', 
    text: 'text-orange-400' 
  },
  { 
    id: 5, 
    name: 'Kaz', 
    image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=200&q=80', 
    color: 'bg-purple-500', 
    text: 'text-purple-500' 
  },
  { 
    id: 6, 
    name: 'Marco', 
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80', 
    color: 'bg-indigo-600', 
    text: 'text-indigo-600' 
  },
  { 
    id: 7, 
    name: 'Rory', 
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', 
    color: 'bg-blue-500', 
    text: 'text-blue-500' 
  },
];

const MotionDiv = motion.div as any;

const CommunitySection: React.FC = () => {
  // Initialize as null so no name shows by default
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 bg-white text-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Interactive Fan of Cards */}
        <div className="relative h-40 md:h-48 max-w-4xl mx-auto mb-16 flex justify-center items-center">
          {profiles.map((profile, i) => {
            const isActive = activeId === profile.id;
            
            // Calculate fan positioning
            const rotation = (i - 3) * 5; // -15, -10, -5, 0, 5, 10, 15 degrees
            const translateY = Math.abs(i - 3) * 8; // Arc effect
            const zIndex = isActive ? 50 : 10 - Math.abs(i - 3); // Active pops to top, otherwise layered from center

            return (
              <MotionDiv 
                key={profile.id}
                layout
                className={cn(
                    "absolute w-24 h-28 md:w-32 md:h-40 bg-white rounded-2xl shadow-lg border-2 p-1 cursor-pointer transition-all duration-300 ease-out",
                    isActive ? "border-gray-200 scale-110 z-50" : "border-gray-100 hover:scale-105 hover:z-40"
                )}
                style={{
                  // We use standard style for rotation to avoid complex framer layout interactions that might jitter
                  left: `calc(50% + ${(i - 3) * 75}px - 64px)`, // Spacing
                  top: 0,
                  rotate: rotation,
                  y: translateY,
                  zIndex: zIndex,
                }}
                onClick={() => setActiveId(isActive ? null : profile.id)} // Toggle: Click again to close, or click another to switch
                whileHover={{ scale: isActive ? 1.1 : 1.05, zIndex: isActive ? 50 : 40 }}
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-100">
                    <img 
                        src={profile.image} 
                        alt={profile.name} 
                        className="w-full h-full object-cover" 
                    />
                    
                    {/* Name Pill Overlay (Only visible when active) */}
                    <div className={cn(
                        "absolute inset-0 flex items-center justify-center bg-black/10 transition-opacity duration-200",
                        isActive ? "opacity-100" : "opacity-0"
                    )}>
                        <motion.div 
                           initial={{ scale: 0.8, opacity: 0 }}
                           animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                           className={cn(
                               "flex items-center gap-1.5 pl-3 pr-1.5 py-1.5 rounded-full shadow-xl",
                               profile.color
                           )}
                        >
                            <span className="text-white font-bold text-sm">{profile.name}</span>
                            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                                <ArrowUpRight size={14} className={cn("stroke-[3px]", profile.text)} />
                            </div>
                        </motion.div>
                    </div>
                </div>
              </MotionDiv>
            );
          })}
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-8">
          Not a feed. Not a social network. A Portrait.
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-brand-dark mb-8 tracking-tight">
          Finally, a place on the<br />
          internet that <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 pr-2">feels like you.</span>
        </h2>

        <button className="bg-[#1a1a1a] text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-black transition-all hover:scale-105 shadow-xl shadow-gray-200 mb-8">
          Join 3,631+ others
        </button>
        
        <p className="text-sm text-gray-500 font-medium">Your Portrait is your own space on the internet.</p>
      </div>
    </section>
  );
};

export default CommunitySection;