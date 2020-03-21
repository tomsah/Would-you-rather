import { RECEIVE_USERS } from '../actions/users'
import { ANSWERED_QUESTION } from '../actions/questions'

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case ANSWERED_QUESTION:
      return {
        ...state,
        ...state[action.authedUser].answers = {
          ...state[action.authedUser].answers,
          [action.qid] : action.answer,
        }
      }
    default:
      return state
  }
}
