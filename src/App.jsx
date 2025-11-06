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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <Navbar appName="POS Lite" userName="John Doe" />

      {/* Compact sidebar */}
      <Sidebar active={active} onChange={setActive} />

      {/* Main content area shifted for sidebar */}
      <main className="pl-16">
        <div className="max-w-7xl mx-auto p-6">
          {/* POS views only (hero removed) */}
          <ContentSwitcher active={active} />
        </div>
      </main>

      {/* Floating Add button - hidden on Cart and History */}
      {showFab && (
        <button
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gray-900 text-white shadow-lg flex items-center justify-center hover:bg-black"
          aria-label="Add"
          title="Add"
        >
          <Plus size={22} />
        </button>
      )}
    </div>
  );
}
