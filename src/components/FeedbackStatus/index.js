import './index.css'

const FeedbackStatus = props => {
  const {loveEmojiUrl} = props
  return (
    <div className="container">
      <img src={loveEmojiUrl} alt="love emoji" className="love-icon" />
      <h1>Thank you!</h1>
      <p className="paragraph">
        We will use your feedback to improve our customer support performance
      </p>
    </div>
  )
}
export default FeedbackStatus
