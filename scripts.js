// Seleccionar el logo y el cross-icon
const logo = document.querySelector('.logo');
const crossIcon = document.querySelector('.cross-icon');
const navMenu = document.querySelector('ul');

// Mostrar el menú cuando se hace clic en el logo
logo.addEventListener('click', () => {
    navMenu.classList.add('active');
});

// Ocultar el menú cuando se hace clic en el cross-icon
crossIcon.addEventListener('click', () => {
    navMenu.classList.remove('active');
});
