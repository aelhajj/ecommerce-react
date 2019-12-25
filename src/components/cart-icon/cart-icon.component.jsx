import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

// CartIcon object : quantity and shopping icon. 
const CartIcon = ( { toggleCartHidden, itemCount } ) => (
    <div className = 'cart-icon' onClick= {toggleCartHidden} >
        <ShoppingIcon className='shopping-icon' />
        <span className='icon-count'>{ itemCount }</span>
    </div>
);

// Get value of hidden or not cart toggle
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

// Get value of quantity of cartItem to display 
const mapStateToProps = createStructuredSelector({
    // get count from selector : 
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps) (CartIcon); 