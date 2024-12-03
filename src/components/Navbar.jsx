
import { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets'
import logo from '/assets/logo/logo.png';
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from '../context/ShopContext';
import MobileMenu from './MobileMenu';
import CartMenu from './CartMenu';
import MobileBottomMenu from './MobileBottomMenu';
const Navbar = () => {

    const [visible, setVisible] = useState(false);

    const { showSearch, setShowSearch, cartItems, totalQuantity, setCartMenu, cartMenu } = useContext(ShopContext);

    return (
        <nav className='flex justify-between items-center py-5 font-medium'>

            {/* logo  */}
            <Link to='/'><img src={logo} className='w-36' alt="Logo" />
            </Link>
            {/* Nav Items  */}
            <div className='sm:flex gap-5 hidden text-gray-500 text-sm'>
                <NavLink to="/" className="flex flex-col items-center gap-1">
                    <p>HOME</p>
                    <hr className='hidden bg-gray-500 border-none w-2/4 h-[1.5px]' />
                </NavLink>

                <NavLink to="/collections" className="flex flex-col items-center gap-1">
                    <p>COLLECTIONS</p>
                    <hr className='hidden bg-gray-500 border-none w-2/4 h-[1.5px]' />
                </NavLink>

                <NavLink to="/about" className="flex flex-col items-center gap-1">
                    <p>ABOUT</p>
                    <hr className='hidden bg-gray-500 border-none w-2/4 h-[1.5px]' />
                </NavLink>

                <NavLink to="/contact" className="flex flex-col items-center gap-1">
                    <p>CONTACT</p>
                    <hr className='hidden bg-gray-500 border-none w-2/4 h-[1.5px]' />
                </NavLink>
            </div>

            <div className='flex items-center gap-6'>

                {/* search bar */}
                <img onClick={() => setShowSearch(!showSearch)} src={assets.search_icon} alt="search" className='w-5 cursor-pointer' />

                {/* dropdown menu for profile and logout  */}

                <div className='relative group'>
                    <Link to='/login'>
                        <img src={assets.profile_icon} alt="" className='w-5 cursor-pointer' />
                    </Link>
                    <div className='group-hover:block right-0 absolute hidden pt-4 dropdown-menu'>
                        <div className='flex flex-col gap-2 bg-slate-100 px-5 py-3 rounded w-36 text-gray-500'>
                            <Link className='hover:text-black'>My Profile</Link>
                            <Link to='/orders' className='hover:text-black'>Orders</Link>
                            <Link className='hover:text-black'>Logout</Link>
                        </div>
                    </div>
                </div>

                {/* shopping cart  */}
                <div onClick={() => setCartMenu(true)} className='sm:block relative hidden cursor-pointer'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                    <span className={`inline-flex top-3 -right-3 absolute justify-center items-center bg-sky-400 rounded-full w-5 h-5 font-semibold text-md text-white ${totalQuantity > 0 && 'animate-ping'}`}></span>
                    <span className="top-3 -right-3 absolute flex justify-center items-center bg-black rounded-full w-5 h-5 text-white text-xs">{totalQuantity}</span>
                    {/* <span className='right-[-5px] bottom-[-5px] absolute bg-black rounded-full w-4 text-[8px] text-center text-white leading-4 aspect-square'>{totalQuantity}</span> */}
                </div>
                {/* sidebar menu  */}
                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='sm:hidden w-5 cursor-pointer' alt="" />
            </div>

            {/* sidebar Menu*/}
            <div className={`top-0 bottom-0 z-50 bg-white absolute transition-all sm:hidden duration-1000 w-full h-full ${visible ? 'translate-x-0 left-0 right-0' : 'translate-x-full'}`}>
                <MobileBottomMenu setVisible={setVisible} />
            </div>


            {/* Cart Menu  */}
            <div className={`absolute top-0 -right-[100px] pr-[100px]
                z-50 bg-white w-[400px] h-full ${cartMenu ? 'block' : 'hidden'}`}>
                <CartMenu setCartMenu={setCartMenu} />
            </div>

        </nav>
    )
}

export default Navbar