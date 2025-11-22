import React from 'react';
import { Plus, ArrowUpRight } from 'lucide-react';

const ValueCard: React.FC<{ title: string; desc: string; img: string }> = ({ title, desc, img }) => (
  <div className="group relative h-[400px] rounded-3xl overflow-hidden text-left bg-gray-100">
     <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
     <div className="absolute inset-0 bg-gradient-to-b from-gray-900/10 to-gray-900/40"></div>
     
     <div className="absolute top-8 left-8 right-8 z-10">
        <h3 className="text-2xl font-bold text-white mb-2 mix-blend-hard-light drop-shadow-md">{title}</h3>
        <p className="text-white/90 font-medium leading-snug drop-shadow-md">{desc}</p>
     </div>

     <button className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/40 transition-colors">
       <Plus size={20} />
     </button>
  </div>
);

const ValueProps: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
         <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-16">
           Designed for anyone.<br/>
           Open to the <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">world.</span>
         </h2>

         <div className="grid md:grid-cols-3 gap-6">
            <ValueCard 
              title="Unbreakable, truly yours."
              desc="Your data is yours, secured by aerospace-grade cryptography."
              img="/hand.png"
            />
            <ValueCard 
              title="Lightweight, by design."
              desc="Easy to use, easy to host. No servers required. Just you."
              img="bird.png"
            />
            <ValueCard 
              title="Built on protocols, not platforms."
              desc="Open source, open standards. No vendor lock-in. Open Internet Protocol."
              img="hand2.png"
            />
         </div>

         <div className="mt-12 text-xs text-gray-400">
           <p className="mb-4">Portrait is built on top of the Open Internet Protocol (OIP),<br/>a decentralized protocol designed for social applications.</p>
           <button className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors">
             Learn more about the Open Internet Protocol <ArrowUpRight size={12}/>
           </button>
         </div>
      </div>
    </section>
  );
};

export default ValueProps;