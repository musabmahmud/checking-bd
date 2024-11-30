import React from 'react'
import { FaClipboardList, FaHome, FaRegUserCircle } from 'react-icons/fa'
import { PiSquaresFourFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const MobileMenu = () => {
    return (
        <div className="right-0 bottom-0 left-0 z-50 fixed sm:hidden bg-gradient-to-t from-gray-50 to-white shadow-lg border-t w-full">
            <div className="relative flex justify-between items-center px-5 py-3">
                <Link className="flex flex-col items-center group" to="/">
                    <FaHome className="group-hover:text-[#C43882] w-6 h-6 text-[#C43882] transition duration-200 ease-in-out" />
                    <span className="group-hover:text-[#C43882] text-[#C43882] text-xs transition-all duration-500 ease-in-out">Home</span>
                </Link>
                <Link className="flex flex-col items-center mr-10 group" to="/">
                    <FaRegUserCircle className="group-hover:text-[#C43882] w-6 h-6 text-gray-700 transition duration-200 ease-in-out" />
                    <span className="group-hover:text-[#C43882] text-gray-700 text-xs transition-all duration-500 ease-in-out">Profile</span>
                </Link>
                <Link className="flex flex-col items-center ml-10 group" to="/order">
                    <FaClipboardList className="group-hover:text-[#C43882] w-6 h-6 text-gray-700 active:text-[#C43882] transition duration-200 ease-in-out" />
                    <span className="group-hover:text-[#C43882] text-gray-600 text-xs transition duration-200 ease-in-out">Order</span>
                </Link>
                <button className="flex flex-col items-center group">
                    <PiSquaresFourFill className="group-hover:text-[#C43882] w-6 h-6 text-gray-700 active:text-[#C43882] transition duration-200 ease-in-out" />
                    <span className="group-hover:text-[#C43882] text-gray-600 text-xs transition duration-200 ease-in-out">Menu</span>
                </button>
                <button className="bottom-8 left-1/2 absolute flex justify-center items-center border-2 border-gray-200 bg-gray-100 hover:bg-gray-200 shadow-lg hover:shadow-xl rounded-full w-16 h-16 transform transition -translate-x-1/2 duration-300 ease-in-out">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="text-gray-700" height="26" width="26" xmlns="http://www.w3.org/2000/svg"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu