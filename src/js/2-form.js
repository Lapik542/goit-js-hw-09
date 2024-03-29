document.addEventListener('DOMContentLoaded', function () {
  const feedbackForm = document.querySelector('.feedback-form');
  const emailInput = feedbackForm.querySelector('input[name="email"]');
  const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');

  const trimAndSaveToLocalStorage = () => {
    const formData = {
      email: emailInput.value.trim(),
      message: messageTextarea.value.trim(),
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  };

  const populateFormFromLocalStorage = () => {
    const storedFormData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
    if (storedFormData.email) {
      emailInput.value = storedFormData.email;
    }
    if (storedFormData.message) {
      messageTextarea.value = storedFormData.message;
    }
  };

  const isFormValid = () => {
    return emailInput.value.trim() !== '' && messageTextarea.value.trim() !== '';
  };

  feedbackForm.addEventListener('input', function (event) {
    trimAndSaveToLocalStorage();
    event.preventDefault();
  });

  feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault(); 

    if (!isFormValid()) {
      alert('Please fill in all fields before submitting the form.');
      return;
    }

    const formData = {
      email: emailInput.value.trim(),
      message: messageTextarea.value.trim(),
    };

    console.log('Form Data:', formData);

    localStorage.removeItem('feedback-form-state');
    feedbackForm.reset();
  });

  populateFormFromLocalStorage();
});
