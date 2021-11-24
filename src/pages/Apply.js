import React, { useState } from 'react';

import styled from 'styled-components'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


let counter = 9;
let newId = "applicant-" + counter;

const Container = styled.div`

    margin-left: 168px;

`;

const H4 = styled.h4`

    margin-left: 50px;
    margin-top: 30px;

`;

const PublishContainer = styled.div`
    text-align: right;
    padding: 8px;
    margin-right:40px

`;




function Apply({applicantState, setApplicantState}) {
    const [validated, setValidated] = useState(false);
    const [employment, setEmployment] = useState([]);
    const [title, setTitle] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [description, setDescription] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    }

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }



    function addEmployment (event){
        event.preventDefault();
        console.log(event)

        const newEmployment = [...employment, { 
            title: title, 
            period:startDate + " - " + endDate, 
            description: description
        }]
        setEmployment(newEmployment)

        console.log(employment)
    }

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
                phone: form.phoneInputGrid.value,
                experience: employment
            }]
            
            //setApplicantState(newApplicantState);
            console.log(newApplicantState)
        }
            
           
            
        setValidated(true);
    };
    
        
    
      

    
    return(
        <Container>


            
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
                            <Form.Control required type="Text" placeholder='"Stockholm"' />
                            <Form.Control.Feedback type="invalid">
                            Everyone have a last name, right?
                        </Form.Control.Feedback>
                        </FloatingLabel>      
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="emailInputGrid" label="email">
                            <Form.Control required type="Email" />
                            <Form.Control.Feedback type="invalid">
                            Good to have if we want to conntact you!
                        </Form.Control.Feedback>
                        </FloatingLabel>      
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="phoneInputGrid" label="phone">
                            <Form.Control required type="Text" />
                            <Form.Control.Feedback type="invalid">
                            Good to have if we want to conntact you!
                        </Form.Control.Feedback>
                        </FloatingLabel>      
                    </Col>
                  
                </Row>

                <Form.Group className="mb-3 ms-5 me-5" controlId="presentation">
                    <Form.Label className="ms-3 mt-4">Presentation of you and why you want to work at LogoIpsum</Form.Label>
                    <Form.Control required as="textarea" rows={3} />
                    <Form.Control.Feedback type="invalid">
                        This will be the first impression of you, write something nice ;)
                    </Form.Control.Feedback>
                </Form.Group>
                <H4>Work Experience</H4>
                <Row className="g-2 ms-5 me-5 mt-1"> 
                    <Col md>
                        <FloatingLabel controlId="TitleInputGrid" label="Title" onChange={handleTitleChange}>
                            <Form.Control  type="Text" placeholder='"Stockholm"' />

                        </FloatingLabel>      
                    </Col>
                    <Col md> 
                        <FloatingLabel controlId="startDateInputGrid" label="Started date" onChange={handleStartDateChange}>
                            <Form.Control type="Date" />
                        </FloatingLabel>   
                    </Col>
                    <Col md> 
                        <FloatingLabel controlId="endDateInputGrid" label="End date" onChange={handleEndDateChange}>
                            <Form.Control type="Date"/>
  
                        </FloatingLabel>   
                    </Col>
                </Row>
                
                <Form.Group className="mb-3 ms-5 me-5" controlId="jobDescription"onChange={handleDescriptionChange}>
                    <Form.Label className="ms-3 mt-4">Description your job</Form.Label>
                    <Form.Control required as="textarea" rows={3} />
                    
                    <Form.Control.Feedback type="invalid">
                        Write about the employment
                    </Form.Control.Feedback>
                </Form.Group>

 
                <Button variant="primary" onClick={addEmployment} className="ms-5">
                        Add Job
                </Button>

                {employment.map(employmentInMap =>{
                    
                    return(
                        <div>
                            <Row className="g-1 ms-5 me-5 mt-5"> 
                            <Col md>
                                <FloatingLabel controlId="Title" label={employmentInMap.title}>
                                    <Form.Control type="Text" placeholder={employmentInMap.title} readOnly/>
                                </FloatingLabel>      
                            </Col>
                            <Col md> 
                                <FloatingLabel controlId="Period" label={employmentInMap.period}>
                                    <Form.Control type="Text" readOnly placeholder={employmentInMap.period}/>
                                </FloatingLabel>      
                            </Col>
                        </Row>
                        
                        <Form.Group className="mb-3 ms-5 me-5 mt-3" controlId="EmployeeDescription">
                            <Form.Control required as="textarea" rows={3} readOnly placeholder={employmentInMap.description}/>
                        </Form.Group>

                    </div>
                    
                    )
                })}
                 

                <PublishContainer>
                    <Button variant="success" type="submit" className="ms-5">
                        Publish application
                    </Button>
                </PublishContainer>
            </Form>
          
        </Container>
    )
}

export default Apply;