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

    const removeList = (event) => {
        event.preventDefault();
        console.log(props.id)
        props.recruitmentSteps.map(rec => {
            if(rec.id === props.id && rec.applicantIds.length > 0) {
                console.log("should not remove")
                return;
            }
        })
       props.setRecruitmentSteps(props.recruitmentSteps.filter(recruitmentStep => recruitmentStep.id !== props.id))
    }
    console.log(props)

    let btnDisabler = false;
    props.recruitmentSteps.map(rec => {
        if(rec.id === props.id && rec.applicantIds.length > 0) {
            console.log("disable btn")
            btnDisabler = true
            return;
        }
    })
        

    console.log(btnDisabler)

    return (
        <form onSubmit={removeList}>
            <TrashBtn disabled={btnDisabler} type="submit" value="Remove" id={props.id}><BsFillTrashFill/></TrashBtn>
        </form>
    
    );

    
}

    export default RemoveListBtn;