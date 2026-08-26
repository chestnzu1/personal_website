"use client";

import { useEffect, useState } from "react";
import { content, links, type Lang } from "@/config/site";

const TAG_COLORS = [
  "border-amber-200 bg-amber-100 text-amber-700",
  "border-sky-200 bg-sky-100 text-sky-700",
  "border-emerald-200 bg-emerald-100 text-emerald-700",
  "border-rose-200 bg-rose-100 text-rose-700",
];

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
    <div className="relative min-h-dvh overflow-hidden font-body">
      {/* Decorative background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 size-96 animate-float rounded-full bg-amber-300/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/3 size-[28rem] animate-float-slow rounded-full bg-rose-300/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/4 size-96 animate-float rounded-full bg-sky-300/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 animate-float-slow select-none text-3xl opacity-20"
      >
        🧬
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-1/4 right-1/4 animate-float select-none text-3xl opacity-20"
      >
        ✨
      </div>

      {/* Language toggle */}
      <div className="fixed right-5 top-5 z-10 flex gap-1 rounded-full border border-white/60 bg-white/70 p-1 shadow-lg shadow-rose-100/50 backdrop-blur-md">
        {(["en", "zh"] as const).map((l) => (
          <button
            key={l}
            onClick={() => switchLang(l)}
            aria-pressed={lang === l}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all ${
              lang === l
                ? "bg-gradient-to-r from-rose-400 to-violet-400 text-white shadow"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {l === "en" ? "EN" : "中文"}
          </button>
        ))}
      </div>

      {/* Main card */}
      <main className="relative flex min-h-dvh items-center justify-center p-6">
        <section className="w-full max-w-2xl rounded-[2.5rem] border border-white/70 bg-white/75 p-8 shadow-2xl shadow-rose-200/50 backdrop-blur-xl md:p-12">
          <div className="flex items-center gap-5">
            <div className="grid size-16 place-items-center rounded-full bg-gradient-to-br from-amber-300 via-rose-400 to-violet-500 text-3xl shadow-lg shadow-rose-200 ring-4 ring-white md:size-20 md:text-4xl">
              🧬
            </div>
            <div>
              <p className="font-display text-xl text-slate-500 md:text-2xl">
                {t.greeting}
              </p>
              <h1 className="bg-gradient-to-r from-rose-500 via-amber-500 to-violet-500 bg-clip-text font-display text-4xl font-semibold text-transparent md:text-6xl">
                {t.name}{" "}
                <span className="inline-block animate-wave">👋</span>
              </h1>
            </div>
          </div>

          <p className="mt-6 font-display text-lg text-slate-600 md:text-xl">
            {t.tagline}
          </p>

          <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
            {t.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {t.tags.map((tag, i) => (
              <span
                key={tag}
                className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-transform hover:scale-105 ${
                  i % 2 ? "-rotate-2" : "rotate-2"
                } ${TAG_COLORS[i % TAG_COLORS.length]}`}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/70 pt-6">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gradient-to-r from-rose-400 to-violet-400 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-rose-200 transition-transform hover:scale-105"
            >
              {t.githubCta} ↗
            </a>
            <p className="text-sm text-slate-400">{t.footer}</p>
          </div>
        </section>
      </main>
    </div>
  );
}
