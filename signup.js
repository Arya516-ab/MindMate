document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("signup-email").value.trim();
  const password = document.getElementById("signup-password").value.trim();

  // Basic validation
  if (email === "" || password === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Save user data as a single object
  const user = { email, password };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Signup successful! Please login.");
  window.location.href = "login.html";
});

