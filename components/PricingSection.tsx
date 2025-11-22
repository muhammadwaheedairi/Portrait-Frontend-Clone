import React from 'react';
import { Globe, Star, FlaskConical, MessageCircle } from 'lucide-react';

const Feature: React.FC<{ icon: React.ReactNode; bg: string; title: string; desc: string }> = ({ icon, bg, title, desc }) => (
  <div className="flex flex-col items-center">
     <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-4`}>
        {icon}
     </div>
     <h4 className="font-bold text-lg mb-2">{title}</h4>
     <p className="text-sm text-gray-500 leading-relaxed max-w-xs">{desc}</p>
  </div>
);

const PricingSection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl border border-gray-100 p-8 md:p-16 text-center relative overflow-hidden">
         {/* Top Badge */}
         <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-tr from-teal-400 via-blue-500 to-purple-500 rounded-2xl rotate-45 flex items-center justify-center shadow-lg">
            <div className="-rotate-45 text-white">
               <Star fill="white" size={28} />
            </div>
         </div>

         <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Plus +</h2>
         <p className="text-gray-500 max-w-lg mx-auto mb-12">
           With Plus, you are helping build a more free, open internet. Get early access to new features, unlock customization perks, and be part of the future of digital identity.
         </p>

         <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Feature 
              icon={<Globe className="text-blue-500" />} 
              bg="bg-blue-50"
              title="Link your domain" 
              desc="Use your own custom domain to point directly to your Portrait."
            />
            <Feature 
              icon={<div className="w-5 h-5 bg-orange-400 rounded-full flex items-center justify-center text-white text-[10px] font-bold">★</div>} 
              bg="bg-orange-50"
              title="Plus badge" 
              desc="Show your support with a badge on your Portrait. Subtle, timeless."
            />
            <Feature 
              icon={<FlaskConical className="text-green-500" />} 
              bg="bg-green-50"
              title="Early access" 
              desc="Be the first to try new features, design updates, and experimental tools."
            />
            <Feature 
              icon={<MessageCircle className="text-pink-500" />} 
              bg="bg-pink-50"
              title="Chat with Founders" 
              desc="Get direct access to the team. Ask questions, share ideas."
            />
         </div>

         <div className="font-serif italic text-2xl text-gray-800 mb-6">$10/month</div>
         
         <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
           Get Plus +
         </button>
      </div>
    </section>
  );
};

export default PricingSection;