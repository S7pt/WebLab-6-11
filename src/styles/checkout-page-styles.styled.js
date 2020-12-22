import styled from 'styled-components'

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:white;
    margin-bottom:10px;
    h1 {
        font-size: 48px;
        font-weight: 700;
    }
`

export const FieldsContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 900px;
    height: 400px;
`

export const Field = styled.div`
    display: flex;
    height: 150px;
    width: 40%;
    border-radius:20px;
    flex-direction: column;
`

export const Label = styled.label`
    font-size: 28px;
    font-weight: 700;
`

export const Input = styled.input`
    -webkit-appearance: none;
    height: 36px;
    border: 3px solid black;
    padding: 0 8px;
    font-size: 20px;
    border-radius:20px;
    background-color:#dfdfdf;
`

export const Button = styled.button`
    width: 180px;
    height: 50px;
    font-size: 32px;
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
    margin-bottom:10px;
`

export const Error = styled.span`
    margin-left: 6px;
    font-size: 18px;
    font-weight: 600;
` 