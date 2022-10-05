

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


import React from 'react';
import AppRouter from './AppRouter';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import './App.css'

ReactDOM.render(<AppRouter />, document.getElementById('root'));
