/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const MESSENGER_URL = "https://m.me/luminousitinstituteofficialonline1";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "কোর্সসমূহ", path: "/courses" },
    { name: "সাফল্যের গল্প", path: "/stories" },
    { name: "ড্যাশবোর্ড", path: "/dashboard" },
    { name: "আয়ের গাইড", path: "/earning-guide" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <Logo size={48} className="rounded-xl overflow-hidden" />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg md:text-xl tracking-tight text-slate-900 whitespace-nowrap">
                Luminous <span className="gradient-text">IT</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.15em] font-bold text-slate-400">Institute</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-all hover:text-brand-pink ${
                  location.pathname === link.path ? "text-brand-pink border-b-2 border-brand-pink pb-0.5" : "text-slate-600"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <a
              href={MESSENGER_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-bg text-white text-sm font-bold shadow-lg shadow-brand-pink/20 transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle size={16} />
              ভর্তি হন
            </a>
          </div>

          <button className="lg:hidden p-2 text-slate-900" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="lg:hidden bg-white border-b border-slate-100 px-4 py-6 flex flex-col gap-5"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-base font-bold text-slate-800"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={MESSENGER_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl gradient-bg text-white font-bold"
            onClick={() => setIsOpen(false)}
          >
            <MessageCircle size={20} />
            Messenger-এ ভর্তি হন
          </a>
        </motion.div>
      )}
    </nav>
  );
}
