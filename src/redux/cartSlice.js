import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        addProductToCart(state, action) {
            const product = action.payload;
            const existingProduct = state.items.find((item) => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                state.items.push({ ...product, quantity: 1 });
            }
        },
        removeProductFromCart(state, action) {
            const id = action.payload;
            const existingProduct = state.items.find((item) => item.id === id);
            if (existingProduct.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingProduct.quantity--;
            }
        },
        clearCart(state) {
            state.items = [];
        },

        setLoading: (state) => {
            state.status = 'loading';
        },

        setError: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },

        setLoaded: (state) => {
            state.status = 'success';
        }
    }
});

export const { addProductToCart, removeProductFromCart, clearCart, setLoading, setError, setLoaded } = cartSlice.actions;
export default cartSlice.reducer;