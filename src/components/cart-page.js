import React, { useEffect, useState } from 'react';
import {
    CartPageContainer, InsectsCartContaier, CountButton,
    DeleteButton, NavButtonsContainer, NavButton, EmptyStyle
} from '../styles/cart-page-styles.styled';
import { Link } from "react-router-dom";
import { Image } from '../components/utils';
import { useDispatch } from 'react-redux';
import { remove, increment, decrement } from '../store/actions.js';
import { useSelector } from 'react-redux';

export default function CartPage() {

    const dispatch = useDispatch();
    const insects = useSelector(state => state);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotalPrice(insects.reduce((counter, item) =>
            (counter + item.price * item.counter), 0))
    }, [insects])

    if (!insects.length) { return <EmptyStyle>Cart is Currently Empty!</EmptyStyle> }
    return (
        <CartPageContainer>
            <h1>Shopping Cart</h1>
            {insects.map(insects =>
                <InsectsCartContaier key={insects.id}>
                    <Link style={{ display: 'flex', textDecoration: 'none', color: 'black', 'align-items': 'center'  }} to={"/insects/" + insects.id}>
                        <Image img={insects.img} height='150px' width='150px'/>
                        <h1>{insects.header}</h1>
                    </Link>
                    <CountButton onClick={() => (dispatch(increment(insects)))}>+</CountButton>
                    <h2>{insects.counter}</h2>
                    <CountButton onClick={() => (dispatch(decrement(insects)))}>-</CountButton>
                    <DeleteButton onClick={() => (dispatch(remove(insects)))}>Delete</DeleteButton>
                    <h2>{insects.price * insects.counter}$</h2>
                </InsectsCartContaier>
            )}
            <h1>Total: {totalPrice}$</h1>
            <NavButtonsContainer>
                <Link to='/catalogue'>
                    <NavButton>Back</NavButton>
                </Link>
                <Link to='/checkout'>
                <NavButton >Continue</NavButton>
                </Link>
            </NavButtonsContainer>
        </CartPageContainer>
    );
}