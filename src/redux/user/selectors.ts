import { User } from "../../Core/Contracts/User";
import IStore from "../Contracts/IStore";

export const getUserData = (store: IStore): User  => {
    return store.user;
}