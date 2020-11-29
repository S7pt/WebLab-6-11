import { TilesContainer } from "../styles/tiles-styles.styled";
import {Tile} from "../components/tile.js";
import moth from "../assets/moth-pet.jpg";
import spider from "../assets/spider-pet.jpg";
import caterpillar from "../assets/caterpillar-pet.jpg";
import {insects} from '../components/items.js'

const items=insects.slice(0,3)

export function Tiles() {
    return (<TilesContainer>
        {items.map((items)=>
        <Tile source={items.img} title={items.header} text={items.text} price={items.price}></Tile>)}
    </TilesContainer>)
}
export default Tiles;