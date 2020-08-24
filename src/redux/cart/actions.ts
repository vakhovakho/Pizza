import { CartActions } from "../actionTypes"
import ReduxAction from "../Contracts/ReduxAction";
import Product from "../../Core/Contracts/Product";
import Cart, { CartItem } from "../../Core/Contracts/Cart";
import * as FetchActions from '../fetch/actions';
import axios from '../../axios-instance';
import { LocalStorageKey } from "../enums/LocalStorageKey";

export const updateCart = (cart: Cart): ReduxAction => ({
    type: CartActions.UPDATE_CART,
    payload: {
        cart
    }
});

const fetchCart = async (dispatch: Function) => {
    const response = await axios.get('/cart');
    dispatch(updateCart(response.data.data));
}

export const addProduct = (product: Product, item: CartItem | null = null ) => {
    return async function(dispatch: Function) {
        dispatch(FetchActions.begin());
        try { 
            await axios.post('/cart/add', {
                id: product ? product.id : item ? item.product.id : null,
                size: product ? product.selectedSize : item ? item.selectedSize : null
            });

            await fetchCart(dispatch);
            dispatch(FetchActions.finish());

        } catch (error) {
            dispatch(FetchActions.finish(error));
        }
    }
}

export const substractProduct = (item: CartItem) => {
    return async function(dispatch: Function) {
        dispatch(FetchActions.begin());
        try { 
            await axios.post('/cart/substract', {
                id: item.product.id,
                size: item.selectedSize
            });

            await fetchCart(dispatch);
            dispatch(FetchActions.finish());

        } catch (error) {
            dispatch(FetchActions.finish(error));
        }
    }
}

export const removeProduct = (item: CartItem) => {
    return async function(dispatch: Function) {
        dispatch(FetchActions.begin());
        try { 
            await axios.post('/cart/remove', {
                id: item.product.id,
                size: item.selectedSize
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
