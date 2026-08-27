"use client";

import { useEffect, useState } from "react";
import { content, links, type Lang } from "@/config/site";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];

  useEffect(() => {
    const saved = window.localStorage.getItem("lang");
    if (saved === "en" || saved === "zh") setLang(saved);
  }, []);

  const switchLang = (next: Lang) => {
    setLang(next);
    window.localStorage.setItem("lang", next);
  };

  return (
    <div className="min-h-dvh bg-white font-body">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <h1 className="text-lg font-semibold text-slate-900">{t.name}</h1>
          <div className="flex gap-1 rounded-lg border border-slate-200 bg-slate-50 p-1">
            {(["en", "zh"] as const).map((l) => (
              <button
                key={l}
                onClick={() => switchLang(l)}
                aria-pressed={lang === l}
                className={`px-3 py-1 text-sm font-medium transition-colors ${
                  lang === l
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {l === "en" ? "EN" : "中文"}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Section */}
            <section className="mb-16">
              <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
                {t.greeting} <span className="text-slate-600">{t.name}</span>
              </h2>
              <p className="mt-4 text-lg text-slate-600 md:text-xl">
                {t.tagline}
              </p>
            </section>

            {/* About */}
            <section className="mb-16">
              <div className="space-y-4 leading-relaxed text-slate-600">
                {t.about.map((p) => (
                  <p key={p} className="text-base md:text-lg">
                    {p}
                  </p>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section className="mb-16">
              <h3 className="mb-6 text-xl font-semibold text-slate-900">
                {lang === "en" ? "Skills & Interests" : "技能和兴趣"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Projects Placeholder */}
            <section className="mb-16">
              <h3 className="mb-6 text-xl font-semibold text-slate-900">
                {lang === "en" ? "Projects" : "项目"}
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 hover:bg-slate-100 transition-colors">
                  <h4 className="font-semibold text-slate-900">
                    {lang === "en" ? "Project 1" : "项目 1"}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600">
                    {lang === "en"
                      ? "Your project description goes here"
                      : "项目描述在这里"}
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 hover:bg-slate-100 transition-colors">
                  <h4 className="font-semibold text-slate-900">
                    {lang === "en" ? "Project 2" : "项目 2"}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600">
                    {lang === "en"
                      ? "Your project description goes here"
                      : "项目描述在这里"}
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="border-t border-slate-200 pt-8">
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                {t.githubCta} ↗
              </a>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-6 space-y-8">
              {/* Publications */}
              <section>
                <h3 className="mb-4 text-lg font-semibold text-slate-900">
                  {t.publicationsTitle}
                </h3>
                <div className="space-y-4">
                  {t.publications.map((pub, idx) => (
                    <a
                      key={idx}
                      href={pub.url}
                      target="_blank"
                      rel="noreferrer"
                      className="block group"
                    >
                      <div className="flex items-start gap-2">
                        <span className="mt-1 inline-block rounded bg-slate-900 px-2 py-0.5 text-xs font-semibold text-white whitespace-nowrap">
                          {pub.type}
                        </span>
                        <p className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors line-clamp-3">
                          {pub.title}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section>
                <h3 className="mb-6 text-lg font-semibold text-slate-900">
                  {t.educationTitle}
                </h3>
                <div className="space-y-6">
                  {t.education.map((edu, idx) => (
                    <div key={idx} className="pb-6 border-b border-slate-200 last:border-b-0 last:pb-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900 text-sm">
                            {edu.degree}
                          </h4>
                          <p className="mt-1 text-xs text-slate-600">
                            {edu.school}
                          </p>
                        </div>
                        <span className="text-xs text-slate-500 whitespace-nowrap ml-2">
                          {edu.year}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-8">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm text-slate-600">{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}
