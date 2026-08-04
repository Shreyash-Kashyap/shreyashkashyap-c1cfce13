export const PROFILE = {
  name: "Shreyash Kashyap",
  role: "Software Developer",
  email: "shreyashkashyap121@gmail.com",
  phone: "9031991499",
  github: "https://github.com/Shreyash-Kashyap",
  linkedin: "https://www.linkedin.com/in/shreyash-kashyap-680623323",
  location: "Bhagalpur, India",
};

export const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const SKILL_GROUPS = [
  {
    title: "Languages",
    accent: "iris" as const,
    items: ["Python", "JavaScript", "C", "HTML", "CSS"],
  },
  {
    title: "Data & Databases",
    accent: "cyan" as const,
    items: ["MySQL", "MongoDB", "Data Analytics", "Query Optimisation"],
  },
  {
    title: "Core CS",
    accent: "amber" as const,
    items: ["DSA", "OOP", "Operating Systems", "DBMS", "Computer Networks"],
  },
  {
    title: "Tooling",
    accent: "rose" as const,
    items: ["Git", "GitHub", "VS Code", "React", "Node.js"],
  },
];

export const MARQUEE = [
  "Python",
  "MySQL",
  "MongoDB",
  "React.js",
  "Node.js",
  "Express",
  "JavaScript",
  "DSA",
  "Firebase",
  "Git",
  "DBMS",
  "AI / ML basics",
];

export const PROJECTS = [
  {
    index: "01",
    title: "AI-Powered E-Commerce Platform",
    tag: "Major Project",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Firebase", "Razorpay"],
    blurb:
      "A full-stack storefront where AI does the merchandising. Google Auth for one-tap sign-in, Razorpay for real payments, an admin dashboard for orders, users and products, and a recommendation layer that reshapes the catalogue per shopper.",
    href: "https://github.com/Shreyash-Kashyap",
    accent: "iris" as const,
  },
  {
    index: "02",
    title: "Resume Analyzer",
    tag: "CLI Tool",
    stack: ["Python", "Regex", "Text Parsing"],
    blurb:
      "A command-line tool that reads a resume the way an ATS does — pulling contact details, detecting key sections, scanning target keywords and scoring keyword density so candidates can fix the gaps before a recruiter ever sees the file.",
    href: "https://github.com/Shreyash-Kashyap",
    accent: "cyan" as const,
  },
  {
    index: "03",
    title: "Notes Web App",
    tag: "Frontend",
    stack: ["HTML", "CSS", "JavaScript", "localStorage"],
    blurb:
      "Create, edit, delete and search notes with instant filtering as you type. Everything persists locally, the interface stays out of the way, and the layout holds up from a phone screen to an ultrawide.",
    href: "https://github.com/Shreyash-Kashyap/NOTES-APP",
    accent: "amber" as const,
  },
];

export const TIMELINE = [
  {
    period: "Jul 2025 — Sep 2025",
    title: "AI Solutions Intern",
    org: "Kruman Corporations OPC Pvt. Ltd.",
    detail:
      "Planned, built and shipped real-world AI SaaS tools. Hands-on with testing and automation features for client-facing applications.",
  },
  {
    period: "2022 — 2026",
    title: "B.Tech, CSE (Data Science)",
    org: "Dr. B. C. Roy Engineering College, Durgapur",
    detail: "Core focus on DSA, DBMS, OS and applied data science.",
  },
  {
    period: "2020 — 2022",
    title: "Senior Secondary, CBSE",
    org: "N.N. International School, Sultanganj, Bihar",
    detail: "Science stream, 62%.",
  },
  {
    period: "2019 — 2020",
    title: "Secondary, ICSE",
    org: "St. Teresa's School, Bhagalpur, Bihar",
    detail: "Science stream, 75.8%.",
  },
];

export const CERTIFICATIONS = [
  { name: "Data Analytics Virtual Internship", org: "Deloitte (Forage)", year: "2025" },
  { name: "Introduction to Modern AI", org: "Cisco Networking Academy", year: "2025" },
  { name: "HTML Training", org: "IIT Bombay — Spoken Tutorial", year: "2024" },
];

export const STATS = [
  { value: "3+", label: "Shipped projects" },
  { value: "3 mo", label: "AI SaaS internship" },
  { value: "2026", label: "Graduated" },
];