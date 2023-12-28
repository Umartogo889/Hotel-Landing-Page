const navAnim = () => {
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".nav-links")
    const navLinks = document.querySelectorAll(".nav-links li")
    // Taggle nav
    burger.addEventListener("click", () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            link.style.animation = `navLinkMove 0.5s ease forwards ${index / 7 + 1}s `

        });
        burger.classList.toggle("toggle")
    });


}

navAnim()