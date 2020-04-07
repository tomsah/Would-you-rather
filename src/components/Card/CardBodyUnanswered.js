import React, { Component } from "react";

class CardBodyUnanswered extends Component {
  render() {
    const { question, handleSelectedAnswer, selectedAnswer, handleSubmitAnswer } = this.props;
    console.log('selectedAnswer CardBodyUnanswered', selectedAnswer)
    return (
      <div className="card__answers">
        <h2>Would you rather...</h2>
        <form action="" onSubmit={(e) => handleSubmitAnswer(e, question.id)}>
        <ul className="card__answers__list">
          <li>
            <input
              type="radio"
              id="optionOne"
              name="optionOne"
              value="optionOne"
              checked={selectedAnswer === "optionOne"}
              onChange={handleSelectedAnswer}
            />
            <label htmlFor="optionOne">{question.optionOne.text}</label>
          </li>
          <li>
            <input
              type="radio"
              id="optionTwo"
              name="optionTwo"
              value="optionTwo"
              checked={selectedAnswer === "optionTwo"}
              onChange={handleSelectedAnswer}
            />
            <label htmlFor="optionTwo">{question.optionTwo.text}</label>
          </li>
        </ul>
        <button type='submit' className='neon-button'>
          <span />
          <span />
          <span />
          <span />
          decide
        </button>
        </form>
      </div>
    );
  }
}

export default CardBodyUnanswered;
