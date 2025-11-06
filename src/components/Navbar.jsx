import React from 'react';

function Navbar({ appName = 'POS Lite', userName = 'Cashier' }) {
  return (
    <header className="w-full bg-white/80 backdrop-blur sticky top-0 z-30 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 h-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-indigo-600 text-white text-xs font-bold">P</span>
          <span className="font-semibold text-slate-800">{appName}</span>
        </div>
        <div className="text-sm text-slate-600">{userName}</div>
      </div>
    </header>
  );
}

export default Navbar;
