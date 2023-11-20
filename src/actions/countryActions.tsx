import axios from 'axios';

export const fetchCountries = () => async (dispatch: any) => {
  try {
    const response = await axios.get('https://restcountries.com/v2/all?fields=name,region,flag');
    dispatch({ type: 'FETCH_COUNTRIES_SUCCESS', payload: response.data });
  } catch (error: any) {
    dispatch({ type: 'FETCH_COUNTRIES_FAILURE', payload: error.message });
  }
};
