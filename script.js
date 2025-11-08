// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Highlight active section (optional)
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollY = window.scrollY + 100;
  sections.forEach(sec => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');
    if (scrollY > top && scrollY <= top + height) {
      document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
      document.querySelector(`nav a[href="#${id}"]`).classList.add('active');
    }
  });
});
