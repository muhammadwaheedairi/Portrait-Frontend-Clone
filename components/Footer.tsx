import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-20">
           <div className="col-span-2">
             <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight mb-8">
                <div className="w-5 h-5 rounded-md border-2 border-gray-900"></div>
                Portrait
             </Link>
           </div>
           
           <div>
              <h4 className="font-bold text-sm mb-4">Resources</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                 <li><a href="#" className="hover:text-gray-900">Open Internet Protocol</a></li>
                 <li><a href="#" className="hover:text-gray-900">Brand Kit</a></li>
              </ul>
           </div>
           
           <div>
              <h4 className="font-bold text-sm mb-4">Developers</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                 <li><a href="#" className="hover:text-gray-900">GitHub</a></li>
                 <li><a href="#" className="hover:text-gray-900">Docs</a></li>
                 <li><a href="#" className="hover:text-gray-900">Smart Contracts</a></li>
              </ul>
           </div>
f64
           <div>
              <h4 className="font-bold text-sm mb-4">Downloads</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                 <li><a href="#" className="hover:text-gray-900">Portrait for Mac</a></li>
                 <li><a href="#" className="hover:text-gray-900">Portrait for Windows</a></li>
              </ul>
           </div>
           
           <div>
              <h4 className="font-bold text-sm mb-4">Socials</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                 <li><a href="#" className="hover:text-gray-900">X.com</a></li>
                 <li><a href="#" className="hover:text-gray-900">Farcaster</a></li>
                 <li><a href="#" className="hover:text-gray-900">Bluesky</a></li>
                 <li><a href="#" className="hover:text-gray-900">Discord</a></li>
              </ul>
           </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 pt-8 border-t border-gray-100">
           <div>© Portrait Technology Inc. 2025</div>
           <div className="flex items-center gap-6 mt-4 md:mt-0">
              <div className="flex items-center gap-1.5">
                 <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                 System status
              </div>
              <a href="#" className="hover:text-gray-600">Privacy</a>
              <a href="#" className="hover:text-gray-600">Terms</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;