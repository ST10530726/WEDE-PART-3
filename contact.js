// JavaScript for the Contact Us page: validates the contact form and prepares an email.
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('contactFeedback');
  if (!form || !feedback) return;

  form.addEventListener('submit', event => {
    event.preventDefault();
    feedback.hidden = false;
    const invalid = Array.from(form.elements).find(field => field.willValidate && !field.checkValidity());
    if (invalid) {
      feedback.className = 'form-message error';
      feedback.textContent = 'Please correct the required fields before sending your message.';
      invalid.reportValidity();
      invalid.focus();
      return;
    }
    const lines = Array.from(new FormData(form).entries())
      .filter(([, value]) => String(value).trim())
      .map(([key, value]) => `${key}: ${value}`);
    const subject = encodeURIComponent('Message to T&T Beauty Salon');
    const body = encodeURIComponent(lines.join('\n'));
    feedback.className = 'form-message success';
    feedback.textContent = 'Your message is ready. Your email application should open so you can send it.';
    window.location.href = `mailto:${form.dataset.mailto}?subject=${subject}&body=${body}`;
  });
});
