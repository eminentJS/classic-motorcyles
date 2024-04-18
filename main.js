const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');

  const isOpen = navLinks.classList.contains('open');
  menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line');
});

// close the nav bar after click an item
navLinks.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuBtnIcon.setAttribute('class', 'ri-menu-line');
});

const scrollRevealOption = {
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
};

// header container
ScrollReveal().reveal('.header__content p', {
  ...scrollRevealOption,
});

ScrollReveal().reveal('.header__content h1', {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal('.header__content .header__btn', {
  ...scrollRevealOption,
  delay: 1000,
});
