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

export interface ProjectImage {
  src: string;
  alt: string;
  // short line under the frame, says what the picture is
  caption?: string;
  // diagrams and charts sit whole on white instead of being cropped to fill the frame
  fit?: "cover" | "contain";
}

export interface ProjectItem {
  title: string;
  category: string;
  // small tag beside the category, e.g. "In progress"
  status?: string;
  description: string;
  tech: string[];
  // longer write up shown when the card is expanded
  detail?: string[];
  // clicked through in order, the first one is the cover. empty shows a placeholder frame
  images?: ProjectImage[];
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
    "Computer Engineering student at McMaster. I build software, embedded hardware, and lately machine learning models.",
  bio: [
    "I'm in Computer Engineering at McMaster. This summer I was an instrument technician intern at Hoskin Scientific, repairing scientific instruments down to the board, and building two calibration tools that every Hoskin office in Canada now uses: a report generator and a model that catches sensors drifting toward failure.",
    "Most of my projects start with wanting to know how something works. Right now that's Hexcoach, a trainer for Catan-style games with its own rules engine and bots. Before that I built a companion robot that reads emotion from your words, voice and face, and a scanner that maps a room using one distance sensor on a motor.",
  ],
  location: "Toronto, Ontario",
  availability: "Looking for a Winter 2027 co-op",

  about: {
    approach:
      "I want to understand a system before I change it. At Hoskin that meant probing a dead board one component at a time. On Hexcoach it means checking six invariants after every move, 905,000 moves in all, which is also how I caught a seat bias that had skewed every bot comparison. On the robot project it meant scoring the test set once, at the very end, and publishing the result even though it wasn't the one I wanted.",
    whatIDo:
      "Back in classes this fall, building Hexcoach on the side, and still working part time at BS Transportation.",
  },

  experience: [
    {
      title: "Calibration & Test Engineering Intern",
      company: "Hoskin Scientific",
      location: "Oakville, ON",
      type: "internship",
      start: "May 2026",
      end: "Sep 2026",
      logoUrl: "/logos/hoskin.png",
      summary:
        "Hoskin sells, rents and services scientific instruments across Canada. I spent the summer on the repair and calibration bench, and wrote two tools for it: a report generator, and a model that checks calibration data before a report is signed off. Both are now used at every Hoskin office in Canada.",
      bullets: [
        "Wrote a browser tool in JavaScript and ExcelJS that turns an instrument's CSV export into a finished calibration worksheet. Report prep went from about 10 minutes to under 1, and it works offline.",
        "Trained a machine learning model in Python on historical calibration reports for YSI ProDSS and EXO water quality sensors. It checks incoming calibration data before a report is signed off: spec rules mark out-of-range readings High, and an Isolation Forest (scikit-learn) marks sensors that still pass but are drifting or reading unlike healthy ones as Watch.",
        "Engineered its features from raw calibration exports, including pH slope, conductivity cell constant and drift since each sensor's last calibration. I split train and test by serial number, so no sensor showed up in both and inflated the results.",
        "Pitched both tools to management on my own and wrote the SOP technicians now follow. They're in use at every Hoskin office in Canada, and the report tool backs 20+ calibration reports a day.",
        "Brought 100+ instruments back into service with board-level repair: finding the failed component with a multimeter, then resoldering or replacing it.",
        "Ran calibration, continuity testing, firmware updates and certification on YSI, DJI, Sontek and TSI equipment, and escalated faults to the manufacturer when they couldn't be fixed on the bench.",
      ],
      skills: [
        "JavaScript",
        "ExcelJS",
        "Python",
        "scikit-learn",
        "pandas",
        "PCB Diagnostics",
        "Multimeter Testing",
        "Soldering",
      ],
    },
    {
      title: "Operations & Systems Coordinator",
      company: "BS Transportation",
      location: "Hamilton, ON",
      type: "part time",
      start: "Feb 2021",
      end: "Present",
      icon: "truck",
      summary:
        "A part-time job I've kept since 2021, alongside school. I handle a mix of office automation and electrical work on the trucks.",
      bullets: [
        "Wrote a Python script that generates Avaal freight manifests. Each one went from 5 minutes to under 2, which adds up to more than 50 hours a year.",
        "Built Excel tools for payroll and expense tracking that replaced a fully manual process and cut data entry by about 40%.",
        "Rewired and reorganized the trucks' electrical harnesses so faults are quicker to isolate. Diagnosis got 25% faster and fleet downtime dropped by 20%.",
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
      end: "Apr 2028",
      average: "3.5",
      logoUrl: "/logos/mcmaster.png",
      focus: [
        "Algorithm Design and Analysis",
        "Data Structures and Algorithms",
        "Software Development",
        "AI: Innovative Technologies",
        "Advanced Probability and Random Processes",
        "Digital Systems Design",
        "Signals and Systems",
        "Computer Systems Integration",
        "Microprocessor Systems",
      ],
      honors: ["First Year Dean's Honour List"],
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

  projects: [
    {
      title: "Hexcoach",
      category: "Game AI / Machine Learning",
      status: "In progress",
      description:
        "A Catan-style game engine and AI coach. You play against bots while a coach explains which moves were good and why. I wrote the rules engine from scratch, and the strongest bot is a tree search guided by a neural network trained on self-play.",
      detail: [
        "The idea is chess.com for a settle-and-trade hex game. Play the bots, ask for a hint on any turn, watch a win-chance bar move, and practise opening placements, which decide more games than anything else.",
        "The engine covers the full base rules: seeded boards with no touching 6s and 8s, snake-order setup, production, the robber and discards on a 7, bank shortages, port trades, and Longest Road as a depth-first search over each player's roads. A game state is never edited in place, so the same seed and moves always replay the same game.",
        "Six invariants, like each resource always totalling 19 cards and no two buildings touching, are checked after every move. Across 1,000 simulated games that's 905,000 moves with zero failures, and 147 tests run in CI on every push.",
        "Early benchmarks had a hidden seat bias: three identical bots won 109, 106 and 85 games depending on where they sat, which skewed every comparison. I rebuilt the tournament with rotated seating and 95% confidence intervals. The rule-based bot now beats two random bots 99% of the time (95% CI 97.9 to 100%).",
        "The search bot runs Monte Carlo Tree Search on a 2-second budget, guided by a PyTorch value and policy network trained on self-play games generated in parallel. Profiling showed copying game states was the hot path, so I got a clone down to 0.98 µs, then ported the engine to Rust with PyO3 and checked it by replaying seeded games through both engines.",
        "A FastAPI server holds game sessions and streams bot moves to a Next.js front end over a WebSocket, with a hand-drawn SVG board.",
      ],
      tech: [
        "Python",
        "PyTorch",
        "Monte Carlo Tree Search",
        "Rust (PyO3)",
        "FastAPI",
        "Next.js",
        "Hypothesis",
        "GitHub Actions",
      ],
      images: [
        {
          src: "/projects/hexcoach-home.jpg",
          alt: "Hexcoach home page with a generated hex board",
          caption: "Home page. Every board is generated from a seed.",
        },
        {
          src: "/projects/hexcoach-game.jpg",
          alt: "A Hexcoach game against two bots, with the coach controls and win-chance bar",
          caption: "A game against two bots, with the coach set to nudge.",
        },
        {
          src: "/projects/hexcoach-openings.jpg",
          alt: "Hexcoach opening practice, with every legal corner scored on the board",
          caption: "Opening practice. Bigger, brighter corners score higher.",
        },
      ],
      sourceUrl: "https://github.com/paramveer30/Hex-Coach",
    },
    {
      title: "Emotion-Aware Companion Robot",
      category: "Machine Learning / Human Computer Lab",
      description:
        "My entry for the Human Computer Lab ML Challenge. The robot listens to what you say, how you say it and the look on your face, then answers out loud about half a second after you stop talking. Everything runs on one PC with a 6 GB GPU.",
      detail: [
        "The task was to read emotion from spoken turns in MELD, a set of dialogue clips from Friends labelled with seven emotions, and have a robot respond to it live.",
        "Each turn goes through three models. Whisper transcribes the speech and a RoBERTa model I fine-tuned reads the words, with the last two turns as context. A small head I trained on frozen WavLM features reads the voice. A face model runs on webcam frames while you're still talking, so it adds no wait at the end.",
        "The three predictions are averaged, and a temperature fitted on the dev set makes the confidence it shows match how often it's actually right. When the voice or face disagrees with the words, like a happy sentence said angrily, the robot checks in instead of guessing. Replies stream from Qwen2.5-1.5B through Ollama and Kokoro speaks them one sentence at a time.",
        "The emotion is ready 0.28 s after you stop talking, and the robot starts speaking at 0.58 s. On the MELD test set the text model reaches 0.638 weighted F1, about double the 0.313 you get from always guessing neutral. Adding the voice helped on dev but not on test. I scored test once, at the end, and reported that rather than retuning to make it look better.",
        "The whole system is 2.18 billion parameters, inside the challenge's 6 billion cap, with 206 tests that run on a CPU in about 15 seconds.",
      ],
      tech: [
        "Python",
        "PyTorch",
        "Transformers",
        "Whisper",
        "WavLM",
        "Ollama",
        "FastAPI",
      ],
      images: [
        {
          src: "/projects/hcl-page.jpg",
          alt: "The robot's local web page playing a MELD clip, with each model's probabilities and timings",
          caption: "Each model's read, the fused result, and timings per turn.",
        },
        {
          src: "/projects/hcl-system.jpg",
          alt: "Diagram of one turn: voice detection, speech, voice and face models, fusion, reply and speech",
          caption:
            "One turn through the system, from microphone to spoken reply.",
          fit: "contain",
        },
        {
          src: "/projects/hcl-results.jpg",
          alt: "Bar chart of weighted and macro F1 on the MELD test split for each model",
          caption:
            "F1 on the MELD test split. Text carries most of the signal.",
          fit: "contain",
        },
      ],
      sourceUrl: "https://github.com/paramveer30/HCL-ML-Challenge",
    },
    {
      title: "Indoor LiDAR Spatial Mapping",
      category: "Embedded Systems / COMPENG 2DX3",
      description:
        "A room scanner made from one time-of-flight distance sensor on a stepper motor. It sweeps 360 degrees, moves forward, sweeps again, and turns the readings into a 3D wireframe of the space.",
      detail: [
        "An MSP432E401Y (ARM Cortex-M4F) drives a 28BYJ-48 stepper through a ULN2003 driver and reads a VL53L1X sensor over I2C, taking 64 distance samples per revolution. Two buttons start and pause a scan, and LEDs show what it's doing.",
        "The firmware is bare-metal C written in Keil, with GPIO interrupts, SysTick timing, I2C and UART all set up by hand.",
        "Readings stream to a PC over UART at 115200 bps. A Python script converts each sweep from polar to Cartesian coordinates, stacks the sweeps 100 mm apart, and draws the result in Matplotlib. These scans are of a hallway in McMaster's Engineering Technology Building.",
        "Profiling each stage showed where the time went: the stepper took 640 ms per point against 32 ms of bus overhead, so the motor, not the sensor or the link, sets the scan speed. The parts came to about $80.",
      ],
      tech: ["C", "ARM Cortex-M4F", "I2C", "UART", "Python", "Matplotlib"],
      images: [
        {
          src: "/projects/spatial-mapping.jpg",
          alt: "The microcontroller, stepper motor and ToF sensor next to a 3D wireframe scan",
          caption: "The hardware, and the scan it produced.",
          fit: "contain",
        },
        {
          src: "/projects/lidar-front.jpg",
          alt: "Front view of the hallway wireframe scan",
          caption: "Front view of the hallway scan.",
          fit: "contain",
        },
        {
          src: "/projects/lidar-side.jpg",
          alt: "Side view of the hallway wireframe scan",
          caption: "Side view, ten sweeps 100 mm apart.",
          fit: "contain",
        },
      ],
      sourceUrl: "https://github.com/paramveer30/Lidar-Spatial-Mapping-System",
    },
    {
      title: "Tamalife",
      category: "Mobile / OpenAI Build Week",
      description:
        "A subscription tracker that plays like a pet game. Every bill, warranty and subscription is a creature whose health drops as its renewal date gets closer, so a forgotten charge is hard to miss.",
      detail: [
        "Built with three teammates at OpenAI Build Week. Most trackers fail because nobody opens them, so we made one you'd want to check on: a pixel-art garden where each recurring cost lives as a creature. Snap a photo of a receipt and a new one hatches.",
        "I led UI/UX across 15+ screens, including the dashboard, creature detail and the renew and cancel flows, and built a shared component and theming system that re-skins the whole app from one day palette and one night palette.",
        "I also owned push notifications end to end: Firebase Cloud Messaging on the phone, device tokens in Supabase, reminders sent by a Celery beat job that scans for upcoming renewals and expiring warranties, a settings screen for timing, and deep links that open the right creature.",
        "Expo Go can't load native Firebase modules, so I moved the team to Expo/EAS development builds and tested the full path, from receipt scan to notification to the right screen, on real phones.",
      ],
      tech: [
        "React Native",
        "TypeScript",
        "Expo/EAS",
        "Firebase Cloud Messaging",
        "Supabase",
        "FastAPI",
        "Celery",
      ],
      images: [
        {
          src: "/projects/tamalife.jpg",
          alt: "Tamalife screens showing subscription creatures in a pixel-art garden",
        },
      ],
      sourceUrl: "https://github.com/paramveer30/Codex-Hackathon-Tamalife",
    },
    {
      title: "Vantage Labs",
      category: "Web / Live Site",
      description:
        "The live marketing site for Vantage Labs, a custom software consultancy. Static pages, a few interactive 3D scenes, and a lead pipeline that emails every contact form and booked call.",
      detail: [
        "Built on the Next.js App Router with React 19 and strict TypeScript. Every public page is static, and the dynamic work lives in two API routes.",
        "The 3D scenes are React Three Fiber components, lazy-loaded so they don't hold up the first paint. On phones the animated hero is swapped for a static one and the heavier mockups are frozen, which keeps mobile fast.",
        "Leads are the part that has to work. One route takes the contact form, the other receives Cal.com booking webhooks and verifies their signatures, and both send email through Resend. In production the app fails at startup if its email keys are missing, so enquiries can't be dropped silently.",
        "CI runs lint, the Vitest suite and a full build on every push.",
      ],
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "React Three Fiber",
        "Resend",
        "Vitest",
      ],
      images: [
        {
          src: "/projects/vantage-labs.jpg",
          alt: "Vantage Labs home page",
        },
      ],
      demoUrl: "https://vantagelabs.vercel.app/",
      sourceUrl: "https://github.com/paramveer30/vantagelabsai",
    },
    {
      title: "HousingHub",
      category: "Web / Full Stack",
      description:
        "A student housing marketplace with live landlord messaging and real commute times from every listing to campus.",
      detail: [
        "Finding student housing means checking a dozen sites, and none of them tell you the one thing that matters most: how long it takes to get to class. HousingHub puts listings and commute times in the same place, in about 9,100 lines of TypeScript.",
        "Messaging runs on Socket.IO with conversation rooms, read receipts and unread counts. Alongside it are 24 REST endpoints for listings, photo galleries, bookmarks and owner-only permissions.",
        "Each listing sits on a Leaflet map with a campus pin, distance rings and route lines. OpenRouteService and the TravelTime API give walk, bike, drive and transit times instead of a straight-line distance.",
        "The data is a 12-table Postgres schema in Drizzle ORM, with Zod validators shared by client and server so both sides agree on every shape at compile time.",
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
      images: [
        {
          src: "/projects/letmeknock.jpg",
          alt: "HousingHub landing page, shipped under the name LetMeKnock",
          caption: "Shipped under the name LetMeKnock.",
        },
      ],
      // repo taken down, so no source link rather than a dead one
    },
    {
      title: "Automated Baggage Handling System",
      category: "Robotics / Team Project",
      description:
        "A luggage sorter built from a Q-Arm, a servo table and a barcode scanner, with the control logic written in Python.",
      detail: [
        "The Q-Arm picks bags off a servo-driven table, the scanner reads each routing tag, and the arm drops the bag in the bin for its flight.",
        "The Python control loop handles the pick-and-place geometry and the sorting, and reached 88% seat detection accuracy across test runs.",
      ],
      tech: ["Python", "Quanser Q-Arm"],
      images: [
        {
          src: "/projects/baggage-system.jpg",
          alt: "The Q-Arm baggage sorting setup",
        },
      ],
      sourceUrl:
        "https://github.com/paramveer30/Automated-Airport-Baggage-System",
    },
    {
      title: "This Portfolio",
      category: "Web / Personal",
      description:
        "This site. Written from scratch in Next.js, with every word and project coming from one typed content file.",
      detail: [
        "One page on the Next.js App Router, TypeScript and Tailwind. Adding a job, a project or a hobby means editing the content file, not the layout.",
        "Light and dark themes follow your system setting, remember a manual choice, and switch before the first paint so the page never flashes the wrong colours.",
        "The hero background is a canvas of drifting nodes that link up when they get close and move away from your cursor. All motion turns off under prefers-reduced-motion, and the colours are checked against WCAG contrast ratios.",
      ],
      tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vitest"],
      images: [
        {
          src: "/projects/portfolio.jpg",
          alt: "This portfolio's hero section",
        },
      ],
      sourceUrl: "https://github.com/paramveer30/Personal-Portfolio",
    },
  ],

  skills: [
    {
      category: "Languages",
      items: [
        "Python",
        "C/C++",
        "Rust",
        "TypeScript",
        "JavaScript",
        "SQL",
        "MATLAB",
        "R",
        "LaTeX",
      ],
    },
    {
      category: "ML & Data",
      items: [
        "PyTorch",
        "scikit-learn",
        "Transformers",
        "NumPy",
        "pandas",
        "Matplotlib",
        "Monte Carlo Tree Search",
        "Ollama",
      ],
    },
    {
      category: "Web & Backend",
      items: [
        "React",
        "Next.js",
        "React Native",
        "Tailwind CSS",
        "FastAPI",
        "Node.js",
        "Express",
        "REST APIs",
        "Socket.IO",
        "WebSockets",
        "PostgreSQL",
        "Supabase",
        "Firebase",
        "Chrome Extensions (Manifest V3)",
      ],
    },
    {
      category: "Tools",
      items: [
        "Git",
        "GitHub",
        "GitHub Actions",
        "Docker",
        "Linux",
        "pytest",
        "Hypothesis",
        "ExcelJS",
        "VS Code",
        "AutoCAD",
      ],
    },
    {
      category: "Embedded & Hardware",
      items: [
        "ARM Cortex-M4F",
        "Bare-Metal C",
        "I2C",
        "UART",
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
  skillHighlights: [
    "Python",
    "C/C++",
    "TypeScript",
    "PyTorch",
    "React",
    "FastAPI",
    "Git",
    "PCB Diagnostics",
  ],

  passions: [
    {
      key: "parrots",
      title: "The parrots",
      blurb: "Two cockatiels, and the house hasn't been quiet since.",
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
        "Pickup whenever I can find a run, and a Raptors game whenever I can get a ticket.",
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
        "Dunes, canals, a coastline I haven't seen yet. Any excuse to go somewhere new.",
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
        "I walk the whole auto show floor every year and still want another lap.",
      images: ["/journey/cars/1.jpg", "/journey/cars/2.jpg"],
    },
    {
      key: "music",
      title: "Live music",
      blurb: "Hard to beat a packed arena once the lights go down.",
      images: ["/journey/music/1.jpg"],
    },
    {
      key: "outdoors",
      title: "Getting outside",
      blurb: "Early mornings by the lake, farm animals, the odd good sunrise.",
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
      blurb: "If everyone's talking about a new spot, I'm going.",
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
