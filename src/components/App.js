import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { handleReceiveUsers } from '../actions/users'
import{ setLoggedInUser } from '../actions/loggedInUser'
// import Login from './Login'
import Main from './Main'

class App extends Component {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(handleReceiveUsers())
    dispatch(setLoggedInUser('sarahedo'))
  }

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default connect()(App);
