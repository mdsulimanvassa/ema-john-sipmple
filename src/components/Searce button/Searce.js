import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Searce.css';

const Searce = (props) => {
    const cart = props.cart;
    return (
            <div className='search-button'>
                <input type="search" name="" id="" placeholder='type here to search'/>
                <span className='icon'><FontAwesomeIcon  icon={faShoppingCart}/> <span className='length'>{cart.length}</span></span>
                <div className='absulite'>           
                </div>
            </div>
    );
};

export default Searce;