/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function Legal() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-serif italic mb-12">Legal <span className="not-italic font-bold text-brand-emerald">Protocol</span></h1>
        <div className="space-y-12">
          <div className="glass rounded-3xl p-10">
            <h2 className="text-2xl font-bold mb-4">Terms & Privacy</h2>
            <p className="text-white/50 leading-relaxed">Detailed terms and privacy standards for Luminous Elite members.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
