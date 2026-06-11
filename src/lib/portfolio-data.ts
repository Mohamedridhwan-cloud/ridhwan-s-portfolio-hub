import crop from "@/assets/project-crop.jpg";
import restaurant from "@/assets/project-restaurant.jpg";
import chatbot from "@/assets/project-chatbot.jpg";
import portfolio from "@/assets/project-portfolio.jpg";

export const PROFILE = {
  name: "Mohamed Ridhwan",
  title: "Computer Science Engineer | Cloud Computing Student",
  location: "Chennai, India",
  email: "mohdridhridhwan@gmail.com",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    twitter: "https://x.com/",
    instagram: "https://instagram.com/",
  },
  typing: [
    "Full Stack Developer",
    "Cloud Computing Enthusiast",
    "Python Developer",
    "Problem Solver",
  ],
  summary:
    "Passionate Computer Science Engineering student specializing in Cloud Computing with strong knowledge of Python, Java, SQL, Full Stack Development, and Cloud Technologies. Interested in building scalable web applications and solving real-world problems through technology.",
  education: {
    degree: "B.Tech, Computer Science Engineering (Cloud Computing)",
    college: "SRM Institute of Science and Technology, Ramapuram",
    cgpa: "7.80",
  },
  interests: [
    "Full Stack Development",
    "Cloud Computing",
    "Machine Learning",
    "Data Analytics",
    "Software Development",
  ],
};

export const STATS = [
  { label: "Projects", value: 12 },
  { label: "Certifications", value: 8 },
  { label: "Technologies", value: 18 },
  { label: "CGPA", value: 7.8, suffix: "/10" },
];

export const SKILL_GROUPS = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "React.js", level: 85 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 82 },
    ],
  },
  {
    title: "Cloud & Tools",
    skills: [
      { name: "AWS", level: 75 },
      { name: "Git", level: 88 },
      { name: "GitHub", level: 90 },
      { name: "Docker", level: 70 },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  category: "Machine Learning" | "Web Development" | "AI / NLP" | "Full Stack";
};

const GITHUB_PROFILE = "https://github.com/Mohamedridhwan-cloud";

export const PROJECTS: Project[] = [
  {
    title: "Crop Yield Prediction Using ML",
    description:
      "Predict agricultural crop yield using machine learning algorithms and data analytics across regional datasets.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "ML"],
    github: GITHUB_PROFILE,
    demo: GITHUB_PROFILE,
    image: crop,
    category: "Machine Learning",
  },
  {
    title: "Restaurant Management System",
    description:
      "CRUD-based restaurant management application for managing reservations, menu items, and customer records.",
    technologies: ["HTML", "CSS", "JavaScript", "SQL"],
    github: GITHUB_PROFILE,
    demo: GITHUB_PROFILE,
    image: restaurant,
    category: "Web Development",
  },
  {
    title: "NLP-Based Chatbot",
    description:
      "Chatbot capable of handling user queries using Natural Language Processing techniques and NLTK.",
    technologies: ["Python", "NLP", "NLTK"],
    github: GITHUB_PROFILE,
    demo: GITHUB_PROFILE,
    image: chatbot,
    category: "AI / NLP",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Responsive full-stack portfolio website showcasing skills, projects and contact form with database integration.",
    technologies: ["React.js", "Node.js", "MongoDB"],
    github: GITHUB_PROFILE,
    demo: "https://port-pivot-pulse.lovable.app",
    image: portfolio,
    category: "Full Stack",
  },
];

export const CERTIFICATIONS = [
  { title: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services", date: "Mar 2024", link: "#" },
  { title: "Python for Data Science", issuer: "NPTEL", date: "Jul 2023", link: "#" },
  { title: "Full Stack Web Development", issuer: "Coursera", date: "Nov 2023", link: "#" },
  { title: "MongoDB Basics", issuer: "MongoDB University", date: "Feb 2024", link: "#" },
  { title: "Java Programming", issuer: "HackerRank", date: "Aug 2023", link: "#" },
  { title: "Cloud Computing Fundamentals", issuer: "Google Cloud", date: "May 2024", link: "#" },
];

export const EXPERIENCE = [
  {
    company: "Cloud Internship Program",
    role: "Cloud Engineering Intern",
    duration: "May 2024 – Jul 2024",
    description:
      "Worked on deploying scalable applications on AWS using EC2, S3, and Lambda. Automated CI/CD pipelines and monitored cloud infrastructure.",
  },
  {
    company: "Open Source Contributions",
    role: "Full Stack Developer",
    duration: "2023 – Present",
    description:
      "Contributed to open-source web applications using React and Node.js, focusing on UI improvements and REST API features.",
  },
];
