import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://audio.test/api/'
});

export default instance;