const menuButton = document.getElementById('menu-bar');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
  if (mobileMenu.classList.contains('show')) {
    mobileMenu.classList.remove('show');
  } else {
    mobileMenu.classList.add('show');
  }
});
