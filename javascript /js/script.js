let clicked = false;

function changePage() {
  let title = document.getElementById("title");
  let body = document.body;

  if (clicked === false) {
    title.textContent = "The page changed";
    body.style.backgroundColor = "lightblue";
    clicked = true;
  } else {
    title.textContent = "Click the button";
    body.style.backgroundColor = "white";
    clicked = false;
  }
}

let button = document.getElementById("changeButton");
button.addEventListener("click", changePage);