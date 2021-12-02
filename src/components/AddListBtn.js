import React, { useState } from "react";
import styled from 'styled-components';

let counter = 5;
let newId = "recruitmentStep-" + counter;

const StyledInputButton = styled.input`
margin: 3px;
width: 140px;
height: 45px;
font-family: 'Roboto', sans-serif;
font-size: 11px;
text-transform: uppercase;
letter-spacing: 2.5px;
font-weight: 500;
color: #000;
background-color: #fff;
border: none;
border-radius: 45px;
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
transition: all 0.3s ease 0s;
cursor: pointer;
outline: none;
&:hover {
    background-color: #62666e;
    box-shadow: 0px 15px 20px #838891;
    color: #fff;
    transform: translateY(-7px);
}
`;

const Input = styled.input`
    color: black;
    font-size: 1em;
    border: 2px solid lightgray;
    border-radius: 3px;
    margin: 0.5em;
    padding: 0.5em;
  `;

  



function AddListBtn ({jobOfferings, setJobOfferings, activeJobId}) {

    
    const [value, setvalue] = useState("")  
                        
    const handleChange = (event) => {
        setvalue(event.target.value);
    }
    
    const addList = (event) => {
        event.preventDefault();
        counter = counter + 1;
        newId = "recruitmentStep-" + counter


        let test
        jobOfferings.map((jobOfferingInMap, index) =>{
          if(jobOfferingInMap.id===activeJobId){

            jobOfferings[index].recruitmentSteps = [...jobOfferingInMap.recruitmentSteps, {id:newId, title: value, candidateIds:[]}]
            test=[...jobOfferings]
          }
          return null
        })
        setJobOfferings(test);



    };
    
    
    return (

      <form onSubmit={addList}>
            <Input value={value} onChange={handleChange} placeholder="Title" />
            <br/>
            <StyledInputButton type="submit" value="Add" />
      </form>

    );

  }

    export default AddListBtn