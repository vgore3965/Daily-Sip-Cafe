const form = document.getElementById("contactForm");
const messageEl = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    messageEl.style.color = "red";
    messageEl.textContent = "Please fill in all fields.";
    return;
  }

  if (!email.includes("@")) {
    messageEl.style.color = "red";
    messageEl.textContent = "Please enter a valid email address.";
    return;
  }

  messageEl.style.color = "green";
  messageEl.textContent =
    "✅ Thank you for contacting us! We’ll get back to you soon.";

  form.reset();
});
