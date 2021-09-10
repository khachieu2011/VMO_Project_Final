import React from 'react';
import PropTypes from 'prop-types';

import LoginScreen from '../../Screens/LoginScreen';
import Footer from '../../Components/Footer/Footer';

const LoginPage = ({ location, history }) => (
    <>
        <LoginScreen location={location} history={history} />
        <Footer />
    </>
);

LoginPage.propTypes = {
    location: PropTypes.object,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    })
};
LoginPage.defaultProps = {
    location: {},
    history: {}
};

export default LoginPage;
