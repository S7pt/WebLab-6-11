import styled from 'styled-components'

export const SuccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
    background-color:white;
    height:350px;
    margin-top: 20px;
    margin-bottom: 15px;
    text-decoration:none;
    h1 {
        font-size: 60px;
        margin: 5px 0;
    }
    div {
        font-size: 36px;
        font-weight: 700;
        margin-bottom: 30px;
    }
    button {
    border-radius:25px;
    border-color:black;
    height:60px;
    width:400px;
    margin-left:20px;
    margin-right:20px;
    background-color:#000ed0;
    color:white;
    text-align:center;
    font-size:30px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    }
`