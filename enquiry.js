// JavaScript for the Enquiries page: validates the enquiry and prepares an email.
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('enquiryForm');
  const feedback = document.getElementById('enquiryFeedback');
  if (!form || !feedback) return;

  form.addEventListener('submit', event => {
    event.preventDefault();
    feedback.hidden = false;
    const invalid = Array.from(form.elements).find(field => field.willValidate && !field.checkValidity());
    if (invalid) {
      feedback.className = 'form-message error';
      feedback.textContent = 'Please correct the required fields before sending your enquiry.';
      invalid.reportValidity();
      invalid.focus();
      return;
    }
    const lines = Array.from(new FormData(form).entries())
      .filter(([, value]) => String(value).trim())
      .map(([key, value]) => `${key}: ${value}`);
    const subject = encodeURIComponent('Service enquiry for T&T Beauty Salon');
    const body = encodeURIComponent(lines.join('\n'));
    feedback.className = 'form-message success';
    feedback.textContent = 'Your enquiry is ready. Your email application should open so you can send it.';
    window.location.href = `mailto:${form.dataset.mailto}?subject=${subject}&body=${body}`;
  });
});
