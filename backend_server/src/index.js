import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import {BrowserRouter, Routes,Route} from 'react-router-dom';

// axios.defaults.baseURL = 'http://localhost:8080/';
axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
