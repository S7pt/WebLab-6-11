import { TileContainer, TileTitle, TileText,TilePriceTag,TileButton } from "../styles/tile-styles.styled";
import {Link } from "react-router-dom";

function Image({source,height,width}){
    return(<img src={source} height={height} width={width}></img>)
}
export function Tile({source,title,text,price,id}){
    return(
    <TileContainer>
        <Image source={source} height="250px" width="250px" alt=""></Image>
        <TileTitle>{title}</TileTitle>
        <TileText>{text}</TileText>
        <TilePriceTag>Price:{price}$</TilePriceTag>
        <TileButton>
        <Link to={"/insects/"+id} style={{ color: 'inherit', textDecoration: 'inherit'}}>View More</Link>
        </TileButton>
    </TileContainer>)
}
export default Tile;