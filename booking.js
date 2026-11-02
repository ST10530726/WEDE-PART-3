// JavaScript for the Online Booking page: checks the booking form before showing feedback.
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bookingForm');
  const feedback = document.getElementById('bookingFeedback');
  if (!form || !feedback) return;

  form.addEventListener('submit', event => {
    event.preventDefault();
    feedback.hidden = false;
    const invalid = Array.from(form.elements).find(field => field.willValidate && !field.checkValidity());
    if (invalid) {
      feedback.className = 'form-message error';
      feedback.textContent = 'Please check the form and complete all required fields correctly.';
      invalid.reportValidity();
      invalid.focus();
      return;
    }
    feedback.className = 'form-message success';
    feedback.textContent = 'Your booking request passed validation. This demo does not make a real booking. Please contact the salon to confirm availability.';
  });
});
