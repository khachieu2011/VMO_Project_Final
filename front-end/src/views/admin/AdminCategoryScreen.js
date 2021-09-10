import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { ListCategory, deleteCategory, createCategory } from '../../state/modules/dahcoffe/actions/categoryAction';
import { CATEGORY_CREATE_RESET } from '../../state/modules/dahcoffe/constants/CategoryConstants';

export default function AdminCategoryScreen({ history }) {
    const dispatch = useDispatch();

    const categoryList = useSelector(state => state.categoryList);
    const { listCategory } = categoryList;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const categoryDelete = useSelector(state => state.categoryDelete);
    const { success: successDelete } = categoryDelete;

    const categoryCreate = useSelector(state => state.categoryCreate);
    const { success: successCreate, category: createCategoryAction } = categoryCreate;

    useEffect(() => {
        dispatch({ type: CATEGORY_CREATE_RESET });
        if (!userInfo.isAdmin) {
            history.push('/login');
        }
        if (successCreate) {
            history.push(`/admin/categories/${createCategoryAction._id}/edit`);
        } else {
            dispatch(ListCategory());
        }
    }, [dispatch, history, userInfo, successDelete, successCreate, createCategoryAction]);

    const deleteHandler = (id) => {
        if (window.confirm('Bạn chắc mình muốn xóa không ?')) {
            dispatch(deleteCategory(id));
        }
    };

    const createProductHandler = () => {
        dispatch(createCategory());
    };

    return (
        <Container>
            <Link to='/' className='btn btn-light'>Go back</Link>
            <div className='flex mb-12 flex-row items-center justify-center'>
                <h1> Quản lý danh mục </h1>
                <img src='https://tiemnhadah.cukcuk.vn/Handler/ImageHandler.ashx?FileType=10&FileResource=f84b4bec-0504-43da-9682-1ebe485f9f73&ImageType=0&W=undefined&H=undefined&IsFit=true' />
            </div>
            <Row className='align-items-center'>
                <Col>
                    <h1>Danh mục</h1>
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
            <Table striped bordered hover responsive className='table-sm my-10'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>
                            &nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {listCategory.map((category) => (
                        <tr key={category._id}>
                            <td>{category._id}</td>
                            <td>{category.name}</td>
                            <td>
                                <LinkContainer to={`/admin/categories/${category._id}/edit`}>
                                    <Button variant='light' className='btn-sm'>
                                        <i className='fas fa-edit' />
                                    </Button>
                                </LinkContainer>
                                <Button
                                    variant='danger'
                                    className='btn-sm'
                                    onClick={() => deleteHandler(category._id)}
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

AdminCategoryScreen.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    })
};

AdminCategoryScreen.defaultProps = {
    history: {}
};