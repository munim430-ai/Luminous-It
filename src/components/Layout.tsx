/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion, AnimatePresence } from "motion/react";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      
      {/* Platform Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 glass border-t border-white/5 py-3 px-8 hidden md:flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-brand-emerald rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <span>Platform Status: Optimal</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="italic font-serif normal-case tracking-normal">Top Earner Today: ৳8,500 (Munna K.)</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span>Vision 2026: ৳1 Billion Impact</span>
        </div>
      </div>
    </div>
  );
}
