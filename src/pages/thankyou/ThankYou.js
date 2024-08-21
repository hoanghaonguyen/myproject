import React from 'react'
import './thankyou.css'
import { Link } from 'react-router-dom'

const ThankYou = () => {
  return (
    <div className='section'>
      <h1 className='thankyou'>Thank you</h1>
      <div className='page'>Thank you for your order!!!</div>
      <Link to="/" className='back-home'>Back to home</Link>
    </div>
  )
}

export default ThankYou