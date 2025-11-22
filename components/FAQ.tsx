'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionDiv = motion.div as any;

const faqs = [
  { q: "What is Portrait?", a: "Portrait is a new kind of personal site—fully yours, decentralized, and designed for self-expression." },
  { q: "Is this a social network?", a: "No, it's a network of personal sites. No algorithmic feed, just direct connections." },
  { q: "Do I need to know crypto or blockchains to use Portrait?", a: "Not at all. We handle the complexity so you can focus on creating." },
  { q: "How do I get started?", a: "Simply sign up, claim your name, and start building your space." },
  { q: "How much does it cost?", a: "Basic features are free forever. Plus costs $10/month." },
  { q: "Why does it cost $10 to create a Portrait?", a: "The fee supports the network and prevents spam, ensuring a high-quality community." },
  { q: "Where is my Portrait stored?", a: "On the decentralized web using protocols like IPFS and Arweave." },
  { q: "How do I host someone?", a: "Download our desktop app and click 'Host' on profiles you want to support." },
  { q: "If no one is hosting me, will my Portrait go offline?", a: "We ensure redundancy, but the more peers host you, the more resilient your site becomes." },
  { q: "Can I use my own domain?", a: "Yes, Plus members can link custom domains easily." },
];

const rightFaqs = [
  { q: "Is my Portrait really mine?", a: "Yes. You own your data and your identity keys." },
  { q: "Can I use Portrait for my business or as a creator?", a: "Absolutely. It's perfect for portfolios and professional identities." },
  { q: "Is Portrait censorship-resistant?", a: "Yes, due to its decentralized architecture." },
  { q: "What is the Open Internet Protocol?", a: "It's the underlying standard enabling decentralized social graphs." },
  { q: "Is this open source?", a: "Yes, our core protocols and clients are open source." },
  { q: "Will there be a token?", a: "We are exploring rewards, but our focus is on utility first." },
  { q: "Where is Portrait deployed?", a: "Globally across thousands of nodes." },
  { q: "When is mainnet launch?", a: "We are currently in public testnet." },
  { q: "When do rewards start?", a: "Rewards for hosting will begin in the next phase." },
  { q: "How do I get support?", a: "Join our Discord or email support@portrait.so." },
];

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100">
       <button 
         className="w-full py-4 flex items-center justify-between text-left hover:text-gray-600 transition-colors"
         onClick={() => setIsOpen(!isOpen)}
       >
         <span className="font-medium text-sm md:text-base text-gray-800 pr-4">{q}</span>
         <ChevronDown size={16} className={`transform transition-transform duration-200 text-gray-400 ${isOpen ? 'rotate-180' : ''}`} />
       </button>
       <AnimatePresence>
         {isOpen && (
           <MotionDiv 
             initial={{ height: 0, opacity: 0 }}
             animate={{ height: 'auto', opacity: 1 }}
             exit={{ height: 0, opacity: 0 }}
             className="overflow-hidden"
           >
             <p className="pb-4 text-sm text-gray-500 leading-relaxed">{a}</p>
           </MotionDiv>
         )}
       </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-16">Frequently asked questions</h2>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
           <div className="space-y-4">
             {faqs.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} />)}
           </div>
           <div className="space-y-4">
             {rightFaqs.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} />)}
           </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;