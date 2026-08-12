/* ========================================
   MEDYOUCARE JAVASCRIPT
======================================== */


/* ---------- MOBILE MENU ---------- */

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

if (menuButton) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-open");

    });

}


/* ---------- SIMPLE SCROLL ANIMATION ---------- */

const animatedElements = document.querySelectorAll(
    ".work-card, .trust-card, .about-highlight, .social-box"
);


const animationObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                animationObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach((element) => {

    element.classList.add("animate");

    animationObserver.observe(element);

});
