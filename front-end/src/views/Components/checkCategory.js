import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';

export default function CheckCategory({ history }) {
    const [keyword, setKeywordName] = useState({});
    const [click, setClick] = useState(false);
    const submitHandler = (e) => {
        setClick(true);
        e.preventDefault();
        if (keyword.trim()) {
            history.push(`/category/${keyword}/${click}`);
        } else {
            history.push('/');
        }
    };

    // const productList = useSelector(state => state.productList);
    // const { products } = productList;
    return (
        <Form onSubmit={submitHandler} inline>
            <Form.Group>
                <div>
                    <button href='/' type='button' className='bg-gray-100 mr-2 mt-2 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-md focus:shadow-outline focus:outline-none '>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            Tất cả
                        </Link>
                    </button>
                    <button type='submit' onClick={(e) => setKeywordName(e.target.value)} value='snack' className='bg-gray-100 mx-2 mt-2 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-md focus:shadow-outline focus:outline-none '>
                        Snack
                    </button>
                    <button type='submit' onClick={(e) => setKeywordName(e.target.value)} value='cake' className='bg-gray-100 mx-2 mt-2 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-md focus:shadow-outline focus:outline-none '>
                        Bánh Ngọt
                    </button>
                    <button type='submit' onClick={(e) => setKeywordName(e.target.value)} value='cafe' className='bg-gray-100 mx- 2mt-2 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-md focus:shadow-outline focus:outline-none '>
                        Cà Phê
                    </button>
                    <button type='submit' onClick={(e) => setKeywordName(e.target.value)} value='tea' className='bg-gray-100 mx-2 mt-2 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-md focus:shadow-outline focus:outline-none '>
                        Trà
                    </button>
                    <button type='submit' onClick={(e) => setKeywordName(e.target.value)} value='fruit' className='bg-gray-100 mx-2 mt-2 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-md focus:shadow-outline focus:outline-none '>
                        Nước ép
                    </button>
                </div>
            </Form.Group>
        </Form>
    );
}

CheckCategory.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            keyword: PropTypes.string.isRequired
        })
    }),
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    })
};
CheckCategory.defaultProps = {
    match: {},
    history: {}
};