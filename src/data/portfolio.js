// Edit portfolio copy here. Project-level features and personal contributions
// are intentionally separate; see docs/CONTENT_SOURCES.md before adding claims.
export const profile = {
  name: "Joaquin Rafael Sotelo Islas",
  username: "JoaquinSotel0",
  role: "Full-Stack Developer",
  github: "https://github.com/JoaquinSotel0",
  intro:`As a Computer Science student, my passion lies in turning complex problems into practical, intelligent web applications. I bridge the gap between interfaces, databases, and machine learning by combining my experience in modern web development and neural networks.

I code primarily in Python 🐍, Java ☕, and C++ ⚙️, and I am fluent in both English and Spanish 🌎.`
};

export const projects = [
  {
    id: "project-plan-generator",
    number: "01",
    title: "Project Plan Generator",
    category: "FULL-STACK DEVELOPMENT",
    role: "Collaborative project · Contributor",
    description:
      "A collaborative web application for creating software project plans around the ISO 29110 framework.",
    tags: ["Python", "Django", "HTML", "CSS", "JavaScript"],
    repository: "https://github.com/CMancillas/creador_plan_de_proyectos",
    evidence:
      "https://github.com/CMancillas/creador_plan_de_proyectos/commits/main/?author=JoaquinSotel0",
    evidenceLabel: "Explore my commits",
    detailTitle: "My contributions",
    details: [
      "Project scheduling and effort estimation.",
      "Project search and navigation, plus user-to-project association.",
      "URL and module integration, debugging, and branch merging.",
    ],
    illustration: "planner",
    screenshots: [
      {
        src: "/images/project-plan/resumen.png",
        alt: "Project overview",
      },
      {
        src: "/images/project-plan/cronograma.png",
        alt: "Project schedule",
      },
      {
        src: "/images/project-plan/riesgos.png",
        alt: "Project risks",
      },
    ],
  },
  {
    id: "flores-mobilenetv2",
    number: "02",
    title: "Flores-MobileNetV2",
    category: "COMPUTER VISION & WEB DEVELOPMENT",
    role: "Machine learning · Browser application using camera in real time",
    description:
      "A flower image classifier for 104 classes, combining MobileNetV2 transfer learning with a web application that runs predictions directly in the browser.",
    tags: ["Python", "TensorFlow", "Keras", "TensorFlow.js", "JavaScript"],
    repository: "https://github.com/JoaquinSotel0/Flores-MobileNetV2",
    evidence: "https://github.com/JoaquinSotel0/Flores-MobileNetV2#readme",
    evidenceLabel: "Explore the model and web app",
    detailTitle: "Model & application",
    details: [
      "Transfer learning with MobileNetV2 using TensorFlow/Keras for 104 flower classes.",
      "A TensorFlow.js web application supports photos and a live camera feed, with inference performed on the device.",
      "Includes model export and tools to compare predictions between Python and the browser.",
    ],
    illustration: "flowers",
    video: {
      id: "CJQRRYFzbeg",
      title: "Flores-MobileNetV2 demo",
      url: "https://www.youtube.com/watch?v=CJQRRYFzbeg",
    },
  },
  {
    id: "covid-2020-durango",
    number: "03",
    title: "COVID-2020-Durango",
    category: "DATA ANALYSIS",
    role: "R · Descriptive statistics",
    description:
      "An exploratory analysis of confirmed COVID-19 cases in Durango during 2020, using R and descriptive statistics.",
    tags: ["R", "Data analysis", "Descriptive statistics"],
    repository: "https://github.com/JoaquinSotel0/COVID-2020-Durango",
    evidence:
      "https://github.com/JoaquinSotel0/COVID-2020-Durango/tree/main/Scripts",
    evidenceLabel: "Explore the R scripts",
    detailTitle: "Analysis focus",
    details: [
      "Descriptive analysis of the 2020 confirmed-case dataset for Durango State in Mexico.",
      "R project organized into data, scripts, and exports.",
      "A historical data analysis project; no clinical or predictive claims are made.",
    ],
    illustration: "analysis",
    screenshots: [
      {
        src: "/images/durango/durango.jpeg",
        alt: "Durango COVID-19 dashboard",
      },
    ],
  },
];

export const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    subtitle: "The part people interact with.",
    skills: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    number: "02",
    title: "Backend & data",
    subtitle: "The logic behind the experience.",
    skills: ["Python", "Django", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    number: "03",
    title: "Tools & languages",
    subtitle: "A versatile foundation for building.",
    skills: ["Git", "Docker", "Bash", "C", "C++", "Java", "R"],
  },
];
