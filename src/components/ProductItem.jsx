import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';
import slugify from 'react-slugify';

const ProductItem = ({ id, image, name, price }) => {

    const { loading, currency } = useContext(ShopContext);

    return !loading ? (
        <Link to={`/product/${id}`} className='shadow-sm rounded-md'>
            <div className="overflow-hidden">
                <img loading="lazy" className='rounded-t-md hover:scale-110 transition ease-in-out' src={`http://admin.glorebd.com/public/storage/product/${image}`} alt={name} />
            </div>
            <div className='flex flex-col justify-between mx-auto p-3'>
                <p className="font-bold text-gray-500">{name}</p>
                <p className='text-right font-semibold text-pink'>{currency}{price}</p>
            </div>
        </Link>)
        :
        (<div className="flex sm:flex-row flex-col gap-12 border-gray-300 mx-auto px-4 py-[100px] border rounded animate-pulse">
            <div className="bg-slate-200 p-4 rounded sm:w-1/2"></div>
            <div className="flex-1 space-y-6 py-1 sm:w-1/2">
                <div className="bg-slate-200 rounded h-40"></div>
                <div className="space-y-3">
                    <div className="gap-4 grid grid-cols-3">
                        <div className="col-span-2 bg-slate-200 rounded h-20"></div>
                        <div className="col-span-1 bg-slate-200 rounded h-20"></div>
                    </div>
                    <div className="bg-slate-200 rounded h-40"></div>
                </div>
            </div>
        </div>)
}

export default ProductItem