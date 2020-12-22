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
import{Provider} from 'react-redux';
import store from './store/store';
import {CheckoutPage} from './components/checkout-page.js';
import {SuccessPage} from './components/success-page.js';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/">
    <MainBody/>
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
    <Route path="/checkout">
        <CheckoutPage />
    </Route>
    <Route path="/success">
        <SuccessPage />
    </Route>
    </Switch>
    <Footer/>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
