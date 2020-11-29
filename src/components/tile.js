import { TileContainer, TileTitle, TileText,TilePriceTag,TileButton } from "../styles/tile-styles.styled";

function Image({source,height,width}){
    return(<img src={source} height={height} width={width}></img>)
}
export function Tile({source,title,text,price}){
    return(
    <TileContainer>
        <Image source={source} height="250px" width="250px" alt=""></Image>
        <TileTitle>{title}</TileTitle>
        <TileText>{text}</TileText>
        <TilePriceTag>Price:{price}$</TilePriceTag>
        <TileButton>View More</TileButton>
    </TileContainer>)
}
export default Tile;