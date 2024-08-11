import React from 'react'
import './notFound.css'

const NotFound = () => {
  return (
    <div className='section'>
      <h1 className='error'>404</h1>
      <div className='page'>Oops!!! The page is not found</div>
      <a className='back-home' href='/'>Back to home</a>
    </div>
  )
}

export default NotFound