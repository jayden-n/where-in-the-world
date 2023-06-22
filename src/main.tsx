import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { BrowserRouter as Routes } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Routes>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Routes>
  </React.StrictMode>,
  document.getElementById('root')
);
