import React from 'react';
import CartView from './CartView';

function HistoryView() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <div className="text-sm text-gray-500">Recent transactions will appear here.</div>
    </div>
  );
}

function ProductsView() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <div className="text-sm text-gray-500">Manage products here.</div>
    </div>
  );
}

function SettingsView() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <div className="text-sm text-gray-500">Adjust preferences here.</div>
    </div>
  );
}

export default function ContentSwitcher({ active }) {
  if (active === 'cart') return <CartView />;
  if (active === 'history') return <HistoryView />;
  if (active === 'products') return <ProductsView />;
  if (active === 'settings') return <SettingsView />;
  return null;
}
