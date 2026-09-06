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
  // company logo, todo until param sends one
  logoUrl?: string;
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
  // rough self rating, 1 to 10, todo until param sets a real number
  level: number;
}

export interface PassionItem {
  key: string;
  title: string;
  blurb: string;
  images: string[];
}

export interface FavoriteMovie {
  title: string;
  posterUrl?: string;
}

// small personality section, not from the resume, param gave these directly
export interface Favorites {
  rapper: string;
  movies: FavoriteMovie[];
  song: string;
  songArtist: string;
  // spotify link, todo until param sends one
  songUrl?: string;
  // album art, todo until param sends one
  albumArtUrl?: string;
  ufcFighter: string;
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
  favorites: Favorites;
  contact: ContactInfo;
  resumeUrl: string;
  // hero photo, empty shows a placeholder frame
  portraitUrl: string;
  references: string[];
}

export const site: SiteContent = {
  name: "Paramveer Multani",
  role: "Computer Engineering Co-op Student",
  tagline:
    "I take systems apart to understand them, then build something better with what I learn.",
  bioShort:
    "Computer Engineering co-op student at McMaster University, working across software, embedded systems, and hardware diagnostics.",
  bio: [
    "I'm a Computer Engineering co-op student at McMaster University. I've done instrument diagnostics and calibration tooling at Hoskin Scientific, and I keep a part time technical role at BS Transportation running alongside school.",
    "Outside of coursework I build my own projects, usually something that involves pulling a system apart to see how it actually works. Recent ones include reverse engineering a board game's network protocol and building a 3D spatial mapping rig from a time of flight sensor.",
  ],
  location: "Toronto, Ontario",
  availability: "Open to connecting",

  about: {
    approach:
      "I like to fully understand a system before I touch it, whether that means tracing a wiring harness by hand or decoding an undocumented network protocol frame by frame.",
    whatIDo:
      "Right now that's a mix of coursework, a couple of personal engineering projects, and part time technical work.",
  },

  stats: [
    { label: "Projects shipped", value: "3" },
    { label: "Years experience", value: "5+" },
    { label: "Technologies", value: "20+" },
  ],

  experience: [
    {
      title: "Instrument Technician Intern",
      company: "Hoskin Scientific",
      location: "Oakville, ON",
      type: "internship",
      start: "May 2026",
      end: "Sep 2026",
      bullets: [
        "Built a browser based offline tool in JavaScript and ExcelJS that parses instrument CSV exports into calibration worksheets, cutting report prep from 10 minutes to under 1.",
        "Pitched the tool to management unprompted. It was approved and deployed to all Hoskin offices across Canada, supporting 20+ calibration reports daily.",
        "Performed PCB level diagnostics on 100+ scientific instruments, isolating failed components via multimeter testing and restoring function through resoldering and part replacement.",
        "Executed lifecycle testing and certification across YSI, DJI, Sontek, and TSI lines, covering calibration, continuity testing, firmware updates, and manufacturer escalation.",
      ],
      skills: [
        "JavaScript",
        "ExcelJS",
        "PCB Diagnostics",
        "Multimeter Testing",
        "Soldering",
      ],
    },
    {
      title: "Operations & Technical Assistant",
      company: "BS Transportation",
      location: "Hamilton, ON",
      type: "part time",
      start: "2021",
      end: "Present",
      bullets: [
        "Automated Avaal freight manifest generation with a Python script, cutting per manifest time from 5 minutes to under 2 and recovering 50+ hours a year.",
        "Rebuilt payroll and expense tracking in Excel, replacing manual entry and reducing transcription errors across weekly reporting.",
        "Diagnosed and repaired truck electrical systems by tracing and reorganizing wiring, cutting diagnostic time 25 percent and fleet downtime 20 percent.",
      ],
      skills: ["Python", "Excel", "Electrical Diagnostics"],
    },
  ],

  education: [
    {
      school: "McMaster University",
      url: "https://www.mcmaster.ca",
      credential: "B.Eng. Computer Engineering (Co-op)",
      start: "todo",
      end: "Apr 2029",
      average: "3.5",
      focus: [
        "Algorithm Design and Analysis",
        "Data Structures and Algorithms",
        "Software Development",
        "Artificial Intelligence",
        "Digital System Design",
        "Computer Systems Integration",
        "Microprocessors",
        "Electronic Devices and Circuits",
      ],
      honors: ["First Year Deans Honour Roll"],
    },
  ],

  projects: [
    {
      title: "Catan Coach AI",
      category: "AI / Tooling",
      description:
        "A headless Catan engine that reverse engineers colonist.io's undocumented websocket protocol, then uses expectimax and MCTS search to power a live coaching overlay and post game review.",
      tech: [
        "Python",
        "NumPy",
        "FastAPI",
        "TypeScript",
        "Next.js",
        "WebSockets",
      ],
    },
    {
      title: "Spatial Mapping Using Time-of-Flight Sensor",
      category: "Embedded Systems",
      description:
        "An embedded 360 degree spatial mapping system built with a VL53L1X time of flight sensor and a stepper motor, reconstructing 3D models of indoor spaces from I2C and UART data.",
      tech: ["C++", "I2C", "UART", "VL53L1X"],
    },
    {
      title: "Automated Baggage Handling System",
      category: "Robotics / Team Project",
      description:
        "A luggage routing system built with a Q-Arm, servo table, and barcode scanner, with Python control algorithms reaching 88 percent seat detection accuracy.",
      tech: ["Python", "Q-Arm"],
    },
  ],

  skills: [
    {
      category: "Languages",
      items: [
        "Python",
        "C/C++",
        "JavaScript",
        "TypeScript",
        "MATLAB",
        "R",
        "LaTeX",
      ],
      level: 7,
    },
    {
      category: "Frameworks & Tools",
      items: [
        "Git",
        "GitHub",
        "FastAPI",
        "NumPy",
        "pytest",
        "React",
        "Next.js",
        "Chrome Extensions (Manifest V3)",
        "WebSockets",
        "ExcelJS",
        "Linux",
        "VS Code",
        "AutoCAD",
      ],
      level: 7,
    },
    {
      category: "Hardware",
      items: [
        "PCB Diagnostics",
        "Soldering",
        "Multimeter Testing",
        "Arduino",
        "MSP432E401Y",
        "VL53L1X ToF",
        "Quanser",
        "Digilent Analog Discovery",
        "3D Printing (Prusa)",
      ],
      level: 7,
    },
  ],

  skillHighlights: ["Python", "React", "Next.js", "FastAPI"],

  // draft blurbs, Param to rewrite in his own voice
  passions: [
    {
      key: "basketball",
      title: "Basketball",
      blurb:
        "Pickup runs when I can find one, and a Raptors game whenever I can get a ticket.",
      images: ["/journey/basketball/1.jpg", "/journey/basketball/2.jpg"],
    },
    {
      key: "travel",
      title: "Travelling",
      blurb:
        "Any excuse to be somewhere new, dunes, canals, a coastline I have not seen yet.",
      images: [
        "/journey/travel/1.jpg",
        "/journey/travel/2.jpg",
        "/journey/travel/3.jpg",
        "/journey/travel/4.jpg",
        "/journey/travel/5.jpg",
        "/journey/travel/6.jpg",
        "/journey/travel/7.jpg",
      ],
    },
    {
      key: "cars",
      title: "Cars",
      blurb:
        "I walk the whole auto show floor every year and still leave wanting more.",
      images: ["/journey/cars/1.jpg", "/journey/cars/2.jpg"],
    },
    {
      key: "music",
      title: "Live music",
      blurb: "A packed arena with the lights down is hard to beat.",
      images: ["/journey/music/1.jpg"],
    },
    {
      key: "outdoors",
      title: "Getting outside",
      blurb:
        "Early starts by the lake, farm animals, chasing a decent sunrise.",
      images: [
        "/journey/outdoors/1.jpg",
        "/journey/outdoors/2.jpg",
        "/journey/outdoors/3.jpg",
        "/journey/outdoors/4.jpg",
      ],
    },
    {
      key: "food",
      title: "Food",
      blurb: "Always down to try the spot everyone keeps talking about.",
      images: [],
    },
  ],

  favorites: {
    rapper: "Drake",
    movies: [
      { title: "Se7en", posterUrl: "" },
      { title: "3 Idiots", posterUrl: "" },
    ],
    song: "Superpowers",
    songArtist: "Daniel Caesar",
    songUrl: "",
    albumArtUrl: "",
    ufcFighter: "Carlos Prates",
  },

  contact: {
    email: "multap1@mcmaster.ca",
    linkedin: "https://linkedin.com/in/paramveermt",
    github: "https://github.com/paramveer30",
    instagram: "todo, instagram url",
    formAccessKey: "",
  },

  resumeUrl: "/resume.pdf",
  portraitUrl: "/portrait.jpg",
  references: [],
};
