import CartHeader from "../../Core/Contracts/CartHeader";
import { User } from "../../Core/Contracts/User";
import Fetch from "./Fetch";

export default interface IStore {
    fetch: Fetch,
    cart: CartHeader,
    user: User
}