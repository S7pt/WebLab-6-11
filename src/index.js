import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header';
import reportWebVitals from './reportWebVitals';
import  MainBody  from './components/main-body';
import Footer from './components/footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <MainBody></MainBody>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
