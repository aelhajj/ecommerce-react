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

// removing item from cart
export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});

// clearing item from cart
export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});