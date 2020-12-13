import { TilesContainer } from "../styles/tiles-styles.styled";
import {Tile} from "../components/tile.js";
import {items} from './items-state.js'

const slicedItems=items.slice(0,3)

export function Tiles() {
    return (<TilesContainer>
        {slicedItems.map((items)=>
        <Tile source={items.img} title={items.header} text={items.text} price={items.price} id={items.id}></Tile>)}
    </TilesContainer>)
}
export default Tiles;