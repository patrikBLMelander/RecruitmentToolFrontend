import React from 'react';
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import JobOfferCard from '../components/JobOfferCard';
import Row from 'react-bootstrap/Row';


const Container = styled.div`
    position: fixed;
    text-align: center;
    background-color: #3b3d40;
    color: white;
    height: 100%;
    width: 100%;
    z-index: 1,
    top: 0;
    left: 0;
    overflow-x: hidden;
    padding-top: 16px;
`;
const StyleH1 = styled.h1`
    font-family: 'Roboto', sans-serif;      
    margin-top: 10%;
`;

const OuterCircleDiv = styled.div`
    display: flex;
    justify-content: center;
        
`

const TextUnderPictures = styled.div`
    display: block;
    text-align: center;


`
const StyledImg = styled.img`
    border-radius: 100%;
    text-align: center;
    margin: 15px
    
`

const StyleH3 = styled.h3`
    font-family: 'Roboto', sans-serif;
    margin-top: 8px;
`;

const StyledP = styled.p`
    font-family: 'Roboto', sans-serif;
    margin-top: 15px;
    margin-left: 34%;
    margin-right: 34%;
`;

const RegisterBtn = styled.button`
    margin: 3px;
    width: 140px;
    height: 45px;
    font-family: 'Roboto', sans-serif;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    &:hover {
        background-color: #2EE59D;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        transform: translateY(-7px);
    }
    
`;

function Main({jobOfferings, activeJob, setActiveJob, adminLoggedIn, candidateLoggedIn, setCandidateLoggedIn, setAdminLoggedIn}){
 

    const Navigate = useNavigate();

    function NavToCreateProfile(){
        Navigate("/candidate/register")
    }
    function NavToLogin(){
        Navigate("/login")
    }

    

    return(
   
            <Container>
                <StyleH1>Karriär</StyleH1>
                <OuterCircleDiv>
                    <StyledImg src="https://picsum.photos/id/0/200"/>
                    <StyledImg src="https://picsum.photos/id/1067/200"/>
                    <StyledImg src="https://picsum.photos/id/192/200"/>
                </OuterCircleDiv>
                <TextUnderPictures>
                    <StyleH3>The Melander Company</StyleH3>
                    <StyledP>
                        Lorem ipsum dolor sit amet, aperiam reprehendunt sit et, veniam blandit apeirian id duo. Sea ex purto 
                        disputando. Melius utamur intellegebat mel ex, vidisse laoreet disputationi ei qui. Graeci omnesque detraxit 
                        vel ad, pri cibo libris ea. Te inani persius duo, vim eu verear signiferumque, vel denique nominavi consequat et.
                    </StyledP>
                    <RegisterBtn onClick={NavToCreateProfile}>Register</RegisterBtn>
                    <RegisterBtn onClick={NavToLogin}>Login</RegisterBtn>
                        
                </TextUnderPictures>
                <Row xs={1} md={3} className="g-4 ms-5 mt-5">
                    {jobOfferings.map((jobOfferingsInMap, index) =>{
                        let totalCandidates = 0;
                        jobOfferingsInMap.recruitmentSteps.map(recruitmentStepInMap =>{
                            totalCandidates += recruitmentStepInMap.candidateIds.length
                        return null;
                        })

                    return(
                        <JobOfferCard key={jobOfferingsInMap.id} index={index} jobOfferingsInMap={jobOfferingsInMap} totalCandidates={totalCandidates} activeJob={activeJob} setActiveJob={setActiveJob} adminLoggedIn={adminLoggedIn}candidateLoggedIn={candidateLoggedIn}/>
                    )})}
                </Row>


            </Container>
            

   
    )
}

export default Main;