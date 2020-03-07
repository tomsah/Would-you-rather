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

  render() {
    console.log("Dashboard props", this.props.user);
    const { questionsId, user } = this.props;
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
      <div>
        <div>
          <div onClick={e => this.dashboardNavigate(e)}>
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
          <div>
            {active === "Unanswered" ? (
              <ul>
                {unAnsweredQuestions &&
                  unAnsweredQuestions.map(id => (
                    <li key={id}>
                      <QuestionCard id={id} />
                    </li>
                  ))}
              </ul>
            ) : (
              <ul>
                {answeredQuestions &&
                  answeredQuestions.map(id => (
                    <li key={id}>
                      <QuestionCard id={id} />
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
        <div />
      </div>
    );
  }
}

function mapStateToProps({ questions, users, loggedInUser }) {
  return {
    questionsId: Object.keys(questions),
    questions,
    user: users["sarahedo"]
  };
}

export default connect(mapStateToProps)(QuestionsDashboard);
