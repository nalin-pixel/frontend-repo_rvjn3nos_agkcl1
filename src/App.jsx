import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import ContentSwitcher from './components/ContentSwitcher';
import { Plus } from 'lucide-react';

export default function App() {
  const [active, setActive] = useState('cart');

  const showFab = active !== 'cart' && active !== 'history';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      {/* Compact, flush sidebar */}
      <Sidebar active={active} onChange={setActive} />

      {/* Main area shifted to account for sidebar width */}
      <main className="pl-16">
        <div className="max-w-7xl mx-auto p-6 space-y-6">
          {/* Top hero without extra animations */}
          <Hero />

          {/* Switched content per menu */}
          <ContentSwitcher active={active} />
        </div>
      </main>

      {/* Floating Action Button on all except Cart and History */}
      {showFab && (
        <button
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gray-900 text-white shadow-lg flex items-center justify-center hover:bg-black"
          aria-label="Action"
        >
          <Plus size={22} />
        </button>
      )}
    </div>
  );
}
