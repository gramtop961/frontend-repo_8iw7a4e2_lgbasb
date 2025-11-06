import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl pt-20 pb-28">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/60 backdrop-blur px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm">Elegant WordPress Plugin</span>
            <h1 className="mt-5 text-4xl sm:text-6xl font-semibold tracking-tight text-neutral-900 drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]">
              News Stream Pro
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-neutral-700 max-w-xl">
              Curate, stream, and display real-time news feeds on your WordPress site with beautiful, fast, and SEO-friendly widgets.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-full bg-neutral-900 text-white px-6 py-3 text-sm font-medium shadow hover:bg-neutral-800 transition">Get News Stream Pro</a>
              <a href="https://demo.news-stream.pro" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-white/70 backdrop-blur px-6 py-3 text-sm font-medium text-neutral-900 ring-1 ring-black/10 hover:bg-white transition">View Live Demo</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white" />
    </section>
  );
}
