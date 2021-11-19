import React, { useState } from "react";
import styled from 'styled-components';

let counter = 5;
let newId = "recruitmentStep-" + counter;

const StyledInputButton = styled.input`
  display: flex;
  background-color: black;
  color: white;
  font-size: 15px;
  padding: 8px 40px;
  border-radius: 5px;
  margin: 10px 10px;
  cursor: pointer;
`;

const Input = styled.input`
    color: black;
    font-size: 1em;
    border: 2px solid lightgray;
    border-radius: 3px;
    margin: 0.5em;
    padding: 0.5em;
  `;



function AddListBtn ({recruitmentSteps, setRecruitmentSteps}) {
    
    const [value, setvalue] = useState("")  
                        
    const handleChange = (event) => {
        setvalue(event.target.value);
    }
    
    const addList = (event) => {
        event.preventDefault();
        
        counter = counter + 1;
        newId = "recruitmentStep-" + counter

        setRecruitmentSteps(prevRecruitmentSteps => (
        [...prevRecruitmentSteps, {id:newId, title: value, applicantIds:[]}]
        ))
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