import React from 'react';

function formatIDR(value) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);
}

const plans = [
  {
    name: 'Personal',
    price: 149000,
    tagline: '1 site license',
    features: ['All widgets', 'Auto refresh', 'Basic layouts', 'Email support']
  },
  {
    name: 'Professional',
    price: 299000,
    tagline: '3 sites license',
    features: ['Everything in Personal', 'Advanced filters', 'Pro layouts', 'Priority support'],
    highlight: true
  },
  {
    name: 'Agency',
    price: 699000,
    tagline: '10 sites license',
    features: ['Everything in Pro', 'White-label', 'Multisite ready', 'Lifetime updates']
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Simple pricing in Rupiah</h2>
          <p className="mt-3 text-neutral-600">Choose a plan that fits your WordPress footprint. Pay securely in IDR.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative rounded-2xl p-6 border ${plan.highlight ? 'border-neutral-900 bg-white shadow-lg' : 'border-black/5 bg-white'} flex flex-col`}>
              {plan.highlight && (
                <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-neutral-900 text-white text-xs px-2 py-1">Best value</span>
              )}
              <h3 className="text-lg font-medium text-neutral-900">{plan.name}</h3>
              <p className="mt-1 text-sm text-neutral-600">{plan.tagline}</p>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-neutral-900">{formatIDR(plan.price)}</span>
                <span className="text-sm text-neutral-500">/year</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-neutral-700">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />{f}</li>
                ))}
              </ul>
              <a href="https://buy.stripe.com" target="_blank" rel="noreferrer" className={`mt-6 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition ${plan.highlight ? 'bg-neutral-900 text-white hover:bg-neutral-800' : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'}`}>Get {plan.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
