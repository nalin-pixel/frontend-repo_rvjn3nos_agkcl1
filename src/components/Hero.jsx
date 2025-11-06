import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <div className="relative w-full h-72 rounded-2xl overflow-hidden border border-gray-200 bg-white">
      {/* Removed motion/animations per request; static 3D scene only */}
      <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
    </div>
  );
}
