/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { BookOpen, GraduationCap, Video, Users, CheckCircle2, TrendingUp, Globe, MousePointer2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function CoursesPage() {
  const courses = [
    {
      id: "dm-basic",
      title: "Digital Marketing Basic",
      description: "Start your journey in the world of online business. Perfect for beginners seeking a career in remote work.",
      icon: <Video className="text-brand-emerald" />,
      features: ["Social Media Basics", "Content Creation", "Market Research", "Bangladesh Market Focus"],
      price: "৳8,500",
      badges: ["High Growth", "Starter"]
    },
    {
      id: "dm-advanced",
      title: "Digital Marketing Advanced",
      description: "Master advanced strategies for international marketplaces. Focus on ROI, analytics, and client management.",
      icon: <TrendingUp className="text-brand-blue" />,
      features: ["Advanced SEO/SEM", "Paid Ads Mastery", "Conversion Funnels", "International Client Handling"],
      price: "৳15,500",
      badges: ["Most Popular", "Pro Level"]
    },
    {
      id: "english",
      title: "English Communication",
      description: "Break the language barrier. Professional communication skills tailored for Bangladeshi freelancers.",
      icon: <Globe className="text-purple-500" />,
      features: ["Professional Writing", "Client Interaction", "Negotiation Skills", "Grammar for Business"],
      price: "৳5,000",
      badges: ["Essential"]
    },
    {
      id: "web-dev",
      title: "Web Development (Specialty)",
      description: "Build robust websites and web applications. From front-end design to complex back-end systems.",
      icon: <MousePointer2 className="text-amber-500" />,
      features: ["React & Next.js", "Node.js Backend", "Database Architecture", "Responsive UI Design"],
      price: "৳25,000",
      badges: ["Elite"]
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-emerald text-brand-emerald text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            <BookOpen size={14} />
            <span>Learning Opportunities</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 italic">Professional <span className="text-brand-emerald not-italic font-bold">Pathways</span></h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Choose a path that fits your goals. Our courses are designed to take 
            you from zero to professional earner in months.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-[3rem] p-10 group hover:border-brand-emerald/40 transition-all flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl group-hover:bg-brand-emerald/10 group-hover:border-brand-emerald/20 transition-all">
                  {course.icon}
                </div>
                <div className="flex flex-wrap gap-2 justify-end">
                  {course.badges.map(badge => (
                    <span key={badge} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold uppercase tracking-widest text-white/40">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-3xl font-serif mb-4 group-hover:text-brand-emerald transition-colors">{course.title}</h3>
              <p className="text-white/50 text-sm mb-10 leading-relaxed">{course.description}</p>
              
              <div className="space-y-4 mb-10 border-t border-white/5 pt-8">
                {course.features.map(feature => (
                  <div key={feature} className="flex items-center gap-3 text-sm font-medium text-white/70">
                    <CheckCircle2 size={16} className="text-brand-emerald" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-6 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Course Investment</p>
                  <p className="text-2xl font-bold text-white">{course.price}</p>
                </div>
                <Link 
                  to="/admission"
                  className="px-8 py-3 bg-brand-emerald text-black font-bold uppercase tracking-widest text-[11px] rounded-xl hover:scale-105 transition-all"
                >
                  Enroll Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 glass rounded-[3rem] p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-4xl font-serif mb-4">Not sure <span className="italic text-brand-emerald">which path</span> to take?</h2>
            <p className="text-white/60">Our career consultants are ready to help you analyze your skills and choose the most profitable path for you.</p>
          </div>
          <a 
            href="https://m.me/luminousitinstitute"
            target="_blank"
            rel="noreferrer"
            className="px-10 py-5 rounded-2xl bg-brand-blue text-white font-bold uppercase tracking-widest text-xs flex items-center gap-3 shadow-xl shadow-brand-blue/30"
          >
            Get Free Consultation
            <Globe size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
