import { ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_CREATE_FAIL, ORDER_DETAIL_REQUEST, ORDER_DETAIL_SUCCESS, ORDER_DETAIL_FAIL, ORDER_MY_LIST_REQUEST, ORDER_MY_LIST_SUCCESS, ORDER_MY_LIST_FAIL, ORDER_MY_LIST_RESET, ORDER_LIST_FAIL, ORDER_LIST_SUCCESS, ORDER_LIST_REQUEST } from '../constants/orderConstant';

export const orderCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_CREATE_REQUEST:
            return {
                loading: true
            };
        case ORDER_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                order: action.payload
            };
        case ORDER_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export const orderDetailReducer = (state = { order: [] }, action) => {
    switch (action.type) {
        case ORDER_DETAIL_REQUEST:
            return {
                ...state,
                loading: true
            };
        case ORDER_DETAIL_SUCCESS:
            return {
                loading: false,
                order: action.payload
            };
        case ORDER_DETAIL_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export const orderListMyReducer = (state = { order: [] }, action) => {
    switch (action.type) {
        case ORDER_MY_LIST_REQUEST:
            return {
                ...state,
                loading: true
            };
        case ORDER_MY_LIST_SUCCESS:
            return {
                loading: false,
                orders: action.payload
            };
        case ORDER_MY_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case ORDER_MY_LIST_RESET:
            return {
                orders: []
            };
        default:
            return state;
    }
};

export const orderListReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case ORDER_LIST_REQUEST:
            return {
                loading: true,
                orders: []
            };
        case ORDER_LIST_SUCCESS:
            return {
                loading: false,
                orders: action.payload
            };
        case ORDER_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};