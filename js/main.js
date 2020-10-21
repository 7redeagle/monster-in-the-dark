// flashlight cursor
function update(e) {
  var x = e.clientX || e.touches[0].clientX;
  var y = e.clientY || e.touches[0].clientY;

  document.documentElement.style.setProperty("--cursorX", x + "px");
  document.documentElement.style.setProperty("--cursorY", y + "px");
}

document.addEventListener("mousemove", update);
document.addEventListener("touchmove", update);

// click button to begin game
const allBtn = document.querySelectorAll(".button");
const mainScreen = document.querySelector(".main");
const gameScreen = document.querySelector("html");
const monster = document.querySelector(".monster");

allBtn.forEach(function (button) {
  button.onclick = () => {
    mainScreen.style.visibility = "hidden";
    gameScreen.style.visibility = "visible";
    if (button.classList.contains("button__hard")) {
      gameScreen.style.backgroundImage = "url(assets/hard.jpg)";
    } else if (button.classList.contains("button__medium")) {
      gameScreen.style.backgroundImage = "url(assets/medium.jpg)";
    } else {
      gameScreen.style.backgroundImage = "url(assets/easy.jpg)";
    }
  };
});

// music: auto play music once one of the buttons are clicked, play different music when game lost or won (royalty free music)

// fix monster random not working

// use functions for items that are reusable
