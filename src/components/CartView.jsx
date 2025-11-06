import React, { useState } from 'react';
import { Plus, X, Save, Printer } from 'lucide-react';

export default function CartView() {
  const [tab, setTab] = useState('T1');
  const tabs = ['T1', 'T2', 'T3'];

  return (
    <div className="space-y-4">
      {/* Tabs row with add button */}
      <div className="flex items-center gap-2">
        <div className="flex rounded-xl border border-gray-200 bg-white p-1">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                tab === t ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <button className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gray-900 text-white hover:bg-black">
          <Plus size={18} />
        </button>
      </div>

      {/* Smaller inputs per request */}
      <div className="grid grid-cols-3 gap-3">
        <input className="h-8 w-full rounded-lg border border-gray-300 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/20" placeholder="Barcode" />
        <input className="h-8 w-full rounded-lg border border-gray-300 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/20" placeholder="Customer" />
        <input className="h-8 w-full rounded-lg border border-gray-300 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/20" placeholder="Notes" />
      </div>

      {/* Cart list placeholder */}
      <div className="rounded-2xl border border-gray-200 bg-white p-4">
        <div className="flex items-center text-sm text-gray-500 pb-2 border-b">Items</div>
        <div className="py-6 text-gray-400 text-sm">Scan items to add them to the cart.</div>
      </div>

      {/* Vertical action buttons */}
      <div className="flex gap-3">
        <div className="flex flex-col gap-2">
          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-100 text-gray-800 px-4 h-10 hover:bg-gray-200">
            <X size={16} /> Cancel
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 text-white px-4 h-10 hover:bg-black">
            <Save size={16} /> Save
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-gray-200 text-gray-800 px-4 h-10 hover:bg-gray-50">
            <Printer size={16} /> Print
          </button>
        </div>
      </div>
    </div>
  );
}
