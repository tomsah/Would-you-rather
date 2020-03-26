import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'

import { handleCreateQuestion } from "../actions/questions";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    redirect: false,
  };

  submitNewQuestion = e => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    const { dispatch, loggedInUser } = this.props;
    const newQuestion = {
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: loggedInUser
    };

    dispatch(handleCreateQuestion(newQuestion));
    this.setState(() => ({
      redirect: true
    }))
  };

  handleOnChange = e => {
    e.stopPropagation()
    const id = e.target.id;
    const text = e.target.value;
    this.setState(() => ({
      [id]: text
    }));
  };

  render() {
    const { optionOne, optionTwo, redirect } = this.state;

    if(redirect) {
      return <Redirect to='/'/>
    }

    return (
      <div className="new-question">
        <h2>Create a new Question</h2>
        <div className="new-question__body">
          <div className="new-question__body__meta">Complete the question</div>
          <h3>Would you rather...</h3>
          <form action="" onSubmit={e => this.submitNewQuestion(e)}>
            <input
              type="text"
              id="optionOne"
              placeholder="enter option one here"
              value={optionOne}
              onChange={e => this.handleOnChange(e)}
            />
            <span>or</span>
            <input
              type="text"
              id="optionTwo"
              placeholder="enter option one here"
              value={optionTwo}
              onChange={e => this.handleOnChange(e)}
            />
            <button
              type="submit"
              disabled={optionOne.length && optionTwo.length === 0}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ loggedInUser }) {
  return {
    loggedInUser
  };
}
export default connect(mapStateToProps)(NewQuestion);
