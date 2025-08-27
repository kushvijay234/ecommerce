import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
};

const cartSlice = createSlice( {
  name: "cart",
  initialState,
  reducers : {
    addToCart: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id ===action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItem[itemIndex].quantity += 1;
    }
    else {
      state.cartItem.push({...action.payload, quantity: 1})
    }
  },
    removeFromCart: (state, action) => {
      const nextCartItems = state.cartItem.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItem = nextCartItems;
    },
    decreaseCart: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (state.cartItem[itemIndex].quantity > 1) {
        state.cartItem[itemIndex].quantity -= 1;
      } else if (state.cartItem[itemIndex].quantity === 1) {
        const nextCartItems = state.cartItem.filter(
          (cartItem) => cartItem.id !== action.payload
        );
        state.cartItem = nextCartItems;
      }
    },
    clearCart: (state) => {
      state.cartItem = [];
    },
  },
});

export const { addToCart, removeFromCart, decreaseCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;