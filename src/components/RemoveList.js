import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { BsFillTrashFill } from "react-icons/bs";


const TrashBtn = styled.button`
    display: flex;
    background-color: black;
    color: white;
    font-size: 15px;
    padding: 8px 80px 8px 80px;
    border-radius: 5px;
    margin: 10px 10px;
    cursor: pointer;
    align-content: center;
    
`;



function RemoveListBtn (props) {

    const removeList = (event) => {
        event.preventDefault();
        props.setRecruitmentSteps(props.recruitmentSteps.filter(recruitmentStep => recruitmentStep.id !== props.id))
    }

    

    
    const [isBtnDisabled, setisBtnDisabled]= useState(true) 
    useEffect( ()=> {
        if (props.applicants>0) {
            setisBtnDisabled(true)  ; //button remains disabled
        } else {
            setisBtnDisabled(false); //button is enabled
        }
        
   },[props.applicants])
    return (
        <form onSubmit={removeList}>
            <TrashBtn disabled= {isBtnDisabled} type="submit" value="Remove" id={props.id}><BsFillTrashFill/></TrashBtn>
        </form>
    
    );

    
}

    export default RemoveListBtn;