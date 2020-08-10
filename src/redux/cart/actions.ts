import { CartActions } from "../actionTypes"
import ReduxAction from "../Contracts/ReduxAction";
import Product from "../../Core/Contracts/Product";
import Cart from "../../Core/Contracts/Cart";
import * as FetchActions from '../fetch/actions';
import axios from '../../axios-instance';
import { LocalStorageKey } from "../enums/LocalStorageKey";

export const updateCart = (cart: Cart): ReduxAction => ({
    type: CartActions.UPDATE_CART,
    payload: {
        cart
    }
});

export const addToCart = (product: Product): ReduxAction => ({
    type: CartActions.ADD_PRODUCT,
    payload: {
        product: product
    }
});

export const substractProduct = (product: Product): ReduxAction => ({
    type: CartActions.SUBSTRACT_PRODUCT,
    payload: {
        product: product
    }
});

export const removeProduct = (product: Product): ReduxAction => ({
    type: CartActions.REMOVE_PRODUCT,
    payload: {
        product: product
    }
});

const fetchCart = async (dispatch: Function) => {
    const response = await axios.get('/cart');
    dispatch(updateCart(response.data.data));
}

export const addProduct = (product: Product) => {
    return async function(dispatch: Function) {
        dispatch(FetchActions.begin());
        try { 
            await axios.post('/cart/add', {
                id: product.id,
                size: product.selectedSize
            });

            await fetchCart(dispatch);
            dispatch(FetchActions.finish());

        } catch (error) {
            dispatch(FetchActions.finish(error));
        }
    }
}

export const watchCartState = (state: Cart) => {
    return async function(dispatch: Function) {
        const cartHash = localStorage.getItem(LocalStorageKey.CART_HASH);
        
        if(state.hash !== cartHash) {
            try {
                dispatch(FetchActions.begin());
                await fetchCart(dispatch);
                dispatch(FetchActions.finish());
            } catch(error) {
                dispatch(FetchActions.finish(error));
            }
        }
    }
}
