// game setup
const allBtn = document.querySelectorAll(".button");
const mainScreen = document.querySelector(".main");
const gameScreen = document.querySelector("html");
const monster = document.querySelector(".monster");

// background music
let audioBg = document.querySelector(".audio__bg");
playAudioBg = () => {
  audioBg.volume = 0.5;
  audioBg.play();
};
pauseAudioBg = () => {
  audioBg.pause();
  let audioLose = document.querySelector(".audio__lose");
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

// The monster will move every n seconds
let intervalMonster = window.setInterval(moveMonster, 1000);

// backgroung img for each mode
pickChoice = (img) => {
  gameScreen.style.backgroundImage = img;
  gameScreen.style.visibility = "visible";
  gameScreen.style.overflow = "hidden";
}

loseGame = () => {
  window.clearInterval(intervalMonster);
  gameScreen.style.pointerEvents = "none";
  pauseAudioBg();
  setTimeout(function () {
    gameScreen.style.opacity = "0";
    alert("The monster ate you!");
    location.reload();
  }, 1000);
};

// win game
monster.onmouseover = () => {
  let audioWin = document.querySelector(".audio__win");
  window.clearInterval(intervalMonster);
  monster.style.transform = "scale(3)";
  audioBg.pause();
  audioWin.play();
  setTimeout(function () {
    alert("You vanquished the monster! You get to live another day.");
    location.reload();
  }, 1000);
};

pickTime = (time1, time2, time3, time4, choice) => {
  pickChoice(choice); 
  playAudioBg();
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 3vmax";
    pickChoice(choice); 
  }, time1);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 2vmax";
    pickChoice(choice); 
  }, time2);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 1max";
    pickChoice(choice); 
  }, time3);
  setTimeout(function () {
    document.documentElement.style.cssText = "--cursorSize: 0vmax";
    pickChoice(choice); 
    loseGame();
  }, time4);
}

// click button to begin game and hide the mainScreen. Each button links to different background images.
allBtn.forEach(function (button) {
  button.onclick = () => {
    mainScreen.style.visibility = "hidden";
    gameScreen.style.visibility = "visible";
    moveMonster();
    if (button.classList.contains("button__hard")) {
      pickTime(1, 3000, 6000, 7000, "url(assets/hard.jpg)");
    } else if (button.classList.contains("button__medium")) {
      pickTime(3000, 7000, 8000, 9000, "url(assets/medium.jpg)");
    } else if (button.classList.contains("button__easy")) {
      pickTime(5000, 10000, 14000, 15000, "url(assets/easy.jpg)"); 
    }
  };
});
