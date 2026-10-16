document.getElementById('year').textContent = new Date().getFullYear();
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(a => a.addEventListener('click', e => {
  const id = a.getAttribute('href');
  if (id.length > 1 && document.querySelector(id)) {
    e.preventDefault(); document.querySelector(id).scrollIntoView({behavior:'smooth'});
  }
}));
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  header.style.background = y > 80 ? 'rgba(8,8,8,.86)' : 'transparent';
  header.style.backdropFilter = y > 80 ? 'blur(14px)' : 'none';
  header.style.position = y > 80 ? 'fixed' : 'absolute';
});
