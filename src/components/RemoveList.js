import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { BsFillTrashFill } from "react-icons/bs";
import colorPicker from '../testData/colorPicker';


const TrashBtn = styled.button`
    display: flex;
    background-color:${colorPicker.recruitmentSteps.removeBtn};
    color: ${colorPicker.recruitmentSteps.removeBtnText};
    font-size: 15px;
    padding: 8px 80px 8px 80px;
    border-radius: 5px;
    margin-top: 8px;
    margin-bottom: 8px;
    margin-left: auto; 
    margin-right: auto; 
    cursor: pointer;
    align-content: center;
    &:hover {
        background-color: ${colorPicker.recruitmentSteps.removeBtnText};
        box-shadow: 0px 15px 20px ${colorPicker.recruitmentSteps.removeBtnText};
        color: ${colorPicker.recruitmentSteps.removeBtn};
    }
    
`;



function RemoveListBtn (props) {


    const removeList = (event) => {
        event.preventDefault();

        
        let test;
        props.jobOfferings.map((jobOfferingsInMap, index)=>{
            if(jobOfferingsInMap.id===props.activeJobId){

                props.jobOfferings[index].recruitmentSteps = [...props.jobOfferings[index].recruitmentSteps.filter(recruitmentStep => recruitmentStep.id !== props.id)]
                test=[...props.jobOfferings]
            }
            return null;
        }
        
        )

        props.setJobOfferings(test)
    }

    

    
    const [isBtnDisabled, setisBtnDisabled]= useState(true) 
    useEffect( ()=> {
        if (props.candidates>0) {
            setisBtnDisabled(true)  ; //button remains disabled
        } else {
            setisBtnDisabled(false); //button is enabled
        }
        
    },[props.candidates])
    return (
        <form onSubmit={removeList}>
            <TrashBtn disabled= {isBtnDisabled} type="submit" value="Remove" id={props.id}><BsFillTrashFill/></TrashBtn>
        </form>
    
    );

    
}

    export default RemoveListBtn;