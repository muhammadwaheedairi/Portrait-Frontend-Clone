'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/80 backdrop-blur-md border-b border-gray-100 py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-gray-900">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600"></div>
            Portrait
          </Link>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="#" className="hover:text-black transition-colors">Explore</Link>
            <Link href="#" className="hover:text-black transition-colors relative group">
              Points
              <span className="absolute -top-2 -right-6 bg-red-50 text-[10px] text-red-500 px-1.5 py-0.5 rounded-full border border-red-100 uppercase tracking-wide font-bold scale-75 origin-left">New!</span>
            </Link>
            <Link href="#" className="hover:text-black transition-colors">About</Link>
            <Link href="#" className="hover:text-black transition-colors">Blog</Link>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
            Login
          </button>
          <button className="relative group p-[1px] rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">
            <span className="block px-4 py-2 bg-white rounded-full text-sm font-bold transition-colors group-hover:bg-opacity-90 text-gray-900">
              Sign up
            </span>
          </button>
        </div>

        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="text-gray-600 p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-5">
          <Link href="#" className="text-gray-600 font-medium p-2">Explore</Link>
          <Link href="#" className="text-gray-600 font-medium p-2">Points</Link>
          <Link href="#" className="text-gray-600 font-medium p-2">About</Link>
          <Link href="#" className="text-gray-600 font-medium p-2">Blog</Link>
          <div className="h-px bg-gray-100 my-2"></div>
          <button className="text-left text-gray-600 font-medium p-2">Login</button>
          <button className="bg-black text-white py-3 rounded-full font-medium w-full">Sign up</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;