import React from 'react'
import {Link} from 'react-router-dom'
import ButtonPrimary from '../components/ButtonPrimary'

const NotFound = () => {
  return (
    <div className='bg-[#f7f7f5] h-screen flex justify-center items-center'>
      <div className='text-center'>
        <h1 className='text-7xl mb-8'>Oops!</h1>
        <p className='text-4xl mb-8'>404 - Page Not Found!</p>
        <Link to='/'>
          <ButtonPrimary text={'Home'} />
        </Link>
      </div>
    </div>
  )
}

export default NotFound
