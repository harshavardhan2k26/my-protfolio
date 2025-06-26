function togglePassword() {
    const passwordField = document.getElementById("password");
    const toggleButton = document.getElementById("togglePassword");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleButton.textContent = "Hide Password";
    } else {
        passwordField.type = "password";
        toggleButton.textContent = "Show Password";
    }
}


function toggleDark() {
  document.getElementById("body").classList.toggle("dark-mode");
}


let count = 1;
function nextImage() {
  count++;
  document.getElementById("slider").src = `https://picsum.photos/300?random=${count}`;
}

