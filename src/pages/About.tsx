/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Info, Target, Award, Users, ChevronRight, Globe, Phone, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-brand-emerald font-mono text-sm uppercase tracking-widest border-l-2 border-brand-emerald pl-3 mb-6 block">Our Story</span>
            <h1 className="text-6xl md:text-7xl font-serif leading-[1.1] mb-8 italic">
              Empowering <br />
              <span className="not-italic text-brand-emerald font-bold">Bangladesh</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              Founded in Dhaka, Luminous IT Institute was born from a simple observation: 
              talent is universal, but opportunity is not. We bridge this gap by providing 
              world-class IT training tailored specifically for the Bangladeshi market and mindsets.
            </p>
            <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5 mb-8">
              <div>
                <p className="text-4xl font-bold text-white mb-1">40K+</p>
                <p className="text-xs uppercase tracking-widest font-bold text-white/40">Active Community</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white mb-1">5+</p>
                <p className="text-xs uppercase tracking-widest font-bold text-white/40">Years Excellence</p>
              </div>
            </div>
            <a href="https://www.facebook.com/share/1B9xUtNCpn/" target="_blank" className="text-brand-emerald font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
              Follow our Journey on Facebook <ChevronRight size={20} />
            </a>
          </motion.div>

          <div className="relative">
            <div className="aspect-square glass rounded-[4rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-700">
               <img 
                 src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800" 
                 alt="Lab" 
                 className="w-full h-full object-cover opacity-60"
               />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 glass-emerald rounded-[2rem] p-6 flex flex-col justify-center -rotate-6">
               <Target className="text-brand-emerald mb-3" size={32} />
               <p className="text-white font-bold leading-tight">Vision 2026: 1B+ Impact</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { icon: <Award />, title: "Quality Education", desc: "Latest curriculum matched with international marketplace demands." },
            { icon: <Users />, title: "Student Support", desc: "Dedicated mentors providing 24/7 support via Messenger and Group sessions." },
            { icon: <Globe />, title: "Global Reach", desc: "We don't just teach skills; we teach how to sell them to the world." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl p-8 border border-white/5 hover:border-brand-emerald/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-emerald mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="glass rounded-[3rem] overflow-hidden grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-5 bg-brand-emerald p-12 text-black flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-serif font-bold italic mb-6">Visit Our <br />Campus</h2>
              <p className="font-medium text-black/70 mb-12">Come for a free counseling session and see our training labs firsthand.</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="shrink-0" />
                <span className="font-bold text-sm">22/3 4th Floor, Hut Lane, Dayaganj, Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="shrink-0" />
                <span className="font-bold text-sm">+880 17XX XXX XXX</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 bg-white/5 p-12 relative overflow-hidden">
             <div className="aspect-video rounded-2xl overflow-hidden glass border border-white/10">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.793616616421!2d90.419616!3d23.715494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85352cf5d6b%3A0xe5a363717208d19d!2sDayaganj%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1714590000000!5m2!1sen!2sbd" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                ></iframe>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
