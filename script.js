function goTo(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function email() {
  window.location.href = 'mailto:veileder30@gmail.com';
}

/* SCROLL ANIMATION */
window.addEventListener('scroll', () => {
  document.querySelectorAll('.reveal').forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
});
