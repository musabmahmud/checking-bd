import React, { useState } from 'react'

const Login = () => {

    const [currentState, setCurrentState] = useState('login');


    return (
        <div>
            <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
                <div className="inline-flex items-center gap-2 mb-2 mt-10">
                    <p className='font-prata text-3xl capitalize'>{currentState}</p>
                    <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
                </div>
                {currentState == 'sign up' ?
                    <>
                        < input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />
                        <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
                        <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />
                        <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Re-Type Password' required />
                        <div className="w-full flex justify-between text-sm mt-[8px]">
                            <p>Forgot your Password?</p>
                            <p onClick={() => setCurrentState('login')} className='cursor-pointer'>Login Here</p>
                        </div>
                        <button className='bg-black text-white text-sm my-8 px-8 py-3 rounded capitalize text-center'>{currentState}</button>
                    </> :
                    <>
                        <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
                        <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />
                        <div className="w-full flex justify-between text-sm mt-[8px]">
                            <p>Forgot your Password?</p>
                            <p onClick={() => setCurrentState('sign up')} className='cursor-pointer'>Sign Up</p>
                        </div>
                        <button className='bg-black text-white text-sm my-8 px-8 py-3 rounded capitalize text-center justify-center'>{currentState}</button>
                    </>
                }
            </form >
        </div >
    )
}

export default Login