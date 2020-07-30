import CartHeader from "../../Core/Contracts/CartHeader";
import { User } from "../../Core/Contracts/User";

export default interface IStore {
    cart: CartHeader,
    user: User
}