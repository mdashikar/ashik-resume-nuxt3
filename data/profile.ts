// Single source of truth for the site's content.
// Mirrors public/files/Md_Ashiqur_Rahman_Resume_2026.pdf. Update both together.

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
  availability: "Open to relocation. EU work sponsorship welcome.",
  intro:
    "Full-stack engineer focused on backend and cloud. I design Node.js systems, run their AWS infrastructure with Terraform, and lead the engineers who build them.",
  summary:
    "Full-stack engineer with 7+ years of experience building backend systems and leading engineering teams at startups and agencies. At Dorik I architected and shipped Consently.net, which has sold 600+ lifetime licenses, and built Postmonk.co on my own from start to finish. I also run the cloud infrastructure and lead the backend team behind products used by 100k+ people.",
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

// Short facts shown beside the intro
export const facts = [
  { label: "Experience", value: "7+ years" },
  { label: "Team", value: "Lead of 4+ backend engineers" },
  { label: "Scale", value: "100k+ users across Dorik" },
  { label: "Reliability", value: "99.9%+ uptime on Dorik services" },
];

export interface Project {
  name: string;
  url: string;
  tagline: string;
  year: string;
  context: string;
  role: string;
  summary: string;
  built: string[];
  outcome: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    name: "Consently",
    url: "https://consently.net",
    tagline: "Consent management platform",
    year: "2024",
    context: "Dorik",
    role: "Sole backend engineer",
    summary:
      "A GDPR and ePrivacy consent platform. Site owners add a consent banner, and Consently records each visitor's choice and handles the compliance work around it.",
    built: [
      "Designed the API, data model and compliance workflows from scratch",
      "Background job processing with BullMQ and Redis",
      "AWS infrastructure on ECS, provisioned with Terraform",
    ],
    outcome:
      "Launched on AppSumo in January 2026 and sold 600+ lifetime licenses within months. It now serves 920+ clients at 99.99% uptime, and its backend patterns were adopted across Dorik's engineering team.",
    stack: ["Node.js", "Express", "MongoDB", "BullMQ", "Redis", "AWS ECS", "Terraform"],
  },
  {
    name: "Postmonk",
    url: "https://postmonk.co",
    tagline: "Social media scheduling",
    year: "2026",
    context: "Dorik",
    role: "Sole engineer, frontend and backend",
    summary: "Plan and schedule posts to Facebook, Instagram, X, LinkedIn and YouTube from one place.",
    built: [
      "Built the whole product myself, from architecture to deployment",
      "Integrated five social platform APIs",
      "Queue-based scheduling with BullMQ and Redis",
    ],
    outcome: "Launched in Q2 2026.",
    stack: ["Node.js", "MongoDB", "Redis", "BullMQ", "Vue", "Nuxt"],
  },
  {
    name: "Feevox",
    url: "https://feevox.com",
    tagline: "Feedback and product roadmaps",
    year: "Ongoing",
    context: "Own product",
    role: "Solo project",
    summary:
      "A feedback tool for product teams. Users submit ideas and vote on them, and teams publish a public roadmap and changelog.",
    built: [
      "Embeddable widget, ClickUp integration, webhooks and custom domains",
      "Subscription billing with Stripe on Free, Pro and Team plans ($9 to $29 a month)",
    ],
    outcome: "Live at feevox.com.",
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
      "Built Postmonk.co alone, from architecture to deployment, with five social platform integrations and BullMQ/Redis scheduling.",
      "Lead the backend team of 4+ engineers, covering hiring, mentoring, planning and performance reviews.",
      "Deploy and operate all Dorik services on AWS ECS, EC2 and Lambda for 100k+ users.",
      "Provision and scale infrastructure with Terraform and keep CI/CD and uptime at 99.9%+.",
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
    points: [
      "Architected and delivered Consently.net and owned its whole backend: API design, data model, GDPR and ePrivacy workflows, and infrastructure.",
      "Consently now serves 920+ clients on 894 domains, handling 672K+ consents a month across 11M+ pageviews at 99.99% uptime.",
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
    items: ["AWS ECS", "AWS EC2", "AWS Lambda", "Terraform", "Docker", "CI/CD pipelines", "Infrastructure as code"],
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
      "Ashik is an amazing guy to work with. He possesses diverse, stunning tech skills, but what amazed me most is his continuous strive to learn more. In vacancy announcements we often see that an 'anything can do' attitude is required. IMO, he is the perfect example of such a talent. In the office he is at his best as a great professional, while outside the office you might find him a great friend.",
  },
];

export const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];
