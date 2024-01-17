import React from 'react';
import './Cart.css';


const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
        
    }
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99
    }
    const tex = total / 10;
    const tex2 = tex / 3;
    const formetNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <div className='aline-height'>
             <h1 style={{textAlign:'center'}}><small>Order Summary</small></h1>
             <h2 style={{textAlign:'center'}}><small>Items ordered:  {cart.length}</small></h2>
             <p><small>Items: ${formetNumber(total)}</small></p> 
             <p><small>Shipping & Handling: ${formetNumber(shipping)}</small></p> 
             <p><small>Total before tex: ${formetNumber(tex)}</small></p> 
             <p><small>Estimated Tex: ${formetNumber(tex2)}</small></p> 
             <h2 style={{color:'#EA2027'}}><small>Order Total: ${formetNumber(total + shipping + tex)}</small></h2>
            </div>
             {
                props.children
             }
        </div>
    );
};

export default Cart;