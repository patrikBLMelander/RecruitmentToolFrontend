import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Container = styled.div`

    margin-left: 190px;

`;

const H3 = styled.h3`
    display: flex;
    color: #3b3d40;
    margin-left: 50px;
    margin-right: 400px;
    font-family: 'Trebuchet MS', sans-serif;
`;

 function Home ({jobOfferings, setJobOfferings, setActiveJob, activeJob}) {

    const navigate = useNavigate();

    function setJobToWorkWith(event){
        
        setActiveJob({...activeJob,
            title: event.title,
            id: event.id
        })
         
        navigate("/recruitment-page")
    }

    return (
    <Container>
        <H3>Welcome Patrik Melander</H3>
        <Row xs={1} md={3} className="g-4">
        {jobOfferings.map((jobOfferingsInMap, index) =>{
             return(
                <Col key={index}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={jobOfferingsInMap.imageUrl} />
                        <Card.Body>
                            <Card.Title>{jobOfferingsInMap.title}</Card.Title>
                            <Card.Text>
                            {jobOfferingsInMap.description}
                            </Card.Text>
                            <Button onClick={() => setJobToWorkWith(jobOfferingsInMap)} variant="primary">Handle Applicants</Button>
                        </Card.Body>
                    </Card>
                </Col>
                );
            })}
        </Row>


    </Container>
    )
       
}

export default Home
