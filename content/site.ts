// single source of truth for every piece of copy on the site
// fields still marked "todo" need real answers from param before launch

export interface StatItem {
  label: string;
  value: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  type: string;
  start: string;
  end: string;
  bullets: string[];
  skills: string[];
}

export interface EducationItem {
  school: string;
  url: string;
  credential: string;
  start: string;
  end: string;
  gpa?: string;
  average?: string;
  focus: string[];
  honors: string[];
}

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  tech: string[];
  demoUrl?: string;
  sourceUrl?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
  // rough self rating, 1 to 10
  level: number;
}

export interface PassionItem {
  key: string;
  title: string;
  blurb: string;
  images: string[];
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  instagram: string;
  // web3forms public key, left empty falls back to a mailto link
  formAccessKey: string;
}

export interface SiteContent {
  name: string;
  role: string;
  tagline: string;
  bioShort: string;
  bio: string[];
  location: string;
  availability: string;
  about: {
    approach: string;
    whatIDo: string;
  };
  stats: StatItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  skills: SkillGroup[];
  skillHighlights: string[];
  passions: PassionItem[];
  contact: ContactInfo;
  resumeUrl: string;
  references: string[];
}

export const site: SiteContent = {
  name: "Paramveer Multani",
  role: "Computer Engineering Student",
  tagline:
    "I build things that live on the web, and I make them feel considered.",
  bioShort: "Computer Engineering student at McMaster University.",
  bio: [
    "todo, replace with a real 2 to 3 paragraph bio",
    "todo, second paragraph",
  ],
  location: "Hamilton, Ontario",
  availability: "Open to connecting",

  about: {
    approach: "todo, a short paragraph on how param approaches problems",
    whatIDo: "todo, a short paragraph on what param actually works on",
  },

  stats: [
    { label: "Projects completed", value: "0" },
    { label: "Years experience", value: "0" },
    { label: "Technologies", value: "0" },
  ],

  experience: [
    {
      title: "todo, job title",
      company: "todo, company",
      location: "todo, city",
      type: "internship",
      start: "todo",
      end: "todo",
      bullets: ["todo, responsibility or achievement"],
      skills: ["todo"],
    },
  ],

  education: [
    {
      school: "McMaster University",
      url: "https://www.mcmaster.ca",
      credential: "B.Eng. Computer Engineering",
      start: "todo",
      end: "todo",
      average: "todo",
      focus: ["todo"],
      honors: [],
    },
  ],

  projects: [
    {
      title: "todo, project title",
      category: "web app",
      description: "todo, a sentence describing the project",
      tech: ["todo"],
    },
  ],

  skills: [
    { category: "Frontend", items: ["todo"], level: 5 },
    { category: "Backend", items: ["todo"], level: 5 },
  ],

  skillHighlights: ["todo"],

  passions: [
    { key: "travel", title: "Travel", blurb: "todo, one sentence", images: [] },
    { key: "birds", title: "Birds", blurb: "todo, one sentence", images: [] },
    {
      key: "cooking-family",
      title: "Cooking & Family",
      blurb: "todo, one sentence",
      images: [],
    },
    {
      key: "basketball",
      title: "Basketball",
      blurb: "todo, one sentence",
      images: [],
    },
  ],

  contact: {
    email: "todo@example.com",
    linkedin: "todo, linkedin url",
    github: "https://github.com/paramveer30",
    instagram: "todo, instagram url",
    formAccessKey: "",
  },

  resumeUrl: "/resume.pdf",
  references: [],
};
