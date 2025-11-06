import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600">© {new Date().getFullYear()} News Stream Pro. All rights reserved.</p>
        <div className="text-sm text-neutral-600 flex items-center gap-4">
          <a href="#features" className="hover:text-neutral-900">Features</a>
          <a href="#pricing" className="hover:text-neutral-900">Pricing</a>
          <a href="https://demo.news-stream.pro" target="_blank" rel="noreferrer" className="hover:text-neutral-900">Live Demo</a>
        </div>
      </div>
    </footer>
  );
}
