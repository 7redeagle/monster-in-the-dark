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

// background music
let audio = document.querySelector(".sound__bg");
playAudioBg = () => {
  audio.volume = 0.2;
  audio.play();
};
pauseAudioBg = () => {
  audio.pause();
  let audioLose = document.querySelector(".sound__lose");
  audioLose.volume = 0.2;
  audioLose.play();
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

// backgroung img for each mode
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

lostGame = () => {
  gameScreen.style.pointerEvents = "none";
  window.clearInterval(intervalMonster);
  pauseAudioBg();
  setTimeout(function () {
    gameScreen.style.opacity = "0";
    alert("The monster ate you!");
    location.reload();
  }, 1000);
};

hardTime = () => {
  hard();
  playAudioBg();
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 5vmax";
    hard();
  }, 5000);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 3vmax";
    hard();
  }, 10000);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 1max";
    hard();
  }, 14000);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 0vmax";
    hard();
    lostGame();
  }, 15000);
};

mediumTime = () => {
  medium();
  playAudioBg();
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 5vmax";
    medium();
  }, 5000);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 3vmax";
    medium();
  }, 10000);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 1max";
    medium();
  }, 14000);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 0vmax";
    medium();
    lostGame();
  }, 15000);
};

easyTime = () => {
  easy();
  playAudioBg();
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 6vmax";
    easy();
  }, 5000);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 4vmax";
    easy();
  }, 10000);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 2vmax";
    easy();
  }, 14000);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 0vmax";
    easy();
    lostGame();
  }, 15000);
};

// click button to begin game and hide the mainScreen. Each button links to different background images.
allBtn.forEach(function (button) {
  button.onclick = () => {
    mainScreen.style.visibility = "hidden";
    gameScreen.style.visibility = "visible";
    moveMonster();
    if (button.classList.contains("button__hard")) {
      hardTime();
    } else if (button.classList.contains("button__medium")) {
      mediumTime();
    } else {
      easyTime();
    }
    moveMonster();
  };
});

// on mouseover of monster, you win play sound, reload game and clear interval. Also activate scream.
monster.onmouseover = () => {
  window.clearInterval(intervalMonster);
  monster.style.transform = "scale(2.5)";
  audio.pause();
  setTimeout(function () {
    alert("You vanquished the monster! You get to live another day.");
    location.reload();
  }, 1);
};

// music: auto play music once one of the buttons are clicked, play different music when game lost or won (royalty free music)
