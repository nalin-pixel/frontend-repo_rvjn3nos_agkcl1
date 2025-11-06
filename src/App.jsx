import React from 'react';
import DashboardHero from './components/DashboardHero';
import KPIGrid from './components/KPIGrid';
import SalesTrends from './components/SalesTrends';
import RecentActivity from './components/RecentActivity';
import { User } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 antialiased">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-600 text-white shadow-sm">
                <span className="text-sm font-semibold">POS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-slate-900">Smart POS</span>
                <span className="text-xs text-slate-500">Dashboard</span>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-slate-700">
              <User className="h-4 w-4" />
              <span className="text-sm font-medium">Alex Morgan</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
        <DashboardHero />
        <KPIGrid />
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SalesTrends />
          </div>
          <div>
            <RecentActivity />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-4 pb-10 pt-4 text-center text-xs text-slate-400 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Smart POS. All rights reserved.
      </footer>
    </div>
  );
}
