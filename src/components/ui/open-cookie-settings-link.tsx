'use client';

import React from 'react';

export function OpenCookieSettingsLink() {
  return (
    <span
      className="inline-block relative group cursor-pointer"
      onClick={() => {
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new Event('open-cookie-settings'));
        }
      }}
    >
      <span className="bg-gradient-to-r from-[#bf3ff1] via-[#db83fc] to-[#db83fc] group-hover:from-[#9a13d2] group-hover:via-[#7a2fb0] group-hover:to-[#6a288a] bg-clip-text text-transparent font-semibold transition-colors duration-300 ease-out group-hover:opacity-90">Настройки cookies</span>
      <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#bf3ff1] via-[#db83fc] to-[#db83fc] group-hover:from-[#9a13d2] group-hover:via-[#7a2fb0] group-hover:to-[#6a288a] transition-all duration-300 ease-out"></span>
    </span>
  );
}


