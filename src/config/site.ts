export type Lang = "en" | "zh";

// All site links live here.
export const links = {
  github: "https://github.com/chestnzu1",
};

// All page copy lives here — edit these to personalize the site.
export const content = {
  en: {
    greeting: "Hi, I'm",
    name: "Yi",
    tagline: "🧬 Bioinformatics · 🐍 Python · ✨ Open-source tools",
    about: [
      "I'm a bioinformatics researcher fascinated by the story of evolution. My work centers on gene function — Gene Ontology — and evolutionary analysis; I write small Python tools and share them on GitHub (like TEAL and GO-evolution).",
      "This site is a fresh start — a place for research notes, thoughts, and growth. 🌱",
    ],
    tags: ["🧬 Bioinformatics", "🐍 Python", "📊 Data", "🌱 Always learning"],
    education: [
      {
        degree: "Ph.D. in Bioinformatics",
        school: "University Name",
        year: "2020 - 2023",
      },
      {
        degree: "Bachelor of Science in Biology",
        school: "University Name",
        year: "2016 - 2020",
      },
    ],
    educationTitle: "Education",
    githubCta: "See my work on GitHub",
    footer: "© 2026 Yi · Built with Next.js",
  },
  zh: {
    greeting: "你好，我是",
    name: "Yi",
    tagline: "生物信息学 · 数据分析 · 开源工具",
    about: [
      "我是一名生物信息学研究者，着迷于生命演化的故事。我的工作围绕基因功能（Gene Ontology）与演化分析展开，平时用 Python 写一些小工具，并把它们开源在 GitHub 上（比如 TEAL 和 GO-evolution）。",
      "这个网站是一个新的开始 —— 用来记录研究、思考和不断的成长。🌱",
    ],
    tags: ["🧬 生物信息学", "🐍 Python", "📊 数据分析", "🌱 持续学习中"],
    education: [
      {
        degree: "生物信息学博士",
        school: "大学名称",
        year: "2020 - 2023",
      },
      {
        degree: "生物学学士学位",
        school: "大学名称",
        year: "2016 - 2020",
      },
    ],
    educationTitle: "教育背景",
    githubCta: "在 GitHub 上看看我的项目",
    footer: "© 2026 Yi · 由 Next.js 构建",
  },
} as const satisfies Record<Lang, unknown>;

export type Copy = (typeof content)["en"];
