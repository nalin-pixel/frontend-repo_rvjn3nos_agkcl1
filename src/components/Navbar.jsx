import React from 'react';
import { Sun, Moon } from 'lucide-react';

function Navbar({ appName = 'POS Lite', userName = 'Cashier', theme = 'light', onToggleTheme }) {
  const isDark = theme === 'dark';
  return (
    <header className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur sticky top-0 z-30 border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 h-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-indigo-600 text-white text-xs font-bold">P</span>
          <span className="font-semibold text-slate-800 dark:text-slate-100">{appName}</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle dark mode"
            onClick={onToggleTheme}
            className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <div className="text-sm text-slate-600 dark:text-slate-300">{userName}</div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
