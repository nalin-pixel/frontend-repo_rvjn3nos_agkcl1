import React from 'react';

const Sidebar = ({ items, activeKey, onSelect }) => {
  return (
    <aside className="w-16 shrink-0 border-r border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="p-2 space-y-1 overflow-auto max-h-[calc(100vh-48px)]">
        {items.map((item) => (
          <button
            key={item.key}
            onClick={() => onSelect(item.key)}
            title={item.label}
            aria-label={item.label}
            className={
              'w-full aspect-square grid place-items-center rounded-md transition-colors ' +
              (activeKey === item.key
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-600 hover:bg-slate-100')
            }
          >
            {item.icon}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
