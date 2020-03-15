import React, { Component } from 'react'
import { connect } from 'react-redux'

class CardBodyAnswered extends Component {
  percentageAnswered = (numberOfAnswer) => {
    const { question } = this.props
    const totalVote = question.optionOne.votes.length + question.optionTwo.votes.length
    return (numberOfAnswer/totalVote) * 100
  }

  render() {
    const { question, user } = this.props
    const totalVote = question.optionOne.votes.length + question.optionTwo.votes.length
    console.log('question', question)
    return(
      <div>
        <h2>Results:</h2>
        <div className={`card_answer_result ${user.answers[question.id] === 'optionOne' ? 'answer' : ''}`}>
          <p>{question.optionOne.text}</p>
          <div className='card_answer_result__percentage'>
              <div
                style={{width: `${this.percentageAnswered(question.optionOne.votes.length)}%`}}>
                { question.optionOne.votes.length > 0 && `${Math.round(this.percentageAnswered(question.optionOne.votes.length))}%`}
              </div>
            <span> { question.optionOne.votes.length === 0 && '0%'} </span>
          </div>
          {`${question.optionOne.votes.length} out of ${totalVote} votes`}
        </div>

        <div className={`card_answer_result ${user.answers[question.id] === 'optionTwo' ? 'answer' : ''}`}>
          <p>{question.optionTwo.text}</p>
          <div className='card_answer_result__percentage'>
            <div
              style={{width: `${this.percentageAnswered(question.optionTwo.votes.length)}%`}}>
              { question.optionTwo.votes.length > 0 && `${Math.round(this.percentageAnswered(question.optionTwo.votes.length))}%`}
            </div>
            <span> { question.optionTwo.votes.length === 0 && '0%'} </span>
          </div>
          {`${question.optionTwo.votes.length} out of ${totalVote} votes`}
        </div>
      </div>
    )
  }
}

function mapStateToProps({users, loggedInUser}) {
  return {
    totalOfUsers: Object.keys(users),
    user: users[loggedInUser]
  }
}

export default connect(mapStateToProps)(CardBodyAnswered)
