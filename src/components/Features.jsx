import React from 'react';
import { Zap, Shield, Gauge, Globe } from 'lucide-react';

const items = [
  {
    icon: Zap,
    title: 'Real‑time Streams',
    desc: 'Aggregate and display live news from multiple sources with instant updates and smart caching.'
  },
  { icon: Shield, title: 'SEO Friendly', desc: 'Clean markup, schema options, and lazy-loaded images keep your pages fast and discoverable.' },
  { icon: Gauge, title: 'Lightning Performance', desc: 'Vanilla JS front-end and CDN assets deliver under-100ms widget loads.' },
  { icon: Globe, title: 'Global Sources', desc: 'Support for RSS/ATOM/JSON with translation-ready UI and RTL layouts.' }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Designed for publishers</h2>
          <p className="mt-3 text-neutral-600">Everything you need to stream curated news into WordPress with style and reliability.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-black/5 p-6 bg-gradient-to-b from-white to-neutral-50 shadow-sm">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-white mb-4">
                <Icon size={18} />
              </div>
              <h3 className="font-medium text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
