import React from 'react'
import './notFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='section'>
      <h1 className='error'>404</h1>
      <div className='page'>Oops!!! The page is not found</div>
      <Link to="/" className='back-home'>Back to home</Link>
    </div>
  )
}

export default NotFound