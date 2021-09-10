import React, { useEffect } from 'react';
import { Col, Row, ListGroup, Container, Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { CheckoutSteps } from '../Components/CheckoutSteps';
import { createOrder, getOrderDetails } from '../../state/modules/dahcoffe/actions/orderAction';

export default function BillScreen({ history }) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    cart.itemPrice = Number(cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));

    cart.shipPrice = Number(cart.itemsPrice > 100000 ? 0 : 10000);

    cart.totalPrice = Number(cart.itemPrice) + Number(cart.shipPrice);

    const orderCreate = useSelector(state => state.orderCreate);
    const { order, success } = orderCreate;
    const messageCongra = `
        Có rất nhiều quán hàng ngoài kia nhưng bạn đã chọn chúng tôi,
        Rất cảm ơn vì điều đó. Đáp lại tấm lòng của bạn ❤❤💜, 
        chúng tôi sẽ cố hết sức đảm bảo và cẩn thận cho đơn hàng này,
        Mong bạn sẽ có trải nghiệm thú vị với Tiệm Dah nha 😍😍
        Cảm ơn bạn rất nhiều. 🥤🥤🧊🧊
    `;
    useEffect(() => {
        if (success) {
            dispatch(getOrderDetails(order._id));
            alert(messageCongra);
        }
    }, [history, order, success, dispatch, messageCongra]);

    const billOrderHandler = () => {
        dispatch(
            createOrder({
                orderItems: cart.cartItems,
                shippingAddress: cart.shippingAddress,
                itemPrice: cart.itemPrice,
                shipPrice: cart.shipPrice,
                totalPrice: cart.totalPrice
            })
        );
    };
    return (
        <>
            <Container>
                <Link className='btn btn-light mt-20' to='/cart'>Go back</Link>
                <CheckoutSteps step1 step2 step3 />
                <Row>
                    <Col sm={12} md={8}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h3>Thông tin khách hàng</h3>
                                <div>
                                    <p>
                                        <strong className='font-bold text-black'>Khách hàng&nbsp;:&nbsp;</strong>
                                        {cart.shippingAddress.name}
                                    </p>
                                    <p>
                                        <strong className='font-bold text-black'>Số điện thoại&nbsp;:&nbsp;</strong>
                                        {cart.shippingAddress.phoneNumber}
                                    </p>
                                    <p>
                                        <strong className='font-bold text-black'>Địa chỉ&nbsp;:&nbsp;</strong>
                                        {cart.shippingAddress.address}
                                    </p>
                                    <p>
                                        <strong className='font-bold text-black'>Ghi chú&nbsp;:&nbsp;</strong>
                                        {cart.shippingAddress.node}
                                    </p>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h3>Hình thức nhận đồ</h3>
                                <p>
                                    Hình thức&nbsp;:
                                    &nbsp;
                                    {cart.shippingAddress.delivery}
                                </p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h3>Đồ đã đặt </h3>
                                {cart.cartItems.length === 0 ? 'Chưa chọn đồ' : (
                                    <ListGroup variant='flush'>
                                        {cart.cartItems.map((item, index) => (
                                            <ListGroup.Item key={index}>
                                                <Row>
                                                    <Col lg={1} sm={4}>
                                                        <Image src={item.image} fluid rounded />
                                                    </Col>
                                                    <Col sm={4}>
                                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                    </Col>
                                                    <Col lg={4} sm={4}>
                                                        {item.qty}
                                                        x
                                                        {item.price}
                                                        =
                                                        {item.qty * item.price}
                                                        VND
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                )}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={12} md={4}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h3>Tóm tắt hóa đơn</h3>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Tổng hóa đơn</Col>
                                        <Col>
                                            {cart.itemPrice}
                                            &nbsp;
                                            VND
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Phí ship </Col>
                                        <Col>
                                            {cart.shipPrice}
                                            &nbsp;
                                            VND
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Tổng tiền nhận về </Col>
                                        <Col>
                                            {cart.totalPrice}
                                            &nbsp;
                                            VND
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <button
                                        type='submit'
                                        className='py-2 px-6 w-full text-white focus:outline-none font-bold rounded-lg bg-color-mine shadow hover:bg-red-800 '
                                        onClick={billOrderHandler}
                                    >
                                        Xác nhận đơn hàng
                                    </button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <div className='flex w-full items-center mt-20 justify-center'>
                        <button
                            type='submit'
                            className='py-2 px-6 w-2/5 text-white focus:outline-none no-underline font-bold rounded-lg bg-color-mine shadow hover:bg-red-800 '
                        >
                            Về trang chủ
                        </button>
                    </div>
                </Link>
            </Container>
        </>
    );
}

BillScreen.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    })
};
BillScreen.defaultProps = {
    history: {}
};
