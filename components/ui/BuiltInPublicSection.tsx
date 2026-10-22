import React from "react";
import { type GitHubRepo, LANGUAGE_COLORS } from "@/lib/github";

interface BuiltInPublicSectionProps {
  repos: GitHubRepo[];
}

export function BuiltInPublicSection({ repos }: BuiltInPublicSectionProps) {
  return (
    <section className="py-12 sm:py-16 border-t-2 border-ink dark:border-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
          <div>
            <span className="font-mono text-xs font-bold px-2 py-0.5 bg-sunny text-ink border border-ink inline-block mb-2">
              Open Source
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink dark:text-cream tracking-tight">
              Built in public
            </h2>
          </div>
          <a
            href="https://github.com/akshat0709"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-bold text-ink dark:text-cream hover:text-tomato transition-colors flex items-center gap-1 group"
            data-cursor-label="github"
          >
            <span>View all on GitHub</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Repos Grid */}
        {repos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo) => {
              const langColor =
                (repo.language && LANGUAGE_COLORS[repo.language]) || LANGUAGE_COLORS.Default;

              return (
                <a
                  key={repo.name}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E] shadow-hard-sm dark:shadow-hard-dark p-4 flex flex-col justify-between hover:-translate-y-1 hover:shadow-hard transition-all group"
                  data-cursor-label="repo"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h4 className="font-mono text-sm font-bold text-ink dark:text-cream group-hover:text-tomato transition-colors truncate">
                        {repo.name}
                      </h4>
                      <span className="font-mono text-xs text-ink/40 dark:text-cream/40 group-hover:translate-x-0.5 transition-transform">
                        ↗
                      </span>
                    </div>
                    {repo.description && (
                      <p className="font-body text-xs text-ink/70 dark:text-cream/70 line-clamp-2 mb-4 leading-relaxed">
                        {repo.description}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-ink/10 dark:border-cream/10 font-mono text-[11px] text-ink/70 dark:text-cream/70">
                    <div className="flex items-center gap-1.5">
                      {repo.language && (
                        <>
                          <span
                            className="w-2.5 h-2.5 rounded-full border border-ink/50"
                            style={{ backgroundColor: langColor }}
                          />
                          <span>{repo.language}</span>
                        </>
                      )}
                      {repo.stars > 0 && (
                        <span className="ml-1 text-ink/60 dark:text-cream/60">
                          ★ {repo.stars}
                        </span>
                      )}
                    </div>
                    <span>{repo.updatedRelative}</span>
                  </div>
                </a>
              );
            })}
          </div>
        ) : (
          <div className="border-2 border-dashed border-ink/40 dark:border-cream/30 bg-white/40 dark:bg-[#1E1E1E]/40 p-6 text-center">
            <p className="font-mono text-xs text-ink/70 dark:text-cream/70 mb-3">
              Explore open-source repositories and live system commits directly on GitHub.
            </p>
            <a
              href="https://github.com/akshat0709"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-sunny text-ink border-2 border-ink shadow-hard-sm font-mono text-xs font-bold hover:bg-sunny/80"
            >
              <span>github.com/akshat0709</span>
              <span>→</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
