/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { SUCCESS_STORIES } from "../constants";
import { Quote } from "lucide-react";

export default function SuccessStories() {
  return (
    <section id="stories" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-brand-orange font-bold text-xs uppercase tracking-widest border-l-2 border-brand-orange pl-3 mb-5">
            🏆 সাফল্যের গল্প
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4">
            আমাদের{" "}
            <span className="gradient-text">সফল শিক্ষার্থীরা</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Luminous IT-এর শিক্ষার্থীরা আজ আন্তর্জাতিক মার্কেটপ্লেসে সফলভাবে কাজ করছেন। এটি তাদেরই অনুপ্রেরণার গল্প।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SUCCESS_STORIES.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-brand-pink/30 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-[10px] font-bold text-brand-orange uppercase tracking-widest mb-1">{story.achievement}</p>
                    <h3 className="text-xl font-bold">{story.name}</h3>
                  </div>
                </div>
              </div>

              <div className="px-6 py-5 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">মোট আয়</span>
                  <span className="text-brand-pink font-extrabold text-xl">{story.amount}</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-slate-500 text-xs italic leading-relaxed">
                  <Quote size={13} className="text-brand-orange shrink-0 mt-0.5" />
                  <p>{story.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-6">এবং বাংলাদেশ জুড়ে আরও ৫০,০০০+ সফল শিক্ষার্থী</p>
          <div className="flex justify-center -space-x-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-xl">
                <img src={`https://i.pravatar.cc/100?u=st${i}`} alt="User" className="w-full h-full object-cover" />
              </div>
            ))}
            <div className="w-12 h-12 rounded-full gradient-bg border-4 border-white flex items-center justify-center text-xs font-bold text-white shadow-xl">
              +50k
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
