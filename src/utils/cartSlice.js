import { createSlice } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
const cartslice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items.length = 0; //Make empty [] array
    },
  },
});

export const { addItem, removeItem, clearCart } = cartslice.actions;
export default cartslice.reducer;
