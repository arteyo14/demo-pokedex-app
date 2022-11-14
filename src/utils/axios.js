import Axios from 'axios';

const createAxios = (baseUrl) => {
  return Axios.create({
    baseURL: baseUrl
  });
};

const pokemonApiV2 = createAxios('https://pokeapi.co/api/v2/');

export { pokemonApiV2 };
