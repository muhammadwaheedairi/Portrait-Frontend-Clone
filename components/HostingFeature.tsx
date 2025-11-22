
import React from 'react';
import { Plus } from 'lucide-react';

const HostingFeature: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
       <div className="relative rounded-[2.5rem] overflow-hidden h-[400px] md:h-[500px] group">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Hosting" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
          
          <div className="absolute top-12 left-8 md:top-16 md:left-16 max-w-md text-white z-10">
             <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">Hosting is what makes<br/>Portrait different</h3>
             <p className="text-white/90 text-lg leading-relaxed font-medium">
               What if the internet wasn't made of platforms—but people, securing each other's data?
             </p>
          </div>

          <button className="absolute bottom-8 right-8 md:bottom-12 md:right-12 w-12 h-12 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors border border-white/20 z-10">
            <Plus size={24} />
          </button>
       </div>
    </section>
  );
};

export default HostingFeature;
