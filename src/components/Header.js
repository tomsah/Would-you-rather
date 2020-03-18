import React, { Component } from 'react'
import { connect} from 'react-redux'

class Header extends  Component {
  render () {
    const { userInfo } = this.props
    console.log('userinfo', userInfo)
    return(
      <header>
        <nav>
          <ul>
            <li>
              <a href="#" className='active'>Home</a>
            </li>
            <li>
              <a href="#">New question</a>
            </li>
            <li>
              <a href="#">Leader board</a>
            </li>
          </ul>
        </nav>
          {
            userInfo && <div className='user-info'>
              <span>{`Hello ${userInfo && userInfo.name}`}</span>
              <img className=' avatar-small' src={userInfo.avatarURL} alt=""/>
              <button>Log out</button>
            </div>
          }
      </header>
    )
  }
}

function mapStateToProps({users, loggedInUser}) {
  return {
    userInfo: users[loggedInUser]
  }
}

export default connect(mapStateToProps)(Header)
