// assets/nav.js
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const inner = header?.querySelector('.header-inner');
  const nav = header?.querySelector('nav');
  if (!header || !inner || !nav) return;

  // Avoid duplicate button
  if (header.querySelector('.nav-toggle')) return;

  const btn = document.createElement('button');
  btn.className = 'nav-toggle';
  btn.setAttribute('aria-label', 'Toggle navigation');
  btn.setAttribute('aria-expanded', 'false');
  btn.innerHTML = '<span></span>';
  inner.insertBefore(btn, nav);

  btn.addEventListener('click', () => {
    const isOpen = header.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });
});
