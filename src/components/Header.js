import React, { Component } from 'react'
import { connect} from 'react-redux'
import { NavLink } from 'react-router-dom'



class Header extends  Component {
  render () {
    const { userInfo } = this.props
    return(
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to='/' exact activeClassName='active'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/add' exact activeClassName='active'>New question</NavLink>
            </li>
            <li>
              <NavLink to='/leaderboard' exact activeClassName='active'>Leader board</NavLink>
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
