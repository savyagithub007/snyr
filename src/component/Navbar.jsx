import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full flex justify-between'>
        <h2 className='text-[2vw]'>SnyR</h2>
        <ul className='flex gap-[20px]'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/design'>Designs</Link>
            <Link to='/shop'>Shop</Link>
        </ul>
    </div>
  )
}

export default Navbar
