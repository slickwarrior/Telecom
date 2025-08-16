
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


const fadeElements = document.querySelectorAll('.fade-in, .card, .featured-content img, .info-section, .contact-form');

function fadeInOnScroll() {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll(); 


const navLinks =  document.querySelectorAll('nav a');

function setActiveLink() {
    let currentPage = window.location.pathname.split("/").pop();
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

setActiveLink();

// Optional: Animated Cards Hover Effect
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});
