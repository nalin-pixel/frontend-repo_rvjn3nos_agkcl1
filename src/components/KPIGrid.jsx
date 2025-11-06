import React from 'react';
import { CircleDollarSign, ShoppingCart, Users, Package } from 'lucide-react';

const cards = [
  {
    title: 'Today Revenue',
    value: '$2,840',
    change: '+12.3% vs yesterday',
    icon: CircleDollarSign,
    accent: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  },
  {
    title: 'Orders',
    value: '147',
    change: '+6.1% today',
    icon: ShoppingCart,
    accent: 'bg-sky-50 text-sky-700 ring-sky-200',
  },
  {
    title: 'Active Members',
    value: '1,284',
    change: '+2.0% this week',
    icon: Users,
    accent: 'bg-indigo-50 text-indigo-700 ring-indigo-200',
  },
  {
    title: 'Low Stock',
    value: '23',
    change: 'items below threshold',
    icon: Package,
    accent: 'bg-amber-50 text-amber-700 ring-amber-200',
  },
];

export default function KPIGrid() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map(({ title, value, change, icon: Icon, accent }) => (
        <div
          key={title}
          className="rounded-2xl bg-white p-5 ring-1 ring-slate-200 shadow-sm"
        >
          <div className="flex items-start justify-between">
            <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ${accent}`}>
              <Icon className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">{value}</div>
          <div className="mt-1 text-sm text-slate-500">{title}</div>
          <div className="mt-3 text-xs text-slate-400">{change}</div>
        </div>
      ))}
    </section>
  );
}
