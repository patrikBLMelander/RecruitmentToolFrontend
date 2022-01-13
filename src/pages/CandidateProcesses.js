import React from 'react';
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import colorPicker from '../testData/colorPicker';
import JobOfferCard from '../components/JobOfferCard';



function CandidateProcesses({jobOfferings, activeJob, setActiveJob, adminLoggedIn, candidateLoggedIn , setAdminLoggedIn, setCandidateLoggedIn, activeCandidate, colorScheme}) {


    return(
        <div>
        <Navbar colorScheme={colorScheme}setActiveJob={setActiveJob} setAdminLoggedIn={setAdminLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn} adminLoggedIn={adminLoggedIn} candidateLoggedIn={candidateLoggedIn}/>
        <Header activeJob={activeJob}colorScheme={colorScheme}/>
        <Container>
        <H3>{activeCandidate.firstName} {activeCandidate.lastName} Here's your active processes</H3>
            <JobCardDiv>
                {jobOfferings.map((jobOfferingsInMap, index) =>{
                    return(
                        <JobOfferCard colorScheme={colorScheme} key={jobOfferingsInMap.id} index={index} jobOfferings={jobOfferings} adminLoggedIn={adminLoggedIn}candidateLoggedIn={candidateLoggedIn}/>
                    )
                   })}
            </JobCardDiv>
        </Container>
        <Footer/>
        </div>
    )
}

export default CandidateProcesses;

const Container = styled.div`
    background-color: ${colorPicker.primary};    
    padding-bottom: 5%;
    margin-left 160px
`;
const JobCardDiv = styled.div`
    margin: 20px auto;
    width: 80%;
    min-height: 100px;
    display: flex;
    justify-content: center;
    flex-flow: row wrap; 
    @media (max-width: 1200px) {
        flex: 1 1 calc(25% - 20px);
    }
    @media (max-width: 900px) {
        flex: 1 1 calc(33% - 20px);
    }

    @media (max-width: 750px) {
        flex: 1 1 calc(50% - 20px)
    }
    @media (max-width: 550px) {
        flex: 1 1 calc(100% - 20px)
    }
`;

const H3 = styled.h3`
    display: flex;
    color: ${colorPicker.text};
    margin-left: 50px;
    margin-right: 400px;
    font-family: 'Trebuchet MS', sans-serif;
`;