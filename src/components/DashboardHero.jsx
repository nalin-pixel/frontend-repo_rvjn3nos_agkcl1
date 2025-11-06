import React from 'react';
import Spline from '@splinetool/react-spline';
import { ShieldCheck, User2 } from 'lucide-react';

export default function DashboardHero() {
  return (
    <section className="relative w-full overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 grid gap-6 p-6 md:grid-cols-2 lg:p-8">
        <div className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-200 backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5" />
            Verified Identity Suite
          </div>
          <h1 className="text-2xl font-semibold leading-tight text-slate-900 md:text-3xl">
            Smart POS Dashboard
          </h1>
          <p className="max-w-prose text-sm text-slate-600 md:text-base">
            Monitor sales, track inventory, and manage members at a glance. Real-time insights with a modern, vibrant 3D identity aesthetic.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <button className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-white shadow-sm transition hover:bg-slate-800">
              Go to POS
            </button>
            <button className="inline-flex items-center justify-center rounded-lg bg-white/80 px-4 py-2 text-slate-700 ring-1 ring-slate-200 transition hover:bg-white">
              View Reports
            </button>
          </div>
        </div>

        <div className="relative flex items-end justify-end">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
          <div className="relative z-10 inline-flex items-center gap-3 rounded-xl bg-white/80 px-4 py-3 text-slate-800 ring-1 ring-slate-200 backdrop-blur">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-600/10 text-sky-700 ring-1 ring-sky-200">
              <User2 className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500">Active cashier</div>
              <div className="text-sm font-medium">Alex Morgan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
