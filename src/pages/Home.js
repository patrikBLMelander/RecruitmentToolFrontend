import React from "react";
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import JobOfferCard from '../components/JobOfferCard'
import colorPicker from '../testData/colorPicker';
import Footer from '../components/Footer';




 function Home ({jobOfferings, setJobOfferings, setActiveJob, activeJob, adminLoggedIn, candidateLoggedIn, activeCandidate , setAdminLoggedIn, setCandidateLoggedIn}) {
    return (
        <div>
        <Navbar setAdminLoggedIn={setAdminLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn}adminLoggedIn={adminLoggedIn} candidateLoggedIn={candidateLoggedIn} setActiveJob={setActiveJob}/>
        <Header activeJob={activeJob}/>
    <Container>
        <H3>Welcome {activeCandidate.firstName} {activeCandidate.lastName}</H3>
        <JobCardDiv>
        {jobOfferings.map((jobOfferingsInMap, index) =>{
             return(
                <JobOfferCard key={index} index={index} jobOfferings={jobOfferings} setJobOfferings={setJobOfferings} setActiveJob={setActiveJob} adminLoggedIn={adminLoggedIn} candidateLoggedIn={candidateLoggedIn} activeCandidate={activeCandidate}/>
            )})}
        </JobCardDiv>


    </Container>
    <Footer/>
    </div>
    )
       
}

export default Home

const Container = styled.div`
    background-color: ${colorPicker.primary};    
    padding-bottom: 5%;
    margin-left 160px
`;

const H3 = styled.h3`
    display: flex;
    color: ${colorPicker.text};
    margin-left: 50px;
    margin-right: 400px;
    font-family: 'Trebuchet MS', sans-serif;
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
