import React, { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import ContentSwitcher from './components/ContentSwitcher';
import { Plus } from 'lucide-react';

export default function App() {
  const [active, setActive] = useState('cart');
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  const hideFabOn = useMemo(() => new Set(['cart', 'history']), []);
  const showFab = !hideFabOn.has(active);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-slate-900 text-gray-900 dark:text-slate-100">
      <Navbar appName="POS Lite" userName="John Doe" theme={theme} onToggleTheme={toggleTheme} />

      <Sidebar active={active} onChange={setActive} />

      <main className="pl-16">
        <div className="max-w-7xl mx-auto p-6 space-y-6">
          {/* Full-width dark cover hero with Spline */}
          <Hero />

          {/* POS views */}
          <ContentSwitcher active={active} />
        </div>
      </main>

      {showFab && (
        <button
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gray-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-lg flex items-center justify-center hover:bg-black dark:hover:bg-white"
          aria-label="Add"
          title="Add"
        >
          <Plus size={22} />
        </button>
      )}
    </div>
  );
}
