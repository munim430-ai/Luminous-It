/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Facebook, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useState } from "react";

const MESSENGER_URL = "https://m.me/luminousitinstituteofficialonline1";
const FACEBOOK_URL = "https://www.facebook.com/luminousitinstituteofficialonline1";

function EasterEgg() {
  const [clicks, setClicks] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const handleClick = () => {
    const next = clicks + 1;
    setClicks(next);
    if (next >= 5) {
      setRevealed(true);
      setClicks(0);
    }
  };

  return (
    <span className="relative inline-block ml-1">
      <span
        onClick={handleClick}
        className="cursor-default select-none text-slate-800 hover:text-slate-700 transition-colors"
        title=""
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`inline-block w-1 h-1 rounded-full mx-px transition-all duration-300 ${
              i < clicks ? "bg-brand-orange scale-125" : "bg-slate-700"
            }`}
          />
        ))}
      </span>
      {revealed && (
        <span className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap z-50">
          <a
            href="https://keystone-nextjs-virid.vercel.app/"
            target="_blank"
            rel="noreferrer"
            onClick={() => setRevealed(false)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 border border-brand-orange/40 text-xs font-bold text-brand-orange shadow-2xl hover:bg-slate-700 transition-all animate-bounce-slow"
          >
            ✦ Built by Keystone
          </a>
          <span className="block w-2 h-2 bg-slate-800 border-r border-b border-brand-orange/40 rotate-45 mx-auto -mt-1" />
        </span>
      )}
    </span>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <Logo size={44} className="rounded-xl overflow-hidden" />
              <span className="font-bold text-xl text-white whitespace-nowrap">
                Luminous <span className="gradient-text">IT Institute</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              বাংলাদেশের সেরা ফ্রিল্যান্সিং প্রশিক্ষণ কেন্দ্র। আপনার স্বপ্নের IT ক্যারিয়ার গড়ার সেরা জায়গা।
            </p>
            <div className="flex gap-4">
              <a href={FACEBOOK_URL} target="_blank" rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-pink hover:text-white transition-all text-slate-400">
                <Facebook size={17} />
              </a>
              <a href={MESSENGER_URL} target="_blank" rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all text-slate-400">
                <MessageCircle size={17} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm mb-6">নেভিগেশন</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/courses" className="hover:text-brand-pink transition-colors">কোর্সসমূহ</Link></li>
              <li><Link to="/stories" className="hover:text-brand-pink transition-colors">সাফল্যের গল্প</Link></li>
              <li><Link to="/earning-guide" className="hover:text-brand-pink transition-colors">আয়ের গাইড</Link></li>
              <li><Link to="/faq" className="hover:text-brand-pink transition-colors">সাধারণ প্রশ্নোত্তর</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold text-sm mb-6">রিসোর্স</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/dashboard" className="hover:text-brand-pink transition-colors">স্টুডেন্ট ড্যাশবোর্ড</Link></li>
              <li><Link to="/gallery" className="hover:text-brand-pink transition-colors">গ্যালারি</Link></li>
              <li><Link to="/contact" className="hover:text-brand-pink transition-colors">যোগাযোগ</Link></li>
              <li><Link to="/legal" className="hover:text-brand-pink transition-colors">আইনি তথ্য</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-6">আমাদের ঠিকানা</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={16} className="text-brand-orange shrink-0 mt-0.5" />
                <span>২২/৩, ৪র্থ তলা, মারুফ কমপ্লেক্স, হাট লেন, দয়াগঞ্জ, ঢাকা-১২০৪</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-orange shrink-0" />
                <span>+৮৮০ ১৭XX XXX XXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-orange shrink-0" />
                <span>info@luminousitinstitute.com</span>
              </li>
            </ul>
            <a
              href={MESSENGER_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl gradient-bg text-white text-sm font-bold hover:scale-105 transition-all shadow-lg shadow-brand-pink/20"
            >
              <MessageCircle size={16} />
              Messenger-এ কথা বলুন
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">
            © {currentYear} Luminous IT Institute. সর্বস্বত্ব সংরক্ষিত।<EasterEgg />
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs text-slate-600 font-bold">ভর্তি চলমান</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
