import monster from '../assets/monster.svg';

const Game = () => {
  // Onclick game screen disappears 
  function playGame() {
    alert('hello')
  }

  return (
    <main className="main">
      <h1 className="main__text">
        Shine your light fully on the monster hidden in the dark before it eats
        you!
      </h1>
      <p className="main__text">Note: This game will have audio.</p>
      <img className="main__monster" src={ monster } alt="monster" />
      <div className="main__buttons">
        <button className="button button__hard" onClick={playGame}>Hard</button>
        <button className="button button__medium">Medium</button>
        <button className="button button__easy">Easy</button>
      </div>
      <div className="footer">
        <p className="footer__copyright">
          @Made by <a href="https://github.com/7redeagle/">7redeagle</a> |
          <a className="popup__link" href="#popup">Attributions</a>.
        </p>
      </div>
    </main>
  )
}

export default Game;
