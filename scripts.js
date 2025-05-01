// scripts.js
function toggleNav() {
    const navMenu = document.getElementById("nav-menu");
    const body = document.body;
    navMenu.classList.toggle("open");
    body.classList.toggle("no-scroll");
}

function revealElements() {
    const elements = document.querySelectorAll(".fade-in, .slide-in, .slide-in-right");
    elements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navMenu = document.getElementById("nav-menu");
    const closeMenuBtn = document.getElementById("close-menu");
    const navLinks = document.querySelectorAll(".nav-menu a");

    if (hamburgerBtn && navMenu && closeMenuBtn) {
        hamburgerBtn.addEventListener("click", toggleNav);
        closeMenuBtn.addEventListener("click", toggleNav);

        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("open");
                body.classList.remove("no-scroll");
            });
        });

        document.addEventListener("click", (event) => {
            if (
                navMenu.classList.contains("open") &&
                !navMenu.contains(event.target) &&
                event.target !== hamburgerBtn
            ) {
                toggleNav();
            }
        });
    }

    window.addEventListener("scroll", revealElements);
    revealElements();
});