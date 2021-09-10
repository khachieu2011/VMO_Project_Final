import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { ListproductDetail, createProductReview } from '../../state/modules/dahcoffe/actions/productAction';
import { PRODUCT_CREATE_REVIEW_RESET } from '../../state/modules/dahcoffe/constants/productConstants';

export default function DetailProduct({ match, history }) {
    const [number, setNumber] = useState(1);
    const [comment, setComment] = useState('');

    const dispatch = useDispatch();

    const productDetail = useSelector(state => state.productDetails);
    const { product } = productDetail;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const productReview = useSelector(state => state.productReview);
    const { success: successCreateReview } = productReview;

    useEffect(() => {
        if (successCreateReview) {
            alert('Đã nhập nhận xét rồi nha. Thank you 💚💜');
            setComment('');
            dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
        }
        dispatch(ListproductDetail(match.params.id));
    }, [dispatch, match, successCreateReview]);
    const addHandleCart = () => {
        history.push(`/cart/${match.params.id}?num=${number}`);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            createProductReview(match.params.id, {
                comment
            })
        );
    };

    return (
        <div>
            <Link className='btn btn-light mt-40 mb-4 ' to='/'>Go back</Link>
            <Row>
                <Col md={6} className='w-96 h-96'>
                    <Image className='w-full' src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={6} lg={3}>
                    <ListGroup variant='flush' className='text-gray-800 text-lg'>
                        <ListGroup.Item>
                            <h3>
                                {product.name}
                            </h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h3>Đồ Lạnh</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price:&nbsp;
                            {product.price}
                            &nbsp;VNĐ
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description&nbsp;:&nbsp;
                            {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={12} lg={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price :
                                    </Col>
                                    <Col>
                                        <strong>
                                            {product.price}
                                            &nbsp;&nbsp;VNĐ
                                        </strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status :
                                    </Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'Còn hàng' : 'Hết hàng'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            {product.countInStock > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Số lượng&nbsp;:  &nbsp;
                                        </Col>
                                        <Col>
                                            <Form.Control as='select' value={number} onChange={(e) => setNumber(e.target.value)}>
                                                {
                                                    [...Array(product.countInStock).keys()].map(x => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))
                                                }
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}
                            <ListGroup.Item>
                                <button
                                    type='button'
                                    className='py-2 px-6 text-white w-full my-3 font-bold rounded-lg bg-color-mine shadow hover:bg-red-800 '
                                    onClick={addHandleCart}
                                >
                                    Thêm qua giỏ hàng
                                </button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={6} className='mt-20 mb-10'>
                    <h2>Reviews</h2>
                    <ListGroup variant='flush'>
                        {product.reviews.map((review) => (
                            <ListGroup.Item key={review._id}>
                                <strong className='font-bold'>{review.name}</strong>
                                <p>{review.createdAt.substring(0, 10)}</p>
                                <p>{review.comment}</p>
                            </ListGroup.Item>
                        ))}
                        <ListGroup.Item>
                            <h2>Write a Customer Review</h2>
                            {userInfo ? (
                                <Form onSubmit={submitHandler}>
                                    <Form.Group controlId='comment'>
                                        <Form.Label>Comment</Form.Label>
                                        <Form.Control
                                            as='textarea'
                                            row='3'
                                            value={comment}
                                            onChange={(e) => setComment(e.target.value)}
                                        />
                                    </Form.Group>
                                    <button
                                        type='submit'
                                        className='py-2 px-6 text-white mx-auto w-1/2 my-3 font-bold rounded-lg bg-color-mine shadow hover:bg-red-800 '

                                    >
                                        Nhận xét
                                    </button>
                                </Form>
                            ) : (
                                <h1>Đăng nhập để nhận xét</h1>
                            )}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </div>
    );
}

DetailProduct.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    }),
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    })
};

DetailProduct.defaultProps = {
    match: {},
    history: {}
};