import React, { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import Searce from '../Searce button/Searce';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
  const frist10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(frist10);
  const [cart, setCart] = useState([]);

      useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(pdKey => {
          const product = fakeData.find(pd => pd.key === pdKey);
          product.quantity = savedCart[pdKey];
          return product;
        })
        setCart(previousCart);
      }, []) 
     
    const addHandle = (product) => {
      const sameProduct = cart.find(pd => pd.key === product.key);
      let count = 1;
      let newCart;
      if(sameProduct){
        count = sameProduct.quantity + 1;
        sameProduct.quantity = count;
        const others = cart.filter(pd => pd.key !== product.key);
        newCart = [...others, sameProduct];
      }
      else{
          product.quantity = 1;
          newCart = [...cart, product]
      }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }
    return (
          <div>
            <Searce cart={cart}></Searce>
            <div className='shop-container'>
             <div className='product-container'>
                   { products.map(product => <Product
                    key={product.key} 
                    showAddToCart={true}
                    addHandle={addHandle}
                    product={product}>
                    </Product>)}
             </div>
             <div className='cart-cotainer'>
               <Cart cart={cart}><Link to='/review'><button className='review-button'>Review your order</button></Link></Cart>
             </div>
            </div>
          </div>
    );
};

export default Shop;