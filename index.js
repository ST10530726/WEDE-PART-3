// JavaScript for the Home page
// Updates the footer year automatically.
document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('footer p');
  if (footer) footer.innerHTML = footer.innerHTML.replace(/©\s*\d{4}/, `© ${new Date().getFullYear()}`);

  // Smoothly moves visitors to the main content when they use the home-page links.
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
