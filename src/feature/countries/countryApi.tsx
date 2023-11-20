import axios from 'axios';

export const fetchCountriesAPI = async () => {
  return axios.get('https://restcountries.com/v2/all?fields=name,region,flag');
};
