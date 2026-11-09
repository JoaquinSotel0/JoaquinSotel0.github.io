// Edit portfolio copy here. Project-level features and personal contributions
// are intentionally separate; see docs/CONTENT_SOURCES.md before adding claims.
export const profile = {
  name: "Joaquin Rafael Sotelo Islas",
  username: "JoaquinSotel0",
  role: "Full-Stack Developer",
  github: "https://github.com/JoaquinSotel0",
  intro:
    "I work across interfaces, backend logic, and databases to turn complex problems into practical web applications.",
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
    id: "proyectoinge",
    number: "02",
    title: "ProyectoINGE",
    category: "COLLABORATIVE WEB APPLICATION",
    role: "Course project · Team member",
    description:
      "A team-built application with user registration, authentication, and an example dashboard, backed by MySQL.",
    tags: ["JavaScript", "Node.js", "MySQL", "HTML", "CSS"],
    repository: "https://github.com/JoaquinSotel0/ProyectoINGE",
    evidence: "https://github.com/JoaquinSotel0/ProyectoINGE#readme",
    evidenceLabel: "Read the project overview",
    detailTitle: "Project scope & collaboration",
    details: [
      "The shared application includes sign-up, sign-in, and a dashboard with example data and charts.",
      "Listed as a team member in the project README. This repository is a fork of the team project.",
      "These features describe the team’s work; individual feature ownership is not claimed.",
    ],
    illustration: "dashboard",
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
      "Descriptive analysis of the 2020 confirmed-case dataset for Durango.",
      "R project organized into data, scripts, and exports.",
      "A historical data analysis project; no clinical or predictive claims are made.",
    ],
    illustration: "analysis",
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
