import axios from 'axios';

const swapiApi = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

const getExample = swapiApi.get('people/1');

export { getExample };
