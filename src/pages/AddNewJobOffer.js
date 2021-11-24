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




function AddNewJobOffer() {


    return(
        <Container>


            
            <Form>
                <Row className="g-2 ms-5 me-5 mt-5">
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="Titel">
                        <Form.Control type="Text" placeholder='"Java utvecklare"' />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="Location">
                            <Form.Control type="Text" placeholder='"Stockholm"' />
                        </FloatingLabel>      
                    </Col>
                    <Col>
                        <FloatingLabel controlId="floatingInputGrid" label="Last day to apply">
                            <Form.Control type="Date" placeholder='"Stockholm"' />
                        </FloatingLabel>   
                    </Col>
                </Row>


                <Form.Group className="mb-3 ms-5 me-5" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="ms-3 mt-4">Preview text</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3 ms-5 me-5" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="ms-3 mt-4">Description of company</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3 ms-5 me-5" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="ms-3 mt-4">About the role</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit" className="ms-5">
                    Publish
                </Button>
            </Form>
        </Container>
    )
}

export default AddNewJobOffer;