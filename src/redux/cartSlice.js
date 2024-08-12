import { createSlice } from "@reduxjs/toolkit";

const cart = localStorage.getItem("cart") !== null ?
    JSON.parse(localStorage.getItem("cart")) : [];

const totalPrice = localStorage.getItem("totalPrice") !== null ?
    JSON.parse(localStorage.getItem("totalPrice")) : 0;

const totalQuantity = localStorage.getItem("totalQuantity") !== null ?
    JSON.parse(localStorage.getItem("totalQuantity")): 0;

// Define the initial state for the cart
const initialState = {
  items: cart,
  totalQuantity: totalQuantity,
  totalPrice: totalPrice,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += newItem.price * newItem.quantity;
      } else {
        state.items.push({
          ...newItem,
          totalPrice: newItem.price * newItem.quantity,
        });
      }
      state.totalQuantity += newItem.quantity;
      state.totalPrice += newItem.price * newItem.quantity;

      console.log(state.totalPrice);
      console.log(state.totalQuantity);

      localStorage.setItem("cart", JSON.stringify(state.items));

      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.totalPrice;
        state.items = state.items.filter((item) => item.id !== id);
      }

      localStorage.setItem("cart", JSON.stringify(state.items));

      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
    changeQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.id === productId
      );
      if (quantity > 0) {
        state.items[indexProductId].quantity = quantity;
      } else {
        state.items = state.items.filter((item) => item.id !== productId);
      }
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem("cart", JSON.stringify(state.items));
      state.totalQuantity = 0;
      state.totalPrice = 0;
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
  },
});

// Export the actions and the reducer
export const { addItemToCart, removeItemFromCart, clearCart, changeQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
