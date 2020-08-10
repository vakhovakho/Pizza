import CartHeader from "../../Core/Contracts/Cart";
import IStore from "../Contracts/IStore";

export const getCartData = (store: IStore): CartHeader  => {
    return store.cart;
}