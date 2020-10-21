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
};
medium = () => {
  gameScreen.style.backgroundImage = "url(assets/medium.jpg)";
};
hard = () => {
  gameScreen.style.backgroundImage = "url(assets/hard.jpg)";
};

// shrink light
shrinkLight = () => {
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 6vmax";
    displayGame(easy);
    // gameScreen.style.visibility = "visible";
    // gameScreen.style.backgroundImage = "url(assets/easy.jpg)";
  }, 4000);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 4vmax";
    // gameScreen.style.visibility = "visible";
    // gameScreen.style.backgroundImage = "url(assets/easy.jpg)";
  }, 8000);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 2vmax";
    // gameScreen.style.visibility = "visible";
    // gameScreen.style.backgroundImage = "url(assets/easy.jpg)";
  }, 10000);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 0vmax";
    // gameScreen.style.visibility = "visible";
    // gameScreen.style.backgroundImage = "url(assets/easy.jpg)";
  }, 13000);
};

// game values
displayGame = (level) => {
  gameScreen.style.visibility = "visible";
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
      displayGame(hard());
    } else if (button.classList.contains("button__medium")) {
      displayGame(medium());
    } else {
      // gameScreen.style.backgroundImage = "url(assets/easy.jpg)";
      displayGame(easy());
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
