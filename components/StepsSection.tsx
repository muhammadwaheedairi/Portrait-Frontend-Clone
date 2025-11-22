import React from 'react';
import { Image, Link as LinkIcon, Video, Type, Command } from 'lucide-react';

const StepsSection: React.FC = () => {
  return (
    <section className="py-20 max-w-5xl mx-auto px-6">
      <div className="space-y-24">
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
           <div className="flex-1 bg-gray-50 rounded-3xl p-8 w-full">
              <div className="grid grid-cols-3 gap-3 mb-6 opacity-50 grayscale">
                 <div className="h-20 bg-gray-200 rounded-lg col-span-1"></div>
                 <div className="h-20 bg-gray-200 rounded-lg col-span-2"></div>
                 <div className="h-24 bg-gray-200 rounded-lg col-span-2"></div>
                 <div className="h-24 bg-gray-200 rounded-lg col-span-1"></div>
              </div>
              <div className="flex justify-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600"><Image size={18}/></div>
                 <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600"><Video size={18}/></div>
                 <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600"><LinkIcon size={18}/></div>
                 <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600"><Type size={18}/></div>
              </div>
           </div>
           <div className="flex-1 space-y-4">
             <h3 className="text-2xl font-bold text-gray-900">Create your Portrait</h3>
             <p className="text-gray-600 leading-relaxed">
               Upload your work, organize your ideas and adventures, and build a personal canvas that's as unique as you.
             </p>
           </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
           <div className="flex-1 bg-gray-50 rounded-3xl p-8 w-full flex items-center justify-center min-h-[300px] relative overflow-hidden group">
               {/* Decorative Background */}
               <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 opacity-90"></div>
               <div className="relative z-10 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 transform transition-transform group-hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-tr from-blue-400 to-cyan-300 rounded-xl flex items-center justify-center">
                    <div className="w-10 h-10 border-4 border-white rounded-lg"></div>
                  </div>
                  <div>
                    <div className="h-2 w-20 bg-gray-100 rounded mb-2"></div>
                    <div className="h-2 w-12 bg-gray-100 rounded"></div>
                  </div>
               </div>
           </div>
           <div className="flex-1 space-y-4">
             <h3 className="text-2xl font-bold text-gray-900">Download the app</h3>
             <p className="text-gray-600 leading-relaxed">
               Install the hosting app to start hosting, optimized for Mac and Windows, and open-source for all to verify.
             </p>
           </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
           <div className="flex-1 bg-gray-50 rounded-3xl p-8 w-full min-h-[300px] flex items-center justify-center">
              <div className="w-64 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
                 <div className="bg-gray-100 px-3 py-2 border-b border-gray-200 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-[10px] text-gray-500 font-medium ml-2">Mon Jun 10 9:41 AM</div>
                 </div>
                 <div className="p-2">
                   <div className="bg-blue-500 text-white text-xs p-1 px-2 rounded mb-1 flex justify-between">
                     <span>Sign in...</span>
                   </div>
                   <div className="space-y-1">
                     <div className="text-[10px] text-gray-600 px-2 py-0.5 flex justify-between"><span>Help</span><Command size={10}/></div>
                     <div className="h-px bg-gray-100 my-1"></div>
                     <div className="text-[10px] text-gray-600 px-2 py-0.5">Send feedback...</div>
                     <div className="text-[10px] text-gray-600 px-2 py-0.5">Check for updates...</div>
                     <div className="h-px bg-gray-100 my-1"></div>
                     <div className="text-[10px] text-gray-600 px-2 py-0.5 flex justify-between"><span>Quit</span><span>⌘Q</span></div>
                   </div>
                 </div>
              </div>
           </div>
           <div className="flex-1 space-y-4">
             <h3 className="text-2xl font-bold text-gray-900">Start hosting</h3>
             <p className="text-gray-600 leading-relaxed">
               Open the app, find a Portrait you care about, and click "Host" to help it stay alive on the network.
             </p>
           </div>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-20">
        <button className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
          Create your Portrait
        </button>
        <button className="bg-white text-gray-700 border border-gray-200 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
          Download app
        </button>
      </div>
    </section>
  );
};

export default StepsSection;