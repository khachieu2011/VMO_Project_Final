import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import HomeScreen from '../../Screens/HomeScreen';
import SliderBar from '../../Screens/SliderBar';
import '../style.scss';

const HomePage = () => (
    <div className='relative'>
        <Header />
        <main>
            <Container>
                <div className='show'>
                    <SliderBar />
                </div>
                <HomeScreen history={history} />
            </Container>
        </main>
        <Footer />
    </div>
);

HomePage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            keyword: PropTypes.string.isRequired
        })
    }),
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    })
};

HomePage.defaultProps = {
    match: {},
    history: {}
};

export default HomePage;
