import React, { Component } from 'react'
import { logoutUser } from '../../actions/loggedInUser'
import { connect} from 'react-redux'
import { NavLink } from 'react-router-dom'


class Header extends  Component {
  handleLogout=  () => {
    const { dispatch } = this.props
    dispatch(logoutUser())
  }

  render () {
    const { userInfo } = this.props
    const userName = userInfo.name
    return(
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to='/' exact activeClassName='active'>
                <span>home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/add' exact activeClassName='active'>
                <span>new question</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/leaderboard' exact activeClassName='active'>
                <span> leader board</span>
              </NavLink>
            </li>
          </ul>
        </nav>
          {
            userInfo && <div className='user-info'>
              <span>Hello <br/> {userName.toLowerCase()}</span>
              <img className=' avatar-small circle-image' src={userInfo.avatarURL} alt=""/>
              <button onClick={this.handleLogout} className='neon-button'>
                <span />
                <span />
                <span />
                <span />
                Log out
              </button>
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
