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

    // Mostrar Landing Page (la original)
    function showLanding() {
        hideAllPages();
        if (mainPage) mainPage.style.display = 'block';
        window.scrollTo(0, 0);
        sessionStorage.setItem('ecomind_page', 'landing');
        history.pushState({ page: 'landing' }, 'EcoMind');
    }

    // Mostrar Comunidad (la nueva)
    function showCommunity() {
        hideAllPages();
        if (communityPage) communityPage.style.display = 'block';
        window.scrollTo(0, 0);
        sessionStorage.setItem('ecomind_page', 'community');
        history.pushState({ page: 'community' }, 'Comunidad');
        initComunidadSlider();
    }

    // Mostrar Guía para Padres (la nueva)
    function showParentsGuide() {
        hideAllPages();
        if (parentsGuidePage) parentsGuidePage.style.display = 'block';
        window.scrollTo(0, 0);
        sessionStorage.setItem('ecomind_page', 'parents-guide');
        history.pushState({ page: 'parents-guide' }, 'Guía para Padres');
    }

    // Mostrar FAQ (la nueva)
    function showFaq() {
        hideAllPages();
        if (faqPage) faqPage.style.display = 'block';
        window.scrollTo(0, 0);
        sessionStorage.setItem('ecomind_page', 'faq');
        history.pushState({ page: 'faq' }, 'Preguntas Frecuentes');
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


   // --- 3. RESTAURAR ESTADO AL CARGAR PÁGINA ---
    const savedPage = sessionStorage.getItem('ecomind_page');
    
   if (savedPage === 'community') {
        showCommunity();
    } else if (savedPage === 'parents-guide') {
        showParentsGuide();
    } else if (savedPage === 'faq') {
        showFaq();
    } else {
        // Por defecto, mostrar la Landing Page
        showLanding();
    }

    
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