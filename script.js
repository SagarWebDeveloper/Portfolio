let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('.navbar a');

// Toggle menu on icon click
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};

// Close menu when clicking a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('fa-x');
        navbar.classList.remove('active');
    });
});
