import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { NavigationProvider } from './context/navigation';
import { BrowserRouter } from 'react-router-dom';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)