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
document.getElementById("waButton").addEventListener("click", function () {
        const nomor = "6281234567890"; // Ganti dengan nomor WhatsApp tujuan (gunakan format internasional)
        const pesan = "Halo, saya ingin memesan produk Anda."; // Pesan default
        const url = "https://wa.me/" + nomor + "?text=" + encodeURIComponent(pesan);

        // Redirect ke WhatsApp
        window.open(url, "_blank"); // Buka di tab baru
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
