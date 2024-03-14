import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Array para almacenar los productos en el carrito
    },
    reducers: {
        addToCart: (state, action) => {
            const { id, price } = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }

            console.log("Se ha añadido al carrito:", action.payload);
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity -= 1;

                if (existingItem.quantity === 0) {
                    state.items = state.items.filter(item => item.id !== id);
                }
            }
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;