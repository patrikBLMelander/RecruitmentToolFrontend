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

const ResumeContainer = styled.div`
    margin-right:4%;
    padding-bottom: 10%;
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
    margin-left: 50px;
    margin-top: 30px;
`;


function CandidateMyPage({jobOfferings, adminLoggedIn, candidateLoggedIn, activeJob, activeCandidate, setActiveCandidate, setCandidateState, candidateState , setAdminLoggedIn, setCandidateLoggedIn}){
    const [validated, setValidated] = useState(false);
    const [title, setTitle] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [description, setDescription] = useState("");
    const [presentation, setPresentation] = useState(activeCandidate.presentation);
    const [jobExperienceState, setJobExperienceState]= useState(activeCandidate)


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
                <H4>Here is the place to add your experience!</H4>
                <Row className="g-2 ms-3 me-5 mt-1"> 
                    <Col md>
                        <FloatingLabel controlId="TitleInputGrid" label="Title" onChange={handleTitleChange}>
                            <Form.Control required  type="Text" placeholder='"Stockholm"' />
                            <Form.Control.Feedback type="invalid">
                                All your experience needs a title
                            </Form.Control.Feedback>
                        </FloatingLabel>      
                    </Col>
                    <Col md> 
                        <FloatingLabel controlId="startDateInputGrid" label="Started date" onChange={handleStartDateChange}>
                            <Form.Control required type="Date" />
                            <Form.Control.Feedback type="invalid">
                                All your experience needs a start date
                            </Form.Control.Feedback>
                        </FloatingLabel>   
                    </Col>
                    <Col md> 
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
            <SeperatorDiv/>
            <H4>Your Resume will show here</H4>
            <ResumeContainer>
            <Resume setActiveCandidate={setActiveCandidate}jobExperienceState={jobExperienceState} candidateState={candidateState} setCandidateState={setCandidateState} presentation={presentation} setJobExperienceState={setJobExperienceState}/>
            </ResumeContainer>
    </InnerContainer>
</Container>
<Footer/>
</div>
)

}
export default CandidateMyPage

   