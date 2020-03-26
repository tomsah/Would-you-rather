import React, { Component, Fragment } from 'react';
import './App.css';
import { connect } from 'react-redux'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { handleInitialData} from '../actions/initialData'

import Header from './Header'
import Login from './Login'
import QuestionsDashboard from './QuestionsDashboard'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import QuestionPage from './QuestionPage'
import NotFound from './NotFound'


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
            <Header/>
            {
              loggedIn ?
                <div>
                  <Switch>
                    <Route path='/' exact component={QuestionsDashboard} />
                    <Route path='/question/:id' component={QuestionPage} />
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

function mapStateToProps ({loggedInUser}) {
  return {
    loggedIn: loggedInUser !== null
  }
}

export default connect(mapStateToProps)(App);
