// flashlight cursor
function update(e) {
  var x = e.clientX || e.touches[0].clientX;
  var y = e.clientY || e.touches[0].clientY;

  document.documentElement.style.setProperty("--cursorX", x + "px");
  document.documentElement.style.setProperty("--cursorY", y + "px");
}

document.addEventListener("mousemove", update);
document.addEventListener("touchmove", update);

const hardBtn = document.querySelector(".button__hard");
const mediumBtn = document.querySelector(".button__medium");
const easyBtn = document.querySelector(".button__easy");
const mainScreen = document.querySelector(".main");
const gameScreen = document.querySelector("html");
const monster = document.querySelector(".monster");

hardBtn.onclick = () => {
  mainScreen.style.visibility = "hidden";
  gameScreen.style.visibility = "visible";
  gameScreen.style.backgroundImage = "url('../assets/hard.jpg')";
};

mediumBtn.onclick = () => {
  mainScreen.style.visibility = "hidden";
  gameScreen.style.visibility = "visible";
};

mediumBtn.onclick = () => {
  mainScreen.style.visibility = "hidden";
  gameScreen.style.visibility = "visible";
};
// mainBtn.addEventListener("click", function () {
//   //
//   // setTimeout(function () {
//   //   document.documentElement.style.cssText = "--cursorSize: 6vmax";
//   //   html.style.visibility = "visible";
//   //   monster.style.top = Math.floor(Math.random() * 50);
//   //   monster.style.left = Math.floor(Math.random() * 50);
//   // }, 3000);
// });

// enterGame = () => {};

// enterGame();

// game

// monster.onmouseover = () => {
//   // alert("You vanquished the monster");
//   monster.style.cssText = "transform: scale(1)";
// };
