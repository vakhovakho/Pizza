import { User } from "../../Core/Contracts/User";
import ReduxAction from "../Contracts/ReduxAction";
import { UserActions } from "../actionTypes";
import ContactDetails from "../../Core/Contracts/ContactDetails";
import LoginDetails from "../../Core/Contracts/LoginDetails";

const initialState: User = {
    id: null,
    contactDetails: {
        name: "",
        number: "",
        address: "",
        email: "",
        comment: ""
    }
}

const register = (state: User, contactDetails: ContactDetails): User => {
    return {
        id: 1,
        contactDetails: {
            name: "Vakho",
            number: "2323",
            address: "asdfas asfsa",
            email: "asfas@fga.com",
            comment: "Bliaaaad",
            password: "aaaa",
            password_confirmation: "aaa"
        }
    }
}


const login = (state: User, loginDetails: LoginDetails): User => {
    return state;
}

export default function(state: User = initialState, action: ReduxAction): User {
    switch(action.type) {
        case UserActions.REGISTER:
            return register(state, action.payload.contactDetails);
        case UserActions.LOGIN:
            return login(state, action.payload.loginDetails);
        default:
            return state;
    }
}
