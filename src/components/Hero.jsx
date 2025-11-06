import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent dark:from-slate-900/70" />
    </div>
  );
}
