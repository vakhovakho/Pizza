import { CartActions } from "../actionTypes"
import ReduxAction from "../Contracts/ReduxAction";
import Product from "../../Core/Contracts/Product";

export const addProduct = (product: Product): ReduxAction => ({
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