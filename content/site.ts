// single source of truth for every piece of copy on the site
// change what the site says here, not in the components

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  type: string;
  start: string;
  end: string;
  // one line that frames the role, sits above the bullets
  summary: string;
  bullets: string[];
  skills: string[];
  // company mark, falls back to the drawn icon then a monogram tile when unset
  logoUrl?: string;
  icon?: string;
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
  // clubs and teams, kept apart from honors so they can style differently
  activities?: string[];
  // school crest, falls back to a monogram tile when unset
  logoUrl?: string;
}

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  tech: string[];
  // longer write up shown when the card is expanded
  detail?: string[];
  // thumbnail shown at the head of the row, falls back to a placeholder frame
  imageUrl?: string;
  demoUrl?: string;
  sourceUrl?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface PassionItem {
  key: string;
  title: string;
  blurb: string;
  images: string[];
}

// small personality section, not from the resume, param gave these directly
// every entry renders in the same square tile, so add one by adding a 360x360 image
export interface FavoriteItem {
  // the category shown above the name, e.g. Artist, Movie, Team
  label: string;
  title: string;
  // optional second line, used for the artist behind a song
  meta?: string;
  imageUrl: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  // empty hides the icon rather than rendering a dead link
  instagram: string;
  x: string;
  // web3forms public key, left empty falls back to a mailto link
  formAccessKey: string;
}

export interface SiteContent {
  name: string;
  role: string;
  tagline: string;
  bio: string[];
  location: string;
  availability: string;
  about: {
    approach: string;
    whatIDo: string;
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  skills: SkillGroup[];
  skillHighlights: string[];
  passions: PassionItem[];
  favorites: FavoriteItem[];
  contact: ContactInfo;
  resumeUrl: string;
  // hero photo, empty shows a placeholder frame
  portraitUrl: string;
  // second photo, sits beside the about copy. empty shows a placeholder frame
  aboutImageUrl: string;
}

// production origin. canonical urls, open graph tags, the sitemap and robots.txt all hang off
// this. resolved rather than hard coded so it is right in every environment without editing:
// vercel fills the middle branch on a real deploy, and NEXT_PUBLIC_SITE_URL overrides both
// once there is a custom domain
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const site: SiteContent = {
  name: "Paramveer Multani",
  role: "Computer Engineering Co-op Student",
  tagline:
    "I take systems apart to understand them, then build something better with what I learn.",
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

  experience: [
    {
      title: "Instrument Technician Intern",
      company: "Hoskin Scientific",
      location: "Oakville, ON",
      type: "internship",
      start: "May 2026",
      end: "Sep 2026",
      logoUrl: "/logos/hoskin.png",
      summary:
        "Instrument diagnostics and calibration work for a scientific equipment distributor, from board level repair on the bench through to a reporting tool that now runs in every Hoskin office in Canada.",
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
      icon: "truck",
      summary:
        "A standing technical role I have kept running alongside school, automating the freight paperwork and keeping the fleet's electrical systems diagnosed and repaired.",
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
      start: "Sep 2024",
      end: "Apr 2029",
      average: "3.5",
      logoUrl: "/logos/mcmaster.png",
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
    {
      school: "Saltfleet District High School",
      url: "https://saltfleetdistrict.hwdsb.on.ca",
      credential: "Ontario Secondary School Diploma",
      start: "Sep 2020",
      end: "Jun 2024",
      average: "97",
      logoUrl: "/logos/saltfleet.png",
      focus: [],
      honors: ["Honour Roll every year"],
      activities: [
        "Robotics",
        "Basketball",
        "Executive Council",
        "Mental Wellness Club",
        "School Committee",
      ],
    },
  ],

  // draft descriptions and detail, Param to confirm names and rewrite the copy
  projects: [
    {
      title: "Tamalife",
      category: "Mobile / OpenAI Build Week",
      description:
        "A subscription tracker disguised as a pet game. Every bill, warranty, and subscription lives as a creature whose health is computed from its real renewal date, so letting one lapse is something you can actually see.",
      detail: [
        "Subscriptions are designed to be forgotten, and every tracker on the market is a spreadsheet you have to remember to open. Tamalife turns each recurring cost into a creature in a pixel art garden whose health is derived live from its renewal or expiry date, so one left alone visibly withers until you renew, cancel, or switch. Snap a receipt and the parsing pipeline hatches a new creature with no manual entry.",
        "Built in a team of four at OpenAI Build Week. I led UI/UX, designing the dashboard, creature detail and resolve flows along with a shared component and theming system that re-skins every screen from a single day and night palette.",
        "I also built the push notification system end to end. Firebase Cloud Messaging on the client, device token storage in Supabase, scheduled reminder delivery off the Celery beat schedule that scans renewal and warranty thresholds, a preferences screen for channels and reminder timing, and deep linked tap flows that land on the right creature.",
        "Native Firebase meant moving the project onto Expo and EAS development builds after Expo Go turned out to be incompatible, then validating the whole path, receipt scan to push to landing screen, across physical devices.",
      ],
      tech: [
        "React Native",
        "TypeScript",
        "Expo/EAS",
        "Firebase Cloud Messaging",
        "Supabase",
        "FastAPI",
      ],
      imageUrl: "/projects/tamalife.jpg",
      sourceUrl: "https://github.com/paramveer30/Codex-Hackathon-Tamalife",
    },
    {
      title: "LetMeKnock",
      category: "Web / Full Stack",
      description:
        "A two sided housing marketplace for students, pairing listings and live landlord messaging with real commute times from every property to campus.",
      detail: [
        "Student housing search is two problems at once. Listings live in a dozen places, and the thing that actually decides whether a place works, how long it takes to get to campus, is never on the listing. LetMeKnock puts both in one view, around 9,100 lines of TypeScript across client and server.",
        "The messaging layer runs on Socket.IO with conversation rooms, read receipts, unread count tracking and event driven notifications, sitting alongside 24 REST endpoints covering listings, image galleries, bookmarks and owner scoped permissions.",
        "Each property is plotted on a Leaflet map with a campus pin, distance rings and route polylines, and OpenRouteService and the TravelTime API turn that into walk, bike, drive and transit times to campus rather than a straight line distance.",
        "Underneath it is a normalised 12 table Postgres schema modelled in Drizzle ORM, with Zod validators shared end to end so the client and server agree on shape at compile time, and a 40 plus component design system built on Radix and Tailwind.",
      ],
      tech: [
        "React",
        "TypeScript",
        "Express",
        "Socket.IO",
        "PostgreSQL",
        "Drizzle ORM",
        "Leaflet",
        "Supabase",
      ],
      imageUrl: "/projects/letmeknock.jpg",
      // repo taken down, so no source link rather than a dead one
    },
    {
      title: "Vantage Labs",
      category: "Web / Live Site",
      description:
        "A marketing site for a custom software consultancy, with interactive 3D scenes and a lead pipeline that routes contact forms and booking webhooks straight to email.",
      detail: [
        "A deployed marketing site for a software consultancy, built on the Next.js App Router with React 19 and TypeScript in strict mode. The public pages are static so they serve fast, with the dynamic work isolated to two API routes.",
        "The landing scenes run on React Three Fiber over three.js, so the 3D is composed as React components and driven by the same state as the rest of the page rather than living in a separate canvas script.",
        "Lead capture is the part that has to actually work. One route takes the contact form, another receives Cal.com booking webhooks, and both notify through Resend, so an enquiry or a booked call turns into an email without anyone watching a dashboard.",
        "Kept deliberately small in scope, with Vitest covering the pieces worth testing and a readable commit history.",
      ],
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "React Three Fiber",
        "three.js",
        "Resend",
      ],
      imageUrl: "/projects/vantage-labs.jpg",
      demoUrl: "https://vantagelabs.vercel.app/",
      sourceUrl: "https://github.com/paramveer30/vantagelabsai",
    },
    {
      title: "This Portfolio",
      category: "Web / Personal",
      description:
        "The site you are reading, built from scratch rather than from a template, with every piece of copy and layout driven off a single typed content file.",
      detail: [
        "One page, built on the Next.js App Router with TypeScript in strict mode and Tailwind. Every section reads from one typed content file, so adding a role, a project or a hobby is a data change rather than a layout change.",
        "The theme is a set of CSS custom properties with a light and a dark palette, following the operating system by default and remembering an explicit choice, with the swap applied before first paint so the page never flashes the wrong colours.",
        "The hero sits on a canvas of drifting nodes that link up as they near each other and bend away from the cursor. Sections fade in as they scroll into view, and the hobbies are an accordion that expands on hover and cycles its photos.",
        "Motion is written to disappear entirely under prefers-reduced-motion, and the palette is checked against WCAG contrast ratios rather than picked by eye.",
      ],
      tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vitest"],
      imageUrl: "/projects/portfolio.jpg",
      sourceUrl: "https://github.com/paramveer30/Personal-Portfolio",
    },
    {
      title: "Spatial Mapping Using Time-of-Flight Sensor",
      category: "Embedded Systems",
      description:
        "An embedded 360 degree spatial mapping system built with a VL53L1X time of flight sensor and a stepper motor, reconstructing 3D models of indoor spaces from I2C and UART data.",
      detail: [
        "A stepper motor sweeps the VL53L1X time of flight sensor through a full rotation while an MSP432 reads distance samples over I2C and streams them out over UART.",
        "A host side script turns the polar sweeps into a point cloud and stitches successive rotations into a rough 3D model of the room.",
      ],
      tech: ["C++", "I2C", "UART", "VL53L1X"],
      imageUrl: "/projects/spatial-mapping.jpg",
      sourceUrl: "https://github.com/paramveer30/Lidar-Spatial-Mapping-System",
    },
    {
      title: "Automated Baggage Handling System",
      category: "Robotics / Team Project",
      description:
        "A luggage routing system built with a Q-Arm, servo table, and barcode scanner, with Python control algorithms reaching 88 percent seat detection accuracy.",
      detail: [
        "A Q-Arm picks bags off a servo driven table, a barcode scanner reads the routing tag, and the arm places each bag in the bin for its flight.",
        "The Python control loop handles the pick and place geometry and the sorting logic, hitting 88 percent seat detection accuracy across test runs.",
      ],
      tech: ["Python", "Q-Arm"],
      imageUrl: "/projects/baggage-system.jpg",
      sourceUrl:
        "https://github.com/paramveer30/Automated-Airport-Baggage-System",
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
    },
  ],

  // the ones that render large and accented, everything else sits back
  // drafted from what the resume actually evidences, Param to adjust
  skillHighlights: [
    "Python",
    "C/C++",
    "JavaScript",
    "Git",
    "ExcelJS",
    "PCB Diagnostics",
    "Soldering",
    "Multimeter Testing",
  ],

  // draft blurbs, Param to rewrite in his own voice
  passions: [
    {
      key: "parrots",
      title: "The parrots",
      blurb: "Two cockatiels, and a house that has not been quiet since.",
      images: [
        "/parrots/together.jpg",
        "/parrots/yellow/1.jpg",
        "/parrots/yellow/2.jpg",
        "/parrots/grey/1.jpg",
      ],
    },
    {
      key: "basketball",
      title: "Basketball",
      blurb:
        "Pickup runs when I can find one, and a Raptors game whenever I can get a ticket.",
      images: [
        "/journey/basketball/1.jpg",
        "/journey/basketball/2.jpg",
        "/journey/basketball/3.jpg",
      ],
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
        "/journey/travel/8.jpg",
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
      images: [
        "/journey/food/1.jpg",
        "/journey/food/2.jpg",
        "/journey/food/3.jpg",
        "/journey/food/4.jpg",
        "/journey/food/5.jpg",
        "/journey/food/6.jpg",
        "/journey/food/7.jpg",
      ],
    },
  ],

  favorites: [
    {
      label: "Artist",
      title: "Bruno Mars",
      imageUrl: "/favorites/bruno-mars.jpg",
    },
    {
      label: "On repeat",
      title: "Superpowers",
      meta: "Daniel Caesar",
      imageUrl: "/favorites/superpowers.jpg",
    },
    { label: "Movie", title: "Se7en", imageUrl: "/favorites/se7en.jpg" },
    { label: "Movie", title: "3 Idiots", imageUrl: "/favorites/3idiots.jpg" },
    {
      label: "Team",
      title: "Toronto Raptors",
      imageUrl: "/favorites/raptors.png",
    },
  ],

  contact: {
    email: "multap1@mcmaster.ca",
    linkedin: "https://linkedin.com/in/paramveermt",
    github: "https://github.com/paramveer30",
    instagram: "https://instagram.com/paramveer.m",
    x: "https://x.com/Paramveermt",
    formAccessKey: "",
  },

  resumeUrl: "/resume.pdf",
  portraitUrl: "/portrait.jpg",
  aboutImageUrl: "/about.jpg",
};
