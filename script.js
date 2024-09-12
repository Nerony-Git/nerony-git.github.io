let navBar = document.querySelector(".navbar");
let navLinks = document.querySelector("header nav a");
let menuIcon = document.querySelector("#menu-icon");
let sections = document.querySelector("section");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navBar.classList.toggle("active");
}

window.onscroll = () => {
    sections.forEach(section => {
        let sectionID = section.getAttribute("id");
        let height = section.offsetHeight;
        let top = window.screenY;
        let offset = section.offsetTop - 150;

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector("header nav a [href*=" + sectionID + " ]").classList.add("active");
            });
        }
    });
}
