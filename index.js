// navbar toggle
const hamburgerBtn = document.getElementById("hamburger-icon");
const navLinks = document.getElementById("nav-links");
const hamburgerImg = document.getElementById("nav-img");

hamburgerBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    if (!navLinks.classList.contains("active")) {
        hamburgerImg.src = "/assets/icons8-hamburger-menu-50.png";
    } else {
        hamburgerImg.src = "/assets/icons8-multiply-50.png";
    }
    hamburgerBtn.classList.toggle("active");
});