import React from "react";
import styled from 'styled-components'

import Row from 'react-bootstrap/Row';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import JobOfferCard from '../components/JobOfferCard'

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


 function Home ({jobOfferings, setActiveJob, activeJob, adminLoggedIn, applicantLoggedIn, activeCandidate, setActiveCandidate}) {
    return (
        <div>
        <Navbar jobOfferings={jobOfferings} adminLoggedIn={adminLoggedIn} applicantLoggedIn={applicantLoggedIn}/>
        <Header activeJob={activeJob}/>
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
                <JobOfferCard index={index} jobOfferingsInMap={jobOfferingsInMap} totalApplicants={totalApplicants} activeJob={activeJob} setActiveJob={setActiveJob} adminLoggedIn={adminLoggedIn}/>
            )})}
        </Row>


    </Container>
    </div>
    )
       
}

export default Home
