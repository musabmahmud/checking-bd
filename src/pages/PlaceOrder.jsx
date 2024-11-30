import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
    
    const navigate = useNavigate();

    const [method, setMethod] = useState('cod');

    return (
        <div className='flex flex-col sm:flex-row justify-between gap-20 pt-5 sm:pt-14 min-h-[80vh] border-t'>
            {/* Left Side  */}
            <div className="flex flex-col gap-4 w-full sm:max-w-[580px]">
                <div className="text-xl sm:text-2xl my-3">
                    <Title text1={'DELIVERY'} text2={'INFORMATION'} />
                </div>
                <div className="flex gap-3">
                    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" name="" id="" placeholder='First Name' />
                    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" name="" id="" placeholder='Last Name' />
                </div>
                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" name="" id="" placeholder='Email Address' />
                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" name="" id="" placeholder='Address' />
                <div className="flex gap-3">
                    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" name="" id="" placeholder='City' />
                    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" name="" id="" placeholder='State' />
                </div>
                <div className="flex gap-3">
                    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" name="" id="" placeholder='Zipcode' />
                    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" name="" id="" placeholder='Country' />
                </div>
                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" name="" id="" placeholder='Phone' />
            </div>
            {/* Right Side  */}
            <div className="mt-8 w-full">
                <div className="mt-8">
                    <CartTotal />
                </div>
                <div className="mt-12">
                    <Title text1={'PAYMENT'} text2={'METHOD'} />
                    {/* Payment Method Selection  */}
                    <div className="flex gap-3 flex-col xl:flex-row">
                        <div onClick={() => setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer w-full">
                            <span className={`min-w-3.5 h-3.5 border rounded-full ${method == 'stripe' ? 'bg-green-500' : ''}`}></span>
                            <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
                        </div>
                        <div onClick={() => setMethod('razor')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer w-full">
                            <span className={`min-w-3.5 h-3.5 border rounded-full ${method == 'razor' ? 'bg-green-500' : ''}`}></span>
                            <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
                        </div>
                        <div onClick={() => setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer w-full">
                            <span className={`min-w-3.5 h-3.5 border rounded-full ${method == 'cod' ? 'bg-green-500' : ''}`}></span>
                            <span className='text-gray-400
                            mx-4 text-sm font-medium'>Cash On Delivery</span>
                        </div>
                    </div>
                    <div className="w-full text-end mt-8">
                        <button onClick={() => navigate('/orders')} className='bg-black text-white text-sm my-8 px-8 py-3 rounded'>PLACE ORDER</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrder