// JavaScript for the Gallery page: opens and closes the image lightbox.
document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  const title = document.getElementById('lightboxTitle');
  const description = document.getElementById('lightboxDescription');
  const art = document.getElementById('lightboxArt');
  const close = document.getElementById('lightboxClose');
  let previous = null;

  document.querySelectorAll('.gallery-photo').forEach(button => {
    button.addEventListener('click', () => {
      previous = button;
      title.textContent = button.dataset.title || 'Gallery image';
      description.textContent = button.dataset.description || '';
      art.textContent = title.textContent;
      art.style.backgroundImage = getComputedStyle(button).backgroundImage;
      lightbox.hidden = false;
      close.focus();
    });
  });

  const closeBox = () => {
    lightbox.hidden = true;
    if (previous) previous.focus();
  };
  close.addEventListener('click', closeBox);
  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) closeBox();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !lightbox.hidden) closeBox();
  });
});
