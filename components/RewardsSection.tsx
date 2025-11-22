
import React from 'react';

const RewardsSection: React.FC = () => {
  return (
    <section className="pb-12 pt-12 md:pt-16 bg-[#F8FAFC] relative">
      <div className="max-w-2xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Coming Soon Pill */}
        <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-200/60 text-xs font-medium text-gray-500 shadow-[0_2px_10px_rgba(0,0,0,0.02)] mb-8">
          Coming soon
        </div>

        {/* Description Text */}
        <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium mb-10">
          We’re experimenting with a new kind of reward system—one that values presence over performance. Early hosts on the public testnet will quietly unlock more than just access.
        </p>

        {/* CTA Button */}
        <button className="bg-[#1a1a1a] text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-black hover:scale-105 transition-all duration-300 shadow-lg shadow-gray-200">
          Download hosting app
        </button>

        {/* Subtext */}
        <p className="mt-4 text-xs font-medium text-gray-400">
          Rewards require active hosting.
        </p>
      </div>
    </section>
  );
};

export default RewardsSection;
