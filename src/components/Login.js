import React, { Component } from 'react'
import { connect  } from 'react-redux'

import{ setLoggedInUser } from '../actions/loggedInUser'

class Login extends Component{

  loggingUser = (e, id) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(setLoggedInUser(id))
  }

  render() {
    const { users, usersID } = this.props
    return(
      <div>
        <h1>would you rather???</h1>
        <h2 className='login-title'>one must eventually <br/> choose a side </h2>
        <ul className='login-container neon-wrapper-red'>
          { usersID.map( id => (
            <li key={id} onClick={(e) => this.loggingUser(e, id)}>
              <img className='avatar-small circle-image' src={users[id].avatarURL} alt=""/>
             <p>{users[id].name}</p>
            </li>
          )) }
        </ul>
      </div>
    )
  }
}

function mapStateToProps({users}) {
  return {
    users,
    usersID: Object.keys(users)
  }
}

export default connect(mapStateToProps)(Login)
