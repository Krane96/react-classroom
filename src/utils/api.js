import axios from "axios";

export const BASE_URL = 'https://afk-arena-api.herokuapp.com/api/';
export const HEROES_URL = 'heroes';
export const POPULATE = '?populate=*';

export const getData = (url) => {
    axios.get(url).then((response) => console.log(response.data.data));
  };
  
  export const getHeroes = getData(BASE_URL + HEROES_URL + POPULATE);