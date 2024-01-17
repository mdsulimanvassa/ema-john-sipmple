import React from 'react';
import logo from '../.././images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='img'>
               <img src={logo} alt="" />
            </div>
            <div>
                <nav>
                    <a href="/shop">Shop</a>
                    <a href="/review">Order Review</a>
                    <a href="/invantory">Manage Invantory Here</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;