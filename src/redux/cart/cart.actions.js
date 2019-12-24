import CartActionTypes from './cart.types';

// Toggle cart hidden / not 
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

// Adding item to cart
export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});