const form = document.getElementById("reservationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const guests = document.getElementById("guests").value;

  if (!name || !phone || !date || !time || !guests) {
    message.style.color = "red";
    message.textContent = "Please fill in all fields.";
    return;
  }

  if (phone.length < 10) {
    message.style.color = "red";
    message.textContent = "Please enter a valid phone number.";
    return;
  }

  message.style.color = "green";
  message.textContent =
    "✅ Your table has been reserved! We look forward to welcoming you.";

  form.reset();
});
