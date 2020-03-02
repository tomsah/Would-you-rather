import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { handleReceiveQuestions } from '../actions/questions'
import { handleReceiveUsers } from '../actions/users'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleReceiveQuestions())
    this.props.dispatch(handleReceiveUsers())
  }

  render() {
    return (
      <div className="App">
        <h1>Would you rather?</h1>
      </div>
    );
  }
}

export default connect()(App);
