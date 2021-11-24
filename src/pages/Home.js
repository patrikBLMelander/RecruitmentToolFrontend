import React from "react";
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

const PNew = styled.p`
    color: #17913c;
`;

const PTotal = styled.p`
    color: #3b3d40;
`;

const PExpire = styled.p`
    margin-top: 0;
    margin-bottom: 0;
    color: #3b3d40;
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
            let totalApplicants = 0;
            jobOfferingsInMap.recruitmentSteps.map(recruitmentStepInMap =>{
                totalApplicants += recruitmentStepInMap.applicantIds.length
                return null;
                })

             return(
                <Col key={index}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={jobOfferingsInMap.imageUrl} />
                        <Card.Body>
                            <Card.Title>{jobOfferingsInMap.title}</Card.Title>
                            <PExpire>
                            Expire: {jobOfferingsInMap.applyDate}
                            
                            </PExpire>
                            <div className="d-grid gap-2">
                            <Button onClick={() => setJobToWorkWith(jobOfferingsInMap)} variant="primary">Handle</Button>
                            </div>
                            <Row xs={2}>
                            <Col sm={5}>
                            <PNew>
                                New: {jobOfferingsInMap.recruitmentSteps[0].applicantIds.length}
                            </PNew>
                            </Col>
                            <Col sm={5}>
                            <PTotal>
                            Total: {totalApplicants}
                            </PTotal>
                            </Col>
                            </Row>

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
