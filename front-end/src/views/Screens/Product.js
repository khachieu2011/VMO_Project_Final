import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ product }) => (
    <div className='flex items-center justify-center w-full'>
        <Card className='my-3 p-3 h-96 w-64 rounded mx-2.5 '>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} alt='error' variant='top' />
            </Link>
            <Card.Body className='flex flex-col items-center justify-center'>
                <Card.Title as='div' className='font-bold text-xl'>
                    <p className='font-bold cursor-pointer hover:text-gray-400'>{product.name}</p>
                </Card.Title>
                <Card.Text as='h3'>
                    {product.price}
                    VND
                </Card.Text>
                <Link to={`/product/${product._id}`}>
                    <Card.Text as='div'>
                        <button type='button' className='py-2 px-6 text-white font-bold rounded-lg bg-color-mine shadow hover:bg-red-800 '>Thêm giỏ hàng</button>
                    </Card.Text>
                </Link>
            </Card.Body>
        </Card>
    </div>
);

Product.propTypes = {
    product: PropTypes.object

};

Product.defaultProps = {
    product: {}
};

export default Product;
