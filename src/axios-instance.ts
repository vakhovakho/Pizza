import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { updateGuestToken } from './redux/user/actions';
import store from './redux/store';

const instance = axios.create({
    baseURL: process.env.API_URL || 'http://pizza-api.test/api/'
});


instance.interceptors.request.use((config: AxiosRequestConfig) => {
    if(store.getState().user.accessToken) {
        config.headers['Authorization'] = 'JWT ' + store.getState().user.accessToken;
    }

    if(store.getState().user.guestToken) {
        config.headers['Guest-Token'] = store.getState().user.guestToken;
    }

    return config;
});

instance.interceptors.response.use((response: AxiosResponse) => {
    store.dispatch(
        updateGuestToken(response.headers['guest-token'])
    );

    return response;
});

export default instance;