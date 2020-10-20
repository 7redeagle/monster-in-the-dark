// global variables

enterGame = () => {
  let welcomeButton = document.querySelector(".welcome__button");
  let welcome = document.querySelector(".welcome");
  let html = document.querySelector("html");
  welcomeButton.onclick = () => {
    welcome.style.visibility = "hidden";
    html.style.visibility = "visible";
  };
};

enterGame();

// flashlight cursor
function update(e) {
  var x = e.clientX || e.touches[0].clientX;
  var y = e.clientY || e.touches[0].clientY;

  document.documentElement.style.setProperty("--cursorX", x + "px");
  document.documentElement.style.setProperty("--cursorY", y + "px");
}

document.addEventListener("mousemove", update);
document.addEventListener("touchmove", update);

// game
let monster = document.querySelector(".monster");

monster.onmouseover = () => {
  alert("You vanquished the monster");
  monster.style.cssText("transform: scale(0)");
};


