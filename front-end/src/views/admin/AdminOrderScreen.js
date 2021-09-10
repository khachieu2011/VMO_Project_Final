import React, { useEffect } from 'react';
import { Table, Button, Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { listOrders } from '../../state/modules/dahcoffe/actions/orderAction';

export default function OrderListScreen({ history }) {
    const dispatch = useDispatch();

    // const [showDetail, setShowDetail] = useState(false);

    const orderList = useSelector((state) => state.orderList);
    const { orders } = orderList;

    console.log(orders);

    // const oderDetails = useSelector((state) => state.oderDetails);
    // const { order } = oderDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listOrders());
        } else {
            history.push('/login');
        }
    }, [dispatch, history, userInfo]);

    const detailHandle = () => {
        // setShowDetail(true);
        // dispatch(getOrderDetails(id));
        console.log('detail');
    };
    return (
        <Container className='my-10'>
            <Link to='/' className='btn btn-light'> Go back </Link>
            <div className='flex mb-12 flex-row items-center justify-center'>
                <h1> Quản lý order </h1>
                <img src='https://tiemnhadah.cukcuk.vn/Handler/ImageHandler.ashx?FileType=10&FileResource=f84b4bec-0504-43da-9682-1ebe485f9f73&ImageType=0&W=undefined&H=undefined&IsFit=true' />
            </div>
            <Row className='align-items-center'>
                <Col>
                    <h1>Orders</h1>
                </Col>
                <Col className='text-right'>
                    <button
                        type='submit'
                        className='py-2 px-6 w-1/2 text-white font-bold rounded-lg bg-color-mine shadow hover:bg-red-800 '
                    >
                        <i className='fas fa-plus' />
                        &nbsp;
                        Tạo mới
                    </button>
                </Col>
            </Row>
            <Table striped bordered hover responsive className='table-sm'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User</th>
                        <th>DATE</th>
                        <th>SHIP_P</th>
                        <th>TOTAL</th>
                        <th>
                            &nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((orderItem) => (
                        <tr key={orderItem._id}>
                            <td>{orderItem._id}</td>
                            <td>{orderItem.user && orderItem.user.name}</td>
                            <td>{orderItem.createdAt.substring(0, 10)}</td>
                            <td>{orderItem.shipPrice}</td>
                            <td>{orderItem.totalPrice}</td>
                            <td>
                                <Button variant='light' className='btn-sm' onClick={detailHandle(orderItem._id)}>
                                    Details
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                {/* {showDetail ? (
                    <h1>Chi tiết sản phẩm</h1>
                    // <Container>
                    //     <Row>
                    //         <Col sm={12} md={8}>
                    //             <ListGroup variant='flush'>
                    //                 <ListGroup.Item>
                    //                     <h3>Thông tin khách hàng</h3>
                    //                     <div>
                    //                         <p>
                    //                             <strong className='font-bold text-black'>Khách hàng&nbsp;:&nbsp;</strong>
                    //                             {order.shippingAddress.name}
                    //                         </p>
                    //                         <p>
                    //                             <strong className='font-bold text-black'>Số điện thoại&nbsp;:&nbsp;</strong>
                    //                             {order.shippingAddress.phoneNumber}
                    //                         </p>
                    //                         <p>
                    //                             <strong className='font-bold text-black'>Địa chỉ&nbsp;:&nbsp;</strong>
                    //                             {order.shippingAddress.address}
                    //                         </p>
                    //                         <p>
                    //                             <strong className='font-bold text-black'>Ghi chú&nbsp;:&nbsp;</strong>
                    //                             {order.shippingAddress.node}
                    //                         </p>
                    //                     </div>
                    //                 </ListGroup.Item>
                    //                 <ListGroup.Item>
                    //                     <h3>Hình thức nhận đồ</h3>
                    //                     <p>
                    //                         Hình thức&nbsp;:
                    //                         &nbsp;
                    //                         {order.shippingAddress.delivery}
                    //                     </p>
                    //                 </ListGroup.Item>
                    //                 <ListGroup.Item>
                    //                     <h3>Đồ đã đặt </h3>
                    //                     {order.orderItems.length === 0 ? 'Chưa chọn đồ' : (
                    //                         <ListGroup variant='flush'>
                    //                             {order.orderItems.map((item, index) => (
                    //                                 <ListGroup.Item key={index}>
                    //                                     <Row>
                    //                                         <Col lg={1} sm={4}>
                    //                                             <Image src={item.image} fluid rounded />
                    //                                         </Col>
                    //                                         <Col sm={4}>
                    //                                             <Link to={`/product/${item.product}`}>{item.name}</Link>
                    //                                         </Col>
                    //                                         <Col lg={4} sm={4}>
                    //                                             {item.qty}
                    //                                             x
                    //                                             {item.price}
                    //                                             =
                    //                                             {item.qty * item.price}
                    //                                             VND
                    //                                         </Col>
                    //                                     </Row>
                    //                                 </ListGroup.Item>
                    //                             ))}
                    //                         </ListGroup>
                    //                     )}
                    //                 </ListGroup.Item>
                    //             </ListGroup>
                    //         </Col>
                    //     </Row>
                    // </Container>
                ) : (
                    <div>
                        <h3>Không có chi tiết order</h3>
                    </div>
                )} */}
            </Table>
        </Container>
    );
}

OrderListScreen.propTypes = {
    // match: PropTypes.shape({
    //     params: PropTypes.shape({
    //         id: PropTypes.string.isRequired
    //     })
    // }),
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    })
};

OrderListScreen.defaultProps = {
    // match: {},
    history: {}
};
