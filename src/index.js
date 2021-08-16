import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './components/Calculator';
import './styles/App.css';

if (module.hot) module.hot.accept();

ReactDOM.render(
  <Calculator />,
  document.querySelector('#root')
);