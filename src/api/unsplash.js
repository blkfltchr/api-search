import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3da5364b77318ab46282425039ceaf2485da4adbcdc169620be0c5a6f7653e71',
    }
});