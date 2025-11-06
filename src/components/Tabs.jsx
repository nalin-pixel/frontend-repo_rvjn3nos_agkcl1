import React from 'react';
import { Plus } from 'lucide-react';

function Tabs({ tabs, active, onChange, onAdd }) {
  return (
    <div className="flex items-center gap-2 border-b border-slate-200">
      <div className="flex flex-wrap gap-2">
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
      {onAdd && (
        <button
          onClick={onAdd}
          className="ml-auto inline-flex items-center justify-center h-8 w-8 rounded-full bg-indigo-600 text-white hover:bg-indigo-700"
          title="Add New Transaction"
          aria-label="Add New Transaction"
        >
          <Plus size={16} />
        </button>
      )}
    </div>
  );
}

export default Tabs;
