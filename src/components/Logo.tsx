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
    <div className={`relative flex items-center justify-center rounded-xl overflow-hidden ${className}`} style={{ width: size, height: size }}>
      <img
        src="/logo.jpg"
        alt="Luminous IT Institute"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
