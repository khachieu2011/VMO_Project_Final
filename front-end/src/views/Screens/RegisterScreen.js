import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { register } from '../../state/modules/dahcoffe/actions/userActions';

export default function RegisterScreen({ location, history }) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);
    const dispatch = useDispatch();
    const userRegister = useSelector(state => state.userRegister);
    const { userInfo } = userRegister;
    const redirect = location.search ? location.search.split('=')[1] : '/';
    useEffect(() => {
        if (userInfo) {
            history.push(redirect);
        }
    }, [history, userInfo, redirect]);
    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Mật khẩu không đúng');
        } else {
            dispatch(register(name, email, password));
        }
    };
    return (
        <div className='flex mx-auto items-center text-xl justify-center w-full h-screen'>
            <Container>
                <Row className='justify-content-md-center'>
                    <Col xs={12} md={6}>
                        <Form onSubmit={submitHandler}>
                            <div className='flex mb-12 flex-row items-center justify-center'>
                                <h1> Sign Up</h1>
                                <img src='https://tiemnhadah.cukcuk.vn/Handler/ImageHandler.ashx?FileType=10&FileResource=f84b4bec-0504-43da-9682-1ebe485f9f73&ImageType=0&W=undefined&H=undefined&IsFit=true' />
                            </div>
                            {message}
                            <Form.Group className='mb-3' controlId='formBasicEmail'>
                                <Form.Label>name</Form.Label>
                                <Form.Control
                                    type='name'
                                    placeholder='Enter name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <Form.Text className='text-muted'>
                                    We ll never share your name with anyone else
                                </Form.Text>
                            </Form.Group>
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
                                Register
                            </button>
                            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                                <Form.Text className='text-muted'>
                                    Have an Account?
                                    {' '}
                                    <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                                        Login
                                    </Link>
                                </Form.Text>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
RegisterScreen.propTypes = {
    location: PropTypes.object,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    })
};
RegisterScreen.defaultProps = {
    location: {},
    history: {}
};