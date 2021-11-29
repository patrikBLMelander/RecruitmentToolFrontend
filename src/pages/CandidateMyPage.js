import React, { useState } from 'react';

import styled from 'styled-components'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Navbar from '../components/Navbar';
import Header from '../components/Header';


const Container = styled.div`
    font-family: 'Roboto', sans-serif; 

    text-align: center;
    background-color: #6f747a;
    height: 100%;
    width: 100%;
    z-index: 1,
    overflow-x: hidden;
    padding-top: 16px;
    margin-left: 160px
`;

const InnerContainer = styled.div`
    color: #b5bcc7;
    font-family: 'Roboto', sans-serif; 
    justify-content: center;
    margin-top: 10%;
    margin-right:10%;
    
`;

const SeperatorDiv = styled.div`
    font-family: 'Roboto', sans-serif; 
    justify-content: center;
    margin-top: 5%;
    width: 100%;
    border-style: solid;
    border-color:  #b5bcc7;
    
`;
const H4 = styled.h4`
    font-family: 'Roboto', sans-serif; 
    color: #b5bcc7;
    margin-left: 50px;
    margin-top: 30px;

`;

const StyledButton = styled.button`
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

const StyledTitle = styled.p`
    margin-top: 10px;
    background-color: #b5bcc7;
    font-family: 'Roboto', sans-serif;
    color: black;


`;

const StyledPeriod = styled.p`
background-color: #b5bcc7;
font-family: 'Roboto', sans-serif;
color: black;
margin-top: 10px;
`;

const StyledDescription = styled.p`
    background-color: #b5bcc7;
    font-family: 'Roboto', sans-serif;
    color: black;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 30px;
    margin-right: 30px;

`;

const InsideExperienceDiv = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Roboto', sans-serif; 
    margin-top: 5%;
    width: 100%;
    border-style: solid;
    border-color:  #b5bcc7;
    
`;
const TitleAndPeriodDiv = styled.div`
    display: inline;
    justify-content: center;
    font-family: 'Roboto', sans-serif; 
    margin: 10px;
    width: 100%;
    border-style: solid;
    border-color:  #b5bcc7;
    
`;
const StyledH4 = styled.h4`
    color: white;
    font-family: 'Roboto', sans-serif;      
    margin-top: 10%;
`;




function CandidateMyPage({jobOfferings, adminLoggedIn, candidateLoggedIn, activeJob, activeCandidate, setActiveCandidate, setCandidateState, candidateState}){

    const [title, setTitle] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [description, setDescription] = useState("");
    const [presentation, setPresentation] = useState(activeCandidate.presentation);


    const handlePresentationChange = (event) => {
        setPresentation(event.target.value);
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    }

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    function SavePresentation (event){
        event.preventDefault();
        let newCandidateState = candidateState;
        candidateState.map((candidateStateInMap, index) =>{
            if(candidateStateInMap.id===activeCandidate.id){

                newCandidateState[index].presentation = presentation
               
                setCandidateState(newCandidateState)
                setActiveCandidate(candidateState[index])
          

            }
            return null;
        })
        
    }



    function addEmployment (event){
        event.preventDefault();

        let newCandidateState = candidateState;
        candidateState.map((candidateStateInMap, index) =>{
            if(candidateStateInMap.id===activeCandidate.id){

                newCandidateState[index].experience = [...candidateState[index].experience, { 
                    title: title, 
                    period:startDate + " to " + endDate, 
                    description: description
                }]
                setCandidateState(newCandidateState)

                setActiveCandidate(candidateState[index])
          

            }
            return null;
        })
    }


return(
    <div>
        <Navbar jobOfferings={jobOfferings} adminLoggedIn={adminLoggedIn} candidateLoggedIn={candidateLoggedIn}/>
        <Header activeJob={activeJob}/>
 
    <Container>


        <InnerContainer>
            <Form.Group className="mb-3 ms-5 me-5" controlId="presentation">
                <StyledH4>Describe your self and why you are so assume!</StyledH4> 
                <Form.Control required as="textarea" rows={3} value={presentation}  onChange={handlePresentationChange}/>
                <Form.Control.Feedback type="invalid">
                    This will be the first impression of you, write something nice ;)
                </Form.Control.Feedback>
            </Form.Group>
            <StyledButton onClick={SavePresentation}> Save </StyledButton>
            <H4>Here is the place to add your experience!</H4>
        <Row className="g-2 ms-5 me-5 mt-1"> 
            <Col md>
                <FloatingLabel controlId="TitleInputGrid" label="Title" onChange={handleTitleChange}>
                    <Form.Control  type="Text" placeholder='"Stockholm"' />

                </FloatingLabel>      
            </Col>
            <Col md> 
                <FloatingLabel controlId="startDateInputGrid" label="Started date" onChange={handleStartDateChange}>
                    <Form.Control type="Date" />
                </FloatingLabel>   
            </Col>
            <Col md> 
                <FloatingLabel controlId="endDateInputGrid" label="End date" onChange={handleEndDateChange}>
                    <Form.Control type="Date"/>

                </FloatingLabel>   
            </Col>
        </Row>

        <Form.Group className="mb-3 ms-5 me-5" controlId="jobDescription"onChange={handleDescriptionChange}>
            <Form.Label className="ms-3 mt-4">Description your job</Form.Label>
            <Form.Control required as="textarea" rows={3} />
            
            <Form.Control.Feedback type="invalid">
                Write about the employment
            </Form.Control.Feedback>
        </Form.Group>


        <StyledButton onClick={addEmployment} className="ms-5">
                Add Job
        </StyledButton>

        <SeperatorDiv/>
        <H4>Your experience will be listed here</H4>

        <H4>TODO: Gör snygg presentation av erfarenheter</H4>

        {activeCandidate.experience.map(experienceInMap =>{
            
            return(
            <InsideExperienceDiv>
                <TitleAndPeriodDiv>
                    <StyledTitle>
                    Title: {experienceInMap.title}
                    </StyledTitle>      

                    <StyledPeriod>
                    Period: {experienceInMap.period}
                    </StyledPeriod>      
                </TitleAndPeriodDiv>
                <StyledDescription>
                    {experienceInMap.description}
                </StyledDescription>

            </InsideExperienceDiv>
            
            
            )

        })}
    </InnerContainer>
</Container>
</div>
)

}
export default CandidateMyPage

   