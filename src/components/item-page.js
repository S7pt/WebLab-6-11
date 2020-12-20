import { Image } from '../components/utils'
import {UpperContainer, InsectInfo, BottomContainer, ButtonsContainer, Button, PriceContainer,InsectPageDiv} from '../styles/insect-page-styles.styled.js'
import { Link, useParams } from "react-router-dom";
import spider from '../assets/spider-pet.jpg';
import caterpillar from '../assets/caterpillar-pet.jpg';
import moth from '../assets/moth-pet.jpg';
import { getItemById } from '../connection';
import { useState,useEffect } from 'react';

export default function InsectPage() {

    const { id } = useParams();
    const [insect,setInsect]=useState([]);
    useEffect(() => {
        (async function () {
            setInsect(await getItemById(id));
        })()
    });

    return (
        <InsectPageDiv>
            <UpperContainer>
                <Image img={insect.img} height='400px' width='360px' />
                <InsectInfo>
                    <h1>{insect.header}</h1>
                    <p>{insect.text}</p>
                    <PriceContainer>${insect.price}</PriceContainer>            
                </InsectInfo>
            </UpperContainer>
            <BottomContainer>
                
                <ButtonsContainer>
                    <Link to="/catalogue">
                        <Button>Go Back</Button>
                    </Link>
                    <Button>Add to Cart</Button>
                    <Button onClick={() => dispatch(add(equip))}>Add to Cart</Button>
                </ButtonsContainer>
            </BottomContainer>
        </InsectPageDiv>
    );
} 