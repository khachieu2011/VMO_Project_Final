import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Button, Form, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart, removeFromCart } from '../../state/modules/dahcoffe/actions/cartActions';

export default function ShoppingCart({ match, location, history }) {
    const productId = match.params.id;
    const qty = location.search ? Number(location.search.split('=')[1]) : 1;

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    console.log(cartItems);
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };
    const checkoutHandler = () => {
        history.push('/login?redirect=shipping');
    };

    const addProductHandler = () => {
        history.push('/');
    };

    return (
        <div className='mt-44'>
            <div>
                <Link className='btn btn-light' to='/'>Go back</Link>
                <div className='my-4'>
                    <h1>List đồ</h1>
                </div>
                <Row>
                    <Col sm={12} lg={8}>
                        {cartItems.length === 0 ? (
                            <h2>
                                Danh sách trống 😥😥
                            </h2>
                        ) : (
                            <ListGroup variant='flush'>
                                {cartItems.map(item => (
                                    <ListGroup.Item key={item.product}>
                                        <Row>
                                            <Col>
                                                <Image src={item.image} alt={item.name} fluid rounded />
                                            </Col>
                                            <Col>
                                                <Link to={`/product/${item.product}`}>{item.name}</Link>
                                            </Col>
                                            <Col>
                                                {item.price}
                                                &nbsp;
                                                VND
                                            </Col>
                                            <Col>
                                                <Form.Control as='select' value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                                                    {
                                                        [...Array(item.countInStock).keys()].map(x => (
                                                            <option key={x + 1} value={x + 1}>
                                                                {x + 1}
                                                            </option>
                                                        ))
                                                    }
                                                </Form.Control>
                                            </Col>
                                            <Col>
                                                <Button type='Button' variant='light' onClick={() => removeFromCartHandler(item.product)}>
                                                    <i className='fas fa-trash' />
                                                </Button>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        )}
                    </Col>
                    <Col sm={12} lg={4}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h3>
                                        Tổng hợp build
                                    </h3>
                                    <p className='text-xl'>
                                        Tổng hóa đơn :&nbsp;
                                        {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)}
                                        &nbsp;
                                        VND
                                    </p>
                                </ListGroup.Item>
                                <ListGroup.Item className='mx-auto'>
                                    <button
                                        type='button'
                                        className='py-2 px-6 text-white w-full font-bold rounded-lg bg-color-mine shadow hover:bg-red-800 '
                                        disabled={cartItems.length === 0}
                                        onClick={addProductHandler}
                                    >
                                        Chọn thêm
                                    </button>
                                    <button
                                        type='button'
                                        className='py-2 px-6 text-white w-full my-3 font-bold rounded-lg bg-color-mine shadow hover:bg-red-800 '
                                        disabled={cartItems.length === 0}
                                        onClick={checkoutHandler}
                                    >
                                        Chuyển qua thanh toán
                                    </button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

ShoppingCart.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    }),
    location: PropTypes.object,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    })
};
ShoppingCart.defaultProps = {
    match: {},
    location: {},
    history: {}
};