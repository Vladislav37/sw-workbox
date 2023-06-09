import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

if ('serviceWorker' in navigator) {
  // Ожидаем полной загрузки страницы
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
  })
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
