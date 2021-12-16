import React, { useState } from "react";
import styled from 'styled-components';
import colorPicker from '../testData/colorPicker';
import StyledButton from './StyledButton';

let counter = 5;
let newId = "recruitmentStep-" + counter;

const Input = styled.input`
    color: ${colorPicker.fifth};
    font-size: 1em;
    border: 2px solid  ${colorPicker.fifth};
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
            <StyledButton type="submit" input="Add" />
      </form>

    );

  }

    export default AddListBtn