const menuButton = document.querySelector('#menuButton');
const navLinks = document.querySelector('#navLinks');
const themeButton = document.querySelector('#themeButton');

menuButton?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks?.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

if (localStorage.getItem('portfolioTheme') === 'light') {
  document.body.classList.add('light-theme');
}

themeButton?.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  localStorage.setItem('portfolioTheme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
});
