import React, { useState } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoIosGlobe } from 'react-icons/io'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [profileInfo, setProfileInfo] = useState(false)
    return (
        <nav className='bg-white text-black border-4 shadow-sm  text-2xl relative'>
            <div className='flex justify-between items-center px-10 py-7'>
                {/* Logo or Brand Name */}

                <Link to='/'>
                    <div  >
                        <img src={logo} alt="logo" className='w-20 h-20' />
                    </div>

                </Link>

                {/* Hamburger and User Icon */}
                <div className='flex items-center gap-x-2 font-semibold  '>
                    <span>Stays</span>
                    <span>Experience</span>
                </div>

                <Link to='/about'>
                    <span>About</span>
                </Link>



                {/* Right Side Links */}
                <div className='flex items-center gap-x-5 relative'>
                    <Link to='/traveltribehost'>
                    <span>Become a TravelTribe Host</span>
                    </Link>
                    
                    <IoIosGlobe />
                    


                    {/* User and Hamburger on the right side */}
                    <div className='relative'>
                        <div onClick={() => setProfileInfo(!profileInfo)} className='flex items-center gap-x-5 rounded-full border-2 border-sky-500 px-3 py-2 cursor-pointer hover:shadow-lg'>
                            <GiHamburgerMenu />
                            <FaRegUserCircle />
                        </div>

                        {/* Dropdown Menu */}
                        {profileInfo && (
                            <div className='absolute top-full right-0 w-72
                             rounded-md p-4 space-y-4 bg-white mt-2 shadow-md z-10 '>
                                <p className='font-semibold'>Sign-Up</p>
                                <p>Login</p>
                                <Link to='/about'>
                                    <span>About</span>
                                </Link>

                                <hr className='border-2 shadow-2xl' />
                                <p>Become a TravelTribe Host</p>
                                <p>Help Center</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
