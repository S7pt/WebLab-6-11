import { Image } from '../components/utils'
import {UpperContainer, InsectInfo, BottomContainer, ButtonsContainer, Button, PriceContainer,InsectPageDiv} from '../styles/insect-page-styles.styled.js'
import { Link, useParams } from "react-router-dom";
import { add } from '../store/actions.js';
import { getItemById } from '../connection';
import { useState,useEffect } from 'react';
import {useDispatch} from 'react-redux'

export default function InsectPage() {

    const { id } = useParams();
    const [insect,setInsect]=useState([]);
    const dispatch=useDispatch();
    
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
                    <Button onClick={() => dispatch(add(insect))}>Add to Cart</Button>
                </ButtonsContainer>
            </BottomContainer>
        </InsectPageDiv>
    );
} 