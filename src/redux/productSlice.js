import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



//Define the initial state for products
const initialState = {
  items: [],
  selectedProduct: null, // to store a single product
  status: "start",
  error: null,
  totalPage: 4,
  currentPage: 1
};

//URL
const url = "https://66b8b91e3ce57325ac77f323.mockapi.io/product";

//Define the fetchProducts thunk
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (page) => {
    const response = await axios.get(`${url}?page=${page}&&limit=6`);
    console.log(response.data);
    return response;
  }
);

//Define fetchProduct by Id
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id) => {
    const response = await axios.get(`${url}/${id}`);
    console.log(response.data);
    return response;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload.data;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(fetchProductById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = "success";
        state.selectedProduct = action.payload.data;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = "failed";
        state.selectedProduct = action.error.message;
      });
  },
});

//Export the async thunk and the slice reducer
export default productSlice.reducer;
