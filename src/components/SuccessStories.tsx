/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { SUCCESS_STORIES } from "../constants";
import { Quote } from "lucide-react";

export default function SuccessStories() {
  return (
    <section id="stories" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <span className="text-brand-orange font-mono text-sm uppercase tracking-widest border-l-2 border-brand-orange pl-3 mb-6 inline-block">Success Registry</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-6 italic text-slate-900">Brilliant <span className="gradient-text not-italic font-bold uppercase transition-all">Results</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Real stories from our students who transformed their passion for IT into global careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {SUCCESS_STORIES.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-[3rem] p-2 overflow-hidden group hover:border-brand-pink transition-all duration-500"
            >
              <div className="relative aspect-square rounded-[2.8rem] overflow-hidden mb-8">
                <img 
                  src={story.image} 
                  alt={story.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white">
                    <p className="text-[10px] font-bold text-brand-orange uppercase tracking-[0.2em] mb-2">{story.achievement}</p>
                    <h3 className="text-2xl font-serif italic">{story.name}</h3>
                  </div>
                </div>
              </div>
              
              <div className="px-6 pb-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Revenue</span>
                  <span className="text-brand-pink font-bold text-xl">{story.amount}</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-slate-100 rounded-2xl border border-slate-200 italic text-slate-500 text-xs">
                  <Quote size={14} className="text-brand-orange shrink-0" />
                  <p className="leading-relaxed">{story.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-8">And 50,000+ others across Bangladesh</p>
          <div className="flex justify-center -space-x-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-14 h-14 rounded-full border-4 border-white overflow-hidden shadow-2xl">
                <img src={`https://i.pravatar.cc/150?u=st${i}`} alt="User" className="w-full h-full object-cover" />
              </div>
            ))}
            <div className="w-14 h-14 rounded-full bg-white border-4 border-white flex items-center justify-center text-xs font-bold text-brand-orange shadow-2xl">
              +50k
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
