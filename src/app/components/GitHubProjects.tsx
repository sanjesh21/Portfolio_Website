"use client";

import { useState, useEffect } from "react";
import { FolderGit2, ExternalLink, Star, GitFork, Loader2 } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { personalInfo } from "@/app/data/portfolioData";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  fork: boolean;
  updated_at: string;
}

export default function GitHubProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Extract GitHub username dynamically from personalInfo
  const githubUsername = personalInfo.github.split("/").pop() || "sanjesh21";

  useEffect(() => {
    async function fetchRepos() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub repositories");
        }

        const data: GitHubRepo[] = await response.json();
        
        // Filter out forked repositories (optional)
        const userRepos = data.filter((repo) => !repo.fork);
        setRepos(userRepos);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, [githubUsername]);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-black">
          Live Code Feed
        </span>
        <h2 className="text-3xl font-black mt-2 text-slate-900 dark:text-white flex items-center justify-center gap-3">
          <FolderGit2 className="w-8 h-8 text-blue-600 dark:text-cyan-400" />
          Projects & Repositories
        </h2>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-16 text-slate-500">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600 dark:text-cyan-400 mb-3" />
          <p className="text-sm font-semibold">Syncing latest projects from GitHub...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-center py-12 text-red-500 font-semibold text-sm">
          Unable to load live projects right now. Please check your GitHub handle or API connection.
        </div>
      )}

      {/* Projects Grid */}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="group relative p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-blue-500/50 dark:hover:border-cyan-500/50 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_20px_-5px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_35px_-10px_rgba(37,99,235,0.15),0_10px_15px_-5px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_20px_35px_-10px_rgba(6,182,212,0.18)]"
            >
              {/* Top Accent Line */}
              <div className="absolute inset-x-0 -top-px h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-cyan-400 dark:to-blue-500 group-hover:w-full transition-all duration-300 rounded-t-2xl" />

              {/* Main Content Area */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-cyan-400 border border-blue-100 dark:border-blue-900/40">
                    <FolderGit2 className="w-5 h-5" />
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      aria-label="View Source Code"
                    >
                      <SiGithub className="w-5 h-5" />
                    </a>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        aria-label="View Live Site"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3 capitalize group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-200">
                  {repo.name.replace(/-/g, " ")}
                </h3>
                
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  {repo.description || "No description provided for this repository."}
                </p>
              </div>

              {/* Footer Meta Details (Language, Stars, Topics) */}
              <div>
                {/* Topic / Language Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/80 mb-4">
                  {repo.language && (
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200/60 dark:border-blue-800/60">
                      {repo.language}
                    </span>
                  )}
                  {repo.topics &&
                    repo.topics.slice(0, 3).map((topic, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {topic}
                      </span>
                    ))}
                </div>

                {/* Stars & Forks Count */}
                <div className="flex items-center gap-4 text-xs font-bold text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-500" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    {repo.forks_count}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}