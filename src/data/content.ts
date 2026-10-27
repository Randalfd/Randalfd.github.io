export type Lang = "es" | "en";

export const links = {
  github: "https://github.com/Randalfd",
  linkedin: "https://www.linkedin.com/in/santiago-gutierrez-ibarra-3728a7273",
  email: "mailto:santiagokgutierrez@gmail.com",
};

// Foto de perfil (en public/)
export const photo = "/yo.jpg";

// Tecnologías (mismas en ambos idiomas)
export const tech = [
  { name: "Spring", icon: "spring" },
  { name: "MySQL", icon: "mysql" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "GitLab", icon: "gitlab" },
  { name: "GitHub", icon: "github" },
  { name: "Linux", icon: "linux" },
  { name: "Shell", icon: "gnubash" },
  { name: "Java", icon: "openjdk" },
  { name: "JavaScript", icon: "javascript" },
  { name: "React", icon: "react" },
  { name: "Astro", icon: "astro" },
  { name: "Git", icon: "git" },
];

export const content = {
  es: {
    htmlLang: "es",
    title: "Santiago Gutiérrez Ibarra | Full Stack Developer",
    description:
      "Portafolio de Santiago Gutiérrez Ibarra: Full Stack Developer autodidacta y entusiasta de DevOps.",
    nav: {
      about: "Sobre mí",
      tech: "Tecnologías",
      experience: "Experiencia",
      projects: "Proyectos",
      certs: "Certificados",
    },
    hero: {
      greeting: "¿Quien Soy?",
      name: "Santiago Gutiérrez Ibarra",
      role: "Full Stack Developer · Autodidacta · DevOps Enthusiast",
      cta: "Ver proyectos",
      cta2: "Contacto",
    },
    about: {
      title: "Sobre mí",
      text: "Soy Santiago Gutiérrez Ibarra, también conocido como <strong>Randalfd</strong>. Estudiante universitario y desarrollador Full Stack, interesado en la filosofía DevOps y la automatización de procesos. Mi objetivo es crecer continuamente como profesional, incorporando nuevas tecnologías, buenas prácticas y metodologías de desarrollo a mi flujo de trabajo para mejorar la eficiencia, la calidad y la productividad.",
    },
    techTitle: "Tecnologías",
    experienceTitle: "Experiencia",
    experience: [
      {
        role: "Ayudante Universitario – Diseño y Arquitectura de Despliegues I",
        company: "Universidad Provincial de Córdoba",
        period: "Julio 2026 – Actualidad",
        description:
          "Responsable de la preparación y evaluación de tests para los alumnos, así como del seguimiento de su rendimiento académico. Evalúo el nivel de comprensión de los estudiantes mediante formularios y reporto sus fortalezas y áreas de mejora, facilitando la retroalimentación entre docente y alumnado. Además, colaboro en tareas administrativas y de apoyo a la cátedra.",
      },
      {
        role: "Full Stack Developer Trainee",
        company: "Sinergia RH Digital",
        period: "Mayo 2024 – Junio 2024",
        description:
          "Desarrollé una API en CodeIgniter 4 y módulos web en React, encargándome de su diseño e implementación. Asimismo, diseñé, implementé y normalicé la base de datos en MySQL, optimizando su estructura para garantizar consultas eficientes y un rendimiento óptimo.",
      },
    ],
    projectsTitle: "Proyectos",
    projectsIntro: "Algunos de mis proyectos en GitHub / GitLab.",
    repo: "Ver repositorio",
    projects: [
      {
        name: "Calculador de Seguros",
        subtitle: "Invoice Calculator",
        description:
          "Aplicación para calcular facturas de seguros, desarrollada con TDD y con un pipeline de integración continua.",
        highlights: ["TDD", "Pipeline"],
        url: "https://gitlab.com/Randalfd/invoicecalculator",
      },
      {
        name: "Reserva de Vuelos",
        subtitle: "Flight Booking",
        description:
          "Sistema de reservas de vuelos con backend en Spring y autenticación basada en JWT.",
        highlights: ["Spring", "JWT Auth"],
        url: "https://github.com/Randalfd/Reserva_Vuelos",
      },
    ],
    certsTitle: "Certificados",
    certs: [
      {
        name: "Inglés B2 (60/100)",
        issuer: "EF SET",
        url: "https://cert.efset.org/onha7p/",
      },
      {
        name: "Java (Basic)",
        issuer: "HackerRank",
        url: "https://www.hackerrank.com/certificates/d2b0b1ee5f9c",
      },
      {
        name: "SQL (Intermediate)",
        issuer: "HackerRank",
        url: "https://www.hackerrank.com/certificates/31535ecd7db4",
      },
      {
        name: "LF101 – Introduction to Linux",
        issuer: "Linux Foundation",
        url: "https://www.credly.com/earner/earned/badge/2bf2b798-a384-4ad4-918b-79ac363da126",
      },
      {
        name: "Linux",
        issuer: "Workana",
        url: "https://www.workana.com/workers/certification/69dd6863b8db00adf74dc22032ad0ac4/linux/2228037",
      },
      {
        name: "Curador de Datos",
        issuer: "Fundación Carlos Slim",
        url: "https://drive.google.com/file/d/1wNqdrn7SLS0d0GcDyO1JADpuF64AUwyO/view?usp=sharing",
      },
      {
        name: "Bases de Datos",
        issuer: "Instituto Superior Santo Domingo",
        url: "https://drive.google.com/file/d/1Tw2Xl1nY65NqptAyje9mvt-NU6FGapB_/view?usp=sharing",
      },
      {
        name: "Getting Started with DevOps On AWS",
        issuer: "AWS",
        url: "https://skillbuilder.aws/",
      },
    ],
    contactTitle: "Hablemos",
    contactText:
      "¿Tenés una idea, una oportunidad o querés charlar de tecnología? Escribime.",
    footer: "Hecho con Astro",
    switchLabel: "EN",
    switchHref: "/en/",
    switchTitle: "Switch to English",
  },
  en: {
    htmlLang: "en",
    title: "Santiago Gutiérrez Ibarra | Full Stack Developer",
    description:
      "Portfolio of Santiago Gutiérrez Ibarra: self-taught Full Stack Developer and DevOps enthusiast.",
    nav: {
      about: "About",
      tech: "Tech",
      experience: "Experience",
      projects: "Projects",
      certs: "Certificates",
    },
    hero: {
      greeting: "who i am?",
      name: "Santiago Gutiérrez Ibarra",
      role: "Full Stack Developer · Self-Taught · DevOps Enthusiast",
      cta: "See projects",
      cta2: "Contact",
    },
    about: {
      title: "About me",
      text: "I'm Santiago Gutiérrez Ibarra, also known as <strong>Randalfd</strong>. I'm a university student and Full Stack Developer with a strong interest in DevOps principles and process automation. My goal is to continuously grow as a professional by adopting emerging technologies, industry best practices, and modern development methodologies to improve efficiency, code quality, and productivity.",
    },
    techTitle: "Technologies",
    experienceTitle: "Experience",
    experience: [
      {
        role: "University Teaching Assistant – Deployment Design and Architecture I",
        company: "Universidad Provincial de Córdoba",
        period: "July 2026 – Present",
        description:
          "Responsible for preparing and grading student tests, as well as tracking their academic performance. I assess students' comprehension through forms and report their strengths and areas for improvement, facilitating feedback between the professor and the students. Additionally, I assist with administrative and course support tasks.",
      },
      {
        role: "Full Stack Developer Trainee",
        company: "Sinergia RH Digital",
        period: "May 2024 – June 2024",
        description:
          "Built a CodeIgniter 4 API and React web modules, handling both design and implementation. Additionally, designed, implemented, and normalized the MySQL database, optimizing its structure for efficient queries and optimal performance.",
      },
    ],
    projectsTitle: "Projects",
    projectsIntro: "Some of my projects on GitHub / GitLab.",
    repo: "View repository",
    projects: [
      {
        name: "Invoice Calculator",
        subtitle: "Calculador de Seguros",
        description:
          "Insurance invoice calculator built with TDD and a continuous integration pipeline.",
        highlights: ["TDD", "Pipeline"],
        url: "https://gitlab.com/Randalfd/invoicecalculator",
      },
      {
        name: "Flight Booking",
        subtitle: "Reserva de Vuelos",
        description:
          "Flight booking system with a Spring backend and JWT-based authentication.",
        highlights: ["Spring", "JWT Auth"],
        url: "https://github.com/Randalfd/Reserva_Vuelos",
      },
    ],
    certsTitle: "Certificates",
    certs: [
      {
        name: "English B2 (60/100)",
        issuer: "EF SET",
        url: "https://cert.efset.org/onha7p/",
      },
      {
        name: "Java (Basic)",
        issuer: "HackerRank",
        url: "https://www.hackerrank.com/certificates/d2b0b1ee5f9c",
      },
      {
        name: "SQL (Intermediate)",
        issuer: "HackerRank",
        url: "https://www.hackerrank.com/certificates/31535ecd7db4",
      },
      {
        name: "LF101 – Introduction to Linux",
        issuer: "Linux Foundation",
        url: "https://www.credly.com/earner/earned/badge/2bf2b798-a384-4ad4-918b-79ac363da126",
      },
      {
        name: "Linux",
        issuer: "Workana",
        url: "https://www.workana.com/workers/certification/69dd6863b8db00adf74dc22032ad0ac4/linux/2228037",
      },
      {
        name: "Data Curator",
        issuer: "Fundación Carlos Slim",
        url: "https://drive.google.com/file/d/1wNqdrn7SLS0d0GcDyO1JADpuF64AUwyO/view?usp=sharing",
      },
      {
        name: "Databases",
        issuer: "Instituto Superior Santo Domingo",
        url: "https://drive.google.com/file/d/1Tw2Xl1nY65NqptAyje9mvt-NU6FGapB_/view?usp=sharing",
      },
      {
        name: "Getting Started with DevOps On AWS",
        issuer: "AWS",
        url: "https://skillbuilder.aws/",
      },
    ],
    contactTitle: "Let's talk",
    contactText:
      "Have an idea, an opportunity, or just want to chat about tech? Write to me.",
    footer: "Built with Astro",
    switchLabel: "ES",
    switchHref: "/",
    switchTitle: "Cambiar a español",
  },
} as const;
