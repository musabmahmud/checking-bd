import { createSlice } from "@reduxjs/toolkit";

const items =
    localStorage.getItem("cartItems") !== null
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];

const initialState = {
    cartItems: items,
    quantity: 0,
    cartTotal: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {

            const { productId, quantity } = action.payload;
            const indexProductId = (state.cartItems).findIndex(p => p.productId === productId);

            if (indexProductId >= 0) {
                state.cartItems[indexProductId].quantity = quantity;
            }
            else {
                state.cartItems.push(action.payload);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(
                item => item.id !== action.payload.productId
            )
            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        clearCart(state, action) {
            state.cartItems = []
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
    }
})

export const { addToCart, removeFromCart, clearCart, getTotal, getCartItems } = cartSlice.actions;

export default cartSlice.reducer;