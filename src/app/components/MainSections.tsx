"use client";

import { useState, useEffect } from "react";
import { seoFrameworks, experience, certifications, personalInfo } from "@/app/data/portfolioData";
import { Briefcase, ArrowUp, ExternalLink } from "lucide-react";
import { SiGoogle, SiHubspot, SiUdemy } from "react-icons/si";

interface Framework {
  category: string;
  title: string;
  description: string;
}

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

interface CertificationItem {
  name: string;
  issuer: string;
  type: string;
  link: string;
}

export default function MainSections() {
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const getCertIcon = (type: string) => {
    if (type === "google") return <SiGoogle className="w-5 h-5 text-red-600 shrink-0" />;
    if (type === "hubspot") return <SiHubspot className="w-5 h-5 text-orange-600 shrink-0" />;
    return <SiUdemy className="w-5 h-5 text-purple-700 dark:text-purple-400 shrink-0" />;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-20">
      {/* 1. Marketing Frameworks Section - Premium Card UI */}
      <section id="frameworks">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-black">
            Strategy & Architecture
          </span>
          <h2 className="text-3xl font-black mt-2 text-slate-900 dark:text-white">
            Marketing Frameworks
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {seoFrameworks.map((fw: Framework, index: number) => (
            <div
              key={index}
              className="group relative p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-blue-500/50 dark:hover:border-cyan-500/50 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_20px_-5px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_35px_-10px_rgba(37,99,235,0.12),0_10px_15px_-5px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_20px_35px_-10px_rgba(6,182,212,0.15)]"
            >
              {/* Subtle top border accent on hover */}
              <div className="absolute inset-x-0 -top-px h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-cyan-400 dark:to-blue-500 group-hover:w-full transition-all duration-300 rounded-t-2xl" />

              <div>
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-blue-700 dark:text-cyan-300 border border-slate-200 dark:border-slate-700 tracking-wider uppercase">
                    {fw.category}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-200">
                  {fw.title}
                </h3>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
                  {fw.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Professional Experience */}
      <section id="experience" className="max-w-6xl mx-auto px-4 py-12 transition-colors duration-300">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10">
        <Briefcase className="w-7 h-7 text-blue-600 dark:text-cyan-400 transition-colors duration-300" />
        <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-wide transition-colors duration-300">
          Professional Experience
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="relative border-l-2 border-slate-300 dark:border-slate-800 ml-4 pl-8 space-y-8 transition-colors duration-300">
        {experience.map((exp: ExperienceItem, index: number) => (
          <div key={index} className="relative group">
            {/* Timeline Dot Node */}
            <div className="absolute -left-[39px] top-7 w-3.5 h-3.5 rounded-full bg-blue-600 dark:bg-cyan-400 border-2 border-white dark:border-slate-950 ring-4 ring-slate-100 dark:ring-slate-900 group-hover:scale-125 transition-all duration-300 z-10" />

            {/* Dotted Line connecting timeline to card */}
            <div className="absolute -left-8 top-8 w-8 border-t-2 border-dashed border-slate-300 dark:border-slate-700 group-hover:border-blue-500 dark:group-hover:border-cyan-400 transition-colors duration-300" />

            {/* Light/Dark Optimized Experience Card */}
            <div className="p-6 rounded-xl bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800/80 shadow-md hover:shadow-xl transform transition-all duration-300 ease-out hover:scale-[1.02] hover:border-blue-500/50 dark:hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-[#0e1835]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors duration-300">
                  {exp.role}
                </h3>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 w-fit transition-colors duration-300">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm font-bold text-blue-600 dark:text-cyan-400 mb-4 transition-colors duration-300">
                {exp.company}
              </p>

              <ul className="space-y-2">
                {exp.bullets.map((bullet: string, i: number) => (
                  <li
                    key={i}
                    className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed flex items-start gap-2 transition-colors duration-300"
                  >
                    <span className="text-blue-600 dark:text-cyan-400 font-bold select-none">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* 3. Certifications */}
      <section id="certifications">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-black">
            Verified Credentials
          </span>
          <h2 className="text-3xl font-black mt-2 text-slate-900 dark:text-white">
            Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {certifications.map((cert: CertificationItem, index: number) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3 hover:border-blue-500 transition-colors"
            >
              {getCertIcon(cert.type)}
              <div className="flex-1">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-snug">{cert.name}</h4>
                <p className="text-[11px] font-bold text-slate-600 dark:text-slate-400 mt-1">{cert.issuer}</p>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            </a>
          ))}
        </div>
      </section>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3.5 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 z-50"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Footer */}
      <footer id="contact" className="pt-12 border-t border-slate-300 dark:border-slate-800 text-center text-xs font-bold text-slate-700 dark:text-slate-400 space-y-2">
        <p>Designed & Built by <span className="font-extrabold text-slate-900 dark:text-white">{personalInfo.name}</span> </p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </div>
  );
}