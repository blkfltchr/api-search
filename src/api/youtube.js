import axios from 'axios';

const KEY = 'AIzaSyBvhIe1IN2pL0IbFPTC_i5n5oUgYj1PtkQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 4,
        key: KEY
    }
});
