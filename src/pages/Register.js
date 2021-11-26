import React, { useState } from 'react';

import styled from 'styled-components'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useNavigate } from "react-router-dom";


let counter = 9;
let newId = "applicant-" + counter;

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

const StyledH4 = styled.h4`
    color: white;
    font-family: 'Roboto', sans-serif;      
    margin-top: 10%;
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

function Registrer({applicantState, setApplicantState, activeCandidate, setActiveCandidate}) {
    const [validated, setValidated] = useState(false);
    const Navigate = useNavigate();

    
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.stopPropagation();
        }else{
            counter = counter + 1;
            newId = "applicant-" + counter

            const newApplicantState = [...applicantState,  { 
                id: newId, 
                nickName: 'Cat',
                firstName: form.firstNameInputGrid.value,
                LastName: form.lastNameInputGrid.value,
                presentation: form.presentation.value,
                email: form.emailInputGrid.value,
                password: form.passwordInputGrid.value,
                phone: form.phoneInputGrid.value,
                experience: []
            }]
            
            setApplicantState(newApplicantState);
        }
            
           
            
        setValidated(true);
        Navigate("/home")
    };
    
        
    return(
        <Container>


            <InnerContainer>
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
                        <Col md>
                            <FloatingLabel controlId="phoneInputGrid" label="phone">
                                <Form.Control required type="Text" placeholder='"Melander"'/>
                                <Form.Control.Feedback type="invalid">
                                Good to have if we want to conntact you!
                            </Form.Control.Feedback>
                            </FloatingLabel>      
                        </Col>
                    
                    </Row>

                    <Form.Group className="mb-3 ms-5 me-5" controlId="presentation">
                        <StyledH4>Describe your self and why you are so assume!</StyledH4> 
                        <Form.Control required as="textarea" rows={3} />
                        <Form.Control.Feedback type="invalid">
                            This will be the first impression of you, write something nice ;)
                        </Form.Control.Feedback>
                    </Form.Group>

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