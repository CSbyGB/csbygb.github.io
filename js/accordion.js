document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('h4.accordion').forEach(function (titre) {
    titre.addEventListener('click', function () {
      titre.classList.toggle('open');
    });

    // Accessibilité clavier (Entrée / Espace)
    titre.setAttribute('tabindex', '0');
    titre.setAttribute('role', 'button');
    titre.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        titre.classList.toggle('open');
      }
    });
  });
});