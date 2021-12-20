import React, { useState } from 'react';

import styled from 'styled-components'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import colorPicker from '../testData/colorPicker';
import StyledButton from '../components/StyledButton';
import Footer from '../components/Footer';

let loggedIn = false;
const Container = styled.div`
    font-family: 'Roboto', sans-serif; 
    position: fixed;
    text-align: center;
    background-color: ${colorPicker.primary};
    height: 100%;
    width: 100%;
    z-index: 1,
    top: 0;
    left: 0;
    overflow-x: hidden;
    padding-top: 16px;
`;

const InnerContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10%;
    
`;

const BtnContainer = styled.div`
    text-align: right;
    padding: 8px;
    margin-right:40px
`;


const StyleH1 = styled.h1`
    color: ${colorPicker.fifth};
    margin-top: 8%;    
`;

function Login({candidateState, setActiveCandidate, setCandidateLoggedIn, setAdminLoggedIn, setActiveAdmin, candidateLoggedIn, adminLoggedIn, setActiveJob}) {
    const [validated, setValidated] = useState(false);
    const Navigate = useNavigate();

    if(candidateLoggedIn===true || adminLoggedIn===true){
        Swal.fire({
            icon: 'info',
            title: 'Already logged in',
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: 'Home',
            cancelButtonText:'Log out'
        }).then((result) => {
            if (result.isConfirmed) {
                Navigate("/home")
            }else{
                setCandidateLoggedIn(false)
                setAdminLoggedIn(false)
            }
        })
    }

    
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.stopPropagation();
        }else{
            // check Admin login, this will be done properly in backend later
            if(form.emailInputGrid.value === "adminmail@gmail.com" && form.passwordInputGrid.value === "1234"){
                
                setActiveAdmin({
                    id: 'admin-1', 
                    firstName: "Patrik",
                    lastName: "Melander",
                    email: "adminmail@gmail.com",
                    password: "1234",
                })
                setCandidateLoggedIn(false)
                setAdminLoggedIn(true)
                loggedIn = true
                Navigate("/home")
            }else{
                 //check CandidateLogin, this will be done properly in backend later
                 candidateState.map(candidateInMap => {
                     if(candidateInMap.email.toLowerCase()===form.emailInputGrid.value.toLowerCase() && form.passwordInputGrid.value===candidateInMap.password){
                        
                        setActiveCandidate({
                            id: candidateInMap.id, 
                            nickName: candidateInMap.nickName,
                            firstName: candidateInMap.firstName,
                            LastName: candidateInMap.lastName,
                            presentation: candidateInMap.presentation,
                            email: candidateInMap.email,
                            password: candidateInMap.password,
                            phone: candidateInMap.phone ,
                            experience: candidateInMap.experience,
                            education: candidateInMap.education,
                            personality: candidateInMap.personality,
                            competencies:candidateInMap.competencies
                        })
                        setCandidateLoggedIn(true)
                        loggedIn = true
                        setAdminLoggedIn(false)
                        setValidated(true)
                        setActiveJob("")
                        Navigate("/home")
                    }
                    return null;
                 })
             }
             if(loggedIn===false){
                Swal.fire({
                    icon: 'error',
                    title: 'Could not log in...',
                    text: 'Did not find a matching email and password',
                    showDenyButton: false,
                    showCancelButton: true,
                    confirmButtonText: 'Register',
                    cancelButtonText:'Try again'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Navigate("/candidate/register")
                    } 
                })
            }
        }

        setValidated(true);
    };
    
        
    return(
        <Container>
            

            <InnerContainer>
                <StyleH1>Login!</StyleH1>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="g-1 ms-5 me-5 mt-5">
                       
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



                    <BtnContainer>
                        <StyledButton variant="success" type="submit" className="ms-5" input={"login"}/>
                    </BtnContainer>
                </Form>
            </InnerContainer>
            <Footer/>
        </Container>
    )
}

export default Login;