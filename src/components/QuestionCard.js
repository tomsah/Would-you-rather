import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardBodyAnswered from './CardBodyAnswered'
import CardBodyUnanswered from './CardBodyUnanswered'
import { handleAnsweredQuestion } from "../actions/questions";

class QuestionCard extends Component {
  state = {
    selectedAnswer: null,
    questionPreview: true,
  }

  submitAnswer = (questionID) => {
    const userAnswer = {
      authedUser: "sarahedo",
      qid: questionID,
      answer: this.state.selectedAnswer
    }
    const { dispatch } = this.props
    dispatch(handleAnsweredQuestion(userAnswer))
  }

  selectAnswer = (e) =>  this.setState({
    selectedAnswer: e.target.value
  })

  showCardDetails = () => this.setState({
    questionPreview: !this.state.questionPreview
  })

  render() {
    const { question, authorInfo, unAnswered } = this.props
    const { selectedAnswer, questionPreview } = this.state

    return(
      <div className='card'>
        <h4 className='card__title'> {`${authorInfo.name} asks:`}</h4>
        <div className='card__body'>
          <div className='card__body__avatar'>
            <img className=' avatar-medium' src={authorInfo.avatarURL} alt=""/>
          </div>
          <div className='card__body__info'>
            {
              questionPreview ?
                <div className='card__preview'>
                  <h2>Would you rather...</h2>
                  <p>{`...${question.optionOne.text}...`}</p>
                  <button onClick={this.showCardDetails}>View questions</button>
                </div>
                :
                unAnswered ?
                  <CardBodyUnanswered
                    question={question}
                    selectedAnswer={selectedAnswer}
                    handleSubmitAnswer={this.submitAnswer}
                    handleSelectedAnswer={this.selectAnswer}/>
                    :
                  <CardBodyAnswered
                    question={question}
                    selectedAnswer={selectedAnswer}
                  />
            }
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(QuestionCard)
