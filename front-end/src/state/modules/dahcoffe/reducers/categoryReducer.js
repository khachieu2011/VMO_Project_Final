import { CATEGORY_CREATE_FAIL, CATEGORY_CREATE_REQUEST, CATEGORY_CREATE_RESET, CATEGORY_CREATE_SUCCESS, CATEGORY_DELETE_FAIL, CATEGORY_DELETE_REQUEST, CATEGORY_DELETE_SUCCESS, CATEGORY_DETAIL_FAIL, CATEGORY_DETAIL_REQUEST, CATEGORY_DETAIL_SUCCESS, CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, CATEGORY_UPDATE_FAIL, CATEGORY_UPDATE_REQUEST, CATEGORY_UPDATE_SUCCESS } from '../constants/CategoryConstants';

export const categoryListReducer = (state = { listCategory: [] }, action) => {
    switch (action.type) {
        case CATEGORY_LIST_REQUEST:
            return { loading: true, listCategory: [] };
        case CATEGORY_LIST_SUCCESS:
            return { loading: false, listCategory: action.payload };
        case CATEGORY_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const categoryDetailReducer = (state = { category: [] }, action) => {
    switch (action.type) {
        case CATEGORY_DETAIL_REQUEST:
            return { loading: true, ...state };
        case CATEGORY_DETAIL_SUCCESS:
            return { loading: false, category: action.payload };
        case CATEGORY_DETAIL_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const deleteCategoryReducer = (state = {}, action) => {
    switch (action.type) {
        case CATEGORY_DELETE_REQUEST:
            return { loading: true };
        case CATEGORY_DELETE_SUCCESS:
            return { loading: false, success: true };
        case CATEGORY_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const createCategoryReducer = (state = {}, action) => {
    switch (action.type) {
        case CATEGORY_CREATE_REQUEST:
            return { loading: true };
        case CATEGORY_CREATE_SUCCESS:
            return { loading: false, success: true, category: action.payload };
        case CATEGORY_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case CATEGORY_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

export const updateCategoryReducer = (state = { category: {} }, action) => {
    switch (action.type) {
        case CATEGORY_UPDATE_REQUEST:
            return { loading: true };
        case CATEGORY_UPDATE_SUCCESS:
            return { loading: false, success: true, category: action.payload };
        case CATEGORY_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case CATEGORY_CREATE_RESET:
            return {};
        default:
            return state;
    }
};
