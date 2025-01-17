// Scroll suave hacia el elemento seleccionado

document.querySelectorAll('.futuristic-nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* Menú desplegable en pantallas pequeñas */

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

// Alternar el estado del menú al hacer clic
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('expanded');
    navMenu.classList.toggle('collapsed');
});

/* Aparición suave de los elementos */

// Selecciona las secciones y elementos que quieres observar

const elements = document.querySelectorAll(
    '.skills-section, .skill-box, .projects-section, .project-card, .contact-section, .contact-container, section'
);

// Configuración del Intersection Observer
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate'); // Añade la clase cuando aparece
            } else {
                entry.target.classList.remove('animate'); // Remueve la clase cuando desaparece
            }
        });
    },
    { threshold: 0.2 } // El porcentaje visible necesario para activar la animación
);

// Observa cada elemento seleccionado
elements.forEach((element) => observer.observe(element));

/* Progreso al desplazarse en la página */

window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.progress-bar');
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const width = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = `${width}%`;
});


/* Mostrar una descripción (tooltip) al pasar el cursor sobre los íconos sociales. */

document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseover', () => {
        const tooltip = document.createElement('div');
        tooltip.textContent = link.title;
        tooltip.className = 'tooltip';
        document.body.appendChild(tooltip);

        const rect = link.getBoundingClientRect();
        tooltip.style.left = `${rect.left + rect.width / 2}px`;
        tooltip.style.top = `${rect.top - 35}px`;
    });

    link.addEventListener('mouseout', () => {
        const tooltips = document.querySelectorAll('.tooltip');
        tooltips.forEach(tooltip => tooltip.remove());
    });
});


// Abrir el modal y cargar contenido según la habilidad seleccionada
const skillBoxes = document.querySelectorAll('.skill-box');
const modal = document.getElementById('skill-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.querySelector('.close-modal');

// Información sobre las habilidades
const skillInfo = {
    html: {
        title: "HTML",
        description: "HTML es el lenguaje estándar para crear páginas web. Utilizo HTML5 para construir estructuras semánticas y accesibles, asegurando que las páginas sean fáciles de leer y entender para los motores de búsqueda y los navegadores."
    },
    css: {
        title: "CSS",
        description: "CSS es utilizado para estilizar el contenido web. Me especializo en crear diseños responsivos, usando propiedades avanzadas como Flexbox y Grid. Además, trabajo con animaciones y transiciones para mejorar la experiencia de usuario."
    },
    js: {
        title: "JavaScript",
        description: "JavaScript es esencial para crear interactividad en las páginas web. Con JS, desarrollo funciones dinámicas, manipulo el DOM y optimizo el rendimiento del sitio, asegurando una experiencia de usuario fluida."
    },
    react: {
        title: "React",
        description: "React es una biblioteca de JavaScript para construir interfaces de usuario interactivas. Utilizo React para crear aplicaciones web reactivas y modulares, aprovechando los hooks y el enrutamiento para mejorar la experiencia del usuario."
    }
};

// Abrir el modal con la información correspondiente
skillBoxes.forEach(box => {
    box.addEventListener('click', () => {
        const skill = box.getAttribute('data-skill');
        modalTitle.textContent = skillInfo[skill].title;
        modalDescription.textContent = skillInfo[skill].description;
        modal.style.display = 'flex';
    });
});

// Cerrar el modal
window.addEventListener('click', (e) => {
    if (e.target === modal || e.target === closeModal) {
        modal.style.display = 'none';
    }
});

// Cerrar el modal si se hace clic fuera de él
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Sección educación

document.addEventListener("DOMContentLoaded", () => {
    const timelineEvents = document.querySelectorAll(".timeline-event");

    const activateOnScroll = () => {
        timelineEvents.forEach(event => {
            const rect = event.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                event.classList.add("active");
            }
        });
    };

    // Activar eventos al hacer scroll
    window.addEventListener("scroll", activateOnScroll);

    // Ejecutar una vez al cargar
    activateOnScroll();
});

document.addEventListener("DOMContentLoaded", () => {
    const timelineEvents = document.querySelectorAll(".timeline-event");

    const activateOnScroll = () => {
        timelineEvents.forEach(event => {
            const rect = event.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                event.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", activateOnScroll);

    // Ejecutar una vez al cargar la página
    activateOnScroll();
});


// Aparecer pixel por pixel

document.addEventListener("DOMContentLoaded", () => {
    const timelineEvents = document.querySelectorAll(".timeline-event");

    const activateOnScroll = () => {
        timelineEvents.forEach(event => {
            const rect = event.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                event.classList.add("active");
            }
        });
    };

    // Escuchar el scroll para activar la animación
    window.addEventListener("scroll", activateOnScroll);

    // Ejecutar al cargar la página
    activateOnScroll();
});


// SECCIÓN EXPERIENCIA

document.querySelectorAll(".experience-card").forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        card.style.transform = `rotateY(${x / 20}deg) rotateX(${-y / 20}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateY(0deg) rotateX(0deg)";
    });
});
