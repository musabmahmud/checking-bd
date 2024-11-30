import React from 'react'

import NewsLetter from '../components/NewsLetter'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
    return (
        <div className='pt-8 border-t'>
            <div className="text-2xl text-center">
                <Title text1={'CONTACT'} text2={'US'} />
            </div>
            <div className="my-10 flex flex-col md:flex-row gap-16 items-center justify-center w-10/12 mx-auto">
                <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
                <div className="md:w-2/4">
                    <div className='flex flex-col gap-2 text-gray-600 items-start'>
                        <h1 className='text-3xl text-gray-800 mb-2'>Our Store</h1>
                        <p className='text-sm text-justify'><b>Address:</b> 54709 Willms Station
                            Suite 350, Washington, USA</p>
                        <a href='callto:+8801613591444' className='text-sm text-justify'><b>Tel:</b> (880) 161-3591444</a>
                        <a href='emailto:md.musabmahmud100@gmail.com' className='text-sm text-justify'><b>Email:</b> md.musabmahmud100@gmail.com</a>
                        <h1 className='text-3xl text-gray-800 my-2'>Careers at Forever</h1>
                        <p className='text-sm text-justify'>Learn more about our teams and job openings.</p>
                    </div>
                    <button className='bg-white text-gray-800 hover:bg-black border rounded  text-sm my-8 px-8 py-3 capitalize text-center hover:text-white transition duration-500 ease-in-out'>Explore Jobs</button>
                </div>
            </div>
            <NewsLetter />
        </div>
    )
}

export default Contact