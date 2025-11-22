
import React from 'react';

const NetworkDiagram: React.FC = () => {
  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
       <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Top Badge */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-blue-100 text-xs font-medium text-blue-600/80 shadow-sm mb-8">
            Built on a network of people, not platforms.
          </div>
          
          {/* Headline */}
          <h2 className="text-5xl md:text-6xl font-bold text-brand-dark mb-8 tracking-tight leading-[1.1]">
            A global <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 pr-2">network</span> for your<br />
            identity, powered by people.
          </h2>

          {/* Subhead */}
          <p className="text-gray-500 max-w-2xl mx-auto mb-24 text-lg leading-relaxed font-medium">
            On social media, you follow each other, on Portrait you host<br className="hidden md:block" />
            each other—without relying on centralized platforms. This is<br className="hidden md:block" />
            how the web should have been—you're helping bring it back.
          </p>

          {/* Diagram Container */}
          <div className="relative w-full max-w-[900px] mx-auto h-[500px] md:h-[450px]">
             
             {/* SVG Connections Layer */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }}>
                {/* Dashed line from John to You */}
                <path d="M 20% 60% L 50% 60%" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="6 6" className="opacity-40" />
                
                {/* Dashed line from You to Peers */}
                {/* To Sophia */}
                <path d="M 50% 60% C 65% 60%, 65% 30%, 80% 30%" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="6 6" fill="none" />
                {/* To Anthony */}
                <path d="M 50% 60% C 65% 60%, 65% 45%, 80% 45%" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="6 6" fill="none" />
                {/* To Sarah */}
                <path d="M 50% 60% C 65% 60%, 65% 60%, 80% 60%" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="6 6" fill="none" />
                {/* To Emma (Active path) */}
                <path d="M 50% 60% C 65% 60%, 65% 75%, 80% 75%" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="6 6" fill="none" className="opacity-60" />
                {/* To James */}
                <path d="M 50% 60% C 65% 60%, 65% 90%, 80% 90%" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="6 6" fill="none" />
             </svg>

             {/* --- LEFT COLUMN (Requesters) --- */}
             <div className="absolute left-0 md:left-[5%] top-1/2 -translate-y-1/2 flex flex-col gap-5 w-48 items-end pr-4">
                {/* Ghost Nodes */}
                <div className="flex items-center gap-3 opacity-20">
                   <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                   <div className="h-2 w-16 bg-gray-300 rounded-full"></div>
                </div>
                <div className="flex items-center gap-3 opacity-20">
                   <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                   <div className="h-2 w-16 bg-gray-300 rounded-full"></div>
                </div>
                
                {/* Active Requester (John) */}
                <div className="flex items-center gap-3 relative z-10 pr-2">
                   <div className="h-8 px-4 bg-white border border-gray-200 rounded-full flex items-center justify-center text-sm font-medium text-gray-700 shadow-sm">
                      John
                   </div>
                   <div className="w-10 h-10 bg-white border border-gray-200 rounded-full p-0.5 shadow-sm flex-shrink-0">
                      <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=John&backgroundColor=b6e3f4" className="w-full h-full rounded-full" alt="John"/>
                   </div>
                </div>

                {/* Ghost Nodes */}
                <div className="flex items-center gap-3 opacity-20">
                   <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                   <div className="h-2 w-16 bg-gray-300 rounded-full"></div>
                </div>
                <div className="flex items-center gap-3 opacity-20">
                   <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                   <div className="h-2 w-16 bg-gray-300 rounded-full"></div>
                </div>
             </div>

             {/* --- ORANGE BUBBLE (Action) --- */}
             <div className="absolute left-[28%] top-[54%] -translate-y-1/2 z-20 hidden md:block">
                <div className="bg-[#FF9F43] text-white px-5 py-3 rounded-2xl rounded-bl-none shadow-lg shadow-orange-200 transform -translate-y-full">
                   <p className="text-xs font-bold leading-tight">
                     Requesting<br/>
                     Emma's Portrait
                   </p>
                </div>
             </div>

             {/* --- CENTER NODE (You) --- */}
             <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                {/* Tooltip Bubble */}
                <div className="absolute bottom-full mb-8 w-64 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-4 text-left z-30">
                    <p className="text-xs text-gray-600 leading-relaxed font-medium">
                        You and your peers store <strong className="text-gray-900">copies of each other's data</strong>, making it available to anyone on the internet.
                    </p>
                    {/* Arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-2 w-4 h-4 bg-white transform rotate-45 border-b border-r border-gray-100"></div>
                </div>

                {/* Main Avatar */}
                <div className="w-24 h-24 rounded-full p-1.5 bg-white shadow-2xl shadow-purple-100 border-2 border-white relative z-20">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" className="w-full h-full rounded-full object-cover" alt="You" />
                </div>
                <span className="mt-3 text-xs font-bold text-gray-400 uppercase tracking-widest">You</span>
             </div>

             {/* --- RIGHT COLUMN (Peers) --- */}
             <div className="absolute right-0 md:right-[5%] top-1/2 -translate-y-1/2 w-48 pl-4">
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-4 pl-2">Peers you host</p>
                <div className="flex flex-col gap-3">
                    <PeerItem name="Sophia" seed="Sophia" />
                    <PeerItem name="Anthony" seed="Anthony" />
                    <PeerItem name="Sarah" seed="Sarah" />
                    <PeerItem name="Emma" seed="Emma" active />
                    <PeerItem name="James" seed="James" />
                </div>
             </div>
          </div>

          {/* Active Status */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-green-200/50 rounded-full text-green-600 text-xs font-medium shadow-sm mt-8">
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
             </span>
             95 Portrait nodes active
          </div>
       </div>
    </section>
  );
};

const PeerItem = ({ name, seed, active }: { name: string, seed: string, active?: boolean }) => (
    <div className={`flex items-center gap-3 px-2 py-1.5 rounded-full bg-white border transition-all duration-300 ${active ? 'border-gray-200 shadow-md scale-105 ring-1 ring-gray-100' : 'border-transparent opacity-70 hover:opacity-100'}`}>
        <img src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${seed}&backgroundColor=e6e6e6`} className="w-8 h-8 rounded-full bg-gray-50" alt={name} />
        <span className={`text-sm font-medium ${active ? 'text-gray-900' : 'text-gray-500'}`}>{name}</span>
    </div>
);

export default NetworkDiagram;
