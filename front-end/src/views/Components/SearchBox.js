import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';

export default function SearchBox({ history }) {
    const [keyword, setKeywordName] = useState({});
    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            history.push(`/search/${keyword}`);
        } else {
            history.push('/');
        }
    };

    return (
        <Form onSubmit={submitHandler} inline>
            <Form.Control
                type='text'
                onChange={(e) => setKeywordName(e.target.value)}
                placeholder='Tìm kiếm ở đây nha 🔍'
                className='mr-sm-3 ml-sm-5'
            />
            <Button type='submit' variant='outline-success' className='p-2'>Tìm kiếm</Button>
        </Form>
    );
}

SearchBox.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            keyword: PropTypes.string.isRequired
        })
    }),
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    })
};
SearchBox.defaultProps = {
    match: {},
    history: {}
};