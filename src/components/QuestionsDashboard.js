import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";

class QuestionsDashboard extends Component {
  state = {
    active: "Unanswered"
  };

  dashboardNavigate = e => {
    return this.setState({ active: e.target.id });
  };

  render() {
    const { questionsId, user, questions } = this.props;
    const { active } = this.state;

    const userQuestionsAnswered = user && Object.keys(user.answers);
    let answeredQuestions;
    let unAnsweredQuestions;

    if (userQuestionsAnswered && questionsId) {
      answeredQuestions = questionsId.filter(x =>
        userQuestionsAnswered.includes(x)
      ).sort((a,b) => questions[b].timestamp - questions[a].timestamp );

      unAnsweredQuestions = questionsId.filter(
        x => !userQuestionsAnswered.includes(x)
      ).sort((a,b) => questions[b].timestamp - questions[a].timestamp );
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
                    <Card id={id} preview={true}/>
                  </li>
                ))
                :
                answeredQuestions &&
                answeredQuestions.map(id => (
                  <li key={id}>
                    <Card id={id} preview={true}/>
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
    user: users[loggedInUser]
  };
}

export default connect(mapStateToProps)(QuestionsDashboard);
