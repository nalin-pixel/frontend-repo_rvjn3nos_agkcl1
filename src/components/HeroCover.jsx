import React from 'react';
import Spline from '@splinetool/react-spline';

function HeroCover() {
  return (
    <section className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96">
      <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-white/10" />
      <div className="pointer-events-none absolute inset-0 flex items-end">
        <div className="mx-auto max-w-7xl w-full px-4 pb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-800">Point of Sale Dashboard</h1>
          <p className="text-slate-600 text-sm md:text-base">Modern, fast, and easy to use</p>
        </div>
      </div>
    </section>
  );
}

export default HeroCover;
