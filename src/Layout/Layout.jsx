import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Components/Navbar/Navber';
import Footer from '../Components/Footer/Footer';

const Layout = () => {
    return (
        <div className='font-amsterdam'>
            <Navber></Navber>
            <div className='lg:min-h-[calc(100vh-373px)] min-h-[calc(100vh-88px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;