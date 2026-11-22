import React from 'react'
import { Link ,NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='bg-[#101410] text-[#F5F5EF] px-8 py-5 flex justify-between items-center border-b border-[#252D22]'>
       <NavLink to='/'>
        <h1 className='text-2xl font-bold text-[#C6F15B]'>
            Movie Explorer
        </h1>
        </NavLink>
        <div className="flex gap-8">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/movies'>Movies</NavLink>
            <NavLink to='/favorites'>Favorites</NavLink>
        </div>

    </nav>
  )
}

export default Navbar