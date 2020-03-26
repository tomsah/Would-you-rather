export const LOGOUT_USER = 'LOGOUT_USER'
export const SET_LOGGED_IN_USER = 'SET_LOGGED_IN_USER'

export function setLoggedInUser(id) {
  return{
    type: SET_LOGGED_IN_USER,
    id
  }
}

export function logoutUser () {
  return {
    type: LOGOUT_USER
  }
}
