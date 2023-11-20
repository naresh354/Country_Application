import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCountriesAPI } from './countryApi';

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const response = await fetchCountriesAPI();
  return response.data;
});

const countrySlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state: any, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default countrySlice.reducer;
export const selectAllCountries = (state: any) => state.countries.countries;
export const selectCountriesStatus = (state: any) => state.countries.status;
export const selectCountriesError = (state: any) => state.countries.error;
