import React, { Component } from 'react'
import { Redirect }  from 'react-router-dom'
import { connect } from 'react-redux'
import Card from '../Card/Card'
import NotFound from '../NotFound/NotFound'

class QuestionPage extends Component {
  render() {
    const {id, questionsId} = this.props
    if(!questionsId.includes(id)) {
      return <Redirect to="/notFound" component={NotFound}/>
    }
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
    questions,
    questionsId : Object.keys(questions)
  }
}

export default connect(mapStateToProps)(QuestionPage)
