import React from 'react';
import { FaFacebook, FaGlobe, FaInstagram, FaTwitter } from 'react-icons/fa6';

const BottomFooter = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 px-4 md:px-8 space-y-4 md:space-y-0">
            {/* Left Section */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-x-8 items-center text-sm md:text-base">
                <p>© 2024 Airbnb, Inc.</p>
                <a href="#" className="hover:underline">Privacy</a>
                <a href="#" className="hover:underline">Terms</a>
                <a href="#" className="hover:underline">SiteMap</a>
            </div>

            {/* Right Section */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-x-6 items-center text-sm md:text-base">
                {/* Language Selector */}
                <div className="flex gap-2 items-center">
                    <a href="#"><FaGlobe className="text-lg md:text-xl" /></a>
                    <a href="#"><span className="text-sm md:text-base">English (AE)</span></a>
                </div>
                {/* Currency Selector */}
                <div className="flex items-center gap-2">
                    <a href="#" className="font-semibold text-sm md:text-base">$</a>
                    <a href="#" className="text-sm md:text-base">AUD</a>
                </div>
                {/* Social Media Links */}
                <div className="flex gap-3 items-center">
                    <a href="#"><FaFacebook className="text-lg md:text-xl" /></a>
                    <a href="#"><FaTwitter className="text-lg md:text-xl" /></a>
                    <a href="#"><FaInstagram className="text-lg md:text-xl" /></a>
                </div>
            </div>
        </div>
    );
};

export default BottomFooter;
