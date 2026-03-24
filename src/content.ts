export type NavItem = { id: string; label: string };

export type Job = {
  title: string;
  org: string;
  location: string;
  stack?: string;
  description: string;
};

export type Project = {
  title: string;
  url: string;
  summary: string;
  tech?: string[];
};

export type SkillGroup = { heading: string; items: string[] };

export type Degree = {
  school: string;
  degree: string;
  detail?: string;
};

export type Testimonial = {
  quote: string;
  attribution: string;
};

export const nav: NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  name: "Aarjav Sheth",
  role: "Staff Software engineer",
  lede:
    "Designing distributed systems and AI-powered platforms — combining enterprise-grade engineering with LLM-driven applications",
};

export const about = {
  body: "Staff Software Engineer with 4+ years of experience designing distributed systems and building scalable, cloud-native platforms. I specialize in developing backend architectures that are reliable, observable, and built to operate at scale.\n\n" +
"In parallel, I’ve been actively building AI-powered applications, focusing on practical use of LLMs through Retrieval-Augmented Generation (RAG), prompt engineering, and real-time data pipelines. My approach is not to apply AI for the sake of it, but to integrate it where it meaningfully improves system capabilities and user outcomes.\n\n" +
"At Automation Anywhere, I lead the design and development of core platform components, owning system reliability and driving key architectural decisions. I build production-grade backend systems using microservices and distributed system principles to support large-scale automation workflows.\n\n" + 
"I also work closely with customer support and cloud infrastructure teams to investigate and resolve production issues in distributed environments. This involves deep debugging across services, analyzing system behavior under failure conditions, and identifying root causes under time-sensitive scenarios. Over time, this has strengthened my ability to quickly navigate complex systems, improve observability, and drive long-term reliability improvements. ",
};

export const experience: Job[] = [
  {
    title: "Staff Software Engineer",
    org: "Automation Anywhere",
    location: "USA",
    stack:
      "Java, Spring, Hibernate, ActiveMQ, Distributed Cache, Microservices, Distributed Systems, REST APIs, LLM Integration, Observability & Debugging, Cloud Platforms (AWS/GCP), Docker, Kubernetes, SQL Databases",
    description:
      "Owning backend architecture and feature delivery across multiple modules on a cloud-native automation platform, leveraging Java, microservices, REST APIs, and distributed systems.\nDeveloping AI-based productivity tools integrated with LLMs through prompt engineering and real-time data pipelines.\n" +
  "Leading deep production debugging and root-cause analysis for critical customer-impacting incidents, using observability and debugging tools such as logs, metrics, and tracing systems to resolve complex failures and improve system reliability."
  },
  {
    title: "Graduate Teaching Assistant",
    org: "Santa Clara University",
    location: "USA",
    description:
      "Designed and evaluated assignments for an Object-Oriented Software Design class of 24 graduate students.",
  },
  {
    title: "Practicum Student",
    org: "Rubrik Inc.",
    location: "USA",
    stack: "Machine Learning, Python, Flask, MySQL, REST API, JavaScript, HTML, CSS",
    description:
      "Built a lead scoring ML model to prioritize leads by identifying traits of historically converted leads — connecting data pipelines to practical go-to-market decisions.",
  },
  {
    title: "Lead Software Engineer Intern",
    org: "Opal Organization",
    location: "USA",
    stack:
      "React Native, JavaScript, Python, AWS, REST API, Google API, Postman, Git",
    description:
      "Developed a user-facing mobile application connecting students with industry professionals from the ground up. Led weekly meetings, reviewed code, and aligned the team on technical direction.",
  },
  {
    title: "Software Engineer Intern",
    org: "Crest Infosystems Pvt. Ltd.",
    location: "India",
    stack:
      "TypeScript, JavaScript, PHP, HTML, CSS, XML, MySQL, REST API, Ionic",
    description:
      "Delivered a hybrid mobile application from inception to launch for market discovery and sales insights. Built REST APIs; completed a stretch goal in collaboration with leadership.",
  },
  {
    title: "Software Engineer Intern",
    org: "Bazinga Softtech Pvt. Ltd.",
    location: "India",
    stack: "Java, Android, XML, Firebase, JSON",
    description:
      "Built an Android weather forecasting app applying solid object-oriented design principles.",
  },
];

export const projects: Project[] = [
  {
    title: "Knowledge Assistant",
    url: "",
    summary:
      "Built a RAG-based SaaS knowledge assistant using React, FastAPI, LangChain, and ChromaDB, with JWT/RBAC auth and streaming chat responses.",
    tech: ["RAG", "LangChain", "Vector DB", "React", "Python"],
  },
  {
    title: "Amazon Clone",
    url: "",
    summary: "Deployed full-stack experience (Firebase hosting).",
    tech: ["JavaScript"],
  },
  {
    title: "Search Application",
    url: "https://github.com/aarjavsheth/Search-Application",
    summary: "Search-focused application and supporting tooling.",
    tech: ["Java", "Oracle SQL"],
  },
  {
    title: "Sort Visualizer",
    url: "https://github.com/aarjavsheth/Sort-Visualizer",
    summary: "Interactive visualization of sorting algorithms.",
    tech: ["Algorithms", "Java Swing"],
  },
  {
    title: "Pick-A-Book",
    url: "https://github.com/aarjavsheth/Pick-A-Book",
    summary: "Book discovery or selection workflow.",
    tech: ["Machine Learning", "Python"],
  },
  {
    title: "Election Disbursement Analysis & Prediction",
    url: "https://github.com/aarjavsheth/Election-Disbursement-Analysis-Prediction",
    summary: "Data analysis and prediction around election disbursement patterns.",
    tech: ["Data", "Python"],
  },
  {
    title: "Calculator",
    url: "https://github.com/aarjavsheth/Calculator",
    summary: "Calculator project with clear UI and logic separation.",
    tech: ["Java"],
  },
  {
    title: "ChatApp",
    url: "https://github.com/aarjavsheth/ChatApp",
    summary: "Real-time or messaging-oriented client experience.",
    tech: ["Java", "JavaScript","WebSockets", "UI"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    heading: "AI/ML & LLM Systems",
    items: [
      "RAG",
      "LangChain",
      "Vector Databases",
      "Prompt Engineering",
    ]
  },
  {
    heading: "Languages",
    items: [
      "Java (Core, Spring, Hibernate)",
      "JavaScript (ES6, React, Node.js, TypeScript)",
      "Python",
      "PHP",
      "SQL",
      "HTML",
      "CSS",
    ],
  },
  {
    heading: "Databases",
    items: [
      "SQL Server",
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "Oracle",
    ]
  },
  {
    heading: "Cloud Infrastructure",
    items: [
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "CI/CD Pipelines",
    ]
  },
  {
    heading: "Messaging & APIs",
    items: [
      "ActiveMQ",
      "REST APIs",
      "WebSocket",
      "gRPC",
      "Protocol Buffers",
      "JSON",
    ]
  },
  {
    heading: "Distributed Systems",
    items: [
      "Microservices",
      "Distributed Cache",
    ]
  },
  {
    heading: "Frameworks & Tools",
    items: [
      "Claude Code",
      "Cursor",
      "Github Copilot",
      "Git",
      "Jenkins",
      "Spring Boot",
      "Flask",
      "React Native",
      "FastAPI",
      "Ionic",
      "Postman",
      "TestNG",
      "Mockito",
    ]
  },
];

export const education: Degree[] = [
  {
    school: "Santa Clara University",
    degree: "Master of Science in Information Systems",
    detail: "USA",
  },
  {
    school: "Uka Tarsadia University",
    degree: "Bachelor of Technology in Information Technology",
    detail: "India",
  },
];

export const coursework =
  "Object-Oriented Software Design · Data Structures · Design and Analysis of Algorithms · Operating Systems · Database Management Systems · Machine Intelligence · Neural Networks · Software Engineering · Data Mining & Business Intelligence · Cloud Computing · Big Data Modeling & Analytics · Web Technologies · Mobile Application Development · Java Technologies · Programming with Python";

export const testimonials: Testimonial[] = [
  {
    quote:
      "Aarjav has enthusiasm for every aspect of the software engineering process. He actively brainstormed, researched new ideas, and took on complex tasks. As a strong leader, he held team members accountable by structuring meetings effectively and asking for feedback on his leadership style. He recognizes the importance of diverse perspectives before making decisions. I feel lucky to have worked with Aarjav and seen his growth as a leader.",
    attribution: "Story DeWeese — Co-founder & CTO, Opal Organization",
  },
  {
    quote:
      "Aarjav delivered results continually and went beyond expectations under tight deadlines. He's enthusiastic, dedicated, and thoughtful — strong in difficult situations and a fantastic problem solver. He proactively offers solutions across communication and collaboration. His creative thinking, skill set, and positive attitude made him a pleasure to work with.",
    attribution: "Anish Virani — Sr. Software Engineer, Crest Infosystems Pvt. Ltd.",
  },
];

export const contact = {
  name: "Aarjav Sheth",
  location: "San Francisco Bay Area",
  email: "aarjavsheth11@gmail.com",
  /** Prefer `public/files/AarjavResume.pdf` when present; Netlify URL until then. */
  resumeUrl: "public/files/AarjavResume.pdf",
};
