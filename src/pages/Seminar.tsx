/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Users, Calendar, MapPin, PlayCircle } from "lucide-react";

export default function Seminar() {
  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
        <div className="lg:w-1/2">
          <span className="text-secondary-600 font-bold uppercase tracking-widest text-xs mb-4 block">Free Workshops</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 italic">শিখুন এবং <span className="text-primary-600">কাজ শুরু করুন</span></h1>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            আমরা নিয়মিত ফ্রি সেমিনার এবং ওয়ার্কশপের আয়োজন করি যেখানে আপনি ফ্রিল্যান্সিং এর শুরু থেকে শেষ পর্যন্ত একটি গাইডলাইন পাবেন। সফল ফ্রিল্যান্সারদের সাথে সরাসরি কথা বলার সুযোগ মিস করবেন না।
          </p>
          <div className="flex gap-4">
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex-1">
              <Calendar className="text-primary-500 mb-2" />
              <p className="font-bold text-slate-900">শুক্র ও শনিবার</p>
              <p className="text-sm text-slate-500">বিকাল ৪টা</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex-1">
              <MapPin className="text-primary-500 mb-2" />
              <p className="font-bold text-slate-900">অফিস ক্যাম্পাস</p>
              <p className="text-sm text-slate-500">দয়াগঞ্জ, ঢাকা</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 relative group">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-video relative">
            <img 
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800" 
              alt="Seminar"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <PlayCircle size={80} className="text-white opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all cursor-pointer" />
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 gradient-bg rounded-full -z-10 blur-2xl opacity-20" />
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-10 text-center">Past <span className="text-primary-600">Seminars</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all">
            <img 
              src={`https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=600&sig=${i}`} 
              alt="Seminar Image"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-bold text-primary-500 uppercase mb-3">
                <Users size={14} />
                <span>200+ Attendees</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Digital Marketing Career Seminar</h3>
              <p className="text-sm text-slate-500 italic">Held on Oct 2024 at Maruf Complex.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
