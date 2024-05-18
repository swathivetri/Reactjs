import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/CartSlice';
import productsReducer from './features/products/ProductsSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

export default store;
