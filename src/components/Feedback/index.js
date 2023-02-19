import {Component} from 'react'
import List from '../List'
import FeedbackStatus from '../FeedbackStatus'
import './index.css'

class Feedback extends Component {
  state = {FeedBackStatus: false}

  getFeedBack = () => {
    this.setState({FeedBackStatus: true})
  }

  render() {
    const {FeedBackStatus} = this.state

    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="bgContainer">
        <div className="contentContainer">
          {FeedBackStatus ? (
            <div className="feedbackCard">
              <FeedbackStatus loveEmojiUrl={loveEmojiUrl} />
            </div>
          ) : (
            <>
              <h1 className="heading">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="emojisCard">
                {emojis.map(eachList => (
                  <List
                    resourceList={eachList}
                    getFeedBack={this.getFeedBack}
                    key={eachList.id}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    )
  }
}
export default Feedback
