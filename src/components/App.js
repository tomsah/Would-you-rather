import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
// import { handleReceiveQuestions } from '../actions/questions'
import { handleReceiveUsers } from '../actions/users'
import Login from './Login'

class App extends Component {
  componentDidMount () {
    const { dispatch } = this.props
    // dispatch(handleReceiveQuestions())
    dispatch(handleReceiveUsers())
  }

  render() {
    return (
      <div className="App">
        <h1>Would you rather?</h1>
        <Login />
      </div>
    );
  }
}

export default connect()(App);
