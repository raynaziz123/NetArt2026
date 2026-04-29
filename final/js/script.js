let page = document.getElementById("page");
let content = document.getElementById("content");

let words = [
  "ERROR",
  "WHO AM I",
  "FAKE CALM",
  "CONTROL LOST",
  "SYSTEM FAIL",
  "GLITCH",
  "TOO MUCH",
  "CAN I GO BACK?"
];

function professional() {
  content.innerHTML = `
    <h2>Professional Mode</h2>
    <p>Everything is colorful, organized, and under control. The page is trying to look normal.</p>
  `;

  page.style.transform = "none";
  page.style.marginLeft = "";
  page.style.marginTop = "";
}

function cracking() {
  content.innerHTML = `
    <h2>Cracking Mode</h2>
    <p>The page is still trying to stay together, but small parts of it are starting to break.</p>
  `;

  page.style.transform = "rotate(" + rand(-5, 5) + "deg)";
  makeCrack();
  makeCrack();
  makeCrack();
}

function breakdown() {
  document.body.classList.add("bad");

  content.innerHTML = `
    <h2>IDENTITY BREAKDOWN</h2>
    <p>The page is not fully in control anymore. Every click makes the identity more messy.</p>
  `;

  page.style.transform =
    "rotate(" + rand(-15, 15) + "deg) scale(" + randDec(0.8, 1.4) + ")";

  page.style.marginLeft = rand(0, 250) + "px";
  page.style.marginTop = rand(0, 170) + "px";

  document.body.style.filter = "hue-rotate(" + rand(0, 360) + "deg)";

  for (let i = 0; i < 7; i++) {
    makeGlitch();
  }

  for (let i = 0; i < 3; i++) {
    makeBox();
  }
}

function restorePage() {
  document.body.classList.remove("bad");
  document.body.style.filter = "";

  page.style.transform = "none";
  page.style.marginLeft = "";
  page.style.marginTop = "";

  content.innerHTML = `
    <h2>Restored Mode</h2>
    <p>The page looks normal again, but the restore button makes it feel like control is something temporary.</p>
  `;

  let extraStuff = document.querySelectorAll(".glitch, .box, .crack");
  for (let i = 0; i < extraStuff.length; i++) {
    extraStuff[i].remove();
  }
}

function makeCrack() {
  let c = document.createElement("div");
  c.className = "crack";
  c.innerText = "/////";
  c.style.left = rand(0, window.innerWidth) + "px";
  c.style.top = rand(0, window.innerHeight) + "px";
  c.style.transform = "rotate(" + rand(-45, 45) + "deg)";
  document.body.appendChild(c);
}

function makeGlitch() {
  let g = document.createElement("div");
  g.className = "glitch";

  g.innerText = words[rand(0, words.length - 1)];
  g.style.left = rand(0, window.innerWidth - 100) + "px";
  g.style.top = rand(0, window.innerHeight - 50) + "px";
  g.style.color = randomColor();
  g.style.fontSize = rand(16, 70) + "px";
  g.style.transform =
    "rotate(" + rand(-80, 80) + "deg) scale(" + randDec(0.6, 2.5) + ")";

  document.body.appendChild(g);
}

function makeBox() {
  let b = document.createElement("div");
  b.className = "box";

  b.style.left = rand(0, window.innerWidth - 160) + "px";
  b.style.top = rand(0, window.innerHeight - 120) + "px";
  b.style.transform =
    "rotate(" + rand(-90, 90) + "deg) scale(" + randDec(0.5, 2.2) + ")";

  document.body.appendChild(b);
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randDec(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}

function randomColor() {
  let colors = ["red", "blue", "lime", "yellow", "magenta", "cyan", "black", "orange", "purple"];
  return colors[rand(0, colors.length - 1)];
}