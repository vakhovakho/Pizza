import Cart from "../../Core/Contracts/Cart";
import { User } from "../../Core/Contracts/User";
import Fetch from "./Fetch";

export default interface IStore {
    fetch: Fetch,
    cart: Cart,
    user: User
}