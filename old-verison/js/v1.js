// flashlight cursor
function update(e) {
  var x = e.clientX || e.touches[0].clientX;
  var y = e.clientY || e.touches[0].clientY;

  document.documentElement.style.setProperty("--cursorX", x + "px");
  document.documentElement.style.setProperty("--cursorY", y + "px");
}

document.addEventListener("mousemove", update);
document.addEventListener("touchmove", update);

// game setup

// music: auto play music once one of the buttons are clicked, play different music when game lost or won (royalty free music)

// fix monster random not working

// use functions for items that are reusable

const hardBtn = document.querySelector(".button__hard");
const mediumBtn = document.querySelector(".button__medium");
const easyBtn = document.querySelector(".button__easy");
const mainScreen = document.querySelector(".main");
const gameScreen = document.querySelector("html");
const monster = document.querySelector(".monster");

// fix this doesn't seem to be working
moveMonster = () => {
  monster.style.top = Math.floor(Math.random() * 1000);
  monster.style.left = Math.floor(Math.random() * 1000);
};

clickBtn = () => {
  hardBtn.onclick = () => {
    mainScreen.style.visibility = "hidden";
    gameScreen.style.visibility = "visible";
    gameScreen.style.backgroundImage = "url(assets/hard.jpg)";
  };
  mediumBtn.onclick = () => {
    mainScreen.style.visibility = "hidden";
    gameScreen.style.visibility = "visible";
    gameScreen.style.backgroundImage = "url(assets/medium.jpg)";
  };
  easyBtn.onclick = () => {
    moveMonster();
    mainScreen.style.visibility = "hidden";
    gameScreen.style.visibility = "visible";
    gameScreen.style.backgroundImage = "url(assets/easy.jpg)";
    setTimeout(function () {
      document.documentElement.style.cssText = "--cursorSize: 6vmax";
      gameScreen.style.visibility = "visible";
      gameScreen.style.backgroundImage = "url(assets/easy.jpg)";
    }, 3000);
    setTimeout(function () {
      document.documentElement.style.cssText = "--cursorSize: 4vmax";
      gameScreen.style.visibility = "visible";
      gameScreen.style.backgroundImage = "url(assets/easy.jpg)";
    }, 6000);
    setTimeout(function () {
      document.documentElement.style.cssText = "--cursorSize: 2vmax";
      gameScreen.style.visibility = "visible";
      gameScreen.style.backgroundImage = "url(assets/easy.jpg)";
    }, 8000);
    setTimeout(function () {
      monster.style.transform = "scale(5)";
      alert("You lost!");
      location.reload();
    }, 10000);
  };
};

playGame = () => {
  clickBtn();
};

playGame();

monster.onmouseover = () => {
  alert("You vanquished the monster");
  location.reload();
};
