// JavaScript for the About Us page
// Adds a simple accessible highlight when a visitor selects a mission or vision heading.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.info-card h3').forEach(heading => {
    heading.tabIndex = 0;
    heading.setAttribute('role', 'button');
    heading.setAttribute('aria-pressed', 'false');
    const toggleHighlight = () => {
      const selected = heading.getAttribute('aria-pressed') === 'true';
      heading.setAttribute('aria-pressed', String(!selected));
      heading.classList.toggle('selected-heading', !selected);
    };
    heading.addEventListener('click', toggleHighlight);
    heading.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleHighlight();
      }
    });
  });
});
