import React from 'react';

export function NavItem({
  icon,
  label,
  active = false,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1 transition-all ${
        active ? 'text-[#137fec]' : 'text-[#6e6e73] dark:text-slate-500 hover:text-[#1d1d1f] dark:hover:text-slate-300'
      }`}
    >
      <div className="transition-transform active:scale-90">{icon}</div>
      <span className={`text-[10px] font-bold uppercase tracking-wider ${active ? 'opacity-100' : 'opacity-60'}`}>
        {label}
      </span>
    </button>
  );
}
