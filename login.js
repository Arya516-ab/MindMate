document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("Please fill in all fields.");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const matchedUser = users.find(user => user.email === email && user.password === password);

  if (matchedUser) {
    alert("Login successful!");
    // Optional: save logged-in user info to localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
    window.location.href = "index.html"; // or your dashboard/homepage
  } else {
    alert("Incorrect email or password.");
  }
});

