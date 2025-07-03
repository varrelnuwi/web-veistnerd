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
const menuList = document.querySelector(".menu-button ~ .menu-list");

if (menuButton && menuList) {
    menuButton.addEventListener("click", () => {
        menuList.classList.toggle("hidden");
    });
}

// Pesan Sekarang Button
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("waButton").addEventListener("click", function() {
        // Add a console.log to verify if the click event is triggered
        console.log('Button clicked');
        
        // Update window location.href with your WhatsApp number
        window.location.href = "https://wa.me/6283873340475";
    });
});

//floating button up
const backToTop = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.style.opacity = '1';
            } else {
                backToTop.style.opacity = '0';
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });