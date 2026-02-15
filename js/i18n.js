// ============================
// TRADUCCIONES
// ============================

const translations = {
    es: {
        cv: "Curriculum",

        nav_inicio: "Inicio",
        nav_about: "Sobre Mí",
        nav_experiencia: "Experiencia",
        nav_habilidades: "Habilidades",
        nav_educacion: "Educación",
        nav_proyectos: "Proyectos",
        nav_contacto: "Contacto",

        hero_greeting: "Hola, soy",
        hero_role: "Desarrollador Front-End & Educador",
        hero_desc:
            "Desarrollador con más de seis años de experiencia en el ámbito educativo, enfocado en crear soluciones digitales y experiencias interactivas que acompañan procesos de aprendizaje reales y aportan valor a través de la tecnología.",
        hero_cta: "¡Mirá mi trabajo!",

        about_title: "Sobre Mí",
        about_p1: "Desde hace más de seis años trabajo en el ámbito educativo como desarrollador y formador, combinando tecnología, creatividad y vocación docente. A lo largo de este recorrido participé en distintos proyectos e instituciones vinculadas a la educación digital, desarrollando soluciones tecnológicas y experiencias interactivas que acompañan procesos de aprendizaje reales.",
        about_p2: "Mi enfoque está en enseñar, guiar y transmitir conocimientos de forma clara, práctica y significativa, apoyándome en fundamentos técnicos sólidos y en una mirada pedagógica centrada en las personas. Me motiva crear herramientas que no solo funcionen bien, sino que también ayuden a aprender y comprender mejor.",

        exp_title: "Experiencia",

        exp_df_title: `Especialista de Proyecto @Digital Flow`,
        exp_df_date: "Marzo 2025 - Presente",
        exp_df_desc: `
        <li>
        Colaboro en la integración de tecnologías creativas aplicadas a la gestión y el desarrollo
        de instituciones educativas, con foco en innovación y transformación digital.
        </li>
        <li>
        Participación en proyectos STEAM que combinan robótica, programación e impresión 3D,
        promoviendo el aprendizaje interdisciplinario.
        </li>
        <li>
        Diseño y planificación de propuestas educativas orientadas al desarrollo de habilidades
        del siglo XXI, fomentando el pensamiento lógico, creativo y colaborativo.
        </li>
        <li>
        Implementación de soluciones tecnológicas adaptadas a contextos educativos reales,
        acompañando procesos pedagógicos y organizacionales.
        </li>
        <li class="experience__tools">
        Aptitudes y herramientas: Gestión de proyectos, Programación, Programación de robots,
        Planificación de proyectos, Autodesk Tinkercad.
        </li>
        `,

        exp_ch_title: `Education Mentor – Desarrollo Web Front End @Coderhouse`,
        exp_ch_date: "Enero 2023 - Presente",
        exp_ch_desc: `
        <li>
        Mentor y profesor en la tecnología de Desarrollo Web Front End, acompañando a estudiantes
        durante todo el proceso de aprendizaje teórico y práctico.
        </li>
        <li>
        Enseñanza de fundamentos y buenas prácticas en HTML5, CSS3 y JavaScript, con foco en
        maquetado semántico, diseño responsive y accesibilidad.
        </li>
        <li>
        Aplicación de metodologías modernas de diseño utilizando Flexbox, CSS Grid, Bootstrap
        y preprocesadores como SASS.
        </li>
        <li>
        Introducción al uso de control de versiones con Git y GitHub, promoviendo flujos de trabajo
        ordenados y colaborativos.
        </li>
        <li>
        Acompañamiento personalizado, revisión de proyectos y resolución de dudas, fomentando la
        autonomía y el pensamiento lógico.
        </li>
        <li class="experience__tools">
        Tecnologías y habilidades: HTML5, CSS3, SASS, Flexbox, CSS Grid, Bootstrap, Git, GitHub,
        Figma, Git Bash, Diseño Responsive, SEO básico e Inglés técnico.
        </li>
        `,

        exp_gcba_title: `Instructor & Education Mentor @Ministerio de Educación GCBA`,
        exp_gcba_date: "Enero 2020 - Presente",
        exp_gcba_desc: `
        <li>
        Diseño e imparto un curso completo de QA Testing, abarcando pruebas manuales y automatizadas,
        orientado a entornos reales de desarrollo y a la inserción laboral.
        </li>
        <li>
        Desarrollo contenidos sobre fundamentos de testing, control de calidad de software,
        ejecución de pruebas funcionales manuales y análisis de resultados.
        </li>
        <li>
        Automatización de pruebas utilizando JavaScript, JSON, XML y herramientas como Postman,
        promoviendo buenas prácticas dentro del ciclo de desarrollo.
        </li>
        <li>
        Instructor en programas de formación tecnológica para personas adultas desde Talento Tech
        Argentina, fomentando el aprendizaje basado en la experiencia y la cotidianidad.
        </li>
        <li>
        Mentor educativo en niveles Primario y Secundario, enseñando Desarrollo Web Front End,
        Robótica, Videojuegos y Programación Inicial con enfoque lógico y aplicado.
        </li>
        <li class="experience__tools">
        Tecnologías y habilidades: QA Manual, QA Automation, JavaScript, Postman, Python, SQL,
        HTML Semántico, Documentación, Mentoría Educativa y Buenas Prácticas de Desarrollo.
        </li>
        `,

        exp_tk_title: `Profesor @TecnoKids LATAM`,
        exp_tk_date: "Enero 2025 - Noviembre 2025",
        exp_tk_desc: `
        <li>
        Profesor en TecnoKids LATAM, dedicado a la enseñanza de robótica, programación y
        desarrollo de videojuegos para chicos y chicas de distintas edades.
        </li>
        <li>
        Diseño de clases dinámicas y prácticas orientadas a despertar la curiosidad tecnológica
        y el aprendizaje activo a través del juego.
        </li>
        <li>
        Acompañamiento en el desarrollo de habilidades lógicas, creativas y de resolución de
        problemas desde edades tempranas.
        </li>
        <li>
        Trabajo colaborativo dentro de un equipo educativo comprometido con generar un ambiente
        positivo, inclusivo y estimulante en cada clase.
        </li>
        <li class="experience__tools">
        Aptitudes y herramientas: Robótica inicial con Arduino UNO, Robótica con Micro:bit,
        Programación de robots, Videojuegos con Scratch, Automatización robótica de procesos,
        Educación tecnológica.
        </li>
        `,

        exp_utn_title: `Mentor en Desarrollo Web @UTN Buenos Aires`,
        exp_utn_date: "Abril 2022 - Noviembre 2022",
        exp_utn_desc: `
        <li>
        Me desempeñé como Mentor en Desarrollo Web – Front End, acompañando a chicas y chicos
        que transitaban los últimos años de la escuela secundaria.
        </li>
        <li>
        Introducción a los fundamentos del desarrollo web mediante prácticas accesibles,
        lógicas y orientadas a la comprensión real de la tecnología.
        </li>
        <li>
        Enseñanza de buenas prácticas en HTML semántico, estructura de proyectos y uso de
        herramientas de control de versiones.
        </li>
        <li>
        Fomento del pensamiento lógico y la resolución de problemas a través del diseño y
        maquetado de interfaces web responsivas.
        </li>
        <li class="experience__tools">
        Aptitudes y herramientas: HTML semántico, HTML5, CSS Flexbox, CSS Grid, CSS Forms,
        Bootstrap, Git, GitHub, Git BASH.
        </li>
        `,


        skills_title: "Habilidades",

        skills_backend_title: "Desarrollo Backend",
        skills_backend_desc: `
        Desarrollo de lógica de negocio, APIs y servicios backend
        orientados a escalabilidad, mantenimiento y comunicación
        con sistemas frontend y externos.
        `,

        skills_front_title: "Desarrollo Frontend",
        skills_front_desc: `
        Creación de interfaces modernas, accesibles y responsivas,
        priorizando experiencia de usuario, claridad visual
        y buenas prácticas de desarrollo.
        `,

        skills_tools_title: "Infraestructura & Herramientas",
        skills_tools_desc: `
        Uso de herramientas de control de versiones, gestión
        de proyectos y entornos de desarrollo que acompañan
        flujos de trabajo profesionales y colaborativos.
        `,

        skills_qa_title: "QA & Testing",
        skills_qa_desc: `
        Enfoque en calidad de software, detección temprana
        de errores y documentación clara para mejorar
        procesos de desarrollo y experiencia final.
        `,

        skills_design_title: "Diseño & Organización",
        skills_design_desc: `
        Utilizo estas herramientas para diseñar interfaces,
        planificar proyectos, organizar contenidos y facilitar
        la comunicación en equipos educativos y tecnológicos,
        desde la idea inicial hasta la implementación final.
        `,

        skills_personal_title: "Educación & Habilidades Personales",
        skills_personal_desc: `
        La tecnología como puente para enseñar, acompañar
        y generar oportunidades reales, siempre poniendo
        a las personas en el centro del proceso.
        `,



        edu_title: "Educación",

        edu_esba_title: "Auditoría de Sistemas",
        edu_esba_desc: `
        Certificación orientada a Auditoría de Sistemas y Tecnologías de la
        Información, con foco en control interno, controles de TI,
        gestión de riesgos y seguridad de la información.
        `,

        edu_ymca_title: "Diplomatura en Robótica e IoT",
        edu_ymca_desc: `
        Formación en robótica e Internet de las Cosas aplicada a
        entornos educativos, integrando hardware y software.
        `,

        edu_otto_title: "Perito Auxiliar en Informática",
        edu_otto_desc: `
        Formación técnica integral en informática, sistemas,
        redes y soporte técnico.
        `,

        cert_title: "Certificaciones",
        view_cert: "Ver certificado",
        view: "Ver",


        projects_title: "Proyectos",
        visit_site: "Visitar sitio →",

        footer_desc: "Desarrollador Frontend & Educador. Tecnología con foco humano y educativo.",
        footer_connect: "Conectemos",


        footer_contact: "Contacto",

        form_name: "Tu nombre",
        form_email: "Tu email",
        form_message: "Tu mensaje",
        form_send: "Enviar"
    },

    en: {
        cv: "Resume",

        nav_inicio: "Home",
        nav_about: "About Me",
        nav_experiencia: "Experience",
        nav_habilidades: "Skills",
        nav_educacion: "Education",
        nav_proyectos: "Projects",
        nav_contacto: "Contact",

        hero_greeting: "Hi, I'm",
        hero_role: "Front-End Developer & Educator",
        hero_desc:
        "Developer with more than six years of experience in the educational field, focused on creating digital solutions and interactive experiences that support real learning processes and add value through technology.",
        hero_cta: "View my work!",

        about_title: "About Me",
        about_p1: "For over six years, I have worked in the education sector as a developer and trainer, combining technology, creativity, and a passion for teaching. Throughout this journey, I have participated in various projects and institutions related to digital education, developing technological solutions and interactive experiences that support real-world learning processes.",
        about_p2: "My focus is on teaching, guiding, and conveying knowledge in a clear, practical, and meaningful way, based on solid technical foundations and a people-centered pedagogical approach. I am motivated to create tools that not only work well but also help people learn and understand better.",

        exp_title: "Experience",

        exp_df_title: `Project Specialist @Digital Flow`,
        exp_df_date: "March 2025 - Present",
        exp_df_desc: `
        <li>
        I collaborate in the integration of creative technologies applied to the management and development
        of educational institutions, with a focus on innovation and digital transformation.
        </li>
        <li>
        Participation in STEAM projects combining robotics, programming and 3D printing,
        promoting interdisciplinary learning.
        </li>
        <li>
        Design and planning of educational proposals aimed at developing 21st century skills,
        fostering logical, creative and collaborative thinking.
        </li>
        <li>
        Implementation of technological solutions adapted to real educational contexts,
        supporting pedagogical and organizational processes.
        </li>
        <li class="experience__tools">
        Skills and tools: Project management, Programming, Robot programming,
        Project planning, Autodesk Tinkercad.
        </li>
        `,

        exp_ch_title: `Education Mentor – Front End Web Development @Coderhouse`,
        exp_ch_date: "January 2023 - Present",
        exp_ch_desc: `
        <li>
        Mentor and instructor in Front End Web Development, guiding students throughout the entire
        theoretical and practical learning process.
        </li>
        <li>
        Teaching fundamentals and best practices in HTML5, CSS3 and JavaScript, focusing on
        semantic markup, responsive design and accessibility.
        </li>
        <li>
        Application of modern design methodologies using Flexbox, CSS Grid, Bootstrap
        and preprocessors such as SASS.
        </li>
        <li>
        Introduction to version control with Git and GitHub, promoting organized
        and collaborative workflows.
        </li>
        <li>
        Personalized guidance, project review and problem solving, encouraging
        autonomy and logical thinking.
        </li>
        <li class="experience__tools">
        Technologies and skills: HTML5, CSS3, SASS, Flexbox, CSS Grid, Bootstrap, Git, GitHub,
        Figma, Git Bash, Responsive Design, Basic SEO and Technical English.
        </li>
        `,

        exp_gcba_title: `Instructor & Education Mentor @Ministry of Education GCBA`,
        exp_gcba_date: "January 2020 - Present",
        exp_gcba_desc: `
        <li>
        I design and deliver a complete QA Testing course, covering manual and automated testing,
        oriented toward real development environments and job market readiness.
        </li>
        <li>
        Development of content on testing fundamentals, software quality assurance,
        execution of manual functional tests and result analysis.
        </li>
        <li>
        Test automation using JavaScript, JSON, XML and tools such as Postman,
        promoting best practices within the development lifecycle.
        </li>
        <li>
        Instructor in technological training programs for adults through Talento Tech Argentina,
        encouraging experience-based and practical learning.
        </li>
        <li>
        Educational mentor at Primary and Secondary levels, teaching Front End Web Development,
        Robotics, Video Game Development and Introductory Programming with a logical and applied approach.
        </li>
        <li class="experience__tools">
        Technologies and skills: Manual QA, QA Automation, JavaScript, Postman, Python, SQL,
        Semantic HTML, Documentation, Educational Mentoring and Development Best Practices.
        </li>
        `,

        exp_tk_title: `Teacher @TecnoKids LATAM`,
        exp_tk_date: "January 2025 - November 2025",
        exp_tk_desc: `
        <li>
        Teacher at TecnoKids LATAM, dedicated to teaching robotics, programming and
        video game development for children of different ages.
        </li>
        <li>
        Design of dynamic and practical classes aimed at awakening technological curiosity
        and active learning through play.
        </li>
        <li>
        Guidance in the development of logical, creative and problem-solving skills from an early age.
        </li>
        <li>
        Collaborative work within an educational team committed to creating a positive,
        inclusive and stimulating environment in every class.
        </li>
        <li class="experience__tools">
        Skills and tools: Introductory robotics with Arduino UNO, Robotics with Micro:bit,
        Robot programming, Game development with Scratch, Robotic process automation,
        Educational technology.
        </li>
        `,

        exp_utn_title: `Web Development Mentor @UTN Buenos Aires`,
        exp_utn_date: "April 2022 - November 2022",
        exp_utn_desc: `
        <li>
        I worked as a Front End Web Development Mentor, supporting students
        in their final years of secondary school.
        </li>
        <li>
        Introduction to web development fundamentals through accessible,
        logical and practically oriented exercises.
        </li>
        <li>
        Teaching best practices in semantic HTML, project structure and use of
        version control tools.
        </li>
        <li>
        Promotion of logical thinking and problem-solving through the design and
        layout of responsive web interfaces.
        </li>
        <li class="experience__tools">
        Skills and tools: Semantic HTML, HTML5, CSS Flexbox, CSS Grid, CSS Forms,
        Bootstrap, Git, GitHub, Git Bash.
        </li>
        `,



        skills_title: "Skills",

        skills_backend_title: "Backend Development",
        skills_backend_desc: `
        Development of business logic, APIs and backend services
        focused on scalability, maintainability and communication
        with frontend and external systems.
        `,

        skills_front_title: "Frontend Development",
        skills_front_desc: `
        Creation of modern, accessible and responsive interfaces,
        prioritizing user experience, visual clarity
        and development best practices.
        `,

        skills_tools_title: "Infrastructure & Tools",
        skills_tools_desc: `
        Use of version control tools, project management
        platforms and development environments that support
        professional and collaborative workflows.
        `,

        skills_qa_title: "QA & Testing",
        skills_qa_desc: `
        Focus on software quality, early bug detection
        and clear documentation to improve
        development processes and overall user experience.
        `,

        skills_design_title: "Design & Organization",
        skills_design_desc: `
        I use these tools to design interfaces,
        plan projects, organize content and facilitate
        communication within educational and technological teams,
        from the initial idea to final implementation.
        `,

        skills_personal_title: "Education & Soft Skills",
        skills_personal_desc: `
        Technology as a bridge to teach, support
        and create real opportunities, always placing
        people at the center of the process.
        `,


        edu_title: "Education",

        edu_esba_title: "Systems Audit",
        edu_esba_desc: `
        Certification focused on Systems and Information Technology Audit,
        with emphasis on internal control, IT controls,
        risk management and information security.
        `,

        edu_ymca_title: "Diploma in Robotics and IoT",
        edu_ymca_desc: `
        Training in robotics and Internet of Things applied to
        educational environments, integrating hardware and software.
        `,

        edu_otto_title: "IT Technical Assistant",
        edu_otto_desc: `
        Comprehensive technical education in computer science,
        systems, networks and technical support.
        `,

        cert_title: "Certifications",
        view_cert: "View certificate",
        view: "View",

        

        projects_title: "Projects",
        visit_site: "Visit site →",

        footer_desc: "Frontend Developer & Educator. Technology with a human and educational focus.",
        footer_connect: "Let's connect",

        footer_contact: "Contact",

        form_name: "Your name",
        form_email: "Your email",
        form_message: "Your message",
        form_send: "Send"
    }
};

// ============================
// SISTEMA DE IDIOMA CON RECARGA COMPLETA
// ============================

const langBtn = document.getElementById("langToggle");
const cvLink = document.getElementById("cvLink");

/* ========= APLICAR IDIOMA ========= */
function applyLanguage(lang) {

  // Cambiar textos normales
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const translation = translations[lang][key];

    if (!translation) return;

    if (el.tagName === "UL") {
      el.innerHTML = translation;
    } else {
      el.textContent = translation;
    }
  });

  // Cambiar placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.placeholder = translations[lang][key];
  });

  // Cambiar link del CV
  cvLink.href =
    lang === "es"
      ? "public/cv/CV_Axel_Henderson_Bianchi_ATS_ES.pdf"
      : "public/cv/CV_Axel_Henderson_Bianchi_ATS_EN.pdf";

  // Cambiar texto del botón
  langBtn.textContent = lang === "es" ? "EN" : "ES";

  // Cambiar atributo html lang
  document.documentElement.lang = lang;
}

/* ========= CLICK BOTÓN ========= */
langBtn.addEventListener("click", () => {

  const current = localStorage.getItem("language") || "es";
  const newLang = current === "es" ? "en" : "es";

  // Guardar idioma
  localStorage.setItem("language", newLang);

  // Forzar recarga completa (activa preloader + animaciones)
  window.location.reload();
});

/* ========= AL CARGAR LA PÁGINA ========= */
document.addEventListener("DOMContentLoaded", () => {

  const savedLang = localStorage.getItem("language") || "es";

  applyLanguage(savedLang);

  // Forzar scroll (por las dudas)
  window.scrollTo(0, 0);
});

