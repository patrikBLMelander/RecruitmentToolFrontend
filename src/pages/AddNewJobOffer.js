import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import colorPicker from '../testData/colorPicker';
import StyledButton from '../components/StyledButton';


let counter = 8;
let newId = "jobOffering-" + counter;

const Container = styled.div`
background-color: ${colorPicker.primary};
color: ${colorPicker.text};
align-content: center;
position: fixed;
padding-bottom: 100%;
padding-left: 163px;
padding-top: 50px;
z-index: 0;
width: 100%;
`;
 const BtnDiv = styled.div`
    margin-left: 40px
 `



function AddNewJobOffer({adminLoggedIn, candidateLoggedIn, jobOfferings, activeJob, setJobOfferings, setAdminLoggedIn, setCandidateLoggedIn}) {
    const [validated, setValidated] = useState(false);
    
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {;
          event.stopPropagation();
        }else{
            counter = counter + 1;
            newId = "jobOffering-" + counter

            const newJobOffering = [...jobOfferings, {
                id: newId,
                title: form.titleInputGrid.value,
                location: form.locationInputGrid.value,
                publishDate: form.dateInputGrid.value,
                applyDate: form.dateInputGrid.value,
                preview: form.preview.value,
                companyDescription: form.companyDescription.value,
                aboutRole: form.aboutTheRole.value,
                imageUrl:"https://picsum.photos/150/150?random=" + counter,
                recruitmentSteps: [
                {
                    id: 'recruitmentStep-1',
                    title: 'Applied',
                    candidateIds: [],
                    },
                    {
                    id: 'recruitmentStep-2',
                    title: 'Interesting',
                    candidateIds: [],
                    },
                    {
                    id: 'recruitmentStep-3',
                    title: 'Interview',
                    candidateIds: [],
                    },
                    {
                    id: 'recruitmentStep-4',
                    title: 'Hire',
                    candidateIds: [],
                    },
                    {
                    id: 'recruitmentStep-5',
                    title: 'Dismiss',
                    candidateIds: [],
                    }
                ],
            }
            ]
           
            setJobOfferings(newJobOffering);
            navigate("/home")
        }
    
        setValidated(true);
    };


    return(
        <div>
        <Navbar jobOfferings={jobOfferings} setAdminLoggedIn={setAdminLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn} adminLoggedIn={adminLoggedIn} candidateLoggedIn={candidateLoggedIn}/>
        <Header activeJob={activeJob}/>
        <Container>    
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="g-2 ms-5 me-5 mt-5">
                    <Col md>
                        <FloatingLabel controlId="titleInputGrid" label="Titel">
                        <Form.Control required type="Text" placeholder='"Java utvecklare"' />
                        <Form.Control.Feedback type="invalid">
                        Please choose a title.
                        </Form.Control.Feedback>
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="locationInputGrid" label="Location">
                            <Form.Control required type="Text" placeholder='"Stockholm"' />
                            <Form.Control.Feedback type="invalid">
                            Please choose a location.
                        </Form.Control.Feedback>
                        </FloatingLabel>      
                    </Col>
                    <Col>
                        <FloatingLabel controlId="dateInputGrid" label="Last day to apply">
                            <Form.Control required type="Date" placeholder='"Stockholm"' />
                            <Form.Control.Feedback type="invalid">
                            Please choose a last day to apply date.
                        </Form.Control.Feedback>
                        </FloatingLabel>   
                    </Col>
                </Row>
                <Form.Group className="mb-3 ms-5 me-5" controlId="preview">
                    <Form.Label className="ms-3 mt-4">Preview text</Form.Label>
                    <Form.Control required as="textarea" rows={3} />
                    <Form.Control.Feedback type="invalid">
                        This text is the first thing a future co-worker will see, write something nice ;)
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3 ms-5 me-5" controlId="companyDescription">
                    <Form.Label className="ms-3 mt-4">Description of company</Form.Label>
                    <Form.Control required as="textarea" rows={3} />
                    <Form.Control.Feedback type="invalid">
                        Here is the place to write interesting things about our company.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3 ms-5 me-5" controlId="aboutTheRole">
                    <Form.Label className="ms-3 mt-4">About the role</Form.Label>
                    <Form.Control required as="textarea" rows={3} />
                    <Form.Control.Feedback type="invalid">
                        Here is the place to write about the role.
                    </Form.Control.Feedback>
                </Form.Group>
                <BtnDiv>   
                <StyledButton variant="primary" type="submit" className="ms-5" input={"Publish"}></StyledButton>
                </BtnDiv>
            </Form>
        </Container>
        <Footer/>
        </div>
    )
}

export default AddNewJobOffer;