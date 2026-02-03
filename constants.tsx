import React from 'react';
import { 
  User, BookOpen, Briefcase, Award, Mail, Home 
} from 'lucide-react';
import { Education, Skill, Project, Achievement, Section } from './types';

export const USER_NAME = "PRAVIN S";
export const DESIGNATION = "MCA | Full Stack Developer | AI Enthusiast";

export const NAV_ITEMS = [
  { id: Section.HOME, label: 'HOME', icon: <Home size={20} /> },
  { id: Section.ABOUT, label: 'ABOUT ME', icon: <User size={20} /> },
  { id: Section.RESUME, label: 'RESUME', icon: <BookOpen size={20} /> },
  { id: Section.PORTFOLIO, label: 'PORTFOLIO', icon: <Briefcase size={20} /> },
  { id: Section.ACHIEVEMENTS, label: 'ACHIEVEMENTS', icon: <Award size={20} /> },
  { id: Section.CONTACT, label: 'CONTACT', icon: <Mail size={20} /> },
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Dr. Mahalingam College of Engineering and Technology, Pollachi",
    year: "Expected Completion: 2026",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Dr. G.R. Damodaran College of Science, Coimbatore",
    year: "2022 – 2025",
    score: "CGPA: 8.87 / 10 (89%)"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "S.E.S. Matric Higher Secondary School, Coimbatore",
    year: "2022",
    score: "Percentage: 80%"
  }
];

export const SKILLS_DATA: Skill[] = [
  { category: "Full Stack Development", items: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "PHP"] },
  { category: "Front-End", items: ["React.js", "React Native", "HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design"] },
  { category: "Back-End", items: ["Node.js", "Express.js", "Python (Flask)", "PHP"] },
  { category: "Databases", items: ["MongoDB", "MySQL"] },
  { category: "UI / UX", items: ["Figma", "Inkscape", "GIMP", "Synfig Studio", "Wireframing", "Prototyping"] },
  { category: "AI & Tools", items: ["Prompt Engineering", "Generative AI", "NLP Basics", "Git", "GitHub", "VS Code"] }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "Virtual Lab Assistant",
    tech: "React.js, Node.js, Express.js, MongoDB",
    description: [
      "AI-powered voice assistant for laboratory operations.",
      "Speech recognition integrated with backend AI logic.",
      "Modern, responsive and accessible UI.",
      "Focused on usability and performance."
    ],
    image: "/images/virtual.jpg"
  },
  {
    title: "Neuro Voice Commander",
    tech: "Python, Flask, SpeechRecognition",
    description: [
      "Voice-controlled web application using NLP.",
      "Smooth command execution workflows.",
      "Accurate speech recognition integration."
    ],
    image: "/images/neuro.jpg"
  },
  {
    title: "Personal Financial Tracker",
    tech: "React Native, Python, MySQL",
    description: [
      "Mobile-first expense and budget manager.",
      "Elegant dashboards with insights.",
      "Secure backend API."
    ],
    image: "/images/personal.jpg"
  },
  {
    title: "Tailor Shop Management System",
    tech: "HTML, CSS, PHP, MySQL",
    description: [
      "Customer, order, and billing management.",
      "Optimized database queries.",
      "Interactive dashboards."
    ],
    image: "/images/tailor.jpg"
  },
  {
    title: "Battery Stock Information System",
    tech: "HTML, CSS, PHP, MySQL",
    description: [
      "Inventory tracking system.",
      "CRUD operations for stock.",
      "Automated reporting."
    ],
    image: "/images/battery.jpg"
  },
  {
    title: "Online T-Shirt Customization App",
    tech: "HTML, CSS, PHP, MySQL",
    description: [
      "Custom T-shirt design platform.",
      "Interactive design interface.",
      "E-commerce features."
    ],
    image: "/images/tshirt.jpg"
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    title: "2nd Prize – MCET Hackathon 2025",
    description: "Team “Mind Matrix 7”. AI-integrated project demonstrating innovation and teamwork.",
    date: "Oct 24–25, 2025"
  },
  {
    title: "Udemy Certified Full Stack Developer",
    description: "MERN Stack, GenAI, Prompting, Node.js, React, MongoDB."
  },
  {
    title: "Virtual Internship – Epic X",
    description: "Worked on full-stack components and UI in Agile workflows."
  },
];
