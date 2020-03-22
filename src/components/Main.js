import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './Header'
// import Dashboard  from './QuestionsDashboard'
import NewQuestion from './NewQuestion'
// import Question from  './Question'
// import LeaderBoard from './LeaderBoard'

class Main extends Component {
  render() {
    return(
      <div>
        <Header />
       { /* Routes are going here */}
        <NewQuestion />
      </div>
    )
  }
}

export default connect()(Main)
