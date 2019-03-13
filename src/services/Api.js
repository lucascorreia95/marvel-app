import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://marvel-backend-api.herokuapp.com/'
    baseURL: 'http://localhost:3000'
});

export default api;