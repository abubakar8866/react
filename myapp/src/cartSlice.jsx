import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("cart")) || [],
  reducers: {

    add(state, action) {
      state.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state));
    },

    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },

    increment(state, action) {
      let item = state.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },

    decrement(state, action) {
      let item = state.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    }
  }
});

export const { add, remove, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;