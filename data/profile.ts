// Single source of truth for the site's content.
// Mirrors public/files/Md_Ashiqur_Rahman_Resume_2026.pdf — update both together.

export const site = {
  url: "https://ashik.dev",
  resumePdf: "/files/Md_Ashiqur_Rahman_Resume_2026.pdf",
  ogImage: "https://ashik.dev/images/og-image.png",
};

export const profile = {
  name: "Md Ashiqur Rahman",
  shortName: "Ashik",
  title: "Full-Stack Engineer",
  focus: "Backend & Cloud Infrastructure",
  currentRole: "Lead Software Engineer",
  currentCompany: "Dorik",
  email: "md.ashik.ar@gmail.com",
  phone: "+880 1750 358866",
  location: "Sylhet, Bangladesh",
  availability: "Open to relocation · EU work sponsorship welcome",
  summary:
    "Full-stack engineer with 7+ years of experience building scalable backend systems and leading engineering teams at startups and agencies. At Dorik, I architected and shipped multiple production applications — including Consently.net (600+ lifetime licenses sold) and Postmonk.co (built solo, end-to-end) — while managing cloud infrastructure and a backend team serving 100k+ users.",
  links: [
    { label: "GitHub", handle: "github.com/mdashikar", href: "https://github.com/mdashikar" },
    { label: "LinkedIn", handle: "linkedin.com/in/mdashikar", href: "https://www.linkedin.com/in/mdashikar" },
    {
      label: "Stack Overflow",
      handle: "stackoverflow.com/users/6001025",
      href: "https://stackoverflow.com/users/6001025/md-ashiqur-rahman",
    },
    { label: "X", handle: "x.com/mdashikar", href: "https://x.com/mdashikar" },
  ],
};

export const highlights = [
  { value: "7+", label: "years shipping production software" },
  { value: "100k+", label: "users served across Dorik's product suite" },
  { value: "600+", label: "Consently lifetime licenses sold on AppSumo" },
  { value: "99.99%", label: "Consently platform uptime" },
];

export interface Project {
  name: string;
  url: string;
  tagline: string;
  context: string;
  role: string;
  description: string;
  points: string[];
  stack: string[];
  stats?: { value: string; label: string }[];
}

export const projects: Project[] = [
  {
    name: "Consently",
    url: "https://consently.net",
    tagline: "Consent management platform",
    context: "Dorik · Q3 2024",
    role: "Sole backend engineer",
    description:
      "A GDPR / ePrivacy consent platform. I owned the entire backend — API design, data modelling, compliance workflows, background processing and the AWS infrastructure underneath it.",
    points: [
      "Launched on AppSumo in Jan 2026 — 600+ lifetime licenses sold within months",
      "BullMQ job processing for compliance workflows; infra provisioned with Terraform on AWS ECS",
      "Patterns established here were adopted across the engineering team",
    ],
    stack: ["Node.js", "Express", "MongoDB", "BullMQ", "Redis", "AWS ECS", "Terraform"],
    stats: [
      { value: "920+", label: "clients" },
      { value: "894", label: "domains" },
      { value: "672K+", label: "consents / month" },
      { value: "11M+", label: "pageviews / month" },
    ],
  },
  {
    name: "Postmonk",
    url: "https://postmonk.co",
    tagline: "Social media scheduling",
    context: "Dorik · Q2 2026",
    role: "Sole engineer, full-stack",
    description:
      "Built end-to-end — frontend, backend, deployment — as the only engineer. Schedules and publishes content across five social networks.",
    points: [
      "Integrated Facebook, Instagram, X, LinkedIn and YouTube APIs",
      "Queue-based scheduling powered by BullMQ and Redis",
    ],
    stack: ["Node.js", "MongoDB", "Redis", "BullMQ", "Vue", "Nuxt"],
  },
  {
    name: "Feevox",
    url: "https://feevox.com",
    tagline: "Customer feedback & product roadmaps",
    context: "Solo project",
    role: "Founder & engineer",
    description:
      "A full-stack SaaS for product teams: idea collection, community voting, public roadmaps and changelogs.",
    points: [
      "Embeddable widget, ClickUp integration, webhooks and custom domains",
      "Multi-tier billing with Stripe — Free, Pro and Team plans",
    ],
    stack: ["Node.js", "Vue", "Nuxt", "MongoDB", "Redis", "Stripe"],
  },
];

export interface Role {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  points: string[];
  stack: string[];
}

export const experience: Role[] = [
  {
    title: "Lead Software Engineer",
    company: "Dorik",
    location: "Sylhet, Bangladesh",
    start: "Apr 2025",
    end: "Present",
    points: [
      "Built Postmonk.co end-to-end as sole engineer — from architecture through deployment — integrating 5+ social platform APIs with BullMQ/Redis queue-based scheduling.",
      "Lead the backend team of 4+ engineers: hiring, mentorship, task planning and performance oversight.",
      "Manage deployments of all Dorik services on AWS (ECS, EC2, Lambda), serving 100k+ users.",
      "Own infrastructure provisioning and scaling with Terraform; oversee CI/CD and operational reliability at 99.9%+ uptime.",
      "Define engineering standards: code review, architecture decisions and cross-team technical alignment.",
    ],
    stack: ["Node.js", "Express", "MongoDB", "GraphQL", "BullMQ", "RabbitMQ", "Redis", "Terraform", "AWS", "Docker"],
  },
  {
    title: "Senior Software Engineer (Backend)",
    company: "Dorik",
    location: "Sylhet, Bangladesh",
    start: "Jan 2023",
    end: "Apr 2025",
    points: [
      "Architected and delivered Consently.net, owning the entire backend: API design, data modelling, GDPR/ePrivacy compliance workflows and infrastructure.",
      "Platform now serves 920+ clients across 894 domains — 672K+ monthly consents over 11M+ monthly pageviews at 99.99% uptime.",
      "Designed high-performance backend systems for compliance workflows; established patterns adopted across the team.",
      "Code reviews and technical mentorship for junior and mid-level engineers.",
    ],
    stack: ["Node.js", "Express", "MongoDB", "GraphQL", "BullMQ", "RabbitMQ", "Redis", "Terraform", "AWS"],
  },
  {
    title: "Lead Front-end Developer",
    company: "Relantin",
    location: "Remote",
    start: "Nov 2021",
    end: "Oct 2022",
    points: [
      "Managed task assignment and pull request reviews for a team of 3+ developers.",
      "Structured frontend architecture and state management across multiple client projects.",
      "Planned and prioritised work to remove bottlenecks across the project lifecycle.",
    ],
    stack: ["Vue", "Nuxt", "React", "Next.js", "TypeScript", "SolidJS"],
  },
  {
    title: "Front-end Developer",
    company: "Rootsoft IT",
    location: "Sylhet, Bangladesh",
    start: "Feb 2021",
    end: "Oct 2021",
    points: [
      "Built reusable, modular components and integrated REST APIs for production applications.",
      "Improved page load times by 40%+ with Nuxt server-side rendering.",
    ],
    stack: ["Vue", "Nuxt"],
  },
  {
    title: "Co-Founder & Software Engineer",
    company: "HuddleByte",
    location: "Sylhet, Bangladesh",
    start: "Sep 2019",
    end: "Mar 2020",
    points: [
      "Co-founded a digital agency delivering end-to-end web solutions for startups and SMEs.",
      "Full-stack engineer on 10+ client projects from concept to deployment, mentoring 2–3 developers.",
    ],
    stack: [],
  },
];

export const skills = [
  {
    group: "Backend",
    items: ["Node.js", "Express", "TypeScript", "REST API design", "GraphQL", "Microservices", "BullMQ", "RabbitMQ", "MongoDB", "Redis", "PostgreSQL"],
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS ECS", "AWS EC2", "AWS Lambda", "Terraform", "Docker", "CI/CD pipelines", "Infrastructure as Code"],
  },
  {
    group: "Frontend",
    items: ["JavaScript", "TypeScript", "Vue", "Nuxt", "React", "Next.js", "SolidJS", "Vuetify", "Pinia / Vuex / Redux"],
  },
  {
    group: "Practices",
    items: ["System design", "Code review", "Team leadership", "Mentoring", "Deployment management", "Agile"],
  },
];

export const education = {
  degree: "B.Sc. in Computer Science and Engineering",
  school: "Leading University",
  location: "Sylhet, Bangladesh",
  years: "2014 – 2018",
  coursework: "Data Structures & Algorithms, OOP, Computer Architecture, Operating Systems, AI, Networking",
};

export const testimonials = [
  {
    name: "Farid Chowdhury",
    role: "Software Engineer, Technovative Solutions (TVS)",
    quote:
      "I've had the joy of working with Ashik, who is the Frontend Team Lead, ensuring that our technologies and website were doing what we needed them to do. He is wonderful at leading and teaching other technical skills while being a supportive and caring colleague. I'm glad to have worked closely with Ashik and delighted that we still co-work and collaborate with each other.",
  },
  {
    name: "Jaber Ahmed",
    role: "Senior Full Stack Developer, Worktech Labs",
    quote:
      "Ashik is an amazing guy to work with. He possesses diverse, stunning tech skills, but what amazed me most is his continuous strive to learn more. In vacancy announcements we often see that an 'anything-can-do attitude' is required — IMO, he is the perfect example of such a talent. In the office he is at his best as a great professional, while outside the office you might find him a great friend.",
  },
];

export const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];
