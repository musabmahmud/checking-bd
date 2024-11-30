import React, { createContext, useEffect, useState } from 'react'
import { AxiosContext } from 'react-axios/lib/components/AxiosProvider';
import axios from 'axios';
import { products } from '../assets/assets';
import { Bounce, toast } from 'react-toastify';
import { AxiosProvider } from 'react-axios';

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {

    const [isLoading, setIsLoading] = useState(true);

    const productAPI = "https://admin.glorebd.com/api/all/product/get";

    const categoriAPI = "https://admin.glorebd.com/api/all/category/get";

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(productAPI);
                setProducts(response.data.data.data);
                setIsLoading(false);

            } catch (error) {
                console.log("Error Fetching Data", error);
            }
        }

        fetchData();
    }, [productAPI])


    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await axios.get(categoriAPI);
                setCategories(response.data.data);

            } catch (error) {
                console.log("Error Fetching Data", error);
            }
        }
        fetchCategory();
    }, [categoriAPI])


    const currency = '৳';

    const delivery_fee = 60;

    const [search, setSearch] = useState('');

    const [showSearch, setShowSearch] = useState(false);

    const [cartItems, setCartItems] = useState({});


    const addToCart = async (itemId) => {

        // if (!size) {
        //     toast.error('Please select the product size!', {
        //         position: "top-right",
        //         autoClose: 2000,
        //         theme: "light",
        //         transition: Bounce,
        //     });
        //     return;
        // }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId]) {
                cartData[itemId] += 1;
            }
            else {
                cartData[itemId] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId] = 1;
        }

        toast.success('Added to cart, Successfully', {
            position: "top-right",
            autoClose: 2000,
            theme: "light",
            transition: Bounce,
        });


        setCartItems(cartData);
    }

    // useEffect(() => {
    //     // const count = Object.keys(cartItems).length;
    // }, [cartItems]);

    const updateQuantity = async (itemId, quantity) => {
        let cartData = structuredClone(cartItems);

        cartData[itemId] = quantity;

        setCartItems(cartData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                }
                catch (error) {
                    console.log(error);
                }
            }
        }
        return totalAmount;
    }



    const value = {
        isLoading, products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch, addToCart, cartItems, updateQuantity, getCartAmount, categories, setCategories
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}