import React from 'react'
import { FaFacebook, FaGlobe, FaInstagram, FaTwitter } from 'react-icons/fa6'

const BottomFooter = () => {
    return (
        <div className='flex justify-between items-center mt-4'>
            <div className='flex gap-x-8 items-center'>
                <p> © 2024 Airbnb, Inc.</p>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">SiteMap</a>
            </div>
            <div className='flex gap-x-4 items-center'>
                <div className='flex gap-2 items-center'>
                    <a href="#"><FaGlobe className='text-xl' /> </a>
                    <a href="#"><span className='text-xl'>English(AE)</span></a>
                </div>
                <div className='flex items-center gap-2 text-xl'>
                <a href='#' className='font-semibold'>$ </a>
                <a href="#">AUD</a>
                </div>
                <div className='flex gap-4 items-center text-xl'>
                    <a href="#"><FaFacebook /> </a>
                    <a href="#"><FaTwitter/></a>
                    <a href="#"><FaInstagram/></a>
                </div>

            </div>
        </div>
    )
}

export default BottomFooter
