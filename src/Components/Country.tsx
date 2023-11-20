import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries, selectAllCountries, selectCountriesStatus, selectCountriesError } from '../feature/countries/countrySlice';
import { Box, Grid, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Footer from './Footer';

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector(selectAllCountries);
  const status = useSelector(selectCountriesStatus);
  const error = useSelector(selectCountriesError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCountries());
    }
  }, [status, dispatch]);

  return (
    <div>
      <Box sx={{ display: "flex", mb: 3, alignItems: "center", justifyContent: "space-between", p: 2 }}>
      <Typography sx={{ fontSize: "1.8rem", fontWeight: "700" }}>Countries</Typography>
      <MenuIcon></MenuIcon>
      </Box>
      {status === 'loading' && <Typography sx={{ textAlign: "center", fontWeight:  "700", fontSize: "1.8rem" }}>Loading...</Typography>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
          <Grid container spacing={2} gap={1} sx={{ mt: 2, mb: 2, justifyContent: 'center', p: 5 }}>
          {countries.map((country: any) => (
            <Grid
              sx={{ border: '2px solid #3D3D3D', display: 'flex', p: 1 }}
              item
              key={country.name}
              xs={12} // Set xs to 12 to make it full width on extra-small screens
              sm={4} // Set sm to control the number of items in a row on small screens and above
            >
              <img src={country.flag} alt={country.name} width="50" height="40" />
              <Box sx={{ ml: 2 }}>
                <Typography sx={{ fontSize: '1.1rem', fontWeight: '700' }}>{country.name}</Typography>
                <Typography sx={{ fontSize: '0.8rem' }}>{country.region}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}

     { status === 'succeeded' &&  (  <Footer /> ) }
    </div>
  );
};

export default Home;
