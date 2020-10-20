// flashlight cursor
function update(e) {
  var x = e.clientX || e.touches[0].clientX;
  var y = e.clientY || e.touches[0].clientY;

  document.documentElement.style.setProperty("--cursorX", x + "px");
  document.documentElement.style.setProperty("--cursorY", y + "px");
}

document.addEventListener("mousemove", update);
document.addEventListener("touchmove", update);

let welcomeButton = document.querySelector(".welcome__button");
let welcome = document.querySelector(".welcome");
let html = document.querySelector("html");
let monster = document.querySelector(".monster");

enterGame = () => {
  welcomeButton.onclick = () => {
    welcome.style.visibility = "hidden";
    html.style.visibility = "visible";
    setTimeout(function () {
      document.documentElement.style.cssText = "--cursorSize: 6vmax";
      html.style.visibility = "visible";
      monster.style.top = Math.floor(Math.random() * 50);
      monster.style.left = Math.floor(Math.random() * 50);
    }, 3000);
  };
};

enterGame();

// game

monster.onmouseover = () => {
  // alert("You vanquished the monster");
  monster.style.cssText = "transform: scale(1)";
};
