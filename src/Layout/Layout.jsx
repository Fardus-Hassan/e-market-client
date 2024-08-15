import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Components/Navbar/Navber';
import Footer from '../Components/Footer/Footer';

const Layout = () => {
    return (
        <div className=''>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;