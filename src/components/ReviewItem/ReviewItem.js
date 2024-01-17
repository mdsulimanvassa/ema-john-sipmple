import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    const itemStyle = {
        borderBottom:'1px solid lightgray',
        marginLeft:'200px',
        marginBottom:'5px',
        paddingBottom:'5px'
    }
    return (
        <div style={itemStyle}>
            <h4 style={{color:'#3742fa'}}>{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>$ {price}</small></p>
            <button onClick={() => props.removeProduct(key)} className='review-button'>remove</button>
        </div>
    );
};

export default ReviewItem;