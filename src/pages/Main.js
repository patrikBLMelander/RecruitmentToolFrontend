import React from 'react';
import styled from 'styled-components'
import JobOfferCard from '../components/JobOfferCard';
import Row from 'react-bootstrap/Row';
import colorPicker from '../testData/colorPicker';
import StyledButton from '../components/StyledButton';


const Container = styled.div`
    position: fixed;
    text-align: center;
    background-color: ${colorPicker.background};
    color: ${colorPicker.text};
    height: 100%;
    width: 100%;
    z-index: 1,
    top: 0;
    left: 0;
    overflow-x: hidden;
    padding-top: 16px;
    font-family: 'Roboto', sans-serif;
`;

const BtnContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center

`;
const StyleH1 = styled.h1`
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
    margin-top: 8px;
`;

const StyledP = styled.p`

    margin-top: 15px;
    margin-left: 34%;
    margin-right: 34%;
`;

function Main({jobOfferings, activeJob, setActiveJob, adminLoggedIn, candidateLoggedIn, setCandidateLoggedIn, setAdminLoggedIn}){

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
                    <BtnContainer>
                    <StyledButton navigate={"register"}input={"Register"}/>
                    <StyledButton navigate={"login"}input={"Login"}/>
                    </BtnContainer>
                </TextUnderPictures>
                <Row xs={1} md={2}lg={3} xl={3} xxl={4} className="g-4 mt-5">
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