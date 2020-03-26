import React, { Component } from "react";
import { connect } from "react-redux";

class LeaderBoard extends Component {

  calculateScore = (userID) => {
    const {users} = this.props
    return Object.keys(users[userID].answers).length + users[userID].questions.length
  }

  render() {
    const { usersList, users } = this.props;
    console.log('foo', usersList, users)
    const orderedUsersList = [...usersList].sort((a,b) => {
      return this.calculateScore(b) - this.calculateScore(a)
    })

    return (
      <div className="leaderboard">
        <h3>Leader Board</h3>
        { orderedUsersList.map(userId => {
            const answered = Object.keys(users[userId].answers).length;
            const created = users[userId].questions.length;
            return (
              <div className="leaderboard-card card" key={userId}>
                <div className="leaderboard-card__avatar">
                  <img
                    className=" avatar-medium"
                    src={users[userId].avatarURL}
                    alt=""
                  />
                </div>
                <div className="leaderboard-card__body">
                  <div className="leaderboard-card__body__username">
                    {users[userId].name}
                  </div>
                  <ul className="leaderboard-card__body__question-totals">
                    <li key="Answered">Answered question : {answered}</li>
                    <li key="Created">Created question: {created}</li>
                  </ul>
                </div>
                <div className="leaderboard-card__score">
                  <span>Score:</span>
                  {this.calculateScore(userId)}
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
    usersList: Object.keys(users)
  };
}

export default connect(mapStateToProps)(LeaderBoard);
