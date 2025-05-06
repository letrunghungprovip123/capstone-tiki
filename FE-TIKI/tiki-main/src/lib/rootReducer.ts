import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/login/loginSlice';
import cartReducer from '../features/cart/cartSlice';
const rootReducer = combineReducers({
 
  auth: authReducer,
  cart:cartReducer
});

export default rootReducer;