document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  const msg = document.createElement("p");
  msg.textContent = "JavaScript is working!";
  app.appendChild(msg);
});

const app = document.getElementById("app");
app.innerText = "Hello from modern Vanilla JS!";
