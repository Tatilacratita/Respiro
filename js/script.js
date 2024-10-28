document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll
    const links = document.querySelectorAll("nav ul li a");
    for (const link of links) {
        link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth"
        });
    }

    // Remove pop-up message on download link
    const downloadLink = document.querySelector("section#app a.download-button");
    downloadLink.addEventListener("click", function(event) {
        // Do nothing, let the download happen
    });
});
