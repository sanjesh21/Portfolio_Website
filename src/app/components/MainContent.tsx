"use client";

import { motion } from "framer-motion";
import { frontEndProjects, seoFrameworks } from "@/app/data/portfolioData";
import { ExternalLink } from "lucide-react";

interface SEOFramework {
  category: string;
  title: string;
  description: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
}

export default function MainContent() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      {/* Frameworks Section */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Marketing & SEO Frameworks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {seoFrameworks.map((seo: SEOFramework, index: number) => (
            <motion.div key={index} whileHover={{ y: -3 }} className="p-6 rounded-xl theme-card">
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-cyan-400">
                {seo.category}
              </span>
              <h3 className="text-lg font-bold mt-4 text-slate-900 dark:text-white">{seo.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">{seo.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {frontEndProjects.map((project: Project, index: number) => (
            <div key={index} className="p-6 rounded-xl theme-card">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((t: string, idx: number) => (
                  <span key={idx} className="text-xs px-2.5 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-blue-600 dark:text-cyan-400 font-semibold"
              >
                <span>View Source</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}