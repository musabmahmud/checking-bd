import React from 'react'
import { assets } from '../assets/assets'

import logoFooter from '/assets/logo/logo2.png';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {

    const d = new Date();
    let year = d.getFullYear();

    return (
        <div className='bg-black'>
            <div className='justify-center items-center mx-auto px-2 lg:px-0 pt-[100px] pb-[100px] lg:pb-0 text-white container'>
                <div className="lg:flex justify-between lg:gap-8 space-y-10 lg:space-y-0 pb-10">
                    <div>
                        <Link to='/'>
                            <img src={logoFooter} alt="logo" className='w-40' />
                        </Link>
                    </div>
                    <div>
                        <p className="mb-5 font-medium text-xl">
                            Explore More
                        </p>
                        <ul className="flex flex-col gap-1 text-gray-400">
                            <li>New Arrivals</li>
                            <li>Best Sellers</li>
                            <li>Sale</li>
                        </ul>
                    </div>
                    <div>
                        <p className="mb-5 font-medium text-xl">
                            Client Experience
                        </p>
                        <ul className="flex flex-col gap-1 text-gray-400">
                            <li>Track Your Order</li>
                            <li>Returns & Exchanges</li>
                            <li>Customer Reviews</li>
                            <li>Privacy Policy</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div>
                        <p className='mb-5 font-medium text-xl'>GET IN TOUCH</p>
                        <ul className="flex flex-col gap-1 mb-5 text-gray-400">
                            <li><span>Phone:</span> +88-1111111</li>
                            <li><span>Email:</span> xyz@gmail.com</li>
                        </ul>
                        <div className="flex items-center gap-8 text-3xl">
                            <FaFacebook />
                            <FaTwitter />
                            <FaInstagram />
                        </div>
                    </div>
                </div>
                <div>
                    <hr />
                    <p className="py-5 text-center">
                        Copyright - {year}  &copy; All right reserved. Designed and Developed by <Link to='https://expressitbd.net' target='_Blank'>ExpressITbd</Link> Team
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer