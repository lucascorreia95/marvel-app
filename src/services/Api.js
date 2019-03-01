import axios from 'axios';

const api = axios.create({
    baseURL: 'https://marvel-backend-api.herokuapp.com/'
});

export default api;