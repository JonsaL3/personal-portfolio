// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Elementos para animaciones en scroll
    const sectionTitles = document.querySelectorAll('.section-title');
    const aboutText = document.querySelector('.about-text');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const skillCategories = document.querySelectorAll('.skill-category');
    const certificationItems = document.querySelectorAll('.certification-item');
    const contactItems = document.querySelectorAll('.contact-item');
    
    // Verificar si el cursor personalizado debe estar activado (por defecto: activado)
    const cursorEnabled = localStorage.getItem('custom-cursor-enabled') !== 'false';
    
    // Inicializar el cursor personalizado si está activado
    if (cursorEnabled) {
        document.body.classList.add('custom-cursor-enabled');
        initCustomCursor();
    } else {
        document.body.classList.remove('custom-cursor-enabled');
    }
    
    // Inicializar control del cursor personalizado
    initCursorToggle(cursorEnabled);
    
    // Efectos de parallax para los elementos del fondo
    initParallaxEffect();
    
    // Navbar efecto scroll
    initScrollNavbar();
    
    // Inicializar animaciones basadas en scroll
    initScrollAnimations();
    
    // Inicializar animaciones de las barras de habilidades
    initSkillBars();
});

// Función para inicializar el botón de activar/desactivar cursor
function initCursorToggle(initialState) {
    const toggleButton = document.querySelector('.cursor-toggle');
    if (!toggleButton) return;
    
    // Establecer estado inicial
    if (!initialState) {
        toggleButton.classList.add('disabled');
    }
    
    toggleButton.addEventListener('click', () => {
        const isEnabled = document.body.classList.contains('custom-cursor-enabled');
        
        if (isEnabled) {
            // Desactivar cursor personalizado
            document.body.classList.remove('custom-cursor-enabled');
            document.body.style.cursor = 'auto';
            document.querySelectorAll('a, button, .skill-item, .certification-item, .contact-item, .nav-links li').forEach(el => {
                el.style.cursor = 'auto';
            });
            toggleButton.classList.add('disabled');
            
            // Ocultar cursor personalizado
            const cursor = document.querySelector('.custom-cursor');
            if (cursor) cursor.style.display = 'none';
            
            // Guardar preferencia
            localStorage.setItem('custom-cursor-enabled', 'false');
        } else {
            // Activar cursor personalizado
            document.body.classList.add('custom-cursor-enabled');
            document.body.style.cursor = 'none';
            document.querySelectorAll('a, button, .skill-item, .certification-item, .contact-item, .nav-links li').forEach(el => {
                el.style.cursor = 'none';
            });
            toggleButton.classList.remove('disabled');
            
            // Mostrar cursor personalizado
            const cursor = document.querySelector('.custom-cursor');
            if (cursor) {
                cursor.style.display = 'block';
                // Reiniciar el cursor personalizado
                initCustomCursor();
            }
            
            // Guardar preferencia
            localStorage.setItem('custom-cursor-enabled', 'true');
        }
    });
}

// Función para inicializar el cursor personalizado
function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    
    if (!cursor || window.matchMedia('(max-width: 768px)').matches) return;
    
    // Hacer visible el cursor
    cursor.style.display = 'block';
    
    // Variables para cursor más suavizado
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    // Mover el cursor personalizado con el movimiento del mouse de forma suavizada
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Función de actualización del cursor con suavidad
    function updateCursor() {
        // Velocidad de seguimiento (mayor = más rápido y preciso)
        const speed = 0.65; // Aumentado de 0.2 a 0.65 para mejor control
        
        // Cálculo de posición con efecto suavizado
        cursorX += (mouseX - cursorX) * speed;
        cursorY += (mouseY - cursorY) * speed;
        
        // Aplicar la posición
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
        
        // Solo continuar la animación si el cursor personalizado está activado
        if (document.body.classList.contains('custom-cursor-enabled')) {
            requestAnimationFrame(updateCursor);
        }
    }
    
    // Iniciar la animación
    requestAnimationFrame(updateCursor);
    
    // Efecto de agrandar el cursor al pasar sobre elementos interactivos
    // Ampliar la lista de selectores para incluir más elementos interactivos
    const interactiveElements = document.querySelectorAll(`
        a, 
        button, 
        .skill-item, 
        .certification-item, 
        .contact-item, 
        .nav-links li,
        .timeline-content,
        .timeline-item,
        .timeline-date,
        .social-links a,
        .cursor-toggle
    `);
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
        });
    });
    
    // Efectos adicionales del cursor
    document.addEventListener('mousedown', () => {
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%) scale(0.8)`;
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%) scale(1)`;
    });
    
    // Verificar si el cursor sale de la ventana
    document.addEventListener('mouseout', (e) => {
        if (e.relatedTarget === null) {
            cursor.style.opacity = '0';
        }
    });
    
    document.addEventListener('mouseover', () => {
        cursor.style.opacity = '1';
    });
}

// Función para inicializar el efecto parallax
function initParallaxEffect() {
    const parallaxShapes = document.querySelectorAll('.parallax-shape');
    
    if (parallaxShapes.length === 0) return;
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        parallaxShapes.forEach(shape => {
            const shapeSpeed = 20; // Reducir velocidad del movimiento
            const offsetX = (mouseX - 0.5) * shapeSpeed;
            const offsetY = (mouseY - 0.5) * shapeSpeed;
            
            // Limitar el movimiento para que no cause overflow
            const limitedOffsetX = Math.max(-20, Math.min(20, offsetX));
            const limitedOffsetY = Math.max(-20, Math.min(20, offsetY));
            
            shape.style.transform = `translate(${limitedOffsetX}px, ${limitedOffsetY}px)`;
        });
    });
    
    // Efecto parallax para elementos flotantes
    const floatingElements = document.querySelectorAll('.floating-element');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        floatingElements.forEach((element, index) => {
            // Movimiento sutil basado en el scroll, con límites
            const speed = index % 2 === 0 ? 0.03 : -0.03; // Reducir velocidad
            const offset = scrollY * speed;
            const limitedOffset = Math.max(-30, Math.min(30, offset)); // Limitar el desplazamiento
            element.style.transform = `translateY(${limitedOffset}px)`;
        });
    });
}

// Función para inicializar el efecto de la navbar al hacer scroll
function initScrollNavbar() {
    const navbar = document.getElementById('main-navbar');
    
    if (!navbar) return;
    
    // Aplicar clase scrolled inmediatamente si ya hay scroll al cargar
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    }
    
    // Evento para detectar scroll con throttling para mejor rendimiento
    let lastScrollTop = 0;
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        lastScrollTop = window.scrollY;
        
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (lastScrollTop > 10) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                ticking = false;
            });
            
            ticking = true;
        }
    });
}

// Función para inicializar las animaciones basadas en scroll
function initScrollAnimations() {
    // Obtener todos los elementos a animar
    const elementsToAnimate = [
        ...document.querySelectorAll('.section-title'),
        ...document.querySelectorAll('.about-text'),
        ...document.querySelectorAll('.timeline-item'),
        ...document.querySelectorAll('.skill-category'),
        ...document.querySelectorAll('.certification-item'),
        ...document.querySelectorAll('.contact-item'),
        ...document.querySelectorAll('.contact-intro'),
        ...document.querySelectorAll('.contact-cta'),
        ...document.querySelectorAll('.education-card'),
        ...document.querySelectorAll('.compact-skill')  // Añadir las habilidades compactas
    ];
    
    // Opciones para el Intersection Observer
    const options = {
        root: null, // viewport
        threshold: 0.2, // 20% de visibilidad necesaria para activar
        rootMargin: '0px'
    };
    
    // Crear el observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añadir un pequeño retraso secuencial si es una tarjeta de educación
                if (entry.target.classList.contains('education-card')) {
                    const cards = document.querySelectorAll('.education-card');
                    const index = Array.from(cards).indexOf(entry.target);
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 150); // Retraso secuencial
                } 
                // Añadir retraso secuencial para las certificaciones
                else if (entry.target.classList.contains('certification-item')) {
                    const certItems = document.querySelectorAll('.certification-item');
                    const index = Array.from(certItems).indexOf(entry.target);
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 120); // Retraso secuencial ligeramente más rápido
                }
                // Añadir retraso secuencial para las habilidades compactas
                else if (entry.target.classList.contains('compact-skill')) {
                    const skillsRow = entry.target.closest('.skills-row');
                    if (skillsRow) {
                        const skills = skillsRow.querySelectorAll('.compact-skill');
                        const index = Array.from(skills).indexOf(entry.target);
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, index * 100); // Retraso secuencial más rápido
                    } else {
                        entry.target.classList.add('visible');
                    }
                } else {
                    entry.target.classList.add('visible');
                }
                observer.unobserve(entry.target); // Dejar de observar después de la animación
            }
        });
    }, options);
    
    // Observar cada elemento
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
}

// Función para inicializar las animaciones de las barras de habilidades
function initSkillBars() {
    // Animación para las barras de habilidades antiguas (por si quedara alguna)
    const skillLevels = document.querySelectorAll('.skill-level');
    
    // Animación para las nuevas tarjetas de habilidades
    const skillCards = document.querySelectorAll('.skill-card');
    
    // Animación para las habilidades compactas
    const compactSkills = document.querySelectorAll('.compact-skill');
    
    if (skillCards.length === 0 && skillLevels.length === 0 && compactSkills.length === 0) return;
    
    // Opciones para el Intersection Observer
    const options = {
        root: null,
        threshold: 0.2,
        rootMargin: '0px'
    };
    
    // Observer para las habilidades compactas
    const compactObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skill = entry.target;
                
                // Determinar índice para retraso escalonado
                const skillsRow = skill.closest('.skills-row');
                let index = 0;
                
                if (skillsRow) {
                    const skills = skillsRow.querySelectorAll('.compact-skill');
                    index = Array.from(skills).indexOf(skill);
                }
                
                // Aplicar la visibilidad después de un retraso
                setTimeout(() => {
                    skill.classList.add('visible');
                }, index * 100 + 100); // Retraso base + escalonado
                
                observer.unobserve(skill);
            }
        });
    }, options);
    
    // Observar cada habilidad compacta
    compactSkills.forEach(skill => {
        compactObserver.observe(skill);
    });
    
    // Observer para las tarjetas de habilidades
    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                
                // Hacer visible la tarjeta con un pequeño retraso según su posición
                setTimeout(() => {
                    card.classList.add('visible');
                    
                    // Animar la barra de progreso
                    const level = card.querySelector('.skill-level');
                    const percentage = card.getAttribute('data-percentage');
                    
                    if (level && percentage) {
                        setTimeout(() => {
                            level.style.width = `${percentage}%`;
                        }, 300);
                    }
                }, Array.from(skillCards).indexOf(card) * 100);
                
                observer.unobserve(card);
            }
        });
    }, options);
    
    // Observar cada tarjeta de habilidades
    skillCards.forEach(card => {
        cardObserver.observe(card);
    });
    
    // Observer para las barras de habilidades antiguas (compatibilidad)
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillItem = entry.target.closest('.skill-item');
                if (skillItem) {
                    const percentage = skillItem.querySelector('span').getAttribute('data-percentage');
                    
                    // Animar la barra al porcentaje indicado
                    setTimeout(() => {
                        entry.target.style.width = percentage;
                    }, 200);
                    
                    observer.unobserve(entry.target);
                }
            }
        });
    }, options);
    
    // Observar cada barra de habilidades antigua
    skillLevels.forEach(level => {
        observer.observe(level);
    });
}

// Efecto de revelación de texto al cargar la página
const headerTitle = document.querySelector('.header-content h1');
const headerSubtitle = document.querySelector('.header-content h2');

if (headerTitle && headerSubtitle) {
    // Reproducir animación cuando la página esté lista
    window.addEventListener('load', () => {
        headerTitle.style.opacity = '1';
        headerTitle.style.transform = 'translateY(0)';
        
        setTimeout(() => {
            headerSubtitle.style.opacity = '1';
            headerSubtitle.style.transform = 'translateY(0)';
        }, 300);
    });
}

// Animaciones adicionales para elementos específicos
document.querySelectorAll('.certification-item i').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.animation = 'rotate 1s ease';
    });
    
    icon.addEventListener('animationend', () => {
        icon.style.animation = '';
    });
});

// Añadir efecto de pulso a ciertos elementos
const addPulseEffect = () => {
    const elementsWithPulse = document.querySelectorAll('.social-links a, .contact-item i');
    
    elementsWithPulse.forEach(element => {
        setInterval(() => {
            element.style.animation = 'pulse 1.5s ease-in-out';
            setTimeout(() => {
                element.style.animation = '';
            }, 1500);
        }, 5000);
    });
};

// Iniciar el efecto de pulso después de 3 segundos
setTimeout(addPulseEffect, 3000); 