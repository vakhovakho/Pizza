import Cart from "../../Core/Contracts/Cart";
import ReduxAction from "../Contracts/ReduxAction";
import { CartActions } from "../actionTypes";
import { hash } from "../../utils/hash";
import { LocalStorageKey } from "../enums/LocalStorageKey";


const initialState: Cart = {
    items: [],
    total: 0,
    hash: null
}

const updateCart = (state: Cart, cart: Cart): Cart => {
    cart.hash = hash({
        items: cart.items,
        total: cart.total
    });

    localStorage.setItem(LocalStorageKey.CART_HASH, cart.hash);

    return cart;
}

export default function(state: Cart = initialState, action: ReduxAction): Cart {
    switch(action.type) {
        case CartActions.UPDATE_CART:
            return updateCart(state, action.payload.cart);
        default:
            return state;
    }
}