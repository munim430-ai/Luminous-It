/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Target, Globe } from "lucide-react";

export default function Vision() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-8xl font-serif italic mb-12">Vision <span className="not-italic font-bold text-brand-emerald">2026</span></h1>
        <div className="glass rounded-[4rem] p-20 text-center">
          <Globe size={80} className="text-brand-emerald mx-auto mb-8" />
          <h2 className="text-4xl font-serif mb-4">৳1 Billion Impact</h2>
          <p className="text-white/60 text-lg">Our roadmap to empowering the youth of Bangladesh.</p>
        </div>
      </div>
    </div>
  );
}
