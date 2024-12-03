import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
const CartMenu = ({ setCartMenu }) => {

    const { currency, totalQuantity, cartItems, cartMenu } = useContext(ShopContext);

    return (
        <div className='flex flex-col p-4 text-gray-600'>
            <div onClick={() => setCartMenu(false)} className='flex justify-between items-center gap-3 p-3 cursor-pointer'>
                <p>Your Cart</p>
                <img src={assets.cross_icon} className="h-4" alt="" />
            </div>
            {/* Products  */}
            {cartItems.map((item, index) => {
                <div key={index}>{item}{console.log(item)}</div>
            })}

        </div>
    )
}

export default CartMenu