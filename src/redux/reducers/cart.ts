import CartHeader from "../../Core/Contracts/CartHeader";
import ReduxAction from "../Contracts/ReduxAction";
import { CartActions } from "../actionTypes";
import Product from "../../Core/Contracts/Product";

const initialState: CartHeader = {
    products: [],
    total: 0
}

const addToCart = (state: CartHeader, product: Product): CartHeader => {
    const currentState: CartHeader = {...state};

    let total = currentState.total;
    total +=  product.prices[product.selectedSize];

    const cartProducts = [...currentState.products];
    const cartProductIndex = cartProducts.findIndex(p => p.id === product.id && p.size === product.selectedSize);

    if(cartProductIndex > -1) {
        cartProducts[cartProductIndex] = {...cartProducts[cartProductIndex], count: cartProducts[cartProductIndex].count + 1};
    } else {
        cartProducts.push({
            id: product.id,
            size: product.selectedSize,
            count: 1
        });
    }

    currentState.products = cartProducts;
    currentState.total = Math.round(total * 100) / 100;
    return currentState;
}

const removeFromCart = (state: CartHeader, product: Product): CartHeader => {
    const currentState = {...state};
    let cartProducts = [...currentState.products];
    const cartProduct = cartProducts.find(p => p.id === product.id && p.size === product.selectedSize);

    if(cartProduct === undefined) {
        return state;
    }

    let total = currentState.total;
    total -= cartProduct.count * product.prices[product.selectedSize];

    cartProducts = cartProducts.filter( prod => prod.id !== product.id );

    currentState.products = cartProducts;
    currentState.total = Math.round(total * 100) / 100;;

    return currentState;
}

const substractFromCart = (state: CartHeader, product: Product): CartHeader => {
    const currentState: CartHeader = {...state};

    const cartProducts = [...currentState.products];
    const cartProductIndex = cartProducts.findIndex(p => p.id === product.id && p.size === product.selectedSize);

    if(cartProductIndex === -1) {
        return state;
    } 

    let total = currentState.total;
    total -=  product.prices[product.selectedSize];

    cartProducts[cartProductIndex] = {...cartProducts[cartProductIndex], count: cartProducts[cartProductIndex].count - 1};

    currentState.products = cartProducts;
    currentState.total = Math.round(total * 100) / 100;;
    return currentState;
}

export default function(state: CartHeader = initialState, action: ReduxAction): CartHeader {
    switch(action.type) {
        case CartActions.ADD_PRODUCT:
            return addToCart(state, action.payload.product);
        case CartActions.REMOVE_PRODUCT:
            return removeFromCart(state, action.payload.product);
        case CartActions.SUBSTRACT_PRODUCT:
            return substractFromCart(state, action.payload.product);
        default:
            return state;
    }
}