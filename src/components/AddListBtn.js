import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    padding: 8px;
    margin-bottom: 8px;
    margin-top: 8px;
    background-color: orange;
`;

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



export default class AddListBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: '',
          placeholder: 'Title'
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();

        //TODO Fica så man lägger till en tom column i initial state
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
                <Input value={this.state.value} onChange={this.handleChange} placeholder={this.state.placeholder} />
                <br/>
                <StyledInputButton type="submit" value="Add" />
          </form>
        );
      }
    }