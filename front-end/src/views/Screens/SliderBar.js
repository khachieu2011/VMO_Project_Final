import React from 'react';
import Slider from 'react-slick';

import ImgSl1 from '../../assets/image/slide1.jpg';
import ImgSl2 from '../../assets/image/slide2.jpg';
import ImgSl3 from '../../assets/image/slide3.jpg';

export default function SliderBar() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        /* eslint-disable react/jsx-props-no-spreading */
        <Slider {...settings} className='mt-24 '>
            <div className='w-full'>
                <img src={ImgSl1} />
            </div>
            <div className='w-full'>
                <img src={ImgSl2} />
            </div>
            <div className='w-full'>
                <img src={ImgSl3} />
            </div>
        </Slider>
    );
}
