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
