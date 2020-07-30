import CartHeader from "../../Core/Contracts/CartHeader";
import IStore from "../Contracts/IStore";

export const getCartData = (store: IStore): CartHeader  => {
    return store.cart;
}