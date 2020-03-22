import React, { Component } from "react";
import { connect } from "react-redux";
import { handleReceiveQuestions } from "../actions/questions";
import QuestionCard from "./QuestionCard";

class QuestionsDashboard extends Component {
  state = {
    active: "Unanswered"
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleReceiveQuestions());
  }

  dashboardNavigate = e => {
    return this.setState({ active: e.target.id });
  };

  submitAnswer = (e) => {
    e.preventDefault()
    // submit answer
    console.log(e.target.value)
  }


  render() {
    const { questionsId, user, questions, users } = this.props;
    const { active } = this.state;

    const userQuestionsAnswered = user && Object.keys(user.answers);
    let answeredQuestions;
    let unAnsweredQuestions;

    if (userQuestionsAnswered && questionsId) {
      answeredQuestions = questionsId.filter(x =>
        userQuestionsAnswered.includes(x)
      );
      unAnsweredQuestions = questionsId.filter(
        x => !userQuestionsAnswered.includes(x)
      );
    }

    return (
      <div className='dashboard'>
          <div
            className='dashboard__nav'
            onClick={e => this.dashboardNavigate(e)}>
            <ul>
              <li
                id="Unanswered"
                key="Unanswered"
                className={active === "Unanswered" ? "active" : ""}
              >
                Unanswered questions
              </li>
              <li
                id="Answered"
                key="Answered"
                className={active === "Answered" ? "active" : ""}
              >
                Answered questions
              </li>
            </ul>
          </div>

          <div className='dashboard__container'>
            <ul>
              {active === "Unanswered" ?
                unAnsweredQuestions &&
                unAnsweredQuestions.map(id => (
                  <li key={id}>
                    <QuestionCard
                      unAnswered='unAnswered'
                      authorInfo={users[questions[id].author]}
                      question={questions[id]}
                      handleSubmitAnswer={this.submitAnswer} />
                  </li>
                ))
                :
                answeredQuestions &&
                answeredQuestions.map(id => (
                  <li key={id}>
                    <QuestionCard
                      answered='answered'
                      authorInfo={users[questions[id].author]}
                      question={questions[id]}
                      handleSubmitAnswer={this.submitAnswer} />
                  </li>
                ))
              }
            </ul>
          </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, loggedInUser }) {

  return {
    questionsId: Object.keys(questions),
    questions,
    users,
    loggedInUser,
    user: users["sarahedo"]
  };
}

export default connect(mapStateToProps)(QuestionsDashboard);
