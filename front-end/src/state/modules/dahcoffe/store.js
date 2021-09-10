import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { productListReducer, productDetailReducer, updateProductReducer, createProductReducer, deleteProductReducer, createReviewReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducer';
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateReducer } from './reducers/userReducers';
import { orderCreateReducer, orderDetailReducer, orderListMyReducer, orderListReducer } from './reducers/orderReducer';
import { categoryDetailReducer, categoryListReducer, createCategoryReducer, deleteCategoryReducer, updateCategoryReducer } from './reducers/categoryReducer';

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailReducer,
    productDelete: deleteProductReducer,
    productCreate: createProductReducer,
    productUpdate: updateProductReducer,
    productReview: createReviewReducer,

    cart: cartReducer,

    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateReducer,

    orderCreate: orderCreateReducer,
    oderDetails: orderDetailReducer,
    orderMyList: orderListMyReducer,
    orderList: orderListReducer,

    categoryList: categoryListReducer,
    categoryDetail: categoryDetailReducer,
    categoryDelete: deleteCategoryReducer,
    categoryCreate: createCategoryReducer,
    categoryUpdate: updateCategoryReducer
});

const cartItemsFromStorage = sessionStorage.getItem('cartItems') ? JSON.parse(sessionStorage.getItem('cartItems')) : [];

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const shippingAddressFromStorage = sessionStorage.getItem('shippingAddress') ? JSON.parse(sessionStorage.getItem('shippingAddress')) : {};

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage
    },
    userLogin: { userInfo: userInfoFromStorage }
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;