import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Route } from 'react-router-dom';

import SearchBox from '../SearchBox';
import { logout } from '../../../state/modules/dahcoffe/actions/userActions';

export default function Header() {
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;
    const logoutHandler = () => {
        dispatch(logout());
    };
    return (
        <header className='fixed top-0 w-full z-50 shadow-md'>
            <Navbar bg='light' variant='light' expand='lg' collapseOnSelect>
                <Container>
                    <Navbar.Brand href='/'>
                        <div className='w-2/5'>
                            <img src='https://tiemnhadah.cukcuk.vn/Handler/ImageHandler.ashx?FileType=10&FileResource=f84b4bec-0504-43da-9682-1ebe485f9f73&ImageType=0&W=undefined&H=undefined&IsFit=true' />
                            ❤🎁💕💖
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Route render={({ history, match }) => <SearchBox match={match} history={history} />} />
                        <Nav className='ml-auto text-lg'>
                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>&nbsp;Log Out</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <Nav.Link href='/login'>
                                    <i className='fas fa-user pr-1' />
                                    Sign In
                                </Nav.Link>
                            )}
                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Quản lý' id='adminmenu'>
                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>Sản phẩm</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/categories'>
                                        <NavDropdown.Item>Thể loại</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Đơn hàng</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
