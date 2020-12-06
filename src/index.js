import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header';
import reportWebVitals from './reportWebVitals';
import  MainBody  from './components/main-body';
import Footer from './components/footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CatalogueInteractionTile from './components/filter-and-search-section';
import spider from './assets/spider-pet.jpg';
import caterpillar from './assets/caterpillar-pet.jpg';
import moth from './assets/moth-pet.jpg';
import CatalogPage from './components/catalogue-page';

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
    </Switch>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
var items = [{
  header: 'Betty the Moth',
  price: 123,
  text: 'Where is my lamp',
  img: moth
},
{
  header: 'Muffet the Spider',
  price: 123,
  text: 'Welcome to my spider web',
  img: spider
},
{
  header: 'Snek the Caterpillar',
  price: 123,
  text: 'SSSSSSSSSSSSSSS',
  img: caterpillar
},
{
  header: 'Muffet the Spider',
  price: 123,
  text: 'Welcome to my spider web',
  img: spider
},
{
  header: 'Snek the Caterpillar',
  price: 123,
  text: 'SSSSSSSSSSSSSSS',
  img: caterpillar
},
{
  header: 'Betty the Moth',
  price: 123,
  text: 'Where is my lamp',
  img: moth
},
{
  header: 'Betty the Moth',
  price: 123,
  text: 'Where is my lamp',
  img: moth
},
{
  header: 'Muffet the Spider',
  price: 123,
  text: 'Welcome to my spider web',
  img: spider
},
{
  header: 'Muffet the Spider',
  price: 123,
  text: 'Welcome to my spider web',
  img: spider
},
{
  header: 'Snek the Caterpillar',
  price: 123,
  text: 'SSSSSSSSSSSSSSS',
  img: caterpillar
},
{
  header: 'Betty the Moth',
  price: 123,
  text: 'Where is my lamp?',
  img: moth
},
{
  header: 'Betty the Moth',
  price: 123,
  text: 'Where is my lamp?',
  img: moth
},
{
  header: 'Snek the Caterpillar',
  price: 123,
  text: 'SSSSSSSSSSSSSSS',
  img: caterpillar
},
{
  header: 'Muffet the Spider',
  price: 123,
  text: 'Welcome to my spider web',
  img: spider
},
{
  header: 'Muffet the Spider',
  price: 123,
  text: 'Welcome to my spider web',
  img: spider
},
{
  header: 'Muffet the Spider',
  price: 123,
  text: 'Welcome to my spider web',
  img: spider
}]
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
