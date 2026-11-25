export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://unathi-dlamini.vercel.app";

export const profile = {
  name: "Unathi Dlamini",
  role: "Full-stack graduate developer",
  location: "Pretoria, Gauteng",
  status: "Open to graduate software engineering roles",
  email: "unathidlamini83@gmail.com",
  linkedin: "https://www.linkedin.com/in/unathi-dlamini-237007224",
  github: "https://github.com/unathi3",
  summary:
    "BSc Computer Science graduate from the University of Pretoria, finishing BSc Honours in November 2026. I build mobile apps with React Native and TypeScript, backends in Python and Flask, and I test what I build.",
};

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "C++", "SQL", "HTML"] },
  { group: "Front end & mobile", items: ["React Native", "Expo"] },
  { group: "Back end & data", items: ["Convex", "Flask", "SQLite", "Relational database design"] },
  { group: "Testing", items: ["Jest", "pytest", "k6", "JMeter", "Python test scripts"] },
  { group: "Tools", items: ["Git", "CI/CD workflows", "Claude Code", "Technical documentation"] },
  { group: "Data & AI", items: ["Natural Language Processing", "Data Mining", "Data analytics"] },
];

export const education = [
  {
    title: "BSc Honours, Computer Science",
    place: "University of Pretoria",
    when: "Expected Nov 2026",
    detail: "Honours research project with the CSEDAR research unit. Modules include Data Mining.",
  },
  {
    title: "BSc Computer Science",
    place: "University of Pretoria",
    when: "2025",
    detail: "Distinctions in Software Engineering (83%), Database Systems (75%), Natural Language Processing (93%) and Community-Based Project (89%).",
  },
  {
    title: "National Senior Certificate (IEB)",
    place: "Bridgehouse School",
    when: "2021",
    detail: "",
  },
];

export const certifications = [
  "IBM SkillsBuild, Data Analytics Fluency Pathway: Data Literacy, Data Classification, and Data Collection and Analysis (2026)",
];
