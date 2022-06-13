import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  // State And Function Toggle Nav Menu
  const [IsFaTimes, setIsFaTimes] = useState(false)
  const toggleIcon = () => {
    setIsFaTimes(!IsFaTimes)
  }

  const navLinks = [
    {title: 'Clubs', id: 1, link: '/clubs'},
    {title: 'Login', id: 2, link: '/login'},
    {title: 'Register', id: 3, link: '/register'},
  ]
  const navLinkList = navLinks.map((item) => {
    return (
      <li key={item.id} className='px-3 font-medium py-10 text-[#7e7d7d]'>
        <NavLink
          onClick={toggleIcon}
          className={(navData) =>
            navData.isActive
              ? 'text-[#14A76C] text-lg'
              : 'hover:border-b hover:border-[#14A76C] duration-200 text-lg'
          }
          to={item.link}>
          {item.title}
        </NavLink>
      </li>
    )
  })

  return (
    <nav className='w-full h-[90px] bg-[#f6f6f8] border-b border-[#eee] sticky top-0 z-10'>
      <div className='h-full m-auto container flex justify-between items-center px-3 sm:px-0'>
        <div className='text-xl sm:text-2xl md:text-3xl text-black font-bold'>
          <span className='text-[#14A76C]'>Golf</span> Stats
        </div>
        {/* Desktop Links */}
        <ul className='hidden md:flex'>{navLinkList}</ul>
        <div
          className='block md:hidden cursor-pointer z-10'
          onClick={toggleIcon}>
          {IsFaTimes ? (
            <FaTimes size={30} color={'#7e7d7d'} />
          ) : (
            <FaBars size={30} color={'#7e7d7d'} />
          )}
        </div>
      </div>

      {/* Mobile Links */}
      {IsFaTimes && (
        <ul className='absolute md:hidden top-[90px] left-0 w-full h-screen bg-[#f7f7f5] flex flex-col items-center'>
          {navLinkList}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
