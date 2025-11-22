import React from 'react';
import { CheckCircle2, Plus } from 'lucide-react';

const StorageItem: React.FC<{ name: string; color: string }> = ({ name, color }) => (
  <div className="flex items-center gap-3 text-lg font-semibold text-gray-700">
    <div className={`w-5 h-5 rounded-sm bg-current opacity-20 ${color}`}></div> {/* Placeholder Icon */}
    <span>{name}</span>
    <CheckCircle2 size={18} className="text-green-500 fill-green-100" />
  </div>
);

const DecentralizedStorage: React.FC = () => {
  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-brand-dark mb-6">
          Everything you upload is stored<br/>
          securely on the <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">decentralized web.</span>
        </h2>
        
        <p className="text-gray-500 mb-16">
          What you share stays yours—accessible, resilient, and free from gatekeepers. Stored across the decentralized web, built to last.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
           <div className="flex flex-col gap-4 items-start pl-8 md:pl-20">
              <StorageItem name="IPFS" color="text-teal-500" />
              <StorageItem name="Filecoin" color="text-blue-500" />
              <StorageItem name="Arweave" color="text-gray-800" />
              <StorageItem name="Irys" color="text-green-500" />
           </div>
           
           <div className="relative h-48 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center">
              <Plus className="text-gray-300" size={32} />
              <span className="absolute bottom-4 text-xs text-gray-400">Add your own gateway</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default DecentralizedStorage;