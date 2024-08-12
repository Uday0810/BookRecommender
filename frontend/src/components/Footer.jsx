import React from 'react'
import logo from '../assets/ReadlystLogo.svg'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#508C9B] flex justify-around'>
        <p className='text-[10px] pt-4'><span className='text-[8px] text-gray-900'>©2024</span><span className='font-semibold'>Readlyst</span></p>
        <img src={logo} alt='logo' className='h-12 w-13'></img>
        <div className='space-x-1 pt-2 text-white'>
            <NavLink to='/' className={({isActive})=>
                `' text-xs hover:text-black ${isActive ? 'text-gray-950' : 'text-white'}`
              }>Home</NavLink>
            <NavLink to='/recommend' className={({isActive})=>
                `' text-xs hover:text-black ${isActive ? 'text-gray-950' : 'text-white'}`
              }>Recommend</NavLink>
        </div>
    </div>
  )
}

export default Footer