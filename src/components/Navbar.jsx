import React from 'react';
import { Rocket, ExternalLink } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white"><Rocket size={18} /></span>
          <span className="text-lg tracking-tight">News Stream Pro</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition">Features</a>
          <a href="#pricing" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition">Pricing</a>
          <a href="https://demo.news-stream.pro" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition">
            Live Demo <ExternalLink size={16} />
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#pricing" className="hidden sm:inline-flex items-center rounded-full border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition">Get Started</a>
        </div>
      </div>
    </header>
  );
}
