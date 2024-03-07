import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Product = (props) => {
    const {name, seller, price, img, stock, key} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='name'>
                <h2><Link style={{textDecoration: 'none'}} to={'/product/'+key}>{name}</Link></h2>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p>Only left {stock} in stock-order soon</p>
                {props.showAddToCart && <button onClick={() => props.addHandle(props.product)}><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>}
            </div>
        </div>
    );
};

export default Product;