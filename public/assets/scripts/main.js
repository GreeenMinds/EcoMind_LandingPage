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