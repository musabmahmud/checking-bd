import React, { createContext, useEffect, useState } from 'react'
import { AxiosContext } from 'react-axios/lib/components/AxiosProvider';
import axios from 'axios';
import { products } from '../assets/assets';
import { Bounce, toast } from 'react-toastify';
import { AxiosProvider } from 'react-axios';
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems } from '../stores/cart';

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {

    const dispatch = useDispatch();

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

    const delivery_fee_Inside = 60;
    const delivery_fee_Outside = 120;

    const [search, setSearch] = useState('');

    const [showSearch, setShowSearch] = useState(false);

    const [totalQuantity, setTotalQuantity] = useState(0);



    const [cartMenu, setCartMenu] = useState(false);


    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;

    useEffect(() => {
        let subQuantity = 0;
        cartItems.forEach(item => subQuantity += item.quantity);
        setTotalQuantity(subQuantity);
    }, [cartItems]);



    const value = {
        isLoading, products, currency, delivery_fee_Inside, delivery_fee_Outside, search, setSearch, showSearch, setShowSearch, cartItems, totalQuantity, setCartMenu, cartMenu, categories
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}