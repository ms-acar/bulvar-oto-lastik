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

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('[data-collapse-toggle="mobile-menu-2"]');
    const mobileMenu = document.getElementById('mobile-menu-2');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', function (event) {
            event.stopPropagation();
            mobileMenu.classList.toggle('hidden');
        });
    }

    const menuLinks = mobileMenu.querySelectorAll('a');

    menuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // Check if the link is an anchor link on the same page
            if (link.getAttribute('href').startsWith('#')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });
});