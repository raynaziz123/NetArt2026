let button = document.getElementById("transformButton");
let body = document.body;
let title = document.getElementById("title");
let text = document.getElementById("text");
let container = document.querySelector(".container");

let stage = 0;

button.onclick = function () {
  stage++;

  if (stage === 1) {
    body.classList.add("chaos");
    title.innerText = "CHAOS MODE";
    text.innerText = "Everything is breaking apart and losing control.";
  } 
  
  else if (stage === 2) {
    title.innerText = "TOTAL BREAKDOWN";
    text.innerText = "Nothing makes sense anymore.";
    body.style.backgroundColor = "purple";
    title.style.fontSize = "70px";
    text.style.fontSize = "28px";
    container.style.transform = "rotate(5deg)";
  } 
  
  else {
    body.classList.remove("chaos");
    body.style = "";
    container.style = "";
    title.style = "";
    text.style = "";
    title.innerText = "Professional Mode";
    text.innerText = "Everything is organized, calm, and under control.";
    stage = 0;
  }
};