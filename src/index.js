import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header';
import reportWebVitals from './reportWebVitals';
import  MainBody  from './components/main-body';
import Footer from './components/footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {items} from './components/items-state.js';
import CatalogPage from './components/catalogue-page';
import InsectPage from './components/item-page.js';
import CartPage from './components/cart-page';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/">
    <MainBody></MainBody>
    </Route>
    <Route path="/catalogue">
      <CatalogPage itemsList={items}/>
    </Route>
    <Route path="/insects/:id">
      <InsectPage itemsList={items}/>
    </Route>
    <Route path="/cart">
      <CartPage/>
    </Route>
    </Switch>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
