/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MessageCircle, Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Opportunities", path: "/courses" },
    { name: "Success Stories", path: "/stories" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Earning Guide", path: "/earning-guide" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <Logo size={48} />
            <div className="flex flex-col leading-tight">
              <span className="font-serif italic text-xl md:text-2xl tracking-tight font-semibold text-slate-900 whitespace-nowrap">
                Luminous <span className="gradient-text not-italic font-bold">IT</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Institute</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`text-[10px] uppercase tracking-widest font-bold transition-all hover:text-brand-pink ${
                  location.pathname === link.path ? "text-brand-pink border-b-2 border-brand-pink pb-1" : "text-slate-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <a 
              href="https://m.me/luminousitinstitute" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-pink text-white text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-brand-pink/20 transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle size={16} />
              Support
            </a>
          </div>

          <button className="lg:hidden p-2 text-slate-900" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="lg:hidden bg-white border-b border-slate-100 px-4 py-8 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className="text-lg font-bold text-slate-800 uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://m.me/luminousitinstitute" 
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-pink text-white font-bold uppercase tracking-widest"
            onClick={() => setIsOpen(false)}
          >
            <MessageCircle size={20} />
            Messenger
          </a>
        </motion.div>
      )}
    </nav>
  );
}
