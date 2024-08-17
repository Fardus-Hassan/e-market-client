import React from 'react';
import logo from '../../assets/online-shopping.png'

const Logo = () => {
    return (
        <div className='flex justify-center items-center gap-3'>
            <img className='w-16' src={logo} alt="" />
            <h1 className='text-2xl'>E-Market</h1>
        </div>
    );
};

export default Logo;