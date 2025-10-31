(function () {
  // Nav toggle
  const toggle = document.querySelector('.header__toggle');
  const nav = document.querySelector('.header__nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('header__nav--open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Dark mode toggle
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  if (darkModeToggle) {
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
      document.body.classList.add('dark');
    }
    
    // Update logo on load
    const logoImg = document.querySelector('.header__logo img');
    if (logoImg) {
      logoImg.src = currentTheme === 'dark' ? '/img/logo_dark.svg' : '/img/logo.svg';
    }

    darkModeToggle.addEventListener('click', function () {
      document.body.classList.toggle('dark');
      const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
      
      // Update logo
      const logoImg = document.querySelector('.header__logo img');
      if (logoImg) {
        logoImg.src = theme === 'dark' ? '/img/logo_dark.svg' : '/img/logo.svg';
      }
    });
  }
})();
