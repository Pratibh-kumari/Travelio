document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signinForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop default form submission

    const password = document.getElementById("password").value;

    if (password === "nChuuya2943") {
      // Redirect if password is correct
      window.location.href = "./home.html";
    } else {
      alert("Incorrect password. Try again!");
    }
  });
});

