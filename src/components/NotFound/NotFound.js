import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <div className='not-found'>
    <h1> found page could not be</h1>
    <div className="not-found__info">
      <div className="not-found__info__text">404</div>
      <p>do or not, there is no try</p>
      <Link to={`/`} className='neon-button'>
        <span />
        <span />
        <span />
        <span />
        return home
      </Link>
    </div>
  </div>)

export default NotFound

