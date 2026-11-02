// JavaScript for the Services page: live service search and filtering.
document.addEventListener('DOMContentLoaded', () => {
  const search = document.getElementById('serviceSearch');
  const grid = document.getElementById('serviceGrid');
  const status = document.getElementById('serviceSearchStatus');
  if (!search || !grid || !status) return;

  const cards = Array.from(grid.querySelectorAll('.service-card'));
  search.addEventListener('input', () => {
    const term = search.value.trim().toLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const match = card.textContent.toLowerCase().includes(term);
      card.hidden = !match;
      if (match) visible++;
    });
    status.textContent = visible
      ? `Showing ${visible} service${visible === 1 ? '' : 's'}.`
      : 'No services found. Try another search.';
  });
});
