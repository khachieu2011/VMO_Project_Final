import React, { useEffect, useState } from 'react';
import { Form, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { categoryDetailById, updateCategory } from '../../state/modules/dahcoffe/actions/categoryAction';
import { CATEGORY_UPDATE_RESET } from '../../state/modules/dahcoffe/constants/CategoryConstants';

export default function CategoryEditScreen({ history, match }) {
    const categoryId = match.params.id;
    const [name, setName] = useState('');
    console.log(categoryId);
    const dispatch = useDispatch();

    const categoryDetail = useSelector(state => state.categoryDetail);
    const { category } = categoryDetail;

    const categoryUpdate = useSelector(state => state.categoryUpdate);
    const { success: successUpdate } = categoryUpdate;

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: CATEGORY_UPDATE_RESET });
            alert('Sửa thành công');
            history.push('/admin/categories');
        } else if (category._id !== categoryId) {
            dispatch(categoryDetailById(categoryId));
        } else {
            setName(category.name);
        }
    }, [dispatch, successUpdate, categoryId, category, history]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateCategory({
            _id: categoryId,
            name
        }));
    };

    return (
        <Container className='my-16'>
            <Link to='/admin/categories' className='btn btn-ligth my-5'>Quay lại</Link>
            <div className='flex mb-12 flex-row items-center justify-center'>
                <h1>Edit danh mục</h1>
                <img src='https://tiemnhadah.cukcuk.vn/Handler/ImageHandler.ashx?FileType=10&FileResource=f84b4bec-0504-43da-9682-1ebe485f9f73&ImageType=0&W=undefined&H=undefined&IsFit=true' />
            </div>
            <Form onSubmit={submitHandler}>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>name</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Enter name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <button
                    type='submit'
                    className='py-2 px-6 text-white mx-auto w-1/2 my-3 font-bold rounded-lg bg-color-mine shadow hover:bg-red-800 '
                >
                    Cập nhật
                </button>
            </Form>
        </Container>
    );
}

CategoryEditScreen.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    }),
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    })
};

CategoryEditScreen.defaultProps = {
    match: {},
    history: {}
};
