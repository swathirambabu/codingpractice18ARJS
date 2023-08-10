// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiCardDetails, clickEmoji} = props
  const {emojiUrl, emojiName, id} = emojiCardDetails

  const onClickEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button type="button" className="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-icon" />
      </button>
    </li>
  )
}
export default EmojiCard
