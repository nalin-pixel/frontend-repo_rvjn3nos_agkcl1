import React from 'react';

const Sidebar = ({ items, activeKey, onSelect }) => {
  return (
    <aside className="w-64 shrink-0 border-r border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="px-4 py-4 border-b border-slate-200">
        <h2 className="text-sm font-semibold text-slate-700">Menu</h2>
      </div>
      <nav className="p-2 space-y-1 overflow-auto max-h-[calc(100vh-64px)]">
        {items.map((item) => (
          <button
            key={item.key}
            onClick={() => onSelect(item.key)}
            className={
              'w-full text-left px-3 py-2 rounded-md text-sm transition-colors ' +
              (activeKey === item.key
                ? 'bg-indigo-600 text-white'
                : 'text-slate-700 hover:bg-slate-100')
            }
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
