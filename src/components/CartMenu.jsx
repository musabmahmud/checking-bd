import React from 'react'

const CartMenu = () => {
    return (
        <div className="right-0 bottom-0 left-0 z-[500] fixed flex flex-row justify-between items-center gap-2 md:hidden bg-gradient-to-t from-gray-50 to-white shadow-lg px-6 py-4 w-full"><a className="flex-1 bg-[#C43882] shadow-lg py-2 rounded-full font-medium text-center text-lg text-white" href="/singleproduct/%E0%A6%86%E0%A6%A8%E0%A6%B0%E0%A7%87%E0%A6%A1%E0%A6%BF%20%E0%A6%87%E0%A6%A8%E0%A7%8D%E0%A6%A1%E0%A6%BF%E0%A7%9F%E0%A6%BE%E0%A6%A8%20%E0%A6%8F%E0%A6%AE%E0%A7%8D%E0%A6%AC%E0%A7%8B%E0%A6%A1%E0%A6%BE%E0%A6%B0%E0%A6%BF-64">এগিয়ে যান</a><button className="flex justify-center items-center bg-[#e0509d] rounded-full w-12 h-12"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="text-white" height="26" width="26" xmlns="http://www.w3.org/2000/svg"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg><span className="top-4 right-5 absolute flex justify-center items-center bg-red-500 rounded-full w-5 h-5 font-semibold text-md text-white">1 </span></button></div>
    )
}

export default CartMenu