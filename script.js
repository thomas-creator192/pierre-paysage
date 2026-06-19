document.addEventListener('DOMContentLoaded', function () {
  // Menu mobile
  var burger = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');
  if (burger && navLinks) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
  }

  // Filtre de la galerie (page réalisations)
  var filters = document.getElementById('filters');
  if (filters) {
    filters.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter');
      if (!btn) return;
      filters.querySelectorAll('.filter').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var cat = btn.getAttribute('data-cat');
      document.querySelectorAll('#gallery .gcard').forEach(function (c) {
        c.style.display = (cat === 'Tous' || c.getAttribute('data-cat') === cat) ? '' : 'none';
      });
    });
  }

  // Formulaire de devis (page contact)
  var form = document.getElementById('devisForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      document.getElementById('formWrap').innerHTML =
        '<div class="thanks"><div class="circle"><svg width="30" height="30" viewBox="0 0 24 24" stroke-width="2.2"><polyline points="20 6 9 17 4 12"/></svg></div><h3>Merci !</h3><p>Votre demande a bien été envoyée. Je vous recontacte sous 24h pour échanger sur votre projet.</p></div>';
    });
  }
});
