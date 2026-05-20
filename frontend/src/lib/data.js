export const PROFILE = {
  name: "Chandresh Patidar",
  firstName: "Chandresh",
  lastName: "Patidar",
  title: "Senior Frontend Engineer",
  shortBio:
    "Frontend Engineer with 5+ years building modern, scalable, performance-optimized web applications. I craft fast, accessible, and maintainable interfaces with React, Next.js, Svelte and TypeScript.",
  longBio:
    "I'm a Senior Frontend Engineer with 5+ years of experience designing and shipping production-grade interfaces — from procurement platforms to healthcare systems and high-traffic consumer apps. I specialize in React, Next.js, Svelte/SvelteKit and TypeScript, with deep practical knowledge of state management, micro-frontends, design systems, performance budgets and end-to-end testing. I care about clean code, sharp typography, and pixel-precise execution.",
  email: "chandreshk7722@gmail.com",
  github: "https://github.com/chandreshpatidar",
  githubHandle: "chandreshpatidar",
  linkedin: "https://www.linkedin.com/in/chandresh-patidar/",
  linkedinHandle: "chandresh-patidar",
  location: "Remote · India",
  yearsExperience: "5+",
  cvUrl: "/chandresh-patidar-cv.pdf",
};

export const NAV = [
  { label: "About", href: "#about", id: "01" },
  { label: "Work", href: "#experience", id: "02" },
  { label: "Projects", href: "#projects", id: "03" },
  { label: "Stack", href: "#skills", id: "04" },
  { label: "Contact", href: "#contact", id: "05" },
];

export const STATS = [
  { value: "5+", label: "Years shipping" },
  { value: "20+", label: "Production releases" },
  { value: "3", label: "Industries served" },
  { value: "∞", label: "Components built" },
];

export const SKILLS = {
  Frontend: [
    "React",
    "Next.js",
    "Svelte",
    "SvelteKit",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "GraphQL",
    "REST API",
    "Micro-Frontends",
  ],
  "State & UI": [
    "Redux",
    "Redux Thunk",
    "Redux Saga",
    "Zustand",
    "Tailwind CSS",
    "Material UI",
    "Ant Design",
    "Reshaped",
    "Shadcn",
    "Skeleton.dev",
  ],
  Backend: ["Node.js", "Express.js", "FaunaDB", "Firebase Firestore", "Vercel Blob"],
  Testing: ["Cypress", "TestCafe", "Jest", "React Testing Library", "SonarCloud"],
  Tooling: [
    "Git",
    "GitHub",
    "Gitlab",
    "Bitbucket",
    "Bit.dev",
    "Jira",
    "Figma",
    "ESLint",
    "Prettier",
    "Vercel",
  ],
  Performance: [
    "Code Splitting",
    "Lazy Loading",
    "Web Vitals",
    "Caching",
    "Bundle Analysis",
  ],
};

export const SKILLS_MARQUEE = [
  "React",
  "Next.js",
  "Svelte",
  "SvelteKit",
  "TypeScript",
  "Redux",
  "Zustand",
  "Tailwind CSS",
  "GraphQL",
  "Node.js",
  "Cypress",
  "Jest",
  "Micro-Frontends",
  "Bit.dev",
  "FaunaDB",
  "Firebase",
  "Performance",
];

export const EXPERIENCE = [
  {
    company: "Mercanis",
    role: "Frontend Engineer",
    period: "Feb 2025 — Present",
    location: "Remote",
    stack: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "Claude AI"],
    bullets: [
      "Built and optimized scalable, high-performance interfaces for a B2B procurement platform.",
      "Collaborated end-to-end with product, design, and backend in an agile environment.",
      "Developed reusable component libraries and enforced modern UI practices across the platform.",
      "Integrated REST APIs and managed complex state for seamless data flow.",
      "Improved load time and responsiveness via code splitting and lazy loading.",
    ],
  },
  {
    company: "Dechea",
    role: "Frontend Engineer",
    period: "Jan 2023 — Jan 2025",
    location: "Remote",
    stack: ["SvelteKit", "Svelte", "Next.js", "React", "GraphQL", "Shadcn", "FaunaDB"],
    bullets: [
      "Introduced new tools, libraries and standards that streamlined the development process.",
      "Designed and shipped browser-automation tests inside the CI pipeline, reducing production bugs.",
      "Built a patient file management system and an interactive teeth diagram for oral health.",
      "Customized Shadcn to integrate with Skeleton.dev themes.",
      "Helped scope sprints and drove backlog grooming with the product owner and scrum master.",
    ],
  },
  {
    company: "Appnosys Infotech",
    role: "Frontend Engineer",
    period: "Oct 2020 — Dec 2022",
    location: "Remote",
    stack: ["React", "Redux", "CSS", "REST APIs"],
    bullets: [
      "Developed user-facing features that improved engagement and usability.",
      "Implemented responsive design across the product suite for cross-device compatibility.",
      "Converted wireframes into production-ready code in lockstep with UI/UX designers.",
      "Optimized rendering and data handling for faster perceived performance.",
      "Built reusable components and shared libraries to accelerate delivery.",
    ],
  },
];

export const PROJECTS = [
  {
    name: "Mercanis",
    tag: "Procurement Platform",
    year: "2025",
    description:
      "Scalable frontend features for a complex B2B procurement workflow — built with React, SvelteKit, Next.js and TypeScript. Integrated AI capabilities to surface insights and automate parts of the procurement lifecycle.",
    stack: ["React", "SvelteKit", "Next.js", "TypeScript", "Tailwind", "Claude AI"],
    accent: "acid",
    size: "tall",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400",
  },
  {
    name: "Dechea",
    tag: "Healthcare · Patient Files",
    year: "2024",
    description:
      "Patient file management system with an interactive teeth diagram for collecting and visualizing oral health data. Built a Svelte-based FaunaDB migrator, schema designer, and lightweight CMS.",
    stack: ["SvelteKit", "GraphQL", "FaunaDB", "Shadcn", "Vercel"],
    accent: "white",
    size: "wide",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400",
  },
  {
    name: "Cult.fit",
    tag: "Health & Fitness",
    year: "2022",
    description:
      "Improved performance and structure for high traffic. Redesigned the health-tracking UX with clean, responsive interfaces and reusable Recharts dashboards.",
    stack: ["Next.js", "React", "Tailwind", "Recharts", "Formik"],
    accent: "red",
    size: "square",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400",
  },
];

export const EDUCATION = {
  degree: "Bachelor of Engineering — Computer Science",
  school: "Chameli Devi Institute of Technology and Management",
  period: "Aug 2016 — May 2020",
};

export const CERTS = [
  "JavaScript — Basic & Intermediate",
  "Frontend Developer (React) Certificate",
  "Node (Basic) Certificate",
  "CSS Certificate",
];

export const AWARDS = [
  "5+ Open-source contributions on GitHub",
  "HackerRank — Silver Badge in Problem Solving",
];
