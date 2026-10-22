"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site";

export interface CommandItem {
  id: string;
  category: "Navigation" | "Projects" | "Actions";
  title: string;
  subtitle?: string;
  keywords?: string[];
  shortcut?: string;
  onSelect: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onToggleTheme: () => void;
  isDark: boolean;
}

export function CommandPalette({ isOpen, onClose, onToggleTheme, isDark }: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copyFeedback, setCopyFeedback] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  // All available actions
  const allItems: CommandItem[] = useMemo(() => {
    const navItems: CommandItem[] = [
      {
        id: "nav-home",
        category: "Navigation",
        title: "Home",
        subtitle: "Return to homepage overview",
        keywords: ["hero", "index", "intro"],
        onSelect: () => {
          router.push("/");
          onClose();
        },
      },
      {
        id: "nav-projects",
        category: "Navigation",
        title: "All Projects",
        subtitle: "Browse all engineering systems and case studies",
        keywords: ["work", "apps", "portfolio"],
        onSelect: () => {
          router.push("/projects");
          onClose();
        },
      },
      {
        id: "nav-skills",
        category: "Navigation",
        title: "Skills Index",
        subtitle: "Technical index across languages, backend & embedded",
        keywords: ["tech", "languages", "stack", "tools"],
        onSelect: () => {
          router.push("/skills");
          onClose();
        },
      },
      {
        id: "nav-experience",
        category: "Navigation",
        title: "Experience",
        subtitle: "Work history at Orange Taxi and student roles",
        keywords: ["jobs", "internships", "history"],
        onSelect: () => {
          router.push("/experience");
          onClose();
        },
      },
      {
        id: "nav-about",
        category: "Navigation",
        title: "About Akshat",
        subtitle: "Background, education at BMSCE, and engineering philosophy",
        keywords: ["bio", "education", "bmsce", "bengaluru"],
        onSelect: () => {
          router.push("/about");
          onClose();
        },
      },
      {
        id: "nav-contact",
        category: "Navigation",
        title: "Contact Section",
        subtitle: "Jump to contact form and message Akshat",
        keywords: ["email", "form", "hire", "message", "inquiry"],
        onSelect: () => {
          router.push("/#contact");
          onClose();
        },
      },
    ];

    // Project case studies dynamically generated from data/projects.ts
    const projectItems: CommandItem[] = projects.map((p) => ({
      id: `project-${p.slug}`,
      category: "Projects",
      title: p.title,
      subtitle: `${p.category} · ${p.stack.slice(0, 3).join(", ")}`,
      keywords: [p.slug, ...p.stack, p.category],
      onSelect: () => {
        router.push(`/projects/${p.slug}`);
        onClose();
      },
    }));

    // Utility actions
    const actionItems: CommandItem[] = [
      {
        id: "action-copy-email",
        category: "Actions",
        title: copyFeedback ? "Email Copied to Clipboard!" : "Copy Email Address",
        subtitle: siteConfig.email,
        keywords: ["email", "copy", "mail", "contact"],
        onSelect: () => {
          navigator.clipboard.writeText(siteConfig.email);
          setCopyFeedback(true);
          setTimeout(() => {
            setCopyFeedback(false);
            onClose();
          }, 800);
        },
      },
      {
        id: "action-resume",
        category: "Actions",
        title: "Download PDF Resume (1-Page)",
        subtitle: "Official resume / CV for internships & roles",
        keywords: ["cv", "resume", "pdf", "hire"],
        shortcut: "PDF",
        onSelect: () => {
          const a = document.createElement("a");
          a.href = "/Akshat_Gupta_Resume.pdf";
          a.download = "Akshat_Gupta_Resume.pdf";
          a.target = "_blank";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          onClose();
        },
      },
      {
        id: "action-github",
        category: "Actions",
        title: "Open GitHub Profile",
        subtitle: "github.com/akshat0709",
        keywords: ["git", "code", "repos"],
        shortcut: "↗",
        onSelect: () => {
          window.open(siteConfig.github, "_blank", "noopener,noreferrer");
          onClose();
        },
      },
      {
        id: "action-linkedin",
        category: "Actions",
        title: "Open LinkedIn Profile",
        subtitle: "Connect on LinkedIn",
        keywords: ["social", "network", "connect"],
        shortcut: "↗",
        onSelect: () => {
          window.open(siteConfig.linkedin, "_blank", "noopener,noreferrer");
          onClose();
        },
      },
      {
        id: "action-theme",
        category: "Actions",
        title: isDark ? "Switch to Light Mode" : "Switch to Dark Mode",
        subtitle: `Currently in ${isDark ? "dark" : "light"} theme`,
        keywords: ["theme", "mode", "color", "dark", "light"],
        shortcut: isDark ? "☀" : "☾",
        onSelect: () => {
          onToggleTheme();
          onClose();
        },
      },
    ];

    return [...navItems, ...projectItems, ...actionItems];
  }, [router, onClose, onToggleTheme, isDark, copyFeedback]);

  // Fuzzy filter
  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allItems;

    const terms = q.split(/\s+/).filter(Boolean);
    return allItems.filter((item) => {
      const targetText = `${item.title} ${item.subtitle || ""} ${item.category} ${(
        item.keywords || []
      ).join(" ")}`.toLowerCase();

      return terms.every((term) => targetText.includes(term));
    });
  }, [allItems, query]);

  // Reset index on search query change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Handle Dialog open / focus restoration
  useEffect(() => {
    if (isOpen) {
      previouslyFocusedRef.current = document.activeElement as HTMLElement;
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 30);
    } else {
      previouslyFocusedRef.current?.focus();
    }
  }, [isOpen]);

  // Keyboard navigation & Esc & Focus Trap
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (filteredItems.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        const selected = filteredItems[selectedIndex];
        if (selected) {
          selected.onSelect();
        }
      }
    },
    [filteredItems, selectedIndex, onClose]
  );

  // Auto scroll active item into view
  useEffect(() => {
    if (!listRef.current) return;
    const activeEl = listRef.current.querySelector<HTMLElement>(`#cmd-item-${selectedIndex}`);
    if (activeEl) {
      activeEl.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      className="fixed inset-0 z-[10001] flex items-start justify-center pt-20 sm:pt-28 px-4 bg-ink/75 backdrop-blur-sm transition-opacity duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E] shadow-hard-lg dark:shadow-hard-dark-lg flex flex-col overflow-hidden transition-all duration-150"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b-2 border-ink dark:border-cream bg-cream dark:bg-[#151515]">
          <span className="font-mono text-xs font-bold text-ink/70 dark:text-cream/70">
            &gt;
          </span>
          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-autocomplete="list"
            aria-controls="command-palette-list"
            aria-activedescendant={
              filteredItems[selectedIndex] ? `cmd-item-${selectedIndex}` : undefined
            }
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search..."
            className="w-full bg-transparent font-mono text-sm font-bold text-ink dark:text-cream placeholder:text-ink/40 dark:placeholder:text-cream/40 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="font-mono text-xs text-ink/60 dark:text-cream/60 hover:text-tomato px-1"
            >
              clear
            </button>
          )}
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 border border-ink/40 dark:border-cream/40 font-mono text-[10px] text-ink/60 dark:text-cream/60 bg-white dark:bg-ink">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <ul
          ref={listRef}
          id="command-palette-list"
          role="listbox"
          className="max-h-[340px] overflow-y-auto p-2 divide-y divide-ink/10 dark:divide-cream/10"
        >
          {filteredItems.length === 0 ? (
            <li className="p-6 text-center font-mono text-xs text-ink/60 dark:text-cream/60">
              No matching commands found for &quot;{query}&quot;.
            </li>
          ) : (
            filteredItems.map((item, idx) => {
              const isActive = idx === selectedIndex;

              return (
                <li
                  key={item.id}
                  id={`cmd-item-${idx}`}
                  role="option"
                  aria-selected={isActive}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  onClick={() => item.onSelect()}
                  className={`px-3 py-2.5 flex items-center justify-between gap-3 cursor-pointer transition-colors font-mono select-none ${
                    isActive
                      ? "bg-tomato text-white border-2 border-ink shadow-hard-sm"
                      : "text-ink dark:text-cream hover:bg-cream dark:hover:bg-[#252525]"
                  }`}
                >
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs uppercase font-extrabold px-1 py-0.2 border ${
                          isActive
                            ? "bg-white text-ink border-ink"
                            : "bg-ink/5 dark:bg-cream/10 text-ink/70 dark:text-cream/70 border-ink/20"
                        }`}
                      >
                        {item.category}
                      </span>
                      <span className="text-sm font-bold truncate">{item.title}</span>
                    </div>
                    {item.subtitle && (
                      <span
                        className={`text-xs truncate mt-0.5 ${
                          isActive ? "text-white/90" : "text-ink/60 dark:text-cream/60"
                        }`}
                      >
                        {item.subtitle}
                      </span>
                    )}
                  </div>

                  <div className="flex-shrink-0 flex items-center gap-2">
                    {item.shortcut && (
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.5 border ${
                          isActive
                            ? "border-white bg-white/20 text-white"
                            : "border-ink/20 dark:border-cream/20 text-ink/60 dark:text-cream/60"
                        }`}
                      >
                        {item.shortcut}
                      </span>
                    )}
                    {isActive && (
                      <span className="text-xs font-bold animate-pulse">↵</span>
                    )}
                  </div>
                </li>
              );
            })
          )}
        </ul>

        {/* Footer Hints */}
        <div className="px-4 py-2 border-t-2 border-ink dark:border-cream bg-cream/50 dark:bg-[#181818] flex items-center justify-between font-mono text-[10px] text-ink/60 dark:text-cream/60">
          <div className="flex items-center gap-3">
            <span>↑↓ navigate</span>
            <span>↵ select</span>
            <span>esc close</span>
          </div>
          <span>{filteredItems.length} commands</span>
        </div>
      </div>
    </div>
  );
}
