"use client";

import { personalInfo } from "@/app/data/portfolioData";
import { Download, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="py-20 px-4 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      {/* Bio Details */}
      <div className="flex-1 text-center md:text-left">
        {/* Badge */}
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950 border border-blue-300 dark:border-blue-800 text-xs font-bold text-blue-950 dark:text-cyan-300 mb-6">
          Digital Marketing Executive & Front-end Developer
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-slate-950 dark:text-white">
          Hi, I'm <span className="text-blue-600 dark:text-cyan-400">{personalInfo.name}</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-xl font-bold text-slate-900 dark:text-slate-100">
          Scaling Search Engine Rankings & Engineering Web Projects
        </p>

        {/* Paragraph */}
        <p className="mt-4 text-base font-semibold text-slate-800 dark:text-slate-300 max-w-xl leading-relaxed">
          Specializing in Digital Marketing Growth Strategies alongside modern React/Next.js front-end development.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href={personalInfo.cvPath}
            download
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center gap-2 shadow-md"
          >
            <Download className="w-4 h-4" /> Download CV
          </a>
          <a
            href={`https://www.linkedin.com/in/sanjesh-shakya/`} target="_blank"
            className="px-6 py-3 rounded-lg bg-slate-900 dark:bg-slate-800 text-white border border-slate-900 dark:border-slate-700 font-bold text-sm flex items-center gap-2 hover:bg-slate-800 dark:hover:bg-slate-700"
          >
            <Mail className="w-4 h-4 text-cyan-400" /> Contact Me
          </a>
        </div>
      </div>

      {/* Profile Photo Frame */}
      <div className="shrink-0">
        <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-full border-4 border-blue-600 dark:border-cyan-400 shadow-xl overflow-hidden relative bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
          <Image
            src={personalInfo.profileImg}
            alt={personalInfo.name}
            fill
            className="object-cover"
            priority
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <span className="text-slate-700 dark:text-slate-400 text-xs font-bold px-4 text-center">Place profile picture in /public/profile.jpg</span>
        </div>
      </div>
    </section>
  );
}