import axios from 'axios';

const movieDb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'b5e63049d976609557f2e42141a5941b',
    language: 'es-ES'
  }
});

export default movieDb;