import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import { green, purple, } from '@mui/material/colors';

const root = ReactDOM.createRoot(document.getElementById('root'));


const theme = createTheme({
  palette: {
    primary: {
      main: purple[500], // Customize your primary color
    },
    secondary: {
      main: '#19857b', // Customize your secondary color
    },
    error: {
      main: '#ff1744', // Customize your error color
    },
    background: {
      default: '#f5f5f5', // Customize your background color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Customize your font family
  },
});

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>

);
