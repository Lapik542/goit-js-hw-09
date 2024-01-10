document.addEventListener('DOMContentLoaded', function () {
  const feedbackForm = document.querySelector('.feedback-form');

  const storedFormData =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  if (storedFormData.email) {
    feedbackForm.querySelector('input[name="email"]').value =
      storedFormData.email;
  }
  if (storedFormData.message) {
    feedbackForm.querySelector('textarea[name="message"]').value =
      storedFormData.message;
  }

  feedbackForm.addEventListener('input', function (event) {
    const formData = {
      email: feedbackForm.querySelector('input[name="email"]').value,
      message: feedbackForm.querySelector('textarea[name="message"]').value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });

  feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
      email: feedbackForm.querySelector('input[name="email"]').value,
      message: feedbackForm.querySelector('textarea[name="message"]').value,
    };

    console.log('Form Data:', formData);

    localStorage.removeItem('feedback-form-state');
    feedbackForm.reset();
  });
});