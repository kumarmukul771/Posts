import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common['Authorization'] = "AUTH TOKEN";

axios.interceptors.request.use(request =>{
  console.log(request);
  //you always need to return request as you are blocking request
  // Edit request config
  return request;
},error => {
    console.log(error);
    return Promise.reject(error);
});


axios.interceptors.response.use(response =>{
    console.log(response);
    // Edit response config
    return response;
  },error =>{
    console.log(error);
    return Promise.reject(error);
  }
  )
ReactDOM.render(<BrowserRouter> <App /> </BrowserRouter>, document.getElementById( 'root' ) );
registerServiceWorker();
