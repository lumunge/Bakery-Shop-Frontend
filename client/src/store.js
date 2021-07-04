import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './Reducers/cartReducer';
import { orderReducer } from './Reducers/orderReducer';
import { productReducer } from './Reducers/productReducer';
import { maillistReducer } from './Reducers/maillistReducer';

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        products: productReducer,
        cart: cartReducer,
        order: orderReducer,
        mail: maillistReducer
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);
export default store; 