const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('bg-black', 'shadow-md');
    navbar.classList.remove('bg-transparent');
  } else {
    navbar.classList.remove('bg-black', 'shadow-md');
    navbar.classList.add('bg-transparent');
  }
});