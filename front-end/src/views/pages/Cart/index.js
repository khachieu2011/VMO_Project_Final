import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import ShoppingCart from '../../Screens/CartScreen';

import '../style.scss';

const CartPage = ({ match, location, history }) => (
    <div className='detail'>
        <Header />
        <main>
            <Container>
                <ShoppingCart match={match} location={location} history={history} />
            </Container>
        </main>
        <Footer />
    </div>
);

CartPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    }),
    location: PropTypes.string,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    })
};
CartPage.defaultProps = {
    match: {},
    location: {},
    history: {}
};

export default CartPage;
