import axios from 'axios';

 // The API (cloud funtion) URL
const instance = axios.create({
   baseURL: ''
});

export default instance;