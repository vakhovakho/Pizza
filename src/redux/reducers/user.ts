import { User } from "../../Core/Contracts/User";
import ReduxAction from "../Contracts/ReduxAction";
import { UserActions } from "../actionTypes";
import {LocalStorageKey} from "../enums/LocalStorageKey";
import jwt_decode from 'jwt-decode';

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
                const sub: {
                    id: number,
                    address: string,
                    email: string,
                    name: string,
                    number: string
                } = jwt_decode(accessToken);

                console.log(sub);
            }
        }

        changed.guestToken = guestToken;

        return changed;
    }

    return state;
}

const updateGuestToken = (state: User, guestToken: string) => {
    if(state.guestToken !== guestToken) {
        localStorage.setItem(LocalStorageKey.GUEST_TOKEN, guestToken);
        return {
            ...state,
            guestToken
        }
    }

    return state;
}

export default function(state: User = initialState, action: ReduxAction): User {
    switch(action.type) {
        case UserActions.LOGIN:
            return login(state, action.payload.token);
        case UserActions.WATCH:
            return watchUserState(state);
        case UserActions.UPDATE_GUEST_TOKEN:
            return updateGuestToken(state, action.payload.token);
        default:
            return state;
    }
}
