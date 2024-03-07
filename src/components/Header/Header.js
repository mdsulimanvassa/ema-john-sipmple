import React from 'react';
import logo from '../.././images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='img'>
               <img src={logo} alt="" />
            </div>
            <div>
                <nav>
                    <Link to={"/shop"}>Shop</Link>
                    <Link to={"/review"}>Order Review</Link>
                    <Link to={"/invantory"}>Manage Invantory Here</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;