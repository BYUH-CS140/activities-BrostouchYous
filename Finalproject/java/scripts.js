// Highlight the active nav link based on current URL
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar a");
  const currentURL = window.location.href;

  navLinks.forEach(link => {
    const href = link.href;

    // Highlight link if the href matches the current URL
    if (currentURL === href || currentURL.endsWith(href)) {
      link.classList.add("active-link");
    }
  });
});

// Simple feedback form validation before submit
const feedbackForm = document.querySelector(".feedback-form");
if (feedbackForm) {
  feedbackForm.addEventListener("submit", function(event) {
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const comments = this.comments.value.trim();
    const rating = this.rating.value;

    if (!name || !email || !comments || !rating) {
      alert("Please fill out all fields before submitting.");
      event.preventDefault();
      return false;
    }

    // Simple email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      event.preventDefault();
      return false;
    }
  });
};
