// JavaScript code to retrieve and display the form data from localStorage
document.addEventListener('DOMContentLoaded', function() {
    const formData = JSON.parse(localStorage.getItem('bookingFormData'));
    if (formData) {
      const confirmationMessage = document.getElementById('confirmationMessage');
      confirmationMessage.innerHTML = `
        <p>Name: ${formData.name}</p>
        <p>Email: ${formData.email}</p>
        <p>Preferred Date: ${formData.date}</p>
        <p>Preferred Time Slot: ${formData.time}</p>
      `;
    }
  });