import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ContentSwitcher from './components/ContentSwitcher';
import { Plus } from 'lucide-react';

export default function App() {
  const [active, setActive] = useState('cart');

  const hideFabOn = useMemo(() => new Set(['cart', 'history']), []);
  const showFab = !hideFabOn.has(active);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <Navbar appName="POS Lite" userName="John Doe" />

      <Sidebar active={active} onChange={setActive} />

      <main className="pl-16">
        <div className="max-w-7xl mx-auto p-6 space-y-6">
          {/* Main views */}
          <ContentSwitcher active={active} />
        </div>
      </main>

      {showFab && (
        <button
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-slate-900 text-white shadow-lg flex items-center justify-center hover:bg-black"
          aria-label="Add"
          title="Add"
        >
          <Plus size={22} />
        </button>
      )}
    </div>
  );
}
