document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll
    const links = document.querySelectorAll("nav ul li a");
    for (const link of links) {
        link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth",
            });

            // Evidențiază secțiunea activă
            highlightActiveSection(targetId);
        }
    }

    function highlightActiveSection(id) {
        // Elimină clasele active de la toate secțiunile
        const sections = document.querySelectorAll("section");
        sections.forEach((section) => section.classList.remove("active"));

        // Adaugă clasa activă la secțiunea selectată
        const activeSection = document.getElementById(id);
        if (activeSection) {
            activeSection.classList.add("active");
        }
    }

    // Remove pop-up message on download link
    const downloadLink = document.querySelector("section#app a.download-button");
    if (downloadLink) {
        downloadLink.addEventListener("click", function (event) {
            // Do nothing, let the download happen
        });
    }

    // Adăugare animație la hover pentru butoane
    const buttons = document.querySelectorAll("button.download-button, a.download-button");
    buttons.forEach((button) => {
        button.addEventListener("mouseenter", function () {
            button.style.transform = "scale(1.1)";
        });
        button.addEventListener("mouseleave", function () {
            button.style.transform = "scale(1)";
        });
    });

    // Evidențiere automată a secțiunii în funcție de scroll
    window.addEventListener("scroll", function () {
        const sections = document.querySelectorAll("section");
        let currentSectionId = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 50; // Ajustare pentru marginea superioară
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        // Actualizează link-ul activ din meniu
        links.forEach((link) => {
            link.classList.remove("active-link");
            if (link.getAttribute("href").substring(1) === currentSectionId) {
                link.classList.add("active-link");
            }
        });
    });
});
