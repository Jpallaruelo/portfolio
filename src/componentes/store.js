import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartslice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        // Puedes agregar más reducers aquí según sea necesario
    },
});

export default store;