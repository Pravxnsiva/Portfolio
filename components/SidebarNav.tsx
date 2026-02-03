import React from 'react';
import { NAV_ITEMS } from '../constants';
import { Section } from '../types';

interface SidebarNavProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
  position?: 'left' | 'right';
}

const SidebarNav: React.FC<SidebarNavProps> = ({ activeSection, onNavigate, position = 'left' }) => {
  return (
    <div
      className={`fixed top-0 bottom-0 ${
        position === 'left' ? 'left-0' : 'right-0'
      } z-50 flex flex-col justify-center items-center px-4 w-20 md:w-28 hidden md:flex`}
    >
      <div className="flex flex-col space-y-6 items-center bg-gray-900 bg-opacity-90 backdrop-blur-sm py-7 rounded-full shadow-xl border border-gray-800">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`group relative p-2.5 rounded-full transition-all duration-300 ${
              activeSection === item.id
                ? 'bg-amber-400 text-gray-900 scale-110 shadow-[0_0_15px_rgba(251,191,36,0.5)]'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            {item.icon}

            {/* Tooltip */}
            <span
              className={`absolute ${
                position === 'left' ? 'left-14' : 'right-14'
              } px-2.5 py-1 bg-amber-400 text-gray-900 text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none tracking-widest`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SidebarNav;
