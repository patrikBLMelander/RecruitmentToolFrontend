import React, { useState } from 'react';

import styled from 'styled-components'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Swal from 'sweetalert2';
import Resume from '../components/Resume';
import colorPicker from '../testData/colorPicker';
import Footer from '../components/Footer';
import StyledButton from '../components/StyledButton';
import Slider from '@mui/material/Slider';





function CandidateMyPage({jobOfferings, adminLoggedIn, candidateLoggedIn, activeJob, activeCandidate, setActiveCandidate, setCandidateState, candidateState , setAdminLoggedIn, setCandidateLoggedIn}){
    const [validated, setValidated] = useState(false);
    const [title, setTitle] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [description, setDescription] = useState("");
    const [presentation, setPresentation] = useState(activeCandidate.presentation);
    const [jobExperienceState, setJobExperienceState]= useState(activeCandidate)
    const [openness] = useState(activeCandidate.personality[0].value)
    const [conscintiousness] = useState(activeCandidate.personality[1].value)
    const [extroversion] = useState(activeCandidate.personality[2].value)
    const [agreableness] = useState(activeCandidate.personality[3].value)
    const [neuroticism] = useState(activeCandidate.personality[4].value)
    const [competenceValue, setCompetenceValue] = useState("")
    const [yearsValue, setYearsValue] = useState("")

    const handleCompetenceValue = (event) => {
        setCompetenceValue(event.target.value);
    }
    const handleYearsValue = (event) => {
        setYearsValue(event.target.value);
    }


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


    const handleEducationTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleEducationStartDateChange = (event) => {
        setStartDate(event.target.value);
    }

    const handleEducationEndDateChange = (event) => {
        setEndDate(event.target.value);
    }

    const handleEducationDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    function saveCompetence(event){
        event.preventDefault();
        console.log(competenceValue)
        console.log(yearsValue)
        if (competenceValue===""|| yearsValue==="") {
            Swal.fire({
                title: 'Information missing',
                text: 'Pleas fill bouth fields and try again',
                icon: 'error',
                showConfirmButton: true,
               
            })
          event.stopPropagation();
        }else{
            let newCandidateState = candidateState;
            candidateState.map((candidateStateInMap, index) =>{
                if(candidateStateInMap.id===activeCandidate.id){
                    newCandidateState[index].competencies = [...candidateState[index].competencies, { 
                        id: 1, 
                        name: competenceValue,
                        years: yearsValue
                    }]
                    setCandidateState(newCandidateState)
                    setJobExperienceState(candidateState[index])
                    setActiveCandidate(candidateState[index])
                    Swal.fire({
                        title: 'New Competence added!',
                        text: 'Your Competence are now updaded and can be seen on the roles you applied for!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 3000
                    })
              
    
                }
                return null;
            })

        }

        setCompetenceValue("")
        setYearsValue("")
    }

    function SavePresentation (event){
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            Swal.fire({
                title: 'Presentation missing',
                text: 'Update your presentation and try agein',
                icon: 'error',
                showConfirmButton: true,
               
            })
          event.stopPropagation();
        }else{
            let newCandidateState = candidateState;
            candidateState.map((candidateStateInMap, index) =>{
                if(candidateStateInMap.id===activeCandidate.id){
                    
                    newCandidateState[index].presentation = presentation
                   
                    setCandidateState(newCandidateState)
                    setActiveCandidate(candidateState[index])
    
                    Swal.fire({
                        title: 'Presentation Saved!',
                        text: 'Your presentation are now updaded and can be seen on the roles you applied for!',
                        icon: 'success',
                        showConfirmButton: true,
                    })
              
                }
                return null;
            })
        }

        setValidated(true);
    }



    function addEmployment (event){
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            Swal.fire({
                title: 'Not updated',
                text: 'You need to fill all fields',
                icon: 'error',
                showConfirmButton: true,
               
            })
          event.stopPropagation();
        }else{
            let newCandidateState = candidateState;
            candidateState.map((candidateStateInMap, index) =>{
                if(candidateStateInMap.id===activeCandidate.id){
                    newCandidateState[index].experience = [...candidateState[index].experience, { 
                        title: title, 
                        period:startDate + " to " + endDate, 
                        description: description
                    }]
                    setCandidateState(newCandidateState)
                    setJobExperienceState(candidateState[index])
                    setActiveCandidate(candidateState[index])
                    Swal.fire({
                        title: 'New Experience added!',
                        text: 'Your Experience are now updaded and can be seen on the roles you applied for!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 3000
                    })
              
    
                }
                return null;
            })
            
        }
        setValidated(true);
    }

    function addEducation (event){
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            Swal.fire({
                title: 'Not updated',
                text: 'You need to fill all fields',
                icon: 'error',
                showConfirmButton: true,
               
            })
          event.stopPropagation();
        }else{
            let newCandidateState = candidateState;
            candidateState.map((candidateStateInMap, index) =>{
                if(candidateStateInMap.id===activeCandidate.id){
                    newCandidateState[index].education = [...candidateState[index].education, { 
                        title: title, 
                        period:startDate + " to " + endDate, 
                        description: description
                    }]
                    setCandidateState(newCandidateState)
                    setJobExperienceState(candidateState[index])
                    setActiveCandidate(candidateState[index])
                    Swal.fire({
                        title: 'New Experience added!',
                        text: 'Your Experience are now updaded and can be seen on the roles you applied for!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 3000
                    })
              
    
                }
                return null;
            })
            
        }
        setValidated(true);
    }

    function savePersonality (event){
        event.preventDefault();
        console.log(event)
        let newCandidateState = candidateState;
        candidateState.map((candidateStateInMap, index) =>{
            if(candidateStateInMap.id===activeCandidate.id){
                
                newCandidateState[index].personality.map((personalityInMap, pIndex) =>{
                    console.log(event.target[pIndex].value)
                    newCandidateState[index].personality[pIndex].value=event.target[pIndex].value
                    return null
                }) 
     

                 setCandidateState(newCandidateState)
                 setJobExperienceState(candidateState[index])
                 setActiveCandidate(candidateState[index])
                Swal.fire({
                    title: 'Personality Saved',
                    text: 'Not satifyed? Just change it',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 3000
                })
            
            }
            return null;
        })
              
    }



return(
    <div>
        <Navbar setAdminLoggedIn={setAdminLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn}jobOfferings={jobOfferings} adminLoggedIn={adminLoggedIn} candidateLoggedIn={candidateLoggedIn}/>
        <Header activeJob={activeJob}/>
 
    <Container>
        <InnerContainer>
            <Form noValidate validated={validated} onSubmit={SavePresentation}>
                <Form.Group className="mb-3 ms-3 me-5" controlId="presentation">
                    <H4>Describe your self and why you are so assume!</H4> 
                    <Form.Control required as="textarea" rows={3} value={presentation}  onChange={handlePresentationChange}/>
                    <Form.Control.Feedback type="invalid">
                        This will be the first impression of you, write something nice ;)
                    </Form.Control.Feedback>
                </Form.Group>
                <StyledButton variant="success" type="submit" input={"Save"}/>
            </Form>
            <Form noValidate validated={validated} onSubmit={addEmployment}>
                <H4>Here is the place to add your job experience!</H4>
                <Row className="g-2 ms-3 me-5 mt-1"> 
                    <Col>
                        <FloatingLabel controlId="TitleInputGrid" label="Title" onChange={handleTitleChange}>
                            <Form.Control required  type="Text" placeholder='"Stockholm"' />
                            <Form.Control.Feedback type="invalid">
                                All your experience needs a title
                            </Form.Control.Feedback>
                        </FloatingLabel>      
                    </Col>
                    <Col> 
                        <FloatingLabel controlId="startDateInputGrid" label="Started date" onChange={handleStartDateChange}>
                            <Form.Control required type="Date" />
                            <Form.Control.Feedback type="invalid">
                                All your experience needs a start date
                            </Form.Control.Feedback>
                        </FloatingLabel>   
                    </Col>
                    <Col> 
                        <FloatingLabel controlId="endDateInputGrid" label="End date" onChange={handleEndDateChange}>
                            <Form.Control required type="Date"/>
                            <Form.Control.Feedback type="invalid">
                                All your experience needs a end date
                            </Form.Control.Feedback>
                        </FloatingLabel>   
                    </Col>
                </Row>
                <Form.Group className="mb-3 ms-3 me-5" controlId="jobDescription"onChange={handleDescriptionChange}>
                    <Form.Label className="ms-3 mt-4">Description your job</Form.Label>
                    <Form.Control required as="textarea" rows={3} />
                    <Form.Control.Feedback type="invalid">
                        Write about the employment
                    </Form.Control.Feedback>
                </Form.Group>
                <StyledButton  variant="success" type="submit" input={"Add Job"}/>
            </Form>
            <Form noValidate validated={validated} onSubmit={addEducation}>
                <H4>Here is the place to add your education experience!</H4>
                <Row className="g-2 ms-3 me-5 mt-1"> 
                    <Col md>
                        <FloatingLabel controlId="TitleInputGrid" label="Title" onChange={handleEducationTitleChange}>
                            <Form.Control required  type="Text" placeholder='"Stockholm"' />
                            <Form.Control.Feedback type="invalid">
                                All your education needs a title
                            </Form.Control.Feedback>
                        </FloatingLabel>      
                    </Col>
                    <Col md> 
                        <FloatingLabel controlId="startDateInputGrid" label="Started date" onChange={handleEducationStartDateChange}>
                            <Form.Control required type="Date" />
                            <Form.Control.Feedback type="invalid">
                                All your education needs a start date
                            </Form.Control.Feedback>
                        </FloatingLabel>   
                    </Col>
                    <Col md> 
                        <FloatingLabel controlId="endDateInputGrid" label="End date" onChange={handleEducationEndDateChange}>
                            <Form.Control required type="Date"/>
                            <Form.Control.Feedback type="invalid">
                                All your education needs a end date
                            </Form.Control.Feedback>
                        </FloatingLabel>   
                    </Col>
                </Row>
                <Form.Group className="mb-3 ms-3 me-5" controlId="jobDescription"onChange={handleEducationDescriptionChange}>
                    <Form.Label className="ms-3 mt-4">Description your education</Form.Label>
                    <Form.Control required as="textarea" rows={3} />
                    <Form.Control.Feedback type="invalid">
                        Write about the education
                    </Form.Control.Feedback>
                </Form.Group>
                <StyledButton  variant="success" type="submit" input={"Add Education"}/>
            </Form>
            <H4>Personality</H4>
            <Form onSubmit={savePersonality}>
                <PersonalityDiv>
                
                <TraitDiv>
                    <TraitText>
                        <H5>Practical</H5>
                        <H5>Curius</H5>
                    </TraitText>
                    <Slider
                    key={`openness`}
                    defaultValue={openness}
                    />
                </TraitDiv>
                <TraitDiv>
                    <TraitText>
                        <H5>Impulsive</H5>
                        <H5>Organized</H5>
                    </TraitText>
                    <Slider
                    key={`conscintiousness`}
                        defaultValue={conscintiousness}
                    />
                </TraitDiv>
                <TraitDiv>
                    <TraitText>
                        <H5>Quiet</H5>
                        <H5>Outgoing</H5>
                    </TraitText>
                    <Slider
                    key={`extroversion`}
                        defaultValue={extroversion}
                        
                    />
                </TraitDiv>
                <TraitDiv>
                    <TraitText>
                        <H5>Critical</H5>
                        <H5>Helpful</H5>
                    </TraitText>
                    <Slider
                    key={`agreableness`}
                        defaultValue={agreableness}
                    />
                </TraitDiv>
                <TraitDiv>
                    <TraitText>
                        <H5>Calm</H5>
                        <H5>Anxious</H5>
                    </TraitText>
                    <Slider
                    key={`neuroticism`}
                        defaultValue={neuroticism}
                    />
                    <StyledButton type="submit" input={"Save Personality"}/>
                </TraitDiv>
                
                </PersonalityDiv>
            </Form>
            <H4>Competence</H4>
            <Form noValidate validated={validated} onSubmit={saveCompetence}>
                <CompetenceDiv>
                    <Col xs={5}>
                    <FloatingLabel controlId="TitleInputGrid" label="Competence" onChange={handleCompetenceValue}>
                            <Form.Control required  type="Text" placeholder='"Stockholm"' />
                            <Form.Control.Feedback type="invalid">
                                Pleas fill the name of you competence
                            </Form.Control.Feedback>
                        </FloatingLabel>    
                        </Col>
                        <Col xs={1}>
                        <FloatingLabel controlId="TitleInputGrid" label="Years" onChange={handleYearsValue}>
                            <Form.Control required  type="Number" placeholder='""' />
                            <Form.Control.Feedback type="invalid">
                                How many years experience do you have of this?
                            </Form.Control.Feedback>
                        </FloatingLabel>     
                        </Col>
                        <Col> 
                    <StyledButton type="submit" input={"Save Competence"}/>
                    </Col>
                </CompetenceDiv>
            </Form>


            <SeperatorDiv/>
            <H4>Your Resume will show here</H4>
            <ResumeContainer>
            <Resume activeCandidate={activeCandidate}setActiveCandidate={setActiveCandidate}jobExperienceState={jobExperienceState} candidateState={candidateState} setCandidateState={setCandidateState} presentation={presentation} setJobExperienceState={setJobExperienceState} candidateView={true}/>
            </ResumeContainer>
    </InnerContainer>
</Container>
<Footer/>
</div>
)

}
export default CandidateMyPage

const Container = styled.div`
    font-family: 'Roboto', sans-serif; 
    text-align: center;
    background-color: ${colorPicker.primary};
    height: 100%;
    width: 100%;
    z-index: 1,
    overflow-x: hidden;
    padding-top: 16px;
    margin-left: 160px
`;

const InnerContainer = styled.div`
    color: ${colorPicker.text};
    font-family: 'Roboto', sans-serif; 
    justify-content: center;
    margin-top: 10%;
    margin-left:10%;
    margin-right:10%;
    
`;

const PersonalityDiv = styled.div`
color: ${colorPicker.text};
font-family: 'Roboto', sans-serif; 
justify-content: center;
margin-left:10%;
margin-right:10%;

`;

const TraitDiv = styled.div`
color: ${colorPicker.text};
font-family: 'Roboto', sans-serif; 
justify-content: center;
margin-bottom: 10%;
`;

const TraitText = styled.div`
color: ${colorPicker.text};
font-family: 'Roboto', sans-serif; 
display:flex;
justify-content: space-between;

`;

const ResumeContainer = styled.div`
    margin-right:4%;
    padding-bottom: 10%;
`;

const CompetenceDiv = styled.div`
    display: flex;
    margin-right: 10px;
    justify-content: center;
`;

const SeperatorDiv = styled.div`
    justify-content: center;
    margin-top: 5%;
    margin-right:4%;
    border-style: solid;
    border-color:  #b5bcc7;
    
`;
const H4 = styled.h4`
    font-family: 'Roboto', sans-serif; 
    color: ${colorPicker.text};
    margin-top: 7%;
`;
const H5 = styled.h5`
    font-family: 'Roboto', sans-serif; 
    color: ${colorPicker.text};
`;

   