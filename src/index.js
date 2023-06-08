import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from './ManageState/Store/store';
import { Workbox } from 'workbox-window';

if ('serviceWorker' in navigator) {
  const wb = new Workbox('/service-worker.js');

  wb.register()
    .then(registration => {
      console.log('Service Worker registered: ', registration);
    })
    .catch(error => {
      console.log('Service Worker registration failed: ', error);
    });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>


    <App />

  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 