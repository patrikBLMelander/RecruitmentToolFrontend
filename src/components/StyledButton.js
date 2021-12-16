import React from 'react';
import styled from 'styled-components'
import colorPicker from '../testData/colorPicker';
import { useNavigate } from "react-router-dom";

const StyledBtn = styled.button`
    margin: 3px;
    width: 140px;
    height: 45px;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: ${colorPicker.buttonText};
    background-color: ${colorPicker.secondary};
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px ${colorPicker.secondary};
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    &:hover {
        background-color: ${colorPicker.fourth};
        box-shadow: 0px 15px 20px ${colorPicker.fourth};
        color: ${colorPicker.buttonHoverText}
        transform: translateY(-7px);
    }
    
`;

function StyledButton({navigate, input}) {

    const Navigate = useNavigate();

    function navigateTo(){
        if(navigate==="login") 
        Navigate("/login")
        if(navigate==="register") 
        Navigate("/candidate/register")
    }

    return(
        <div>
            <StyledBtn onClick={navigateTo}>{input}</StyledBtn>
        </div>
    )
}

export default StyledButton;

