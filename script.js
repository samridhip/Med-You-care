// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    document.body.classList.toggle("menu-open");
});

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
        document.body.classList.remove("menu-open");
    });
});


// =========================
// SCROLL REVEAL
// =========================

const sections = document.querySelectorAll(
    ".section, .work-card, .value-card, .impact-card"
);

sections.forEach((section) => {
    section.classList.add("reveal");
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }

        });
    },
    {
        threshold: 0.12
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


// =========================
// NAVBAR SHADOW ON SCROLL
// =========================

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});
