let clicked = false;

function changePage() {
  let title = document.getElementById("title");

  if (clicked === false) {
    title.textContent = "The page changed";
    document.body.style.backgroundColor = "lightblue";
    clicked = true;
  } else {
    title.textContent = "Click the button";
    document.body.style.backgroundColor = "white";
    clicked = false;
  }
}

document.getElementById("changeButton").addEventListener("click", changePage);