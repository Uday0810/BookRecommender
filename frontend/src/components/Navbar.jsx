import React from 'react'
import logo from '../assets/ReadlystLogo.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className=' w-full bg-[#508C9B] h-16 flex justify-between mb-5'>
            <div>
              <img src={logo} alt="logo" className=' h-13 w-20 my-2 pl-5 lg:pl-10 lg:h-12 lg:w-24'/>
            </div>
            <div className='space-x-2 p-4 text-white lg:space-x-5'>
              <NavLink to='/' className={({isActive})=>
                ` text-xs lg:text-sm ${isActive ? 'text-gray-950' : 'text-white'}`
              }>Home</NavLink>
              <NavLink to='/recommend' className={({isActive})=>
                `'pr-2 text-xs lg:pr-10 lg:text-sm ${isActive ? 'text-gray-950' : 'text-white'}`
              }>Recommend</NavLink>
            </div>
        </div>
    </>
  )
}

export default Navbar