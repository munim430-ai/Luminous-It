/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Download } from "lucide-react";

export default function Resources() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-serif italic mb-12">Asset <span className="not-italic font-bold text-brand-emerald">Vault</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Marketplace Guide", "SEO Checklist", "Legal Templates"].map(res => (
            <div key={res} className="glass rounded-3xl p-8 flex justify-between items-center">
              <span className="font-bold">{res}</span>
              <Download className="text-brand-emerald" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
