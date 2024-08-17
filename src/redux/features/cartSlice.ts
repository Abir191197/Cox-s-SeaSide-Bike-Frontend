import { createSlice } from "@reduxjs/toolkit";


// Define a type for the slice state
interface cartState {
  value: number;
}

// Define the initial state using that type
const initialState: cartState = {
  value: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    
  },
});

export const { increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
