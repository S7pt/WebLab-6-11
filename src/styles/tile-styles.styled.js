import styled from "styled-components";

export const TileContainer=styled.div`
    margin-top:10px;
    height:500px;
    width:350px;
    border:6px #545454 solid;
    display:flex;
    background-color:#FFFCFC;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    border-radius:10px;
    margin-bottom:15px;
`;
export const TileTitle=styled.h1`
    font-family:Arial, Helvetica, sans-serif;
    `;
export const TileText=styled.p`
    font-family:Arial, Helvetica, sans-serif;
    width:300px;
    text-align:center;
    `;
export const TilePriceTag=styled.p`
    font-family:Arial, Helvetica, sans-serif;
    font-size:14px;
    `;

export const TileButton=styled.a`
    border-radius:15px;
    border-color:black;
    height:40px;
    width:100px;
    margin-bottom:5px;
    background-color:#000ed0;
    color:white;
    text-decoration:none;
    text-align:center;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center`