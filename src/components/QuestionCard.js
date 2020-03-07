import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionCard extends Component {
  render() {
    const { id } = this.props
    return(
      <div>
        <h4>card</h4>
        {id}
      </div>
    )
  }
}
function mapStateToProps({questions}) {
  return {
    questions
  }
}
export default connect(mapStateToProps)(QuestionCard)
