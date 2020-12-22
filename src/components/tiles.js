import { TilesContainer } from "../styles/tiles-styles.styled";
import {Tile} from "../components/tile.js";
import {items} from './items-state.js'
import {getItems} from '../connection.js';
import {useEffect, useState} from 'react';



export function Tiles() {
    const[items,setItems]=useState([])
    const[showcasedItems,setItemsToShow]=useState([])
useEffect(async function () {
    setItems(await getItems());
    setItemsToShow(items.slice(0,3));
})

    return (<TilesContainer>
        {showcasedItems.map((items)=>
        <Tile source={items.img} title={items.header} text={items.text} price={items.price} id={items.id}></Tile>)}
    </TilesContainer>)
}
export default Tiles;