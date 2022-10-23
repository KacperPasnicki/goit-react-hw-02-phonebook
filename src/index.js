import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { PhoneBook } from 'components/Form';
import { DisplayEntries } from 'components/PhoneBook/PhoneBook';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PhoneBook />
    <DisplayEntries Contacts= {this.Contacts}/>
  </React.StrictMode >
);
