
// smooth scroll for buttons
function scrollToServices() {
    const getStarted = document.getElementById("services");
    getStarted.scrollIntoView({ behavior: "smooth" });
}
function scrollToPortofolio() {
    const ViewPortofolio = document.getElementById("portofolio");
    ViewPortofolio.scrollIntoView({ behavior: "smooth" });
}

// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Toggle Navigation Menu for Mobile
const menuButton = document.querySelector("nav button");
const menuList = document.querySelector(".sm\:hidden ~ div");

if (menuButton && menuList) {
    menuButton.addEventListener("click", () => {
        menuList.classList.toggle("hidden");
    });
}
