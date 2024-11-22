import React, { useState } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoIosGlobe } from 'react-icons/io'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [profileInfo, setProfileInfo] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="bg-white text-black border-b shadow-sm text-xl relative">
            <div className="flex justify-between items-center px-5 py-4 md:px-10">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="logo" className="w-16 h-16 md:w-20 md:h-20" />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-x-5 font-semibold">
                    
                    <Link to="/about">About</Link>
                    <Link to="/traveltribehost" className="hidden md:block">
                        Become a TravelTribe Host
                    </Link>
                </div>

                {/* Right Side Links */}
                <div className="flex items-center gap-x-5 relative">
                    

                    <IoIosGlobe className="hidden md:block" />

                    {/* Mobile Hamburger Menu */}
                    <div className="md:hidden">
                        <GiHamburgerMenu 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="cursor-pointer text-2xl"
                        />
                    </div>

                    {/* Profile Dropdown */}
                    <div className="relative hidden md:block">
                        <div
                            onClick={() => setProfileInfo(!profileInfo)}
                            className="flex items-center gap-x-2 rounded-full border-2 border-sky-500 px-3 py-2 cursor-pointer hover:shadow-lg"
                        >
                            <GiHamburgerMenu />
                            <FaRegUserCircle />
                        </div>

                        {/* Dropdown Menu */}
                        {profileInfo && (
                            <div className="absolute top-full right-0 w-64 rounded-md p-4 space-y-4 bg-white mt-2 shadow-md z-10 flex flex-col">
                                <div>

                                </div>
                                <Link to="/signup" className="font-semibold">Sign-Up</Link>
                                <Link to="/login">Login</Link>
                                <Link to="/about">About</Link>
                                <hr className="border-2 shadow-lg" />
                                <Link to="/traveltribehost">Become a TravelTribe Host</Link>
                                <p>Help Center</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg p-5 z-20">
                    <Link to="/about" className="block py-2">About</Link>
                    <Link to="/traveltribehost" className="block py-2">Become a TravelTribe Host</Link>
                    <p className="py-2">Help Center</p>
                </div>
            )}
        </nav>
    )
}

export default Navbar
