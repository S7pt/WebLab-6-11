import {useState} from "react";
import moth from "../assets/moth-pet.jpg";
import spider from "../assets/spider-pet.jpg";
import caterpillar from "../assets/caterpillar-pet.jpg";
import Tile from './tile';
import {ItemsMap} from '../styles/items-showcase-style.styled.js';

export const items = [{
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

export function Items(){
    const [insects]=useState(items)
    return(
        <ItemsMap>
            {insects.map((insects)=>
            <Tile source={insects.img} title={insects.header} text={insects.text} price={insects.price}></Tile>)}
        </ItemsMap>
    )
}