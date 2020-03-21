import { RECEIVE_QUESTIONS } from '../actions/questions'
import { ANSWERED_QUESTION } from '../actions/questions'

export default function questions(state={}, action){
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case ANSWERED_QUESTION:
      return {
        ...state,
        [action.qid]:{
          ...state[action.qid],
          [action.answer] : state[action.qid][action.answer].votes.concat([action.authedUser])
        }
      }
    default:
      return state
  }
}
