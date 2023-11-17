import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '1c895aa30035cbd5b6b5cc6f282018ab',
        language: 'en-US'
    }
});

export default movieDB;