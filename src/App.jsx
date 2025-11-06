import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
    </div>
  );
}

export default App;
