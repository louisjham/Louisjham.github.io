document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Simulate form submission
  document.getElementById('formStatus').textContent = "Thank you! We'll be in touch soon.";
  this.reset();
});
