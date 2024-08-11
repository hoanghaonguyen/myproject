import React from 'react'
import './thankyou.css'

const ThankYou = () => {
  return (
    <div className='section'>
      <h1 className='thankyou'>Thank you</h1>
      <div className='page'>Thank you for your order!!!</div>
      <a className='back-home' href='/'>Back to home</a>
    </div>
  )
}

export default ThankYou