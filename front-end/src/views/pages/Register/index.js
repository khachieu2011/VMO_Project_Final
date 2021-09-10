import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../../Components/Footer/Footer';
import RegisterScreen from '../../Screens/RegisterScreen';

const RegisterPage = ({ location, history }) => (
    <>
        <RegisterScreen location={location} history={history} />
        <Footer />
    </>
);

RegisterPage.propTypes = {
    location: PropTypes.object,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    })
};
RegisterPage.defaultProps = {
    location: {},
    history: {}
};

export default RegisterPage;
