import React from 'react'
import heroImage from '/assets/hero.jpg'

const Hero = () => {
    return (
        <div>
            {/* <div className="z-20 absolute inset-0 flex flex-row-reverse justify-center items-center py-10 w-full h-full translate-y-1/2">
                <div className='text-[#414141]'>
                    <div className='flex items-center gap-2'>
                        <span className='bg-[#414141] w-8 md:w-11 h-[2px]'></span>
                        <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                    </div>
                    <h1 className='sm:py-3 font-prata text-3xl lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                    <div className="flex items-center gap-2">
                        <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
                        <span className='bg-[#414141] w-8 md:w-11 h-[1px]'></span>
                    </div>
                </div>
            </div> */}
            {/* Hero right side */}
            {/* absolute inset-0 bg-center  */}
            <div className="">
                <img className='rounded-xl w-full h-full' src={heroImage} alt="" />
            </div>
        </div>
    )
}

export default Hero