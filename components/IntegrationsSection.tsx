import React from 'react';
import { Github, Youtube, Instagram, Twitter, Twitch, Dribbble, Linkedin, Facebook } from 'lucide-react';

const IntegrationIcon: React.FC<{ Icon: React.ElementType; color: string; x: string; y: string }> = ({ Icon, color, x, y }) => (
  <div 
    className="absolute w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 cursor-pointer border border-gray-50"
    style={{ left: x, top: y }}
  >
    <Icon size={24} color={color} />
  </div>
);

const IntegrationsSection: React.FC = () => {
  return (
    <section className="py-24 overflow-hidden relative bg-white">
      <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
         <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
           Bring it all together in<br/>
           <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">one simple link.</span>
         </h2>
         <p className="text-sm text-gray-500 mb-12 uppercase tracking-wide">Showcase what matters to you most</p>

         {/* Radial Layout */}
         <div className="relative h-[400px] w-full max-w-[600px] mx-auto flex items-center justify-center">
            {/* Central Button */}
            <button className="z-20 bg-gray-900 text-white px-8 py-3 rounded-full text-sm font-bold shadow-xl hover:scale-105 transition-transform">
              Create your Portrait
            </button>

            {/* Decorative Lines */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
               <div className="w-[500px] h-[500px] border border-gray-900 rounded-full border-dashed"></div>
               <div className="absolute w-[300px] h-[300px] border border-gray-900 rounded-full border-dashed"></div>
            </div>

            {/* Floating Icons - Positioned absolutely */}
            <IntegrationIcon Icon={Github} color="#333" x="80%" y="20%" />
            <IntegrationIcon Icon={Youtube} color="#FF0000" x="80%" y="60%" />
            <IntegrationIcon Icon={Instagram} color="#E1306C" x="70%" y="10%" />
            <IntegrationIcon Icon={Twitter} color="#1DA1F2" x="70%" y="80%" />
            <IntegrationIcon Icon={Twitch} color="#9146FF" x="20%" y="25%" />
            <IntegrationIcon Icon={Dribbble} color="#EA4C89" x="15%" y="60%" />
            <IntegrationIcon Icon={Linkedin} color="#0077B5" x="30%" y="80%" />
            <IntegrationIcon Icon={Facebook} color="#1877F2" x="10%" y="40%" />
            
            {/* Dotted lines connecting to center */}
            <svg className="absolute inset-0 w-full h-full -z-10 stroke-gray-200 pointer-events-none">
               <line x1="50%" y1="50%" x2="80%" y2="20%" strokeDasharray="4" />
               <line x1="50%" y1="50%" x2="20%" y2="25%" strokeDasharray="4" />
               <line x1="50%" y1="50%" x2="15%" y2="60%" strokeDasharray="4" />
               <line x1="50%" y1="50%" x2="70%" y2="80%" strokeDasharray="4" />
            </svg>
         </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;