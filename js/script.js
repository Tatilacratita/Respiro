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

    // Scroll animations
    const scrollElements = document.querySelectorAll(".scroll-element");

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("scrolled");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        })
    };

    window.addEventListener("scroll", () => {
        handleScrollAnimation();
    });

    handleScrollAnimation(); // Trigger the animation on load

    // Sticky navigation
    const navbar = document.querySelector("nav");
    const sticky = navbar.offsetTop;

    const stickyNavigation = () => {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    };

    window.addEventListener("scroll", stickyNavigation);
});
