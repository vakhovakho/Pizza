import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://pizza-api.test/api/'
});

export default instance;