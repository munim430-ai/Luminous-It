/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { HelpCircle, ChevronDown } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    { q: "Is this training exclusively for residents of Dhaka?", a: "No, while our main campus is in Dayaganj, Dhaka, we offer comprehensive online classes accessible from anywhere in Bangladesh." },
    { q: "What is the typical duration of a course?", a: "Course durations vary from 2 to 4 months, depending on the complexity of the subject matter." },
    { q: "Do you provide job placement support?", a: "Yes, our career center actively connects top-performing students with local and international opportunities." },
    { q: "Can I pay in installments?", a: "We offer flexible payment plans for our advanced courses. Contact our billing department for details." },
    { q: "Do I get a certificate upon completion?", a: "Yes, you will receive a Luminous IT Certified Professional certificate recognized in the industry." },
    { q: "Is there any age limit to join?", a: "No, we have students ranging from teenagers to retirees. All you need is the will to learn." },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
           <h1 className="text-5xl md:text-7xl font-serif italic mb-6">Clarifying <span className="not-italic text-brand-emerald font-bold uppercase">Growth</span></h1>
           <p className="text-white/40">Everything you need to know about starting your digital journey.</p>
        </div>

        <div className="space-y-6">
           {faqs.map((faq, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="glass rounded-3xl"
             >
               <details className="group">
                  <summary className="p-8 focus:outline-hidden cursor-pointer list-none flex justify-between items-center">
                    <div className="flex items-center gap-4">
                       <HelpCircle size={20} className="text-brand-emerald" />
                       <span className="text-white font-bold tracking-tight">{faq.q}</span>
                    </div>
                    <ChevronDown size={20} className="text-white/20 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-8 pb-8 text-white/50 text-sm leading-relaxed border-t border-white/5 pt-6">
                    {faq.a}
                  </div>
               </details>
             </motion.div>
           ))}
        </div>

        <div className="mt-24 p-12 glass rounded-[3rem] text-center border-dashed border-white/20 border-2">
           <p className="text-white/60 mb-6">Still have questions? Our specialists are available on Messenger 24/7.</p>
           <a 
              href="https://m.me/luminousitinstitute"
              target="_blank"
              rel="noreferrer"
              className="text-brand-emerald font-bold uppercase tracking-widest text-xs hover:underline"
           >
              Message Us Now
           </a>
        </div>
      </div>
    </div>
  );
}
