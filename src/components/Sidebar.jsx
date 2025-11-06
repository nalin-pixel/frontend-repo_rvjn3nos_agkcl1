import React from 'react';
import { ShoppingCart, Package, History, Truck, Users, Building2, CreditCard, Receipt, Wallet } from 'lucide-react';

const items = [
  { key: 'cart', icon: ShoppingCart, label: 'Cart' },
  { key: 'item', icon: Package, label: 'Item' },
  { key: 'history', icon: History, label: 'History' },
  { key: 'incoming', icon: Truck, label: 'Incoming Item' },
  { key: 'member', icon: Users, label: 'Member' },
  { key: 'supplier', icon: Building2, label: 'Supplier' },
  { key: 'credit', icon: CreditCard, label: 'Credit' },
  { key: 'spending', icon: Receipt, label: 'Spending' },
  { key: 'receivable', icon: Wallet, label: 'Receivable' },
];

export default function Sidebar({ active, onChange }) {
  return (
    <aside className="fixed left-0 top-0 h-screen w-16 bg-white/80 backdrop-blur border-r border-gray-200 flex flex-col items-center py-4 gap-3">
      {items.map(({ key, icon: Icon, label }) => (
        <button
          key={key}
          aria-label={label}
          onClick={() => onChange(key)}
          className={`flex items-center justify-center w-10 h-10 rounded-xl transition-colors ${
            active === key ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'
          }`}
          title={label}
        >
          <Icon size={20} />
        </button>
      ))}
    </aside>
  );
}
