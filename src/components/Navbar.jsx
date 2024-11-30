
import { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets'
import logo from '/assets/logo/logo.png';
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from '../context/ShopContext';
const Navbar = () => {

    const [visible, setVisible] = useState(false);
    const [cartMenu, setCartMenu] = useState(false);
    const [count, setCount] = useState(0);



    const { showSearch, setShowSearch, cartItems } = useContext(ShopContext);

    useEffect(() => {
        const totalCount = Object.keys(cartItems).length;
        setCount(totalCount);
    }, [cartItems]);

    return (
        <nav className='flex justify-between items-center py-5 font-medium'>

            {/* logo  */}
            <Link to='/'><img src={logo} className='w-36' alt="Logo" />
            </Link>
            {/* Nav Items  */}
            <ul className='sm:flex gap-5 hidden text-gray-500 text-sm'>
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
            </ul>

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
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                    <span className='right-[-5px] bottom-[-5px] absolute bg-black rounded-full w-4 text-[8px] text-center text-white leading-4 aspect-square'>{count}</span>
                </Link>
                {/* sidebar menu  */}
                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='sm:hidden w-5 cursor-pointer' alt="" />
            </div>

            {/* Navbar Menu  */}
            {/* <div className={`absolute inset-0 z-50 bg-white transition-all w-full h-full ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='flex flex-col p-4 text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-3 p-3 cursor-pointer'>
                        <img src={assets.cross_icon} className="h-4" alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='border-y py-2 pl-6' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b' to='/collections'>COLLECTIONS</NavLink>

                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b' to='/about'>ABOUT</NavLink>

                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b' to='/contact'>CONTACT</NavLink>
                </div>
            </div> */}

            {/* Cart Items Views  */}
            {/* <div className={`absolute inset-0 lg:w-96 overflow-hidden z-50 bg-white transition-all w-full h-full ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='flex flex-col p-5 text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-3 p-3 cursor-pointer'>
                        <img src={assets.cross_icon} className="h-4" alt="" />
                        <p>Back</p>
                    </div>
                    <div className="flex flex-col gap-10 pt-5">
                        <NavLink onClick={() => setVisible(false)} className='nav-link-sm' to='/'>HOME</NavLink>
                        <NavLink onClick={() => setVisible(false)} className='nav-link-sm' to='/collections'>COLLECTIONS</NavLink>

                        <NavLink onClick={() => setVisible(false)} className='nav-link-sm' to='/about'>ABOUT</NavLink>

                        <NavLink onClick={() => setVisible(false)} className='nav-link-sm' to='/contact'>CONTACT</NavLink>
                    </div>
                </div>
            </div>
            <div className={`absolute inset-0 overflow-hidden z-50 bg-white transition-all w-full h-full ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='flex flex-col p-5 text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-3 p-3 cursor-pointer'>
                        <img src={assets.cross_icon} className="h-4" alt="" />
                        <p>Back</p>
                    </div>
                    <div className="flex flex-col gap-10 pt-5">
                        <NavLink onClick={() => setVisible(false)} className='nav-link-sm' to='/'>HOME</NavLink>
                        <NavLink onClick={() => setVisible(false)} className='nav-link-sm' to='/collections'>COLLECTIONS</NavLink>

                        <NavLink onClick={() => setVisible(false)} className='nav-link-sm' to='/about'>ABOUT</NavLink>

                        <NavLink onClick={() => setVisible(false)} className='nav-link-sm' to='/contact'>CONTACT</NavLink>
                    </div>
                </div>
            </div> */}

        </nav>
    )
}

export default Navbar