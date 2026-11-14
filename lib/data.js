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
    title: "SecurXperts Technologies – Job Portal Platform",
    summary: "A job portal web application similar to modern job platforms, with dynamic job listing pages, search interfaces and interactive UI components.",
    stack: ["Next.js", "React.js", "FastAPI", "REST API"], status: "Completed", demoUrl: "https://securxperts.com/", repoUrl: "https://securxperts.com/",
  },
  {
    title: "Hospital Management System",
    summary: "Frontend modules for managing patient records and hospital workflows, with dashboards and form-based interfaces for data entry and management.",
    stack: ["React.js", "JavaScript", "REST API", "Responsive Design"], status: "Completed", demoUrl: "", repoUrl: "",
  },
  {
    title: "Portfolio Development",
    summary: "A responsive personal portfolio presenting frontend skills, professional experience, selected work and recruiter contact options.",
    stack: ["Next.js", "React.js", "Tailwind CSS", "JavaScript"], status: "Completed", demoUrl: "https://priyavardhan-portfolio.web.app/", repoUrl: "https://priyavardhan-portfolio.web.app/",
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
  { qualification: "Bachelor of Technology (B.Tech)", institution: "Eluru College of Engineering & Technology", specialization: "Computer Science & Engineering", period: "2021-2024" },
  { qualification: "Intermediate", institution: "Narayana Junior College", specialization: "MPC", period: "2018-2020" },
  { qualification: "Secondary School Certificate", institution: "Sri Sai High School", specialization: "SSC", period: "2018" },
];

export const experience = [
  {
    role: "Jr. Software Engineer – Frontend Developer",
    org: "SecurXperts Technologies Pvt. Ltd.",
    period: "Oct 2025 – july 2026",
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
    points: [
      "Designed and documented UI components and frontend workflows using React.js-based applications.",
      "Created detailed technical and user documentation for features, APIs, and application usage.",
      "Worked closely with development teams to ensure accurate documentation of system functionality.",
      "Contributed to improving developer onboarding through structured and easy-to-understand documentation.",
    ],
  },
];

export const posts = [];
export const testimonials = [];
