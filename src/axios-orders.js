import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-react-burger-3d4d6.firebaseio.com/'
});

export default instance;
