import CartHeader from "../../Core/Contracts/CartHeader";

export const getCartData = (store: {cart: CartHeader})  => {
    return store.cart;
}