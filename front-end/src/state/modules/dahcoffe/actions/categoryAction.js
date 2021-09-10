import axios from 'axios';

import { CATEGORY_CREATE_FAIL, CATEGORY_CREATE_REQUEST, CATEGORY_CREATE_SUCCESS, CATEGORY_DELETE_FAIL, CATEGORY_DELETE_REQUEST, CATEGORY_DELETE_SUCCESS, CATEGORY_DETAIL_FAIL, CATEGORY_DETAIL_REQUEST, CATEGORY_DETAIL_SUCCESS, CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, CATEGORY_UPDATE_FAIL, CATEGORY_UPDATE_REQUEST, CATEGORY_UPDATE_SUCCESS } from '../constants/CategoryConstants';

export const ListCategory = () => async (dispatch) => {
    try {
        dispatch({ type: CATEGORY_LIST_REQUEST });

        const { data } = await axios.get('/api/category');
        dispatch({
            type: CATEGORY_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: CATEGORY_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
};

export const categoryDetailById = (id) => async (dispatch) => {
    try {
        dispatch({ type: CATEGORY_DETAIL_REQUEST });

        const { data } = await axios.get(`/api/category/${id}`);
        dispatch({
            type: CATEGORY_DETAIL_SUCCESS,
            payload: data
        });
    } catch (eror) {
        dispatch({
            type: CATEGORY_DETAIL_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
};

export const deleteCategory = (categoryId) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CATEGORY_DELETE_REQUEST
        });
        const {
            userLogin: { userInfo }
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        };

        await axios.delete(`/api/category/${categoryId}`, config);

        dispatch({
            type: CATEGORY_DELETE_SUCCESS
        });
    } catch (error) {
        const message = error.response && error.response.data.message
            ? error.response.data.message
            : error.message;

        if (message === 'Not authorized, token failed') {
            dispatch(logout());
        }
        dispatch({
            type: CATEGORY_DELETE_FAIL,
            payload: message
        });
    }
};

export const createCategory = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: CATEGORY_CREATE_REQUEST
        });
        const {
            userLogin: { userInfo }
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        };

        const { data } = await axios.post('/api/category', {}, config);

        dispatch({
            type: CATEGORY_CREATE_SUCCESS,
            payload: data
        });
    } catch (error) {
        const message = error.response && error.response.data.message
            ? error.response.data.message
            : error.message;

        if (message === 'Not authorized, token failed') {
            dispatch(logout());
        }
        dispatch({
            type: CATEGORY_CREATE_FAIL,
            payload: message
        });
    }
};

export const updateCategory = (category) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CATEGORY_UPDATE_REQUEST
        });
        const {
            userLogin: { userInfo }
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        };

        const { data } = await axios.put(`/api/category/${category._id}`, category, config);

        dispatch({
            type: CATEGORY_UPDATE_SUCCESS,
            payload: data
        });
    } catch (error) {
        const message = error.response && error.response.data.message
            ? error.response.data.message
            : error.message;

        if (message === 'Not authorized, token failed') {
            dispatch(logout());
        }
        dispatch({
            type: CATEGORY_UPDATE_FAIL,
            payload: message
        });
    }
};