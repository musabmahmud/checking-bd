import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category }) => {

    const { products } = useContext(ShopContext);

    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice();

            productsCopy = productsCopy.filter((item) => item.category.name == category);

            setRelated(productsCopy.slice(0, 8));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products])

    return (
        <div className='my-24'>
            <div className="py-2 text-3xl text-center">
                <Title text1={'RELATED'} text2={'PRODUCTS'} />
            </div>
            <div className="gap-4 gap-y-10 md:gap-8 grid grid-cols-2 md:grid-cols-4">
                {related.map((item, index) => (
                    <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} />
                ))}
            </div>
        </div>
    )
}

export default RelatedProducts