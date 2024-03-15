import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Array para almacenar los productos en el carrito
    action: null, // Acción realizada en el carrito (add o remove)
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, price } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.action = "add";
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity -= 1;

        if (existingItem.quantity === 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }

      state.action = "remove";
    },

    removeAllFromCart: (state, action) => {
      state.items = [];
      state.action = "removeAll";
    },
    increaseQuantity: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, removeAllFromCart } = cartSlice.actions;
export default cartSlice.reducer;
