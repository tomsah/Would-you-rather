import React, { Component} from 'react'
import { connect } from  'react-redux'
import { handleReceiveQuestions } from '../actions/questions'
import QuestionCard from './QuestionCard'

class QuestionsDashboard extends Component {

  componentDidMount () {
    const { dispatch } = this.props

    dispatch(handleReceiveQuestions())
  }

  render() {
    console.log('Dashboard props', this.props.user)
    const { questionsId, user } = this.props

    const userQuestionsAnswered = user && Object.keys(user.answers)
    let answeredQuestions
    let unAnsweredQuestions

    if(userQuestionsAnswered && questionsId) {
       answeredQuestions =  questionsId.filter(x => userQuestionsAnswered.includes(x))
       unAnsweredQuestions =  questionsId.filter(x => !userQuestionsAnswered.includes(x))
    }

    return(
      <div>
        <div>
          <h2>answered questions</h2>
          <ul>
            {answeredQuestions && answeredQuestions.map(id => <li key={id}><QuestionCard id={id}/></li>)}
          </ul>
        </div>
        <div>
          <h3>answered questions</h3>
          <ul>
            {unAnsweredQuestions && unAnsweredQuestions.map(id => <li key={id}><QuestionCard id={id}/></li>)}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps({questions, users, loggedInUser}) {
  return{
    questionsId: Object.keys(questions),
    questions,
    user: users['sarahedo'],
  }
}

export default connect(mapStateToProps)(QuestionsDashboard)
