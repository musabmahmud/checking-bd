import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollections = () => {

    const { products } = useContext(ShopContext);

    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 20));
    }, [products]);

    return (
        <div className='mt-10'>
            <div className='py-8 text-3xl text-center'>
                <Title text1={'LATEST'} text2={'COLLECTIONS'} />
                <p className='m-auto w-1/2 text-gray-600 text-xs sm:text-sm md:text-base'>✨ নতুন স্টাইলে জ্বলে উঠুন! ✨<br /> আমাদের এক্সক্লুসিভ নতুন কালেকশন এখন উপলব্ধ! আপনার প্রিয় ফ্যাশন স্টাইল খুঁজে নিন আর নিজেকে সাজান অনন্যভাবে। ❤️</p>
            </div>

            {/* Rendering Products  */}

            <div className="gap-4 gap-y-10 md:gap-8 grid grid-cols-2 md:grid-cols-4">
                {
                    latestProducts.map((item, index) => (
                        <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} category={item.category.name} stock={item.stock} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default LatestCollections