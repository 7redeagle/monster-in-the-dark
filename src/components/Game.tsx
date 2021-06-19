import vampire from '../assets/vampire.svg';

const Game = () => {
  
  // cursor flashlight
  function update(e: any) {
  var x = e.clientX || e.touches[0].clientX;
  var y = e.clientY || e.touches[0].clientY;

  document.documentElement.style.setProperty("--cursorX", x + "px");
  document.documentElement.style.setProperty("--cursorY", y + "px");
  }

  document.addEventListener("mousemove", update);
  document.addEventListener("touchmove", update);

  // game on click buttons
  
  return(
    <main className="main">
      <h1 className="main__text">
        Shine your light fully on the monster hidden in the dark before it eats
        you!
      </h1>
      <p className="main__text">Note: This game will have audio.</p>
      <img className="main__monster" src={ vampire } alt="monster" />
      <div className="main__buttons">
        <button className="button button__hard">Hard</button>
        <button className="button button__medium">Medium</button>
        <button className="button button__easy">Easy</button>
      </div>
    </main>
  )
}

export default Game;