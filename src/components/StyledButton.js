import React from 'react';
import styled from 'styled-components'
import colorPicker from '../testData/colorPicker';
import { useNavigate } from "react-router-dom";

function StyledButton({input, colorScheme, onClick, disabled}) {

    if(disabled===undefined) {disabled=false}

    if(onClick===undefined) {onClick= function test(){console.log("test")}}

    return(
        <div>
            <StyledBtn onClick={() => onClick()} disabled={disabled}>{input}</StyledBtn>
        </div>
    )
}

export default StyledButton;

const StyledBtn = styled.button`
    margin: 3px;
    width: 140px;
    height: 45px;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: ${colorPicker.text};
    background-color: ${colorPicker.secondary};
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px ${colorPicker.third};
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    &:hover {
        background-color: ${colorPicker.fourth};
        box-shadow: 0px 15px 20px ${colorPicker.fourth};
        color: ${colorPicker.text};
        transform: translateY(-3px);
    }
    
`;

