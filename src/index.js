import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Shopcontextprovider from './context/Shopcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Shopcontextprovider>
    <App />
    </Shopcontextprovider>
);


reportWebVitals();
