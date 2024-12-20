document.addEventListener("DOMContentLoaded", () => {
  const currentTime = new Date().getHours();
  let greeting;

  if (currentTime < 12) {
    greeting = "Good Morning!";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }

  alert(greeting);

  const readMoreBtn = document.getElementById("read-more-btn");
  const bioSection = document.getElementById("bio");

  readMoreBtn.addEventListener("click", () => {
    bioSection.innerHTML += `<p>I am passionate about technology and always eager to learn new skills. My hiking adventures fuel my creativity and resilience.</p>`;
    readMoreBtn.style.display = "none";
  });

  const form = document.getElementById("newsletter-form");
  const errorMessage = document.getElementById("form-error");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();

    if (!name || !email) {
      errorMessage.textContent = "Please fill out all fields.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errorMessage.textContent = "Please enter a valid email.";
    } else {
      errorMessage.textContent = "";
      alert(`Thank you for subscribing, ${name}!`);
      form.reset();
    }
  });
});
