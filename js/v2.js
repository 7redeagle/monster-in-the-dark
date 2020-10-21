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
const allBtn = document.querySelectorAll(".button");
const mainScreen = document.querySelector(".main");
const gameScreen = document.querySelector("html");
const monster = document.querySelector(".monster");

easy = () => {
  gameScreen.style.backgroundImage = "url(assets/easy.jpg)";
  gameScreen.style.visibility = "visible";
};
medium = () => {
  gameScreen.style.backgroundImage = "url(assets/medium.jpg)";
  gameScreen.style.visibility = "visible";
};
hard = () => {
  gameScreen.style.backgroundImage = "url(assets/hard.jpg)";
  gameScreen.style.visibility = "visible";
};

hardTime = () => {
  hard();
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 6vmax";
    hard();
  }, 4000);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 4vmax";
    hard();
  }, 8000);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 2vmax";
    hard();
  }, 10000);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 0vmax";
    hard();
    alert("The monster ate you!");
    location.reload();
  }, 13000);
};

mediumTime = () => {
  medium();
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 6vmax";
    medium();
  }, 4000);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 4vmax";
    medium();
  }, 8000);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 2vmax";
    medium();
  }, 10000);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 0vmax";
    medium();
    alert("The monster ate you!");
    location.reload();
  }, 13000);
};

easyTime = () => {
  easy();
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 6vmax";
    easy();
  }, 4000);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 4vmax";
    easy();
  }, 8000);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 2vmax";
    easy();
  }, 10000);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 0vmax";
    easy();
    alert("The monster ate you!");
    location.reload();
  }, 13000);
};

// move monster to random position
moveMonster = () => {
  function getRandomPosition(e) {
    var x = document.body.offsetHeight - e.clientHeight;
    var y = document.body.offsetWidth - e.clientWidth;
    var randomX = Math.floor(Math.random() * x);
    var randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
  }
  var xy = getRandomPosition(monster);
  monster.style.top = xy[0] + "px";
  monster.style.left = xy[1] + "px";
};

// The monster will move every 5 seconds
let intervalMonster = window.setInterval(moveMonster, 5000);

// click button to begin game and hide the mainScreen. Each button links to different background images.
allBtn.forEach(function (button) {
  button.onclick = () => {
    mainScreen.style.visibility = "hidden";
    gameScreen.style.visibility = "visible";
    moveMonster();
    if (button.classList.contains("button__hard")) {
      hardTime();
    } else if (button.classList.contains("button__medium")) {
      medium();
    } else {
      easyTime();
    }
    moveMonster();
  };
});

// on mouseover of monster, you win play sound, reload game and clear interval. Also activate scream.
monster.onmouseover = () => {
  window.clearInterval(intervalMonster);
  alert("You vanquished the monster");
  location.reload();
};

// music: auto play music once one of the buttons are clicked, play different music when game lost or won (royalty free music)

// play doom music when lost

// use functions for items that are reusable
