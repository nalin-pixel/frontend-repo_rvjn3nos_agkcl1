import React from 'react';

function Tabs({ tabs, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 border-b border-slate-200">
      {tabs.map((t) => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className={
            'px-3 py-1.5 text-sm rounded-t border border-b-0 ' +
            (active === t.id
              ? 'bg-white text-indigo-600 border-slate-200 shadow'
              : 'bg-slate-100 text-slate-600 border-transparent hover:bg-slate-200')
          }
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
