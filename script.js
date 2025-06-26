// Toggle Password
function togglePassword() {
  const input = document.getElementById("password");
  input.type = input.type === "password" ? "text" : "password";
}

// Toggle Dark Mode
function toggleDark() {
  document.body.classList.toggle("dark-mode");
}

// Image Slider
let count = 1;
function nextImage() {
  count++;
  document.getElementById("slider").src = `https://picsum.photos/300?random=${count}`;
}
