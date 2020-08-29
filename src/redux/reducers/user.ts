import { User } from "../../Core/Contracts/User";
import ReduxAction from "../Contracts/ReduxAction";
import { UserActions } from "../actionTypes";
import {LocalStorageKey} from "../enums/LocalStorageKey";
import jwt_decode from 'jwt-decode';
import ContactDetails from "../../Core/Contracts/ContactDetails";

const initialState: User = {
    id: null,
    accessToken: null,
    guestToken: null,
    contactDetails: {
        name: "",
        number: "",
        address: "",
        email: "",
        comment: ""
    }
}

const login = (state: User, token: string): User => {
    localStorage.setItem(LocalStorageKey.ACCESS_TOKEN, token);
    localStorage.removeItem(LocalStorageKey.CART_HASH);
    
    return watchUserState(state);
}

const watchUserState = (state: User) => {
    const accessToken = localStorage.getItem(LocalStorageKey.ACCESS_TOKEN);
    const guestToken = localStorage.getItem(LocalStorageKey.GUEST_TOKEN);

    if(state.accessToken !== accessToken || state.guestToken !== guestToken) {
        const changed = {...state};
        if(state.accessToken !== accessToken) {
            changed.accessToken = accessToken;
            
            if(accessToken != null) {
                const data: {
                    sub: ContactDetails
                } = jwt_decode(accessToken);

                changed.contactDetails = {...changed.contactDetails};

                // changed.contactDetails.id = sub.id;
                changed.contactDetails.email = data.sub.email;
                changed.contactDetails.name = data.sub.name;
                changed.contactDetails.address = data.sub.address;
                changed.contactDetails.number = data.sub.number;

            }
        }

        changed.guestToken = guestToken;

        return changed;
    }

    return state;
}

const updateContactDetails = (state: User, contactDetails: ContactDetails): User => {
    return {
        ...state,
        contactDetails: {...contactDetails}
    }
}

const updateGuestToken = (state: User, guestToken: string): User => {
    if(state.guestToken !== guestToken) {
        localStorage.setItem(LocalStorageKey.GUEST_TOKEN, guestToken);
        return {
            ...state,
            guestToken
        }
    }

    return state;
}

const logout = (state: User): User => {
    localStorage.removeItem(LocalStorageKey.ACCESS_TOKEN);
    localStorage.removeItem(LocalStorageKey.CART_HASH);
    return {
        ...state,
        accessToken: null
    }
}

export default function(state: User = initialState, action: ReduxAction): User {
    switch(action.type) {
        case UserActions.LOGIN:
            return login(state, action.payload.token);
        case UserActions.WATCH:
            return watchUserState(state);
        case UserActions.UPDATE_GUEST_TOKEN:
            return updateGuestToken(state, action.payload.token);
        case UserActions.LOGOUT:
            return logout(state);
        case UserActions.UPDATE_CONTACT_DETAILS:
            return updateContactDetails(state, action.payload.contactDetails);
        default:
            return state;
    }
}
