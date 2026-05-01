/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Info, Mail, Phone, MapPin, Globe, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h1 className="text-5xl md:text-7xl font-serif italic mb-6">Contact <span className="not-italic text-brand-emerald font-bold uppercase">Our Team</span></h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           <div className="space-y-8">
              <div className="glass rounded-[2rem] p-8 flex items-start gap-6">
                 <div className="w-12 h-12 rounded-xl bg-brand-emerald/10 flex items-center justify-center text-brand-emerald mt-1">
                    <MapPin size={24} />
                 </div>
                 <div>
                    <h4 className="text-white font-bold mb-2">Campus Location</h4>
                    <p className="text-white/50 text-sm leading-relaxed">22/3 4th Floor, Maruf Complex, Hut Lane, Dayaganj, Dhaka - 1204</p>
                 </div>
              </div>
              <div className="glass rounded-[2rem] p-8 flex items-start gap-6">
                 <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mt-1">
                    <Phone size={24} />
                 </div>
                 <div>
                    <h4 className="text-white font-bold mb-2">Phone Lines</h4>
                    <p className="text-white/50 text-sm leading-relaxed">Counseling: +880 1711 000 000 <br />Support: +880 1711 111 111</p>
                 </div>
              </div>
              <div className="glass rounded-[2rem] p-8 flex items-start gap-6">
                 <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 mt-1">
                    <Mail size={24} />
                 </div>
                 <div>
                    <h4 className="text-white font-bold mb-2">Official Email</h4>
                    <p className="text-white/50 text-sm leading-relaxed">info@luminousit.com <br />admission@luminousit.com</p>
                 </div>
              </div>
           </div>

           <div className="glass rounded-[3rem] p-12 lg:p-20 flex flex-col justify-center items-center text-center">
              <MessageCircle className="text-brand-emerald mb-8 animate-bounce" size={80} />
              <h3 className="text-3xl font-serif mb-6 italic">Instant <br />Suppport</h3>
              <p className="text-white/60 mb-10">The fastest way to get in touch with our experts is through Facebook Messenger.</p>
              <a 
                href="https://m.me/luminousitinstitute"
                target="_blank"
                rel="noreferrer" 
                className="w-full py-5 bg-brand-blue text-white font-bold rounded-2xl uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl shadow-brand-blue/30"
              >
                Start Chat Now
                <Globe size={20} />
              </a>
           </div>
        </div>
      </div>
    </div>
  );
}
