import React, { Component } from 'react'
import { connect } from 'react-redux'

import CardBodyUnanswered from './CardBodyUnanswered'
import CardBodyAnswered from './CardBodyAnswered'
import { handleAnsweredQuestion } from '../../actions/questions'
import CardBodyPreview from './CardBodyPreview'

class Card extends Component {
  state = {
    selectedAnswer: null,
  }

  selectAnswer = (e) =>  this.setState({
    selectedAnswer: e.target.value
  })

  submitAnswer = (e,questionID) => {
    e.preventDefault()
    const {loggedInUser} = this.props

    const userAnswer = {
      authedUser: loggedInUser,
      qid: questionID,
      answer: this.state.selectedAnswer
    }
    const { dispatch, question, selectedAnswer } = this.props
    dispatch(handleAnsweredQuestion(userAnswer))

    return (
      question && <CardBodyAnswered
        question={question}
        selectedAnswer={selectedAnswer}
      />
    )
  }

  render () {
    const { question, user, users, id, preview} = this.props
    const { selectedAnswer } = this.state
    const answered = Object.keys(user.answers).includes(id)
    const userName = users[question.author].name

    return(
      <div>
        <div className='card neon-wrapper-red'>
          <div className='card__title'>
            <h4 className='card__title__text'> {` ${userName.toLocaleLowerCase()} asks:`}</h4>
          </div>
          <div className='card__body'>
            <div className='card__body__avatar'>
              <img className=' avatar-medium circle-image'  src={user.avatarURL} alt=""/>
            </div>
            <div className='card__body__info'>
              {
                preview ?
                  <CardBodyPreview
                    question={question}
                  />
               : answered ?
                  <CardBodyAnswered
                  question={question}
                  selectedAnswer={selectedAnswer}
                />
                :
                  <CardBodyUnanswered
                    question={question}
                    selectedAnswer={selectedAnswer}
                    handleSubmitAnswer={this.submitAnswer}
                    handleSelectedAnswer={this.selectAnswer}/>
              }
            </div>
          </div>
        </div>
      </div>

    )
  }
}

function  mapSateToProps ({questions, loggedInUser, users, unAnswered}, {id}) {
  const question = questions[id]
  const user = users && users[loggedInUser]

  return {
    users,
    question,
    user,
    loggedInUser
  }
}

export default connect(mapSateToProps)(Card)
