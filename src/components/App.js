import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { handleInitialData} from '../actions/initialData'

import Header from './Header/Header'
import Login from './Login/Login'
import QuestionsDashboard from './Question/QuestionsDashboard'
import NewQuestion from './Question/NewQuestion'
import LeaderBoard from './LeaderBoard/LeaderBoard'
import QuestionPage from './Question/QuestionPage'
import NotFound from './NotFound/NotFound'


class App extends Component {
  componentDidMount () {
    const { dispatch } = this.props
      dispatch(handleInitialData())
  }



  render() {
    const { loggedIn } = this.props
    return (
      <Router>
        <Fragment>
          <div className="App">
            {
              loggedIn ?
                <div>
                  <Header/>
                  <Switch>
                    <Route path='/' exact component={QuestionsDashboard} />
                    <Route path='/question/:id'  render={(props) =>  <QuestionPage {...props}/> }/>
                    <Route path='/add' component={NewQuestion} />
                    <Route path='/leaderboard' component={LeaderBoard} />
                    <Route component={NotFound}/>
                  </Switch>
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

function mapStateToProps ({loggedInUser, questions}) {
  return {
    loggedIn: loggedInUser !== null,
    questionsId: Object.keys(questions)
  }
}

export default connect(mapStateToProps)(App);
