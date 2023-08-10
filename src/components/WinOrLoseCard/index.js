// Write your code here.
import './index.css'

const LOSE_IMG = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMG = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {score, onClickPlayAgain, isWon} = props

  const imgUrl = isWon ? WON_IMG : LOSE_IMG
  const gameLabel = isWon ? 'Best Score' : 'Score'
  const gameStatus = isWon ? 'You Won' : 'You Lose'

  return (
    <div className="win-or-lose-card">
      <div className="details-section">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="game-score-label">{gameLabel}</p>
        <p className="score-current">{score}/12</p>
        <button type="button" className="button" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img alt="win or lose" src={imgUrl} className="image" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
