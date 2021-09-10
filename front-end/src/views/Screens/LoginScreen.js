import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { login } from '../../state/modules/dahcoffe/actions/userActions';

export default function LoginScreen({ location, history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;
    const redirect = location.search ? location.search.split('=')[1] : '/';
    console.log(redirect);
    useEffect(() => {
        if (userInfo) {
            history.push(redirect);
        }
    }, [history, userInfo, redirect]);
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };
    return (
        <div className='flex mx-auto items-center text-xl justify-center w-full h-screen'>
            <Container>
                <Row className='justify-content-md-center'>
                    <Col xs={12} md={6}>
                        <Form onSubmit={submitHandler}>
                            <div className='flex mb-12 flex-row items-center justify-center'>
                                <h1> Sign In</h1>
                                <img src='https://tiemnhadah.cukcuk.vn/Handler/ImageHandler.ashx?FileType=10&FileResource=f84b4bec-0504-43da-9682-1ebe485f9f73&ImageType=0&W=undefined&H=undefined&IsFit=true' />
                            </div>
                            <Form.Group className='mb-3' controlId='formBasicEmail'>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Enter email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Form.Text className='text-muted'>
                                    We ll never share your email with anyone else
                                </Form.Text>
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
                            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                                <Form.Text className='text-muted'>
                                    New Customer?
                                    {' '}
                                    <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                                        Register
                                    </Link>
                                </Form.Text>
                            </Form.Group>
                            <button
                                type='submit'
                                className='py-2 px-6 w-full text-white font-bold rounded-lg bg-color-mine shadow hover:bg-red-800 '
                            >
                                Sign In
                            </button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
LoginScreen.propTypes = {
    location: PropTypes.object,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    })
};
LoginScreen.defaultProps = {
    location: {},
    history: {}
};