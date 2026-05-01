/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 40 }: LogoProps) {
  return (
    <div className={`relative flex items-center justify-center rounded-xl bg-linear-to-br from-[#f97316] to-[#ec4899] shadow-lg shadow-brand-orange/20 ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 100 100"
        fill="white"
        className="w-3/4 h-3/4"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Brain Bulb Hybrid Path */}
        <path d="M50 12C34.5 12 22 24.5 22 40c0 10.2 5.5 19.2 13.8 24.2L38 82h24l2.2-17.8c8.3-5 13.8-14 13.8-24.2 0-15.5-12.5-28-28-28zm-4 75h8v4h-8zm-2 6h12v2H44z" opacity="0.2" />
        
        {/* The Brain-Bulb Symbol with circuit traces */}
        <path d="M50 15c-13.8 1.1-25 12.3-25 26.2 0 8.7 4.5 16.4 11.3 20.8L39 80h22l2.7-18c6.8-4.4 11.3-12.1 11.3-20.8 0-13.9-11.2-25.1-25-26.2z" />
        
        {/* Intricate circuitry feel */}
        <g stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.6">
          <line x1="50" y1="20" x2="50" y2="55" />
          <path d="M50 25c-8 2-12 8-12 15M50 35c-6 2-10 6-10 12" fill="none" />
          <path d="M50 25c8 2 12 8 12 15M50 35c6 2 10 6 10 12" fill="none" />
          <circle cx="38" cy="40" r="1.5" fill="white" />
          <circle cx="62" cy="40" r="1.5" fill="white" />
          <circle cx="40" cy="47" r="1.5" fill="white" />
          <circle cx="60" cy="47" r="1.5" fill="white" />
        </g>
        
        {/* Filament/Bottom part */}
        <rect x="42" y="82" width="16" height="3" rx="1" fill="white" opacity="0.8" />
        <path d="M46 87h8c0 2-2 4-4 4s-4-2-4-4z" fill="white" opacity="0.8" />
      </svg>
    </div>
  );
}
