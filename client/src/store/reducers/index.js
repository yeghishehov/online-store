import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productsReducer from './productsReducer';
import ordersReducer from './ordersReducer';

export default combineReducers({
  user: userReducer,
  products: productsReducer,
  orders: ordersReducer,
});
