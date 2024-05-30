document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navBar = document.getElementById('nav-bar');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('change');
        navBar.classList.toggle('show-nav');
    });
});