import { createSelector } from 'reselect';


// Get only cart from state
const selectCart = state => state.cart;

// export cartItems from cart
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

// export quantity from reduce on cartItems
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) =>
            accumulatedQuantity + cartItem.quantity,
            0
        )
);