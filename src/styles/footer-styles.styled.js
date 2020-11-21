import styled from "styled-components";

export const FooterContainer = styled.footer`
    margin-top:5px;
    width:100%;
    background-color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-top:2px solid black;
`;
export const FooterContent=styled.div`
    margin:0 auto;
    margin-top:15px;
    width:1200px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    border-bottom:2px black solid;
`;
export const FooterMedia=styled.div`
    width:150px;
    margin-top: 20px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`
export const FooterInformation=styled.p`
    font-size:10px;
    width:150px;
`
export const DividingLine=styled.br`
    margin-top:15px;
    width:100%;
    height:2px;
    background-color:black;
`;
export const CopyrightText=styled.p`
    font-size:14px;
    margin-top:10px;
    margin-bottom:15px;
`