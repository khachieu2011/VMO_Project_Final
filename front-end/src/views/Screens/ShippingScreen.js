import React, { useState } from 'react';
import { Form, Container, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { CheckoutSteps } from '../Components/CheckoutSteps';
import { saveShippingAddress } from '../../state/modules/dahcoffe/actions/cartActions';

export default function ShippingScreen({ history }) {
    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart;
    const [address, setAddress] = useState(shippingAddress.address);
    const [phoneNumber, setPhoneNumber] = useState(shippingAddress.phoneNumber);
    const [node, setNode] = useState(shippingAddress.node);
    const [name, setName] = useState(shippingAddress.name);
    const [delivery, setDelivery] = useState('atHome');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ address, phoneNumber, node, name, delivery }));
        history.push('/bill');
    };
    return (
        <div className='flex mx-auto items-center text-xl justify-center w-full h-screen'>
            <Container>
                <Link className='btn btn-light' to='/cart'>Go back</Link>
                <Row className='justify-content-md-center'>
                    <Col xs={12} md={6}>
                        <CheckoutSteps step1 step2 />
                        <Form onSubmit={submitHandler}>
                            <div className='flex mb-12 flex-col md:flex-row items-center justify-center'>
                                <h1> Shipping</h1>
                                <img src='https://tiemnhadah.cukcuk.vn/Handler/ImageHandler.ashx?FileType=10&FileResource=f84b4bec-0504-43da-9682-1ebe485f9f73&ImageType=0&W=undefined&H=undefined&IsFit=true' />
                            </div>
                            <Form.Group className='mb-3' controlId='formBasicEmail'>
                                <Form.Label>Họ và tên</Form.Label>
                                <Form.Control
                                    type='name'
                                    placeholder='Họ và tên'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formBasicEmail'>
                                <Form.Label>Số điện thoại</Form.Label>
                                <Form.Control
                                    type='phoneNumber'
                                    placeholder='Số điện thoại'
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formBasicPassword'>
                                <Form.Label>Địa chỉ</Form.Label>
                                <Form.Control
                                    type='address'
                                    placeholder='address'
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formBasicPassword'>
                                <Form.Label>Ghi chú đơn hàng</Form.Label>
                                <Form.Control
                                    type='node'
                                    placeholder='Ghi chú đơn hàng'
                                    value={node}
                                    onChange={(e) => setNode(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Label as='legend'>Select Method</Form.Label>
                            <Form.Group className='flex flex-row justify-between'>
                                <Form.Check
                                    type="radio"
                                    label="Giao hàng"
                                    id='atHome'
                                    name='delivery'
                                    value='atHome'
                                    checked
                                    onChange={(e) => setDelivery(e.target.value)}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Đến tận quán lấy"
                                    id='atStore'
                                    name='delivery'
                                    value='atStore'
                                    onChange={(e) => setDelivery(e.target.value)}
                                />
                            </Form.Group>
                            <button
                                type='submit'
                                className='py-2 px-6 w-full text-white font-bold rounded-lg bg-color-mine shadow hover:bg-red-800 '
                            >
                                Continue
                            </button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

ShippingScreen.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    })
};
ShippingScreen.defaultProps = {
    history: {}
};