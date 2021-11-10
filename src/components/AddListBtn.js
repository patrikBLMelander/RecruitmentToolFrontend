import React, { useState } from "react";
import styled from 'styled-components'

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



function AddListBtn (props) {

    const [value, setvalue] = useState("")  
                        
    const handleChange = (event) => {
        setvalue(event.target.value);
    }
    
    const handleSubmit = (event) => {
    alert('Added new list with name: ' + value);
    event.preventDefault();

        //TODO Skicka info till databasen för att skapa en ny lista
      }
    
        return (
            <>
          <form onSubmit={handleSubmit}>
                <Input value={value} onChange={handleChange} placeholder="Title" />

                <br/>
                <StyledInputButton type="submit" value="Add" />
          </form>
          {/* <pre>{JSON.stringify(value, null, 1)}</pre> */}
          </>
        );

    }

    export default AddListBtn