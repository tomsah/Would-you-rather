import {
  RECEIVE_QUESTIONS,
  ANSWERED_QUESTION,
  CREATE_QUESTION
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ANSWERED_QUESTION:
      return {
        ...state,
        [action.qid] : {
          ...state[action.qid],
          [action.answer]: {
            votes: state[action.qid][action.answer].votes.concat([
              action.authedUser
            ]),
            text: state[action.qid][action.answer].text
          }
        }
      };
    case CREATE_QUESTION :
      return{
        ...state,
        [action.question.id] : {
          ...action.question
        }
      }
    default:
      return state;
  }
}
