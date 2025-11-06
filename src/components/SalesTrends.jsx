import React from 'react';

function Line({ color = '#0ea5e9', points = [] }) {
  const d = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`)
    .join(' ');
  return <path d={d} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />;
}

export default function SalesTrends() {
  // simple sparkline data
  const width = 640;
  const height = 200;
  const padding = 24;
  const xs = Array.from({ length: 12 }, (_, i) => padding + (i * (width - padding * 2)) / 11);
  const ys = [120, 90, 130, 110, 150, 140, 170, 160, 190, 170, 210, 200];
  const points = xs.map((x, i) => [x, height - ys[i] + 20]);

  return (
    <section className="rounded-2xl bg-white p-5 ring-1 ring-slate-200 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-semibold text-slate-900">Sales Trends</h3>
        <div className="text-xs text-slate-500">Last 12 periods</div>
      </div>
      <div className="relative">
        <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}> 
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polyline
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="1"
            points={`${padding},20 ${padding},${height - 20} ${width - padding},${height - 20}`}
          />
          <path
            d={`M ${points[0][0]} ${points[0][1]} ${points.map((p) => `L ${p[0]} ${p[1]}`).join(' ')} L ${points[points.length - 1][0]} ${height - 20} L ${points[0][0]} ${height - 20} Z`}
            fill="url(#grad)"
          />
          <Line color="#0284c7" points={points} />
        </svg>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-slate-600">
        <div className="rounded-lg bg-slate-50 px-3 py-2">Avg Order: $19.2</div>
        <div className="rounded-lg bg-slate-50 px-3 py-2">Conversion: 3.1%</div>
        <div className="rounded-lg bg-slate-50 px-3 py-2">Refund Rate: 0.6%</div>
      </div>
    </section>
  );
}
