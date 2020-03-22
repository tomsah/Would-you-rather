import { _getQuestions, _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWERED_QUESTION = 'ANSWERED_QUESTION'
export const CREATE_QUESTION = 'CREATE_QUESTION'

function receiveQuestions (questions) {
  return{
    type: RECEIVE_QUESTIONS,
    questions
  }
}

function createQuestion (formattedQuestion) {
  return{
    type: CREATE_QUESTION,
    question: formattedQuestion
  }
}

function answeredQuestion ({ authedUser, qid, answer }) {
  return {
    type: ANSWERED_QUESTION,
    authedUser,
    qid,
    answer
  }
}

export function handleCreateQuestion (newQuestion) {
  return (dispatch) => {
    _saveQuestion(newQuestion).then((formattedQuestion) => {
      dispatch(createQuestion(formattedQuestion))
    })
  }
}

export function handleReceiveQuestions() {
  return (dispatch) => {
    _getQuestions().then((questions) => {
      dispatch(receiveQuestions(questions))
    })
  }
}


export function handleAnsweredQuestion(answer) {
  return (dispatch) => {
    _saveQuestionAnswer(answer).then( () => {
      dispatch(answeredQuestion(answer))
    })
  }
}
