import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import { ToastContainer, toast } from 'react-toastify';
import { FaMinus, FaPlus } from 'react-icons/fa';
import CartMenu from '../components/CartMenu';

const Product = () => {

    const { productId } = useParams();

    const { products, currency } = useContext(ShopContext);

    const [singleProduct, setsingleProduct] = useState(false);

    const [category, setCategory] = useState('');

    const [imageFly, setimageFly] = useState(false);

    const [quantity, setQuantity] = useState(100);

    const decrement = () => {
        quantity > 1 ? setQuantity(quantity - 1) :
            console.log(quantity);
    }

    const increment = () => {
        setQuantity(quantity + 1);
        console.log(quantity);
    }

    const fetchData = async () => {
        let selectedItem = products.find(p => p.id == productId);

        setsingleProduct(selectedItem);
        window.scrollTo({ top: 100, behavior: 'smooth' });
    }

    useEffect(() => {
        fetchData();
        window.scrollTo({ top: 50, behavior: 'smooth' });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products, productId]);


    const addToCart = () => {
        setimageFly(false);
        requestAnimationFrame(() => {
            setimageFly(true); // Trigger animation
        });
    }

    return singleProduct ? (
        <div className='relative pt-10 border-t-2 transition-opacity duration-500 ease-in'>
            <img src={`http://admin.glorebd.com/public/storage/product/${singleProduct.image}`} className={`absolute opacity-0 left-[20%] w-[100px] h-[100px] top-[300px] ${imageFly && 'flying-div'}`} onAnimationEnd={() => setimageFly(false)} alt={singleProduct.name} />
            <div className='absolute lg:flying-div hidden' >
                <img src={`http://admin.glorebd.com/public/storage/product/${singleProduct.image}`} className='w-[100px] h-[100px]' alt={singleProduct.name} />
            </div>
            <div className="flex sm:flex-row flex-col gap-12">
                {/* product image */}
                <div className="flex sm:flex-row flex-col-reverse flex-1 gap-3">
                    <div className='w-full'>
                        <img src={`http://admin.glorebd.com/public/storage/product/${singleProduct.image}`} className='rounded w-full h-auto' alt={singleProduct.name} />
                    </div>
                </div>

                {/* product info  */}
                <div className='flex-1'>
                    <h1 className='mt-2 font-bold text-xl lg:text-3xl'>{singleProduct.name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        <img src={assets.star_icon} alt={`${singleProduct.name} ratings`} className='w-3 5' />
                        <img src={assets.star_icon} alt={`${singleProduct.name} ratings`} className='w-3 5' />
                        <img src={assets.star_icon} alt={`${singleProduct.name} ratings`} className='w-3 5' />
                        <img src={assets.star_icon} alt={`${singleProduct.name} ratings`} className='w-3 5' />
                        <img src={assets.star_dull_icon} alt={`${singleProduct.name} ratings`} className='w-3 5' />
                        <p className="pl-2">(122)</p>
                    </div>
                    <p className='mt-5 font-medium text-3xl'>{currency} {singleProduct.price}</p>
                    <p className='mt-5 w-4/5 text-gray-500 text-justify'>Category : {singleProduct.category.name}</p>
                    <div className="flex items-center gap-2 py-5">
                        <p>Quantity : </p>
                        <div className="flex items-center">
                            <button type="button" onClick={decrement} className="border-gray-300 bg-gray-100 focus:bg-black p-3 border rounded-s-lg h-11 focus:outline-none gap-4 focus:text-white">
                                <FaMinus />
                            </button>
                            <span className="block border-gray-300 bg-gray-100 py-3 w-20 h-11 font-bold text-black text-center">{quantity}</span>
                            <button type="button" onClick={increment} className="border-gray-300 bg-gray-100 focus:bg-black p-3 border rounded-r-lg h-11 focus:text-white focus:outline-none">
                                <FaPlus />
                            </button>
                        </div>
                    </div>
                    {singleProduct.stock > 0 ?
                        <div>
                            <p className='mb-5'>In Stock : <span className='font-bold'>{singleProduct.stock}</span></p>
                            <button onClick={() => addToCart(singleProduct.unique_id)} className='block bg-black active:bg-gray-700 px-8 py-3 rounded w-full font-bold text-sm text-white'>
                                কিনতে চাই</button>
                        </div>

                        : <p className='py-8 text-gray-500'>Out of Stock...</p>
                    }
                    <hr className="mt-8 sm:w-4/5" />
                    <div className="flex flex-col gap-1 mt-5 text-gray-500 text-sm">
                        <p>100% Original Product.</p>
                        <p>Cash on delivery is available on this product</p>
                        <p>Easy return and exchange policy within 7 days</p>
                    </div>
                </div>
            </div>
            {/* description */}
            <div className="mt-20">
                <div className="flex">
                    <b className="px-5 py-3 border text-sm">Description</b>
                    <p className='px-5 py-3 border text-sm'>Reviews (122)</p>
                </div>
                <div className="flex flex-col gap-4 p-6 border text-gray-500 text-sm">
                    <p>{singleProduct.short_desc}</p>
                </div>
            </div>

            {/* display related products */}

            <RelatedProducts category={singleProduct.category.name} />
            <CartMenu />
        </div >
    )
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

export default Product