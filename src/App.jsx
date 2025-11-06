import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import {
  CartView,
  ItemView,
  HistoryView,
  IncomingItemView,
  MemberView,
  SupplierView,
  CreditView,
  SpendingView,
  ReceivableView,
} from './components/POSViews';

const MENU = [
  { key: 'cart', label: 'Cart' },
  { key: 'item', label: 'Item' },
  { key: 'history', label: 'History' },
  { key: 'incoming', label: 'Incoming Item' },
  { key: 'member', label: 'Member' },
  { key: 'supplier', label: 'Supplier' },
  { key: 'credit', label: 'Credit' },
  { key: 'spending', label: 'Spending' },
  { key: 'receivable', label: 'Receivable' },
];

function App() {
  const [active, setActive] = useState('cart');

  const renderView = () => {
    switch (active) {
      case 'cart':
        return <CartView />;
      case 'item':
        return <ItemView />;
      case 'history':
        return <HistoryView />;
      case 'incoming':
        return <IncomingItemView />;
      case 'member':
        return <MemberView />;
      case 'supplier':
        return <SupplierView />;
      case 'credit':
        return <CreditView />;
      case 'spending':
        return <SpendingView />;
      case 'receivable':
        return <ReceivableView />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      <Navbar appName="POS App" userName="Alex" />

      <main className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex gap-6">
          <Sidebar items={MENU} activeKey={active} onSelect={setActive} />
          <div className="flex-1 min-w-0">
            {renderView()}
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-xs text-slate-400">© 2025 POS App</footer>
    </div>
  );
}

export default App;
