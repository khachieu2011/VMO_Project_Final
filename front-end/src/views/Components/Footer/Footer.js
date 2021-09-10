import React from 'react';

const Footer = () => (
    <div className='border-t h-52 font-poppins '>
        <div className='flex flex-col items-center justify-center '>
            <div>
                <img src='https://tiemnhadah.cukcuk.vn/Handler/ImageHandler.ashx?FileType=10&FileResource=f84b4bec-0504-43da-9682-1ebe485f9f73&ImageType=0&W=undefined&H=undefined&IsFit=true' />
            </div>
            <div className='font-bold text-xl text-green-600'>
                <p>✔💖 Đang mở cửa</p>
            </div>
            <div className='py-2 text-black text-black'>
                Chào mừng bạn đến với &apos; Tiệm nhà Dah &apos; Chúc bạn có một trải nghiệm vui vẻ
            </div>
            <div className='py-2 text-black text-black'>
                Địa chỉ : Ngõ 38, Số 24 Phan Đình Phùng, Đan Phượng, Hà Nội
            </div>
            <div className='flex flex-row items-center justify-center'>
                <a href='https://www.facebook.com/tiemnhadah' target='_blank' rel='noreferrer' className='text-4xl pr-3 text-blue-800'>
                    <i className='fab fa-facebook' />
                </a>
                <a href='' className='text-4xl text-red-600'>
                    <i className='fab fa-instagram' />
                </a>
            </div>
            <div className='pb-3 '>Copyright &copy; 2021 by KHACHIEU</div>
        </div>
    </div>
);

export default Footer;
