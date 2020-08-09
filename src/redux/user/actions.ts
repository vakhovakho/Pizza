import { UserActions } from "../actionTypes"
import ReduxAction from "../Contracts/ReduxAction";
import ContactDetails from "../../Core/Contracts/ContactDetails";
import * as FetchActions from '../fetch/actions';
import axios from '../../axios-instance';
import { AxiosResponse } from "axios";

export const registration = (contactDetails: ContactDetails) => {
    return function (dispatch: Function) {
        dispatch(FetchActions.begin());
        return axios.post('/auth/register', {
            ...contactDetails
        })
        .then( (response: AxiosResponse<{token: string}>) => {
            dispatch(login(response.data.token))
        })
        .catch( error => {
            dispatch(FetchActions.finish(error));
        });
    }
}

export const login = (token: string): ReduxAction => ({
    type: UserActions.LOGIN,
    payload: {
        token: token
    }
});

export const watchUserState = (): ReduxAction => ({
    type: UserActions.WATCH,
    payload: {}
});

export const updateGuestToken = (token: string): ReduxAction => ({
    type: UserActions.UPDATE_GUEST_TOKEN,
    payload: {
        token
    }
})
