/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, Globe } from "lucide-react";
import { Link } from "react-router-dom";

import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 text-slate-500 pt-24 pb-16 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3 group">
              <Logo size={40} className="group-hover:rotate-12 transition-transform" />
              <span className="font-serif italic text-2xl tracking-tight font-semibold text-slate-900">
                Luminous <span className="gradient-text font-bold not-italic">IT Institute</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed opacity-60">
              Leading the digital revolution in Bangladesh. Professional IT training for high-performance global careers.
            </p>
            <div className="flex gap-5">
              <a href="https://www.facebook.com/share/1B9xUtNCpn/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:bg-brand-pink hover:text-white transition-all shadow-sm">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:bg-brand-pink hover:text-white transition-all shadow-sm">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:bg-brand-pink hover:text-white transition-all shadow-sm">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
             <h4 className="text-slate-900 font-bold uppercase tracking-widest text-[10px] mb-8">Navigation</h4>
             <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                <li><Link to="/courses" className="hover:text-brand-pink transition-colors">Courses</Link></li>
                <li><Link to="/stories" className="hover:text-brand-pink transition-colors">Success Gallery</Link></li>
                <li><Link to="/vision" className="hover:text-brand-pink transition-colors">Vision 2026</Link></li>
                <li><Link to="/referral" className="hover:text-brand-pink transition-colors">Career Pathways</Link></li>
             </ul>
          </div>

          <div>
             <h4 className="text-slate-900 font-bold uppercase tracking-widest text-[10px] mb-8">Resources</h4>
             <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                <li><Link to="/earning-guide" className="hover:text-brand-pink transition-colors">Earning Guide</Link></li>
                <li><Link to="/faq" className="hover:text-brand-pink transition-colors">FAQs</Link></li>
                <li><Link to="/legal" className="hover:text-brand-pink transition-colors">Legal</Link></li>
                <li><Link to="/contact" className="hover:text-brand-pink transition-colors">Contact Service</Link></li>
             </ul>
          </div>

          <div>
             <h4 className="text-slate-900 font-bold uppercase tracking-widest text-[10px] mb-8">Luminous HQ</h4>
             <ul className="space-y-4 text-xs font-medium leading-relaxed">
                <li className="flex gap-3">
                   <MapPin size={16} className="text-brand-orange shrink-0" />
                   <span className="opacity-60">22/3 4th Floor, Dayaganj, Dhaka-1204</span>
                </li>
                <li className="flex items-center gap-3">
                   <Phone size={16} className="text-brand-orange shrink-0" />
                   <span className="opacity-60">+880 1711 000 000</span>
                </li>
                <li className="flex items-center gap-3">
                   <Mail size={16} className="text-brand-orange shrink-0" />
                   <span className="opacity-60">info@luminousitinstitute.com</span>
                </li>
             </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-widest font-bold opacity-30">
            © {currentYear} Luminous IT Institute. All Rights Reserved.
          </p>
          <div className="flex gap-3 items-center">
             <div className="w-2 h-2 bg-brand-orange rounded-full" />
             <span className="text-[10px] uppercase tracking-widest font-bold opacity-30">ISO Certified Training</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
