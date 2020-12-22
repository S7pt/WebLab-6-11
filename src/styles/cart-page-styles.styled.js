import styled from 'styled-components'

export const CartPageContainer = styled.div`
    display: flex;
    width: 1000px;
    margin: 0 auto;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h1 {
        font-size: 48px;
    }
`

export const InsectsCartContaier = styled.div`
    height: 160px;
    border:2px solid black;
    margin-top:15px;
    background:white;
    width: 1050px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    h1 {
        width: 400px;
        margin: 0 20px 0 20px;
        font-size: 30px;
    }
    h2 {
        
        font-size: 32px;
    }
`

export const CountButton = styled.button`
    border-radius:25px;
    border-color:black;
    height:40px;
    width:40px;
    margin-top:5px;
    background-color:#000ed0;
    color:white;
    text-decoration:none;
    text-align:center;
    font-size:30px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`

export const DeleteButton = styled.button`
    border-radius:25px;
    border-color:black;
    height:50px;
    width:160px;
    margin-left:20px;
    margin-right:20px;
    background-color:#000ed0;
    color:white;
    text-decoration:none;
    text-align:center;
    font-size:30px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`

export const NavButtonsContainer = styled.div`
    width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const NavButton = styled.button`
    width: 180px;
    height: 50px;
    font-size: 26px;
    font-weight: 700;
    border-radius:25px;
    border-color:black;
    background-color:#000ed0;
    color:white;
    text-align:center;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`

export const EmptyStyle = styled.h1`
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 64px;
    font-weight: 700;
`