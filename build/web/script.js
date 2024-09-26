function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const menuIcon = document.querySelector('.menu-icon');
    const header = document.querySelector('header');
    navMenu.classList.toggle('active');
    menuIcon.classList.toggle('active');
    header.classList.toggle('active');
}
    
