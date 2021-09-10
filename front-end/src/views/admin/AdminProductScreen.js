import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Listproduct, deleteProduct, createProduct } from '../../state/modules/dahcoffe/actions/productAction';
import { PRODUCT_CREATE_RESET } from '../../state/modules/dahcoffe/constants/productConstants';

export default function ProductListScreen({ history }) {
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { products } = productList;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const productDelete = useSelector((state) => state.productDelete);
    const { success } = productDelete;

    const productCreate = useSelector((state) => state.productCreate);
    const { success: successCreate, product: createdProduct } = productCreate;

    useEffect(() => {
        dispatch({ type: PRODUCT_CREATE_RESET });
        if (!userInfo.isAdmin) {
            history.push('/login');
        }
        if (successCreate) {
            history.push(`/admin/product/${createdProduct._id}/edit`);
        } else {
            dispatch(Listproduct());
        }
    }, [dispatch, history, userInfo, success, successCreate, createdProduct]);

    const deleteHandler = (id) => {
        if (window.confirm('Bạn chắc mình muốn xóa không ?')) {
            dispatch(deleteProduct(id));
        }
    };
    const createProductHandler = () => {
        dispatch(createProduct());
    };

    return (
        <Container className='my-10'>
            <Link to='/' className='btn btn-light'> Go back </Link>
            <div className='flex mb-12 flex-row items-center justify-center'>
                <h1> Quản lý sản phẩm </h1>
                <img src='https://tiemnhadah.cukcuk.vn/Handler/ImageHandler.ashx?FileType=10&FileResource=f84b4bec-0504-43da-9682-1ebe485f9f73&ImageType=0&W=undefined&H=undefined&IsFit=true' />
            </div>
            <Row className='align-items-center'>
                <Col>
                    <h1>Sản Phẩm</h1>
                </Col>
                <Col className='text-right'>
                    <button
                        type='submit'
                        className='py-2 px-6 w-1/2 text-white font-bold rounded-lg bg-color-mine shadow hover:bg-red-800 '
                        onClick={createProductHandler}
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
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>CATEGORY</th>
                        <th>IMAGE</th>
                        <th>
                            &nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <td>{product._id}</td>
                            <td>{product.name}</td>
                            <td>
                                {product.price}
                                &nbsp;
                                VNĐ
                            </td>
                            <td>{product.category}</td>
                            <td><img src={product.image} className='h-10 w-10' /></td>
                            <td>
                                <LinkContainer to={`/admin/product/${product._id}/edit`}>
                                    <Button variant='light' className='btn-sm'>
                                        <i className='fas fa-edit' />
                                    </Button>
                                </LinkContainer>
                                <Button
                                    variant='danger'
                                    className='btn-sm'
                                    onClick={() => deleteHandler(product._id)}
                                >
                                    <i className='fas fa-trash' />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

ProductListScreen.propTypes = {
    // match: PropTypes.shape({
    //     params: PropTypes.shape({
    //         id: PropTypes.string.isRequired
    //     })
    // }),
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    })
};

ProductListScreen.defaultProps = {
    // match: {},
    history: {}
};
