/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function Team() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-serif italic mb-12">Elite <span className="not-italic font-bold text-brand-emerald">Mentors</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[1,2,3,4].map(i => (
            <div key={i} className="glass rounded-[3rem] p-8">
              <div className="w-24 h-24 bg-brand-emerald/10 rounded-full mx-auto mb-6" />
              <h3 className="font-bold">Mentor {i}</h3>
              <p className="text-xs text-white/40 uppercase tracking-widest mt-2">Specialist</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
