const gameScreen = document.querySelector("html");
const allBtn = document.querySelectorAll(".button");
const mainScreen = document.querySelector(".main");
const gameScreen = document.querySelector("html");
let audio = document.querySelector(".sound__bg");
playAudioBg = () => {
  audio.volume = 0.3;
  audio.play();
};
pauseAudioBg = () => {
  audio.pause();
  let audioLose = document.querySelector(".sound__lose");
  audioLose.volume = 0.2;
  audioLose.play();
};

// backgroung img for each mode
hard = () => {
  gameScreen.style.backgroundImage = "url(assets/hard.jpg)";
  gameScreen.style.visibility = "visible";
};
medium = () => {
  gameScreen.style.backgroundImage = "url(assets/medium.jpg)";
  gameScreen.style.visibility = "visible";
};
easy = () => {
  gameScreen.style.backgroundImage = "url(assets/easy.jpg)";
  gameScreen.style.visibility = "visible";
};

loseGame = () => {
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
    document.documentElement.style.cssText = "--cursorSize: 3vmax";
    hard();
  }, 1000);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 2vmax";
    hard();
  }, 3000);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 1max";
    hard();
  }, 6000);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 0vmax";
    hard();
    loseGame();
  }, 7000);
};

mediumTime = () => {
  medium();
  playAudioBg();
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 4vmax";
    medium();
  }, 3000);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 3vmax";
    medium();
  }, 7000);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 1max";
    medium();
  }, 8000);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 0vmax";
    medium();
    loseGame();
  }, 9000);
};

easyTime = () => {
  easy();
  playAudioBg();
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 4vmax";
    easy();
  }, 5000);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 3vmax";
    easy();
  }, 10000);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 1max";
    easy();
  }, 14000);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 0vmax";
    easy();
    loseGame();
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
    } else if (button.classList.contains("button__easy")) {
      easyTime();
    }
  };
});
