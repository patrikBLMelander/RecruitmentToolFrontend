import React from "react";
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

    console.log(props.recruitmentSteps)
    const removeList = (event) => {
        event.preventDefault();
       console.log(props.recruitmentSteps)

       props.setRecruitmentSteps(props.recruitmentSteps.filter(recruitmentStep => recruitmentStep.id !== props.id))
    }

    return (
        <form onSubmit={removeList}>
            <TrashBtn type="submit" value="Remove" id={props}><BsFillTrashFill/></TrashBtn>
        </form>
    
    );

    
}

    export default RemoveListBtn;