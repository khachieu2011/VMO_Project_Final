import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import DetailProduct from '../../Screens/DetailProduct';

const DetailPage = ({ history, match }) => (

    <div className='detail'>
        <Header />
        <main>
            <Container>
                <DetailProduct match={match} history={history} />
            </Container>
        </main>
        <Footer />
    </div>
);

DetailPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    }),
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    })
};

DetailPage.defaultProps = {
    match: {},
    history: {}
};

export default DetailPage;
