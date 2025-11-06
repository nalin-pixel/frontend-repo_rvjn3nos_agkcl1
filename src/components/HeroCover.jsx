import React from 'react';
import Spline from '@splinetool/react-spline';

function HeroCover() {
  return (
    <section className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96">
      <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-white/10" />
    </section>
  );
}

export default HeroCover;
