import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { PhoneBook } from 'components/Form';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PhoneBook />
  </React.StrictMode>
);
