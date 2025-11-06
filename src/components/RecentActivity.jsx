import React from 'react';
import { Receipt, ArrowUpRight, ArrowDownRight, UserPlus, Package, CreditCard } from 'lucide-react';

const items = [
  { id: 1, type: 'sale', title: 'Sale #INV-1843', amount: '+$62.40', time: '2m ago', icon: Receipt, color: 'text-emerald-600 bg-emerald-50 ring-emerald-200' },
  { id: 2, type: 'refund', title: 'Refund #INV-1821', amount: '-$12.00', time: '18m ago', icon: CreditCard, color: 'text-rose-600 bg-rose-50 ring-rose-200' },
  { id: 3, type: 'stock', title: 'Stock received (12)', amount: 'Supplier: Nova', time: '1h ago', icon: Package, color: 'text-amber-600 bg-amber-50 ring-amber-200' },
  { id: 4, type: 'member', title: 'New member added', amount: 'Jamie Lee', time: '3h ago', icon: UserPlus, color: 'text-indigo-600 bg-indigo-50 ring-indigo-200' },
];

export default function RecentActivity() {
  return (
    <section className="rounded-2xl bg-white p-5 ring-1 ring-slate-200 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-semibold text-slate-900">Recent Activity</h3>
        <button className="text-sm text-sky-700 hover:underline">View all</button>
      </div>
      <ul className="divide-y divide-slate-100">
        {items.map(({ id, title, amount, time, icon: Icon, color }) => (
          <li key={id} className="flex items-center gap-3 py-3">
            <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ${color}`}>
              <Icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-slate-800">{title}</div>
              <div className="text-xs text-slate-500">{time}</div>
            </div>
            <div className="text-sm font-medium text-slate-700">{amount}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
