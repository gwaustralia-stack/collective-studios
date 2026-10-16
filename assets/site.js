const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
}

const rows = document.querySelectorAll('.directory-row');
rows.forEach((row) => {
  row.addEventListener('mouseenter', () => document.body.dataset.member = row.dataset.tone || '');
  row.addEventListener('mouseleave', () => delete document.body.dataset.member);
});
