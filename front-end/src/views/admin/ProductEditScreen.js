import React, { useEffect, useState } from 'react';
import { Form, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ListproductDetail, updateProduct } from '../../state/modules/dahcoffe/actions/productAction';
import { PRODUCT_UPDATE_RESET } from '../../state/modules/dahcoffe/constants/productConstants';

export default function ProductEditScreen({ history, match }) {
    const productId = match.params.id;
    console.log(productId);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState(0);
    const [description, setDesciption] = useState('');

    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails);
    const { product } = productDetails;

    const productUpdate = useSelector((state) => state.productUpdate);
    const { success: successUpdate } = productUpdate;

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: PRODUCT_UPDATE_RESET });
            alert('Sửa thành công!');
            history.push('/admin/productlist');
        } else if (!product.name || product._id !== productId) {
            dispatch(ListproductDetail(productId));
        } else {
            setName(product.name);
            setPrice(product.price);
            setImage(product.image);
            setBrand(product.brand);
            setCategory(product.category);
            setCountInStock(product.countInStock);
            setDesciption(product.description);
        }
    }, [dispatch, productId, product, successUpdate, history]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateProduct({
            _id: productId,
            name,
            price,
            image,
            brand,
            category,
            description,
            countInStock
        }));
    };

    return (
        <Container className='my-16'>
            <Link to='/admin/productlist' className='btn btn-ligth my-5'>Quay lại</Link>
            <div className='flex mb-12 flex-row items-center justify-center'>
                <h1> Edit sản phẩm </h1>
                <img src='https://tiemnhadah.cukcuk.vn/Handler/ImageHandler.ashx?FileType=10&FileResource=f84b4bec-0504-43da-9682-1ebe485f9f73&ImageType=0&W=undefined&H=undefined&IsFit=true' />
            </div>
            <Form onSubmit={submitHandler} className='w-3/5 mx-auto'>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>name</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Enter name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId='price'>
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type='number'
                        placeholder='Enter price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId='image'>
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter image url'
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                    <Form.File
                        id='image-file'
                        label='Choose File'
                    />
                </Form.Group>
                <Form.Group controlId='brand'>
                    <Form.Label>Brand</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter brand'
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId='countInStock'>
                    <Form.Label>Count In Stock</Form.Label>
                    <Form.Control
                        type='number'
                        placeholder='Enter countInStock'
                        value={countInStock}
                        onChange={(e) => setCountInStock(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId='category'>
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId='description'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter description'
                        value={description}
                        onChange={(e) => setDesciption(e.target.value)}
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

ProductEditScreen.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    }),
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    })
};

ProductEditScreen.defaultProps = {
    match: {},
    history: {}
};
