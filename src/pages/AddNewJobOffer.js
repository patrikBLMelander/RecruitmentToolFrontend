import React, { useState } from 'react';

import styled from 'styled-components'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';



const Container = styled.div`

    margin-left: 168px;

`;

// const CompetenceP = styled.p`
//     border: 1px solid lightgrey;
//     border-radius: 2px;
//     padding: 8px;
//     margin-bottom: 8px;


// `;




function AddNewJobOffer(props) {
    const [validated, setValidated] = useState(false);

    // let competences = ["test", "test2"];

    // function addCompentense (event){
    //     event.preventDefault();
    //     console.log(event)


    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {;
          event.stopPropagation();
        }else{

            const newJobOffering = [...props.jobOfferings, {
                id: "jobOffering-7",
                title: form.titleInputGrid.value,
                location: form.locationInputGrid.value,
                publishDate: form.dateInputGrid.value,
                applyDate: form.dateInputGrid.value,
                preview: form.preview.value,
                companyDescription: form.companyDescription.value,
                aboutRole: form.aboutTheRole.value,
                imageUrl:"https://picsum.photos/150/150?random=7",
                recruitmentSteps: [
                {
                    id: 'recruitmentStep-1',
                    title: 'Applied',
                    applicantIds: [],
                    },
                    {
                    id: 'recruitmentStep-2',
                    title: 'Interesting',
                    applicantIds: [],
                    },
                    {
                    id: 'recruitmentStep-3',
                    title: 'Interview',
                    applicantIds: [],
                    },
                    {
                    id: 'recruitmentStep-4',
                    title: 'Hire',
                    applicantIds: [],
                    },
                    {
                    id: 'recruitmentStep-5',
                    title: 'Dismiss',
                    applicantIds: [],
                    }
                ],
            }
            ]
           
            props.setJobOfferings(newJobOffering);

        }
    
        setValidated(true);
      };


    return(
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
                {/* 
                <Row className="g-2 ms-5 me-5 mt-5">
                
                    <Col >
                            <FloatingLabel controlId="addCompetensgrid" label="Competense">
                            <Form.Control required type="Text" placeholder='"Java utvecklare"' />
                            </FloatingLabel>
                    </Col>
                    <Col >
                        <Button variant="primary" onClick={addCompentense}>
                        add competense
                        </Button>
                    </Col>
                    </Row>
                    <Row className="g-2 ms-5 me-5 mt-5">
                        <p> kompetenser:  </p>
                    {competences.map(comp =>{
                        return (
                            <Col>
                                <CompetenceP>{comp}</CompetenceP>
                            </Col>
                        )
                    })}
                    </Row> */}

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
                
                <Button variant="primary" type="submit" className="ms-5">
                    Publish
                </Button>
            </Form>
        </Container>
    )
}

export default AddNewJobOffer;