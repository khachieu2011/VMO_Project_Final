import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../../Components/Footer/Footer';
import ProfileScreen from '../../Screens/ProfileScreen';

const ProfilePage = ({ location, history }) => (
    <>
        <ProfileScreen location={location} history={history} />
        <Footer />
    </>
);

ProfilePage.propTypes = {
    location: PropTypes.object,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    })
};
ProfilePage.defaultProps = {
    location: {},
    history: {}
};

export default ProfilePage;
