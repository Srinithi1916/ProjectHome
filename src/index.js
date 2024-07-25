// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SignupProvider } from './SignupContext';

ReactDOM.render(
  <SignupProvider>
    <App />
  </SignupProvider>,
  document.getElementById('root')
);
