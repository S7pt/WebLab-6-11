import { TilesContainer } from "../styles/tiles-styles.styled";
import {Tile} from "../components/tile.js";
import moth from "../assets/moth-pet.jpg";
import spider from "../assets/spider-pet.jpg";
import caterpillar from "../assets/caterpillar-pet.jpg";

export function Tiles() {
    return (<TilesContainer>
        <Tile source={moth} title="Betty the Moth" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat" price="50"/>
        <Tile source={spider} title="Muffet the Spider" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat" price="100"/>
        <Tile source={caterpillar} title="Snek the Caterpillar" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat" price="30"/>
    </TilesContainer>)
}
export default Tiles;