//if cart item already exists, adds to number, or will add item to cart
export const addItemToCart = (cartItems, cartItemToAdd) => {
    // if the id of the cart item is already in the cart
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        // we use new version so that our component re-renders
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id 
            ? {...cartItem, quantity : cartItem.quantity + 1}
            : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter( cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(
        cartItem => 
        cartItem.id === cartItemToRemove.id ? 
        { ...cartItem, quantity : cartItem.quantity - 1}
        : cartItem
    );
};