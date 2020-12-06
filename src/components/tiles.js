import { TilesContainer } from "../styles/tiles-styles.styled";
import {Tile} from "../components/tile.js";
import moth from "../assets/moth-pet.jpg";
import spider from "../assets/spider-pet.jpg";
import caterpillar from "../assets/caterpillar-pet.jpg";
import {items} from '../components/items.js'

const slicedItems=items.slice(0,3)

export function Tiles() {
    return (<TilesContainer>
        {slicedItems.map((items)=>
        <Tile source={items.img} title={items.header} text={items.text} price={items.price}></Tile>)}
    </TilesContainer>)
}
export default Tiles;