// Toggle between dark and light icon
// const toggleIcon = document.querySelector(".toggle-icon");
// toggleIcon.addEventListener("click", () => {
//     toggleIcon.classList.toggle("fa-sun");
// });
const toggleIcon = document.querySelector(".toggle-icon");
const body = document.body;

toggleIcon.addEventListener("click", () => {
    // Toggle between dark mode (default) and light mode
    body.classList.toggle("light-mode");

    // Switch the icon between moon and sun
    if (toggleIcon.classList.contains("fa-sun")) {
        toggleIcon.classList.remove("fa-sun");
        toggleIcon.classList.add("fa-moon");
    } else {
        toggleIcon.classList.remove("fa-moon");
        toggleIcon.classList.add("fa-sun");
    }
});


// NavBar Toggle Icon
let navBar = document.querySelector(".navbar");
let menuIcon = document.querySelector("#menu-icon");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navBar.classList.toggle("active");
}

// Active Section Link
let navLinks = document.querySelectorAll("header nav a");
let sections = document.querySelectorAll("section");

window.onscroll = () => {
    sections.forEach(section => {
        let sectionID = section.getAttribute("id");
        let height = section.offsetHeight;
        let top = window.scrollY;
        let offset = section.offsetTop - 150;

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                // Select the link safely
                let activeLink = document.querySelector("header nav a[href*=" + sectionID + "]");
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            });
        }
    });

    // Sticky NavBar
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    // Remove NavBar when Link is Clicked / Scrolled
    menuIcon.classList.remove("fa-xmark");
    navBar.classList.remove("active");
};
