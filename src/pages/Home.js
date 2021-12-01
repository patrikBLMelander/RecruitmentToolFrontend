import React from "react";
import styled from 'styled-components'
import Row from 'react-bootstrap/Row';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import JobOfferCard from '../components/JobOfferCard'

const Container = styled.div`
    margin-bottom: 5%;
    margin-left 160px
`;

const H3 = styled.h3`
    display: flex;
    color: #838891;
    margin-left: 50px;
    margin-right: 400px;
    font-family: 'Trebuchet MS', sans-serif;
`;


 function Home ({jobOfferings, setJobOfferings, setActiveJob, activeJob, adminLoggedIn, candidateLoggedIn, activeCandidate, setActiveCandidate , setAdminLoggedIn, setCandidateLoggedIn}) {
    return (
        <div>
        <Navbar setAdminLoggedIn={setAdminLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn}jobOfferings={jobOfferings} adminLoggedIn={adminLoggedIn} candidateLoggedIn={candidateLoggedIn}/>
        <Header activeJob={activeJob}/>
    <Container>
        <H3>Welcome {activeCandidate.firstName} {activeCandidate.lastName}</H3>
        <Row xs={1} md={2}lg={3} xl={3} xxl={4} className="g-4">
        {jobOfferings.map((jobOfferingsInMap, index) =>{
            let totalCandidates = 0;
            jobOfferingsInMap.recruitmentSteps.map(recruitmentStepInMap =>{
                totalCandidates += recruitmentStepInMap.candidateIds.length
                return null;
                })

             return(
                <JobOfferCard key={index} index={index} jobOfferings={jobOfferings} setJobOfferings={setJobOfferings} jobOfferingsInMap={jobOfferingsInMap} totalCandidates={totalCandidates} activeJob={activeJob} setActiveJob={setActiveJob} adminLoggedIn={adminLoggedIn} candidateLoggedIn={candidateLoggedIn} activeCandidate={activeCandidate}/>
            )})}
        </Row>


    </Container>
    </div>
    )
       
}

export default Home
