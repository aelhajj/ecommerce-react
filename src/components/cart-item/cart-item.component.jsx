import React from 'react';

import './cart-item.styles.scss';

// CartItem : image of item, price, name and quantity in cart.
const CartItem = ({ item : { imageUrl, price, name, quantity }}) => (
    <div className = 'cart-item'>
        <img src={imageUrl} alt='item' />
        <div className = 'item-details'>
            <span className = 'name'> {name} </span>
            <span className='price'> 
                ${quantity} x ${price}  
            </span>
        </div>
    </div>
);

export default CartItem;