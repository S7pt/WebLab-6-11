import { Image } from '../components/utils'
import {UpperContainer, InsectInfo, BottomContainer, ButtonsContainer, Button, PriceContainer,InsectPageDiv} from '../styles/insect-page-styles.styled.js'
import { Link, useParams } from "react-router-dom";
import spider from '../assets/spider-pet.jpg';
import caterpillar from '../assets/caterpillar-pet.jpg';
import moth from '../assets/moth-pet.jpg';

export default function InsectPage(props) {

    const { id } = useParams();
    const item = props.itemsList.find(item => (item.id === parseInt(id)));

    return (
        <InsectPageDiv>
            <UpperContainer>
                <Image img={item.img} height='400px' width='360px' />
                <InsectInfo>
                    <h1>{item.header}</h1>
                    <p>{item.text}</p>
                    <PriceContainer>${item.price}</PriceContainer>            
                </InsectInfo>
            </UpperContainer>
            <BottomContainer>
                
                <ButtonsContainer>
                    <Link to="/catalogue">
                        <Button>Go Back</Button>
                    </Link>
                    <Button>Add to Cart</Button>
                </ButtonsContainer>
            </BottomContainer>
        </InsectPageDiv>
    );
} 