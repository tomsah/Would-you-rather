import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from './Card'

class QuestionPage extends Component {
  render() {
    const {id} = this.props
    return (
      <div>
        <Card id={id} />
      </div>
    )
  }
}

function mapStateToProps({questions}, props) {
  const {id} = props.match.params
  return{
    id,
    questions
  }
}

export default connect(mapStateToProps)(QuestionPage)
