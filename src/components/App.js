import React, { Component, Fragment } from 'react';
import './App.css';
import { connect } from 'react-redux'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import { handleReceiveUsers } from '../actions/users'
import { handleReceiveQuestions } from '../actions/questions'
import{ setLoggedInUser } from '../actions/loggedInUser'
import Login from './Login'
import QuestionsDashboard from './QuestionsDashboard'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'


class App extends Component {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(handleReceiveQuestions());
    dispatch(handleReceiveUsers())
    dispatch(setLoggedInUser('sarahedo'))
  }

  render() {
    const { loggedIn } = this.props
    return (
      <Router>
        <Fragment>
          <div className="App">
            <Header/>
            {
              loggedIn ?
                <div>
                  <Route path='/' exact component={QuestionsDashboard} />
                  <Route path='/add' component={NewQuestion} />
                  <Route path='/leaderboard' component={LeaderBoard} />
                </div>
                :
                <Login />
            }
          </div>
        </Fragment>
      </Router>

    );
  }
}

function mapStateToProps ({loggedIn}) {
  return {
    loggedIn: loggedIn !== null
  }
}

export default connect(mapStateToProps)(App);
