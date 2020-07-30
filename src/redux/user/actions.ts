import { UserActions } from "../actionTypes"
import ReduxAction from "../Contracts/ReduxAction";
import ContactDetails from "../../Core/Contracts/ContactDetails";
import LoginDetails from "../../Core/Contracts/LoginDetails";

export const register = (contactDetails: ContactDetails): ReduxAction => ({
    type: UserActions.REGISTER,
    payload: {
        contactDetails: contactDetails
    }
});

export const login = (loginDetails: LoginDetails): ReduxAction => ({
    type: UserActions.LOGIN,
    payload: {
        loginDetails: loginDetails
    }
});