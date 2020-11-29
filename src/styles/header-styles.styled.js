import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color:#FFF;
    display: flex;
    align-items:center;
    width:100%;
    height:80px;
    padding-left:40px;
    border-bottom:2px solid black;
`;

export const HeaderButtons=styled.div`
    font-family:'Helvetica';
    margin-top:5px;
    margin-left:700px;
    width:450px;
    height:37px;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
`;

export const HeaderButton=styled.a`
    font-family:'Helvetica';
    font-size:25px;
    text-decoration:none;
    cursor: pointer;
    &:hover{
        border-bottom:2px solid gray;
    }
`;