document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.dash-item');
  const pages = document.querySelectorAll('.dash-page');

  function showPage(name) {
    pages.forEach(page => {
      page.classList.toggle('active', page.id === `page-${name}`);
    });

    buttons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.page === name);
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const pageName = btn.dataset.page;
      showPage(pageName);
    });
  });

  // Página inicial por si acaso
  showPage('retos');
});
