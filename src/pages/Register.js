import React, { useState } from 'react';

import styled from 'styled-components'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useNavigate } from "react-router-dom";


let counter = 9;
let newId = "candidate-" + counter;

const Container = styled.div`
    font-family: 'Roboto', sans-serif; 
    position: fixed;
    text-align: center;
    background-color: #3b3d40;
    height: 100%;
    width: 100%;
    z-index: 1,
    top: 0;
    left: 0;
    overflow-x: hidden;
    padding-top: 16px;
    InnerContainer
`;

const InnerContainer = styled.div`
    font-family: 'Roboto', sans-serif; 
    display: flex;
    justify-content: center;
    margin-top: 10%;
    
`;

const PublishContainer = styled.div`
    text-align: right;
    padding: 8px;
    margin-right:40px

`;


const StyledButton = styled.button`
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
        background-color: #2EE59D;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        transform: translateY(-7px);
    }
    
`;

const StyleH1 = styled.h1`
    font-family: 'Roboto', sans-serif;      
    margin-top: 8%;
`;

function Registrer({candidateState, setCandidatetState, activeCandidate, setActiveCandidate, setCandidateLoggedIn}) {
    const [validated, setValidated] = useState(false);
    const Navigate = useNavigate();

    
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.stopPropagation();
        }else{
            counter = counter + 1;
            newId = "candidate-" + counter

            const newCandidateState = [...candidateState,  { 
                id: newId, 
                nickName: 'Cat',
                firstName: form.firstNameInputGrid.value,
                LastName: form.lastNameInputGrid.value,
                presentation: "",
                email: form.emailInputGrid.value,
                password: form.passwordInputGrid.value,
                phone: form.phoneInputGrid.value,
                experience: []
            }]
  
            setCandidatetState(newCandidateState);
        }
            
           
            
        setValidated(true);
        setActiveCandidate({
            id: newId, 
            nickName: 'Cat',
            firstName: form.firstNameInputGrid.value,
            LastName: form.lastNameInputGrid.value,
            presentation: "",
            email: form.emailInputGrid.value,
            password: form.passwordInputGrid.value,
            phone: form.phoneInputGrid.value,
            experience: []
        })
        setCandidateLoggedIn(true)
        Navigate("/home")
    };
    
        
    return(
        <Container>
            

            <InnerContainer>
                <StyleH1>Our New Star? </StyleH1>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="g-1 ms-5 me-5 mt-5">
                        <Col md>
                            <FloatingLabel controlId="firstNameInputGrid" label="First name">
                            <Form.Control required type="Text" placeholder='"Patrik"' />
                            <Form.Control.Feedback type="invalid">
                            Everyone have a first name, right?
                            </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel controlId="lastNameInputGrid" label="Last name">
                                <Form.Control required type="Text" placeholder='"Melander"' />
                                <Form.Control.Feedback type="invalid">
                                Everyone have a last name, right?
                            </Form.Control.Feedback>
                            </FloatingLabel>      
                        </Col>
                        <Col md>
                            <FloatingLabel controlId="phoneInputGrid" label="phone">
                                <Form.Control required type="Text" placeholder='"Melander"'/>
                                <Form.Control.Feedback type="invalid">
                                Good to have if we want to conntact you!
                            </Form.Control.Feedback>
                            </FloatingLabel>      
                        </Col>
                        </Row>
                        <Row className="g-1 ms-5 me-5 mt-5">
                     <Col md>
                            <FloatingLabel controlId="emailInputGrid" label="email">
                                <Form.Control required type="Email" placeholder='"Melander"'/>
                                <Form.Control.Feedback type="invalid">
                                This is needed to log in!
                            </Form.Control.Feedback>
                            </FloatingLabel>      
                        </Col>
                        <Col md>
                            <FloatingLabel controlId="passwordInputGrid" label="password">
                                <Form.Control required type="password" placeholder='"Melander"'/>
                                <Form.Control.Feedback type="invalid">
                                This is needed to log in!
                            </Form.Control.Feedback>
                            </FloatingLabel>      
                        </Col>

                    
                    </Row>



                    <PublishContainer>
                        <StyledButton variant="success" type="submit" className="ms-5">
                            Register
                        </StyledButton>
                    </PublishContainer>
                </Form>
            </InnerContainer>
          
        </Container>
    )
}

export default Registrer;