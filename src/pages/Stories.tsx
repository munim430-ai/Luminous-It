/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Trophy, Quote } from "lucide-react";
import { SUCCESS_STORIES } from "../constants";

export default function Stories() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <span className="text-brand-emerald font-mono text-sm uppercase tracking-widest border-l-2 border-brand-emerald pl-3 mb-6 inline-block">Success Registry</span>
          <h1 className="text-5xl md:text-8xl font-serif italic mb-6">Elite <span className="not-italic text-brand-emerald font-bold uppercase">Hall</span></h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {SUCCESS_STORIES.map((story, i) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass rounded-[3rem] p-2 overflow-hidden group hover:border-brand-emerald transition-all duration-500"
            >
              <div className="relative aspect-square rounded-[2.8rem] overflow-hidden mb-8">
                <img src={story.image} alt={story.name} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-serif text-white">{story.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Revenue</span>
                  <span className="text-brand-emerald font-bold text-xl">{story.amount}</span>
                </div>
                <div className="bg-slate-100 p-4 rounded-2xl italic text-slate-500 text-xs flex gap-3 border border-slate-200">
                  <Quote size={14} className="text-brand-emerald shrink-0" />
                  <p>{story.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
