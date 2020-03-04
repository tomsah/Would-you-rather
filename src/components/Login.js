import React, { Component } from 'react'
import { connect  } from 'react-redux'

import{ setLoggedInUser } from '../actions/loggedInUser'

class Login extends Component{

  loggingUser = (e, id) => {
    e.preventDefault()
    const { dispatch } = this.props
    //TODO redirect to the home page or requested page

    dispatch(setLoggedInUser(id))
  }

  render() {
    const { users, usersID } = this.props
    console.log(users)
    return(
      <div>
        <h2>PLEASE SELECT A USER TO START PLAYING</h2>
        <ul className='login-container'>
          { usersID.map( id => (
            <li key={id} onClick={(e) => this.loggingUser(e, id)}>
              <img className='avatar' src={users[id].avatarURL} alt=""/>
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
