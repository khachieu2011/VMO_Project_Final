import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getUserDetails, updateUserProfile } from '../../state/modules/dahcoffe/actions/userActions';
import { listMyOrders } from '../../state/modules/dahcoffe/actions/orderAction';

export default function ProfileScreen({ history }) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();
    const userDetails = useSelector((state) => state.userDetails);
    const { user } = userDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const { success } = userUpdateProfile;

    const orderMyList = useSelector((state) => state.orderMyList);
    const { orders } = orderMyList;

    console.log(orders);

    useEffect(() => {
        if (!userInfo && orders) {
            history.push('/login');
        } else if (!user.name) {
            dispatch(getUserDetails('profile'));
            dispatch(listMyOrders());
        } else {
            setName(user.name);
            setEmail(user.email);
        }
    }, [history, dispatch, userInfo, user.name, user.email, user, orders]);
    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Mật khẩu không đúng');
        } else {
            dispatch(updateUserProfile({ id: user._id, name, email, password }));
        }
    };
    return (
        <div className='flex mx-auto items-center text-xl justify-center w-full h-screen'>
            <Container>
                <Link className='btn btn-light' to='/'>Go back</Link>
                <Row className='justify-content-md-center'>
                    <Col xs={12} md={3}>
                        <Form onSubmit={submitHandler}>
                            <h2>
                                Update
                                {success}
                            </h2>
                            <h2> Profile User</h2>
                            {message}
                            <Form.Group className='mb-3' controlId='formBasicEmail'>
                                <Form.Label>name</Form.Label>
                                <Form.Control
                                    type='name'
                                    placeholder='Enter name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formBasicEmail'>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Enter email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formBasicPassword'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formBasicPassword'>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Confirm Password'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </Form.Group>
                            <button
                                type='submit'
                                className='py-2 px-6 w-full text-white font-bold rounded-lg bg-color-mine shadow hover:bg-red-800 '
                            >
                                Update
                            </button>
                        </Form>
                    </Col>
                    <Col md={9}>
                        <h3>My Order</h3>
                        {!orders ? (
                            <div>Chưa có đơn</div>
                        ) : (
                            <Table striped bordered hover responsive className='table-sm'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Cách nhận hàng</th>
                                        <th>Địa chỉ</th>
                                        <th>Tổng tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders.map((order, index) => (
                                            <tr key={index}>
                                                <td>{order._id}</td>
                                                <td>{order.shippingAddress.name}</td>
                                                <td>{order.shippingAddress.phoneNumber}</td>
                                                <td>{order.shippingAddress.delivery}</td>
                                                <td>{order.shippingAddress.address}</td>
                                                <td>{order.totalPrice}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
ProfileScreen.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    })
};
ProfileScreen.defaultProps = {
    history: {}
};