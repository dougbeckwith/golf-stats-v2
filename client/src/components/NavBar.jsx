import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  // State And Function Toggle Nav Menu
  const [isFaTimes, setIsFaTimes] = useState(false)
  const toggleIcon = () => {
    setIsFaTimes(!isFaTimes)
  }

  const navLinks = [
    {title: 'Clubs', id: 1, link: '/clubs'},
    {title: 'Login', id: 2, link: '/login'},
    {title: 'Register', id: 3, link: '/register'},
  ]
  const navLinkList = navLinks.map((item) => {
    return (
      <li key={item.id} className=' px-3 font-medium py-10'>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? '  px-3 py-2  rounded-md text-blue-400 '
              : 'text-gray-400  hover:bg-dark-200 hover:text-white px-3 py-2 rounded-md'
          }
          to={item.link}>
          {item.title}
        </NavLink>
      </li>
    )
  })

  return (
    // border-b-2 border-opacity-50 border-gray-200
    <nav className='  w-full h-[90px] bg-dark-400 '>
      <div className='h-full m-auto container flex justify-between items-center'>
        <p className='text-xl sm:text-2xl md:text-3xl  font-semibold text-blue-400'>
          Golf Stats
        </p>
        {/* Desktop Links */}
        <ul className='hidden md:flex'>{navLinkList}</ul>
        <div className='block md:hidden cursor-pointer z-10'>
          {isFaTimes ? (
            <FaTimes onClick={toggleIcon} size={30} color={'gray-200'} />
          ) : (
            <FaBars onClick={toggleIcon} size={30} color={'gray-200'} />
          )}
        </div>
      </div>

      {/* Mobile Links */}
      {isFaTimes && (
        <ul
          onClick={toggleIcon}
          className='absolute md:hidden top-[90px] left-0 w-full h-screen bg-gray-800 flex flex-col items-center'>
          {navLinkList}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
