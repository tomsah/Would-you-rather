import React, { Component } from 'react'

class CardBodyUnanswered extends Component {
  render() {
    const {question, handleSelectedAnswer, selectedAnswer } = this.props
    return(
      <div className='card__answers'>
        <h2>Would you rather...</h2>
        <ul className='card__answer__list'>
          <li>
            <input type="radio" id="optionOne" name="optionOne" value="optionOne" checked={selectedAnswer === 'optionOne'}  onChange={handleSelectedAnswer}/>
            <label htmlFor="optionOne">{question.optionOne.text}</label>
          </li>
          <li>
            <input type="radio" id="optionTwo" name="optionTwo" value="optionTwo" checked={selectedAnswer === 'optionTwo'}  onChange={handleSelectedAnswer}/>
            <label htmlFor="optionTwo">{question.optionTwo.text}</label>
          </li>
        </ul>
        <button onClick={(e) => this.submitAnswer(e)}>Submit</button>
      </div>
    )
  }
}

export default CardBodyUnanswered
