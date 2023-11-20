import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Login from './Components/Login';
import Country from './Components/Country';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import FontLoader from './theme';

function App() {



  return (
    <>
    <FontLoader>
     <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login></Login>} />
          <Route path="/home" element={<Country></Country>} />
        </Routes>
      </Router>
    </Provider>
    </FontLoader>
    </>
  )
}

export default App
