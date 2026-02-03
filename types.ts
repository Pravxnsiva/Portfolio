
export interface Education {
  degree: string;
  institution: string;
  year: string;
  score?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  tech: string;
  description: string[];
  link?: string;
  image?: string;
}

export interface Achievement {
  title: string;
  description: string;
  date?: string;
}

export enum Section {
  HOME = 'home',
  ABOUT = 'about',
  RESUME = 'resume',
  PORTFOLIO = 'portfolio',
  ACHIEVEMENTS = 'achievements',
  CONTACT = 'contact'
}
