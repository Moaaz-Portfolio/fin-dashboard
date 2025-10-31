(function () {
  const toggle = document.querySelector('.header__toggle');
  const nav = document.querySelector('.header__nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('header__nav--open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
})();
