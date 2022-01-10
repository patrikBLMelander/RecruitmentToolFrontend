import React from "react";
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import JobOfferCard from '../components/JobOfferCard'
import colorPicker from '../testData/colorPicker';
import Footer from '../components/Footer';

import { useRecoilState } from "recoil";
import { atomUser, atomJobOffers, atomCandidates, atomAdmin, atomActiveJob } from "../atoms/atomStates";




 function Home () {
    const [user, setUser] = useRecoilState(atomUser);
    const [jobOffers, setJobOffers] = useRecoilState(atomJobOffers);
    const [activeJob, setActiveJob] = useRecoilState(atomAdmin);


    return (
        <div>
        <Navbar/>
        <Header/>
    <Container>
        <H3>Welcome {user.firstName} {user.lastName}</H3>
        <JobCardDiv>
        {jobOffers.jobOfferTestData.map((jobOfferingsInMap, index) =>{
            let totalCandidates = 0;
            jobOfferingsInMap.recruitmentSteps.map(recruitmentStepInMap =>{
                totalCandidates += recruitmentStepInMap.candidateIds.length
                return null;
                })

             return(
                <JobOfferCard key={index} index={index} jobOfferingsInMap={jobOfferingsInMap} totalCandidates={totalCandidates} activeJob={activeJob}/>
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
