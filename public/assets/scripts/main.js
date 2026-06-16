document.addEventListener('DOMContentLoaded', function() {
    const mainPage = document.querySelector('main');
    const communityPage = document.getElementById('comunidad-page');
    const parentsGuidePage = document.getElementById('parents-guide-page');
    const faqPage = document.getElementById('faq-page');

    // Referencias al Header y Footer
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    // Array con todas las "páginas" para ocultarlas fácilmente
    const allPages = [mainPage, communityPage, parentsGuidePage, faqPage];
    const languageSelect = document.getElementById('languageSelect');
    const translations = {
        es: {
            lang: 'es',
            text: {
                '.menu li:nth-child(1) a': 'PREGUNTAS FRECUENTES',
                '.menu li:nth-child(2) a': 'GUÍA PARA PADRES',
                '.menu li:nth-child(3) a': 'COMUNIDAD',
                '.language-switch__label': 'Idioma',
                '.btn-primario': 'Explorar retos',
                '.benefit:nth-child(1) h3': 'Aprende de forma divertida',
                '.benefit:nth-child(1) p': 'Convierte la educación ambiental en un juego interactivo lleno de retos y recompensas.',
                '.benefit:nth-child(2) h3': 'Obtén nuevas experiencias en familia',
                '.benefit:nth-child(2) p': 'Disfruta actividades sostenibles junto a tus seres queridos y aprendan juntos a cuidar el planeta.',
                '.benefit:nth-child(3) h3': 'Forma parte de una comunidad verde',
                '.benefit:nth-child(3) p': 'Conecta con otros usuarios comprometidos y comparte tus logros ecológicos.',
                '.benefit:nth-child(4) h3': 'Genera un impacto real',
                '.benefit:nth-child(4) p': 'Aplica los conocimientos adquiridos y contribuye a mejorar tu entorno desde acciones pequeñas.',
                '#product-video-title': 'Sobre el producto',
                '.about h2': 'Sobre nosotros',
                '.about-card:nth-child(1) h3': 'Misión',
                '.about-card:nth-child(1) p': 'Promover la conciencia ambiental a través del aprendizaje digital, ayudando a construir un futuro más sostenible para todos.',
                '.about-card:nth-child(2) h3': 'Visión',
                '.about-card:nth-child(2) p': 'Ser la principal plataforma educativa en sostenibilidad, donde cada reto contribuya a mejorar el planeta paso a paso.',
                '.about-card:nth-child(3) h3': '¿Quiénes somos?',
                '.about-card:nth-child(3) p': 'Somos un grupo de jóvenes comprometidos con el cambio climático que combina tecnología y educación para inspirar acción verde.',
                '.faq-title': 'Preguntas frecuentes',
                '#parents-guide-page .guide-text-content h1': 'Guía Para Padres',
                '#parents-guide-page .guide-text-content p:nth-of-type(1)': 'EcoMind facilita que las familias aprendan y crezcan juntas en temas de sostenibilidad. Nuestra plataforma está diseñada para que padres e hijos puedan participar de manera segura y educativa.',
                '#parents-guide-page .guide-text-content p:nth-of-type(2)': 'Crea tu grupo familiar, establece objetivos compartidos y celebra los logros de cada miembro mientras aprenden sobre el cuidado del medio ambiente.',
                '.educational-resources h2': 'Recursos Educativos',
                '.resources-subtitle': 'Todo lo que encontrarás para empezar tu viaje educativo ambiental',
                '.resource-card:nth-child(1) h3': 'Lecturas',
                '.resource-card:nth-child(1) p': 'Contenido estructurado sobre reciclaje, ecología y biodiversidad',
                '.resource-card:nth-child(2) h3': 'Videos',
                '.resource-card:nth-child(2) p': 'Aprende con contenido audiovisual dinámico y fácil de seguir',
                '.resource-card:nth-child(3) h3': 'Infografías',
                '.resource-card:nth-child(3) p': 'Visualiza información compleja de manera clara y atractiva',
                '.view--microtransactions h2': 'Manejo de microtransacciones',
                '.parent-tips h2': 'Consejos para Padres',
                '.community-title': 'Comunidad EcoMind',
                '.community-description': 'Miles de familias aprendiendo juntas y creando un impacto real en el cuidado del medio ambiente. Un espacio donde compartimos experiencias, logros y construimos un futuro más verde.',
                '.stats-card h3': 'Nuestra comunidad en números',
                '.stat-item:nth-of-type(1) .stat-label': 'Miembros activos',
                '.stat-item:nth-of-type(2) .stat-label': 'Retos completados',
                '.stat-item:nth-of-type(3) .stat-label': 'Familias conectadas localmente',
                '.what-to-do-section .section-title': '¿Qué puedes hacer en la comunidad?',
                '.what-to-do-section .section-description': 'Conecta, aprende y haz la diferencia junto a miles de familias',
                '.share-achievements-title': 'Comparte tus logros',
                '.share-achievements-description': 'Celebra logros con otras familias comprometidas',
                '.community-views .view__header h2': 'Interactua con otros',
                '.testimonials-section .section-title': 'Lo que dicen nuestras familias',
                '.community-events-kicker': 'Eventos cercanos',
                '.community-events-description': 'Descubre actividades organizadas por la comunidad EcoMind, participa con tu familia y conecta con otros Ecominders que también quieren generar un impacto real.',
                '.community-events-list-title': 'Próximas actividades',
                '.community-events-pill:nth-child(1)': 'Actividades familiares',
                '.community-events-pill:nth-child(2)': 'Voluntariado local',
                '.community-events-pill:nth-child(3)': 'Retos con recompensa'
            },
            html: {
                '.navbar .btn-unete': 'ÚNETE AHORA <span class="arrow"></span>',
                '.benefits__header h2': '¿Por qué usar <span class="brand-word">EcoMind</span>?',
                '.hero__glass h1': 'Aprender a cuidar el planeta<br>empieza contigo',
                '.btn-join-hero': 'ÚNETE A NOSOTROS',
                '.community-events-title': 'Entérate de los encuentros ecológicos más cerca de ti'
            },
            allText: {
                '.footer__links a:nth-child(1)': 'Nosotros',
                '.footer__links a:nth-child(2)': 'Blog',
                '.footer__links a:nth-child(3)': 'Tienda',
                '.footer__links a:nth-child(4)': 'Términos',
                '.footer__links a:nth-child(5)': 'Privacidad'
            },
            carousels: {
                'assets/images/views_frontend/retos.png': 'Elige tu misión de preferencia',
                'assets/images/views_frontend/teamactiviti.png': 'Haz misiones en equipo',
                'assets/images/views_frontend/Cosmetics.png': 'Personaliza a tu gusto',
                'assets/images/views_frontend/profile.png': 'Ver tu perfil',
                'assets/images/views_frontend/Community.png': 'Interactua con otros',
                'assets/images/views_frontend/Events.png': 'Participa en eventos',
                'assets/images/views_frontend/Ranking.png': 'Compite por los mejores puestos'
            }
        },
        en: {
            lang: 'en',
            text: {
                '.menu li:nth-child(1) a': 'FAQ',
                '.menu li:nth-child(2) a': 'PARENT GUIDE',
                '.menu li:nth-child(3) a': 'COMMUNITY',
                '.language-switch__label': 'Language',
                '.btn-primario': 'Explore challenges',
                '.benefit:nth-child(1) h3': 'Learn in a fun way',
                '.benefit:nth-child(1) p': 'Turn environmental education into an interactive game full of challenges and rewards.',
                '.benefit:nth-child(2) h3': 'Create new family experiences',
                '.benefit:nth-child(2) p': 'Enjoy sustainable activities with your loved ones and learn together how to care for the planet.',
                '.benefit:nth-child(3) h3': 'Join a green community',
                '.benefit:nth-child(3) p': 'Connect with committed users and share your eco achievements.',
                '.benefit:nth-child(4) h3': 'Make a real impact',
                '.benefit:nth-child(4) p': 'Apply what you learn and improve your surroundings through small actions.',
                '#product-video-title': 'About the product',
                '.about h2': 'About us',
                '.about-card:nth-child(1) h3': 'Mission',
                '.about-card:nth-child(1) p': 'Promote environmental awareness through digital learning, helping build a more sustainable future for everyone.',
                '.about-card:nth-child(2) h3': 'Vision',
                '.about-card:nth-child(2) p': 'Become the leading educational platform for sustainability, where every challenge helps improve the planet step by step.',
                '.about-card:nth-child(3) h3': 'Who are we?',
                '.about-card:nth-child(3) p': 'We are a group of young people committed to climate action, combining technology and education to inspire green habits.',
                '.faq-title': 'Frequently Asked Questions',
                '#parents-guide-page .guide-text-content h1': 'Parent Guide',
                '#parents-guide-page .guide-text-content p:nth-of-type(1)': 'EcoMind helps families learn and grow together around sustainability. Our platform is designed so parents and children can participate safely and educationally.',
                '#parents-guide-page .guide-text-content p:nth-of-type(2)': 'Create your family group, set shared goals, and celebrate each member’s progress while learning how to care for the environment.',
                '.educational-resources h2': 'Educational Resources',
                '.resources-subtitle': 'Everything you will find to start your environmental learning journey',
                '.resource-card:nth-child(1) h3': 'Readings',
                '.resource-card:nth-child(1) p': 'Structured content about recycling, ecology, and biodiversity',
                '.resource-card:nth-child(2) h3': 'Videos',
                '.resource-card:nth-child(2) p': 'Learn with dynamic audiovisual content that is easy to follow',
                '.resource-card:nth-child(3) h3': 'Infographics',
                '.resource-card:nth-child(3) p': 'See complex information in a clear and engaging way',
                '.view--microtransactions h2': 'Microtransaction Management',
                '.parent-tips h2': 'Tips for Parents',
                '.community-title': 'EcoMind Community',
                '.community-description': 'Thousands of families learning together and creating a real impact on environmental care. A space to share experiences, celebrate achievements, and build a greener future.',
                '.stats-card h3': 'Our community in numbers',
                '.stat-item:nth-of-type(1) .stat-label': 'Active members',
                '.stat-item:nth-of-type(2) .stat-label': 'Completed challenges',
                '.stat-item:nth-of-type(3) .stat-label': 'Families connected locally',
                '.what-to-do-section .section-title': 'What can you do in the community?',
                '.what-to-do-section .section-description': 'Connect, learn, and make a difference with thousands of families',
                '.share-achievements-title': 'Share your achievements',
                '.share-achievements-description': 'Celebrate achievements with other committed families',
                '.community-views .view__header h2': 'Interact with others',
                '.testimonials-section .section-title': 'What our families say',
                '.community-events-kicker': 'Nearby events',
                '.community-events-description': 'Discover activities organized by the EcoMind community, join with your family, and connect with other Ecominders who also want to make a real impact.',
                '.community-events-list-title': 'Upcoming activities',
                '.community-events-pill:nth-child(1)': 'Family activities',
                '.community-events-pill:nth-child(2)': 'Local volunteering',
                '.community-events-pill:nth-child(3)': 'Reward challenges'
            },
            html: {
                '.navbar .btn-unete': 'JOIN NOW <span class="arrow"></span>',
                '.benefits__header h2': 'Why use <span class="brand-word">EcoMind</span>?',
                '.hero__glass h1': 'Learning to care for the planet<br>starts with you',
                '.btn-join-hero': 'JOIN US',
                '.community-events-title': 'Find the closest eco events near you'
            },
            allText: {
                '.footer__links a:nth-child(1)': 'About',
                '.footer__links a:nth-child(2)': 'Blog',
                '.footer__links a:nth-child(3)': 'Store',
                '.footer__links a:nth-child(4)': 'Terms',
                '.footer__links a:nth-child(5)': 'Privacy'
            },
            carousels: {
                'assets/images/views_frontend/retos.png': 'Choose your preferred mission',
                'assets/images/views_frontend/teamactiviti.png': 'Complete team missions',
                'assets/images/views_frontend/Cosmetics.png': 'Customize your experience',
                'assets/images/views_frontend/profile.png': 'View your profile',
                'assets/images/views_frontend/Community.png': 'Interact with others',
                'assets/images/views_frontend/Events.png': 'Join events',
                'assets/images/views_frontend/Ranking.png': 'Compete for the top spots'
            }
        }
    };

    function applyLanguage(language) {
        const translation = translations[language] || translations.es;

        document.documentElement.lang = translation.lang;

        Object.entries(translation.text).forEach(([selector, value]) => {
            const element = document.querySelector(selector);
            if (element) element.textContent = value;
        });

        Object.entries(translation.html).forEach(([selector, value]) => {
            const element = document.querySelector(selector);
            if (element) element.innerHTML = value;
        });

        Object.entries(translation.allText).forEach(([selector, value]) => {
            document.querySelectorAll(selector).forEach(element => {
                element.textContent = value;
            });
        });

        Object.entries(translation.carousels).forEach(([src, value]) => {
            const slide = document.querySelector(`.sprint_frontend[src="${src}"]`);
            if (slide) slide.dataset.title = value;
        });

        document.querySelectorAll('.view-carousel').forEach(carousel => {
            const activeSlide = carousel.querySelector('.sprint_frontend.is-active');
            const viewSection = carousel.closest('.view');
            const title = viewSection ? viewSection.querySelector('.view__header h2') : null;
            if (activeSlide && title) title.textContent = activeSlide.dataset.title;
        });

        if (languageSelect) languageSelect.value = translation.lang;
        localStorage.setItem('ecomind_language', translation.lang);
    }
 
   // Función maestra para ocultar todo
    function hideAllPages() {
        allPages.forEach(page => {
            if (page) page.style.display = 'none';
        });
        // Por defecto, mostrar header y footer
        if (header) header.style.display = 'block';
        if (footer) footer.style.display = 'block';
    }

    function updateRoute(page, shouldPush = true) {
        const hashes = {
            landing: '#landing',
            community: '#comunidad',
            'parents-guide': '#guia',
            faq: '#preguntas'
        };
        const hash = hashes[page] || '#landing';

        sessionStorage.setItem('ecomind_page', page);

        if (shouldPush && window.location.hash !== hash) {
            history.pushState({ page }, '', hash);
        } else {
            history.replaceState({ page }, '', hash);
        }
    }

    // Mostrar Landing Page (la original)
    function showLanding(shouldPush = true) {
        hideAllPages();
        if (mainPage) mainPage.style.display = 'block';
        window.scrollTo(0, 0);
        updateRoute('landing', shouldPush);
    }

    // Mostrar Comunidad (la nueva)
    function showCommunity(shouldPush = true) {
        hideAllPages();
        if (communityPage) communityPage.style.display = 'block';
        window.scrollTo(0, 0);
        updateRoute('community', shouldPush);
        if (typeof initComunidadSlider === 'function') {
            initComunidadSlider();
        }
    }

    // Mostrar Guía para Padres (la nueva)
    function showParentsGuide(shouldPush = true) {
        hideAllPages();
        if (parentsGuidePage) parentsGuidePage.style.display = 'block';
        window.scrollTo(0, 0);
        updateRoute('parents-guide', shouldPush);
    }

    // Mostrar FAQ (la nueva)
    function showFaq(shouldPush = true) {
        hideAllPages();
        if (faqPage) faqPage.style.display = 'block';
        window.scrollTo(0, 0);
        updateRoute('faq', shouldPush);
    }


      // Función de Smooth Scroll (del código original)
    function performSmoothScroll(targetElement) {
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = targetElement.offsetTop - navbarHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    function initViewsCarousel() {
        document.querySelectorAll('.view-carousel').forEach(carousel => {
            const viewSection = carousel.closest('.view');
            const title = viewSection ? viewSection.querySelector('.view__header h2') : null;
            const slides = Array.from(carousel.querySelectorAll('.sprint_frontend'));
            const dots = viewSection ? Array.from(viewSection.querySelectorAll('.view-carousel__dot')) : [];
            const prevButton = carousel.querySelector('.view-carousel__arrow--prev');
            const nextButton = carousel.querySelector('.view-carousel__arrow--next');
            let currentSlide = 0;

            if (!slides.length || !title || !prevButton || !nextButton) return;

            function showSlide(index) {
                currentSlide = (index + slides.length) % slides.length;

                slides.forEach((slide, slideIndex) => {
                    slide.classList.toggle('is-active', slideIndex === currentSlide);
                });

                dots.forEach((dot, dotIndex) => {
                    dot.classList.toggle('is-active', dotIndex === currentSlide);
                });

                title.textContent = slides[currentSlide].dataset.title;
            }

            prevButton.addEventListener('click', () => showSlide(currentSlide - 1));
            nextButton.addEventListener('click', () => showSlide(currentSlide + 1));

            dots.forEach((dot, dotIndex) => {
                dot.addEventListener('click', () => showSlide(dotIndex));
            });
        });
    }

    initViewsCarousel();

    applyLanguage(localStorage.getItem('ecomind_language') || 'es');

    if (languageSelect) {
        languageSelect.addEventListener('change', event => {
            applyLanguage(event.target.value);
        });
    }

    function showPageFromHash(shouldPush = false) {
        if (window.location.hash === '#comunidad') {
            showCommunity(shouldPush);
        } else if (window.location.hash === '#guia') {
            showParentsGuide(shouldPush);
        } else if (window.location.hash === '#preguntas') {
            showFaq(shouldPush);
        } else {
            showLanding(shouldPush);
        }
    }

   // --- 3. RESTAURAR ESTADO AL CARGAR PÁGINA ---
    showPageFromHash(false);

    window.addEventListener('popstate', () => {
        showPageFromHash(false);
    });

     // --- 4. MANEJADOR DE CLICS PRINCIPAL ---
    // Un solo manejador para todos los enlaces <a>
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // 1. Navegación entre páginas (Comunidad, Guía, FAQ)
            if (href === '#comunidad') {
                e.preventDefault();
                showCommunity();
                return;
            }
            if (href === '#guia') {
                e.preventDefault();
                showParentsGuide();
                return;
            }
            if (href === '#preguntas') {
                e.preventDefault();
                showFaq();
                return;
            }

            // 2. Navegación a Landing (Logo)
            if (href === '#landing' || this.classList.contains('logo')) {
                e.preventDefault();
                showLanding();
                return;
            }

                   // 5. Smooth Scroll (para enlaces internos en la Landing Page)
            if (href.startsWith('#') && href.length > 1 && !['#landing', '#comunidad', '#guia', '#preguntas', '#unete.html'].includes(href)) {
                e.preventDefault();
                
                // Si NO estamos en la landing, ir primero
                if (sessionStorage.getItem('ecomind_page') !== 'landing') {
                    showLanding();
                    // Esperar un momento a que se muestre la landing antes de hacer scroll
                    setTimeout(() => {
                        const targetElement = document.querySelector(href);
                        if (targetElement) {
                            performSmoothScroll(targetElement);
                        }
                    }, 100);
                } else {
                    // Ya estamos en la landing, solo hacer scroll
                    const targetElement = document.querySelector(href);
                    if (targetElement) {
                        performSmoothScroll(targetElement);
                    }
                }
                return;
            }
                        
            // 6. Enlaces de Footer o placeholders
            if (href === '#') {
                e.preventDefault();
                console.log('Enlace de placeholder clickeado.');
            }
        });
    });
});

const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navbar-right");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            // Alternar clase 'active' en el icono y el menú
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // Cerrar el menú al hacer clic en cualquier enlace dentro del menú
        document.querySelectorAll(".navbar-right a").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }));
    }
