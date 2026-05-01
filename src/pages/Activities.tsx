/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Trophy, Users, Heart, Camera } from "lucide-react";

export default function Activities() {
  const activities = [
    { title: "Weekly Football Matches", desc: "Building teamwork through sports and physical health.", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=600" },
    { title: "Student Get-togethers", desc: "Celebrating milestones and success stories together.", image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600" },
    { title: "Award Ceremonies", desc: "Recognizing the top earners and hardworking students.", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600" },
    { title: "Knowledge Sharing", desc: "Advanced peer-to-peer workshops and mentoring sessions.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600" }
  ];

  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 italic">Life at <span className="text-primary-600">Luminous</span></h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg text-balance">
          We believe in holistic growth. Beyond the classroom, we engage in various activities to build a strong community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        {[
          { icon: <Trophy className="text-amber-500" />, label: "10+ Annual Events" },
          { icon: <Users className="text-blue-500" />, label: "Strong Community" },
          { icon: <Heart className="text-pink-500" />, label: "Lifelong Friendships" },
          { icon: <Camera className="text-purple-500" />, label: "Unforgettable Memories" }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm text-center">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6">{item.icon}</div>
            <p className="font-bold text-slate-800">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {activities.map((act, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="break-inside-avoid bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm group"
          >
            <div className="relative overflow-hidden aspect-video">
              <img src={act.image} alt={act.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-xl font-bold text-white">{act.title}</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-slate-600 text-sm">{act.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
