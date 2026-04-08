let button = document.getElementById("transformButton");
let body = document.body;
let title = document.getElementById("title");
let text = document.getElementById("text");

button.addEventListener("click", function () {
  body.classList.toggle("chaos");

  if (body.classList.contains("chaos")) {
    title.textContent = "Chaos Mode";
    text.textContent = "The page has lost its professional identity and become loud, messy, and dramatic.";
    button.textContent = "Change Back";
  } else {
    title.textContent = "Professional Mode";
    text.textContent = "Everything is organized, calm, and under control.";
    button.textContent = "Change Identity";
  }
});