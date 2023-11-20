import { configureStore } from '@reduxjs/toolkit';
import countryReducer from '../feature/countries/countrySlice';

export const store = configureStore({
  reducer: {
    countries: countryReducer,
  },
});
