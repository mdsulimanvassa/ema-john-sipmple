import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';
import { useNavigate } from 'react-router-dom';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlace] = useState(false);
    const history = useNavigate()
    const handleProccedCheckout = () => {
        history('/shipment');
    }

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            productKeys.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    }, [])

    let thankyou;
    if(orderPlaced){
        thankyou = <img src={happyImage} alt="" />
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cart.map(pd => <ReviewItem
                     removeProduct={removeProduct}
                      key={pd.key} product={pd}>
                      </ReviewItem>)
                }
                {thankyou}
            </div>
            <div className='cart-container'>
            <Cart cart={cart}><button onClick={handleProccedCheckout} className='review-button'>Procced Checkout</button></Cart>
            </div>
        </div>
    );
};

export default Review;