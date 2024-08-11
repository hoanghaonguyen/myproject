import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Define the initial state for products
const initialState = {
    items: [],
    status: 'start',
    error: null,
}

//URL
const url = "https://66b8b91e3ce57325ac77f323.mockapi.io/product"

//Define the fetchProducts thunk
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get(url);
    return response;
})

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'success';
                state.items = action.payload.data;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
});

//Export the async thunk and the slice reducer
export default productSlice.reducer;