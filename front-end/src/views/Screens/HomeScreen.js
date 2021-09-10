import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Product from './Product';
import { Listproduct, ListproductByCategory } from '../../state/modules/dahcoffe/actions/productAction';
import CheckCategory from '../Components/checkCategory';

export default function HomeScreen() {
    let { keyword } = useParams();
    // let { keywordCate } = useParams();
    // console.log(keywordCate);
    let { click } = useParams();
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const { products } = productList;

    useEffect(() => {
        dispatch(Listproduct(keyword));
        if (keyword && click) {
            dispatch(ListproductByCategory(keyword));
        }
    }, [dispatch, keyword, click]);
    console.log(keyword);
    return (
        <div>
            <div className='flex md:flex-row flex-col justify-between items-center mt-4'>
                <h3 className='py-6'>Danh sách sản phẩm</h3>
                <Route render={({ history, match }) => <CheckCategory match={match} history={history} />} />
                <div className='fixed bottom-8 left-8 z-50 '>
                    <Link to='/cart'>
                        <button href='/cart' type='button' className='bg-color-mine mx-2 hover:bg-red-500 text-black font-bold py-2 px-4 focus:outline-none rounded-full'>
                            <i className='fas fa-cart-plus text-white w-10 h-10 text-2xl mt-2' />
                        </button>
                    </Link>
                </div>
                <div className='fixed bottom-28 left-8 z-50 '>
                    <Link to='/bill'>
                        <button href='/bill' type='button' className='bg-color-mine mx-2 hover:bg-red-500 text-black font-bold py-2 px-4 focus:outline-none rounded-full'>
                            <i className='fas fa-file-invoice text-white w-10 h-10 text-2xl mt-2' />
                        </button>
                    </Link>
                </div>
                <div className='animate-pulse hidden md:flex fixed  bottom-8 right-8 z-50 w-72 h-auto'>
                    <button href='' type='button' className=' bg-white border shadow-md mx-2 hover:bg-red-700 text-black font-bold py-2 px-4 focus:outline-none rounded-t-2xl rounded-b-2xl'>
                        <p className='font-bold text-lg'>Chi nhánh giao hàng</p>
                        <p className='text-red-500'>Tiệm nhà DaH (Cuối ngõ 143 Tây Sơn, Thị trấn Phùng, Đan Phượng, Hà Nội)</p>
                        <p className='font-bold text-lg'>Địa chỉ nhận hàng</p>
                        <p className='text-red-500'>Quán chỉ nhận giao hàng trong phạm vi Huyện Đan Phượng</p>
                        <p className='font-bold text-base'>Liên hệ nhanh : 0868925420</p>
                    </button>
                </div>
            </div>
            <Row>
                {products.map((product, keys) => (
                    <Col key={keys} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

HomeScreen.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            keyword: PropTypes.string.isRequired
        })
    }),
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    })
};

HomeScreen.defaultProps = {
    match: {},
    history
};