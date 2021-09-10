import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';

export const CheckoutSteps = ({ step1, step2, step3 }) => (

    <Nav className='justify-center mb-5 font-bold text-xl'>
        <Nav.Item>
            {step1 ? (
                <LinkContainer to='/login'>
                    <Nav.Link>Đăng Nhập</Nav.Link>
                </LinkContainer>
            ) : (
                <Nav.Link disabled>Đăng Nhập</Nav.Link>
            )}
        </Nav.Item>
        <Nav.Item>
            {step2 ? (
                <LinkContainer to='/shipping'>
                    <Nav.Link>Thông tin</Nav.Link>
                </LinkContainer>
            ) : (
                <Nav.Link disabled>Thông tin</Nav.Link>
            )}
        </Nav.Item>
        <Nav.Item>
            {step3 ? (
                <LinkContainer to='/order'>
                    <Nav.Link>Đặt Hàng</Nav.Link>
                </LinkContainer>
            ) : (
                <Nav.Link disabled>Đặt Hàng</Nav.Link>
            )}
        </Nav.Item>
    </Nav>
);

CheckoutSteps.propTypes = {
    step1: PropTypes.bool,
    step2: PropTypes.bool,
    step3: PropTypes.bool
};
CheckoutSteps.defaultProps = {
    step1: false,
    step2: false,
    step3: false
};