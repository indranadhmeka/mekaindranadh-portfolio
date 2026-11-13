// Central portfolio content. Replace demo/repository URLs only with verified links.
export const site = {
  name: "Meka Indranadh",
  role: "Frontend Developer",
  tagline: "I build responsive, accessible and performance-focused web experiences with React.js and Next.js.",
  location: "Hyderabad, India",
  email: "mekaindranadh@gmail.com",
  resumeUrl: "/resume.pdf",
  about: [
    "I am a frontend developer focused on building clean, responsive and user-friendly web applications.",
    "I work with React.js, JavaScript, Next.js, HTML5, CSS3 and Tailwind CSS, and enjoy turning product requirements into reusable interfaces and reliable user experiences.",
  ],
  socials: [
    { label: "GitHub", url: "https://github.com/indranadhmeka" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/indranadh-meka-5064712a4/" },
  ],
};

export const skills = [
  { group: "Frontend Development", items: ["React.js", "JavaScript (ES6+)", "Next.js", "HTML5", "CSS3", "Tailwind CSS"] },
  { group: "API & Integration", items: ["REST API Integration", "Fetch / Axios", "JSON", "Authentication Flows"] },
  { group: "Tools & Workflow", items: ["Git", "GitHub", "Responsive Design", "Reusable Components", "Agile / Scrum"] },
];

export const projects = [
  {
    title: "Developer Portfolio Website",
    summary: "A responsive personal portfolio presenting frontend skills, professional experience, selected work and recruiter contact options.",
    stack: ["Next.js", "React.js", "Tailwind CSS", "JavaScript"], status: "Completed", demoUrl: "", repoUrl: "",
  },
  {
    title: "Vardhan Dairy Farm Website",
    summary: "A customer-facing dairy website concept for showcasing fresh milk and ghee products, explaining subscriptions and helping customers place orders.",
    stack: ["Next.js", "React.js", "Tailwind CSS", "Firebase"], status: "In development", demoUrl: "", repoUrl: "",
  },
  {
    title: "Vardhan Dairy Farm Mobile App",
    summary: "An ongoing customer, admin and delivery app project planned for OTP login, milk subscriptions, orders, delivery slots, payments and order tracking.",
    stack: ["React Native", "Firebase", "Authentication", "Order Management"], status: "Ongoing", demoUrl: "", repoUrl: "",
  },
];

export const education = [
  { qualification: "Bachelor of Technology (B.Tech)", institution: "Eluru College of Engineering & Technology", specialization: "Computer Science & Engineering", period: "2024" },
  { qualification: "Intermediate", institution: "Institution details to be added", specialization: "", period: "" },
  { qualification: "SSC", institution: "School details to be added", specialization: "", period: "" },
];

export const experience = [
  {
    role: "Jr. Software Engineer – Frontend Developer",
    org: "SecurXperts Technologies Pvt. Ltd.",
    period: "Oct 2025 – Apr 2026",
    points: [
      "Built reusable React UI components, reducing repeat development effort by approximately 25%.",
      "Integrated REST APIs and improved frontend error handling, reducing API-handling issues by approximately 20%.",
      "Applied lazy loading, code splitting and memoization, contributing to approximately 30% faster page performance.",
      "Improved UI reliability through debugging and testing, targeting a reduction in recurring bugs.",
      "Worked with JavaScript, React.js, HTML5, CSS3, Tailwind CSS, Git and Agile/Scrum workflows.",
    ],
  },
  {
    role: "Frontend & UI Documentation Support",
    org: "Lauratek",
    period: "Project experience",
    points: ["Supported UI documentation and frontend-related project work."],
  },
];

export const posts = [];
export const testimonials = [];
