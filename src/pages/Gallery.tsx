/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Search } from "lucide-react";

export default function Gallery() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-serif italic mb-12">Elite <span className="not-italic font-bold text-brand-emerald">Moments</span></h1>
        <div className="columns-1 md:columns-3 gap-8 space-y-8">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="glass rounded-3xl overflow-hidden group">
              <img src={`https://images.unsplash.com/photo-${1517048676732 + i}-d65bc937f952?auto=format&fit=crop&q=80&w=600`} className="w-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
