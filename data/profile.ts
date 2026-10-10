// Single source of truth for the site's content.
// The PDF in public/files/ is a separate document. Keep the two in step.

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
  email: "hello@ashik.dev",
  phone: "+880 1750 358866",
  location: "Sylhet, Bangladesh",
  years: "7+",
  availability: "Available now for senior and lead backend roles.",
  relocation: "Open to relocation. EU work sponsorship welcome.",
  intro:
    "I'm a full-stack engineer with 7+ years of experience, mostly on the backend. At Dorik I led the backend team, ran the company's AWS infrastructure, and built two of its products: Consently, as the sole backend engineer, and Postmonk, as the only engineer. Today I run Feevox, my own product, and co-founded Erestro, where I build the full stack.",
  summary:
    "Full-stack engineer with 7+ years of experience building backend systems and leading engineering teams. At Dorik I led the backend team, ran the company's AWS infrastructure, and built two of its products: Consently.net as the sole backend engineer (600+ lifetime licenses sold) and Postmonk.co as the only engineer. I now run Feevox, my own product, and co-founded Erestro, where I build the full stack. I'm open to senior and lead backend roles.",
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

// What I'm building now
export interface Product {
  name: string;
  url: string;
  summary: string;
  audience: string;
  role: string;
  features: string[];
  stack: string[];
}

export const building: Product[] = [
  {
    name: "Feevox",
    url: "https://feevox.com",
    summary: "Customer feedback and public roadmaps.",
    audience: "For product teams who want to hear from their users and show what's coming next.",
    role: "Founder and sole engineer",
    features: ["Idea board with voting", "Public roadmap", "Changelog", "Embeddable widget", "ClickUp integration", "Webhooks", "Custom domains", "Stripe billing"],
    stack: ["Node.js", "Vue", "Nuxt", "MongoDB", "Redis", "Stripe"],
  },
  {
    name: "Erestro",
    url: "https://erestro.co.uk",
    summary: "Online ordering for restaurants.",
    audience: "For UK restaurants and takeaways that want to take orders through their own website.",
    role: "Co-founder and Full-stack Engineer",
    features: ["Online ordering", "Restaurant websites"],
    stack: [],
  },
];

// Products I shipped at Dorik
export interface Shipped {
  name: string;
  url: string;
  tagline: string;
  year: string;
  role: string;
  summary: string;
  numbers: { value: string; label: string }[];
  stack: string[];
}

export const shipped: Shipped[] = [
  {
    name: "Consently",
    url: "https://consently.net",
    tagline: "Consent management platform",
    year: "2024",
    role: "Sole backend engineer",
    summary:
      "GDPR and ePrivacy consent management. I designed the API, data model and compliance workflows, the BullMQ job processing, and the AWS infrastructure on ECS with Terraform.",
    numbers: [
      { value: "600+", label: "licenses sold on AppSumo" },
      { value: "920+", label: "clients" },
      { value: "99.99%", label: "uptime" },
    ],
    stack: ["Node.js", "Express", "MongoDB", "BullMQ", "Redis", "AWS ECS", "Terraform"],
  },
  {
    name: "Postmonk",
    url: "https://postmonk.co",
    tagline: "Social media scheduling",
    year: "2026",
    role: "Sole engineer, full stack",
    summary:
      "Schedules posts to Facebook, Instagram, X, LinkedIn and YouTube. I was the only engineer on it and built the whole product, from architecture to deployment, with queue-based scheduling on BullMQ and Redis.",
    numbers: [
      { value: "5", label: "social platforms" },
      { value: "1", label: "engineer" },
    ],
    stack: ["Node.js", "MongoDB", "Redis", "BullMQ", "Vue", "Nuxt"],
  },
];

export interface Role {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  headline: string;
  points: string[];
  stack: string[];
}

export const experience: Role[] = [
  {
    title: "Lead Software Engineer",
    company: "Dorik",
    location: "Sylhet, Bangladesh",
    start: "Apr 2025",
    end: "Aug 2026",
    headline: "Led the backend team and ran Dorik's AWS infrastructure for 100k+ users.",
    points: [
      "Built Postmonk.co for Dorik as the sole engineer, from architecture to deployment, with five social platform integrations and BullMQ/Redis scheduling.",
      "Led the backend team of 4+ engineers, covering hiring, mentoring, planning and performance oversight.",
      "Deployed and operated all Dorik services on AWS ECS, EC2 and Lambda for 100k+ users.",
      "Provisioned and scaled infrastructure with Terraform, ran CI/CD, and kept uptime above 99.9%.",
      "Set engineering standards for code review, architecture decisions and cross-team alignment.",
    ],
    stack: ["Node.js", "Express", "MongoDB", "GraphQL", "BullMQ", "RabbitMQ", "Redis", "Terraform", "AWS", "Docker"],
  },
  {
    title: "Senior Software Engineer, Backend",
    company: "Dorik",
    location: "Sylhet, Bangladesh",
    start: "Jan 2023",
    end: "Apr 2025",
    headline: "Architected Consently and owned its whole backend.",
    points: [
      "Architected and delivered Consently.net and owned its whole backend: API design, data model, GDPR and ePrivacy workflows, and infrastructure.",
      "Consently serves 920+ clients on 894 domains, handling 672K+ consents and 11M+ pageviews a month at 99.99% uptime.",
      "Built high-performance compliance systems whose patterns the rest of the team adopted.",
      "Reviewed code and mentored junior and mid-level engineers.",
    ],
    stack: ["Node.js", "Express", "MongoDB", "GraphQL", "BullMQ", "RabbitMQ", "Redis", "Terraform", "AWS"],
  },
  {
    title: "Lead Front-end Developer",
    company: "Relantin",
    location: "Remote",
    start: "Nov 2021",
    end: "Oct 2022",
    headline: "Led a team of 3+ developers across client projects.",
    points: [
      "Assigned work and reviewed pull requests for a team of 3+ developers.",
      "Set up frontend architecture and state management across several client projects.",
      "Planned and prioritised work to keep delivery moving across each project.",
    ],
    stack: ["Vue", "Nuxt", "React", "Next.js", "TypeScript", "SolidJS"],
  },
  {
    title: "Front-end Developer",
    company: "Rootsoft IT",
    location: "Sylhet, Bangladesh",
    start: "Feb 2021",
    end: "Oct 2021",
    headline: "Cut page load times by 40%+ with Nuxt server-side rendering.",
    points: [
      "Built reusable components and integrated REST APIs for production apps.",
      "Cut page load times by 40%+ with Nuxt server-side rendering.",
    ],
    stack: ["Vue", "Nuxt"],
  },
  {
    title: "Co-Founder & Software Engineer",
    company: "HuddleByte",
    location: "Sylhet, Bangladesh",
    start: "Sep 2019",
    end: "Mar 2020",
    headline: "Co-founded a web agency and built 10+ client projects.",
    points: [
      "Co-founded a digital agency building web products for startups and small businesses.",
      "Worked full-stack on 10+ client projects and mentored 2 to 3 developers.",
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
    items: ["AWS ECS, EC2, Lambda", "Terraform", "Docker", "CI/CD pipelines", "Infrastructure as code"],
  },
  {
    group: "Frontend",
    items: ["JavaScript", "TypeScript", "Vue", "Nuxt", "React", "Next.js", "SolidJS", "Vuetify", "Pinia, Vuex, Redux"],
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

export const navLinks = [
  { label: "Now", href: "/#now" },
  { label: "Shipped", href: "/#shipped" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];
