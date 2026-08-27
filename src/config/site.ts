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
    publicationsTitle: "Publications",
    publications: [
      {
        type: "Journal Publication",
        url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=v6OOLJYAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=v6OOLJYAAAAJ:UHK10RUVsp4C",
      },
      {
        type: "Conference Publication",
        url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=v6OOLJYAAAAJ&sortby=pubdate&citation_for_view=v6OOLJYAAAAJ:LI9QrySNdTsC",
      },
      {
        type: "Conference Publication",
        url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=v6OOLJYAAAAJ&sortby=pubdate&citation_for_view=v6OOLJYAAAAJ:IUKN3-7HHlwC",
      },
    ],
    education: [
      {
        degree: "Ph.D. in Bioinformatics",
        school: "Leiden University",
        year: "2018 - 2023",
      },
      {
        degree: "Master's in Biology",
        school: "Wageningen University",
        year: "2016 - 2018",
      },
      {
        degree: "Bachelor of Science in Life Sciences",
        school: "China Agricultural University",
        year: "2012 - 2016",
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
    publicationsTitle: "发表论文",
    publications: [
      {
        type: "期刊论文",
        url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=v6OOLJYAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=v6OOLJYAAAAJ:UHK10RUVsp4C",
      },
      {
        type: "会议论文",
        url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=v6OOLJYAAAAJ&sortby=pubdate&citation_for_view=v6OOLJYAAAAJ:LI9QrySNdTsC",
      },
      {
        type: "会议论文",
        url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=v6OOLJYAAAAJ&sortby=pubdate&citation_for_view=v6OOLJYAAAAJ:IUKN3-7HHlwC",
      },
    ],
    education: [
      {
        degree: "生物信息学博士",
        school: "莱顿大学",
        year: "2018 - 2023",
      },
      {
        degree: "生物学硕士",
        school: "瓦赫宁根大学",
        year: "2016 - 2018",
      },
      {
        degree: "生命科学学士学位",
        school: "中国农业大学",
        year: "2012 - 2016",
      },
    ],
    educationTitle: "教育背景",
    githubCta: "在 GitHub 上看看我的项目",
    footer: "© 2026 Yi · 由 Next.js 构建",
  },
} as const satisfies Record<Lang, unknown>;

export type Copy = (typeof content)["en"];
