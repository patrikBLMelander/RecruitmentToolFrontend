import React, { useState } from 'react';
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import colorPicker from '../testData/colorPicker';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import StyledButton from '../components/StyledButton';
import Swal from 'sweetalert2';
import { CloseO } from "@styled-icons/evil/CloseO";

let counter = 9;
let newId = "candidate-" + counter;
let emailTaken = false;

function Settings({ jobOfferings, activeJob, adminLoggedIn, candidateLoggedIn, setAdminLoggedIn, setCandidateLoggedIn, candidateState, setCandidateState, setActiveJob }) {
    const [validated, setValidated] = useState(false);
    //ADJUST NAME
    const [radioButtonsName, setRadioButtonsName] = useState([true, false, false])
    function handleAnimalChange() {
        setRadioButtonsName([true, false, false])
    }
    function handleCountryChange() {
        setRadioButtonsName([false, true, false])
    }
    function handleCitiesChange() {
        setRadioButtonsName([false, false, true])
    }
    //ADJUST COLOR
    const [radioButtonsColor, setRadioButtonsColor] = useState([true, false, false, false, false, false])
    function handleColor1Change() {
        setRadioButtonsColor([true, false, false, false, false, false])
    }
    function handleColor2Change() {
        setRadioButtonsColor([false, true, false, false, false, false])
    }
    function handleColor3Change() {
        setRadioButtonsColor([false, false, true, false, false, false])
    }
    function handleColor4Change() {
        setRadioButtonsColor([false, false, false, true, false, false])
    }
    function handleColor5Change() {
        setRadioButtonsColor([false, false, false, false, true, false])
    }
    function handleColor6Change() {
        setRadioButtonsColor([false, false, false, false, false, true])
    }
    //CREATE ADMIN
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            candidateState.map(candidateInMap => {
                if (candidateInMap.email.toLowerCase() === form.adminMail.value.toLowerCase()) {
                    emailTaken = true;
                }
                return null;
            })
            if (emailTaken) {
                Swal.fire({
                    icon: 'error',
                    title: 'Email alredy registred',
                    text: 'This email is already registred in our database, try register whith an other email',
                    showConfirmButton: false,
                    showDenyButton: false,
                    showCancelButton: true,
                    cancelButtonText: 'Try again'
                })
                event.stopPropagation();
                emailTaken = false
            } else {
                counter = counter + 1;
                newId = "admin-" + counter

                const newCandidateState = [...candidateState, {
                    id: newId,
                    nickName: "",
                    firstName: form.addRecruiterFirstName.value,
                    lastName: form.addRecruiterLastName.value,
                    presentation: "",
                    email: form.adminMail.value,
                    password: form.adminDefaultPassword.value,
                    phone: "",
                    experience: [],
                    rate: [],
                    education: [],
                    competencies: [],
                    personality: [],
                    role: "admin",

                }]
                setCandidateState(newCandidateState);
                Swal.fire({
                    icon: 'success',
                    title: 'Recruiter added',
                    text: 'Choosen password is: ' + form.adminDefaultPassword.value + ' Dont forget to tell the new recruiter to change it',
                    showConfirmButton: true,
                    showDenyButton: false,
                    showCancelButton: false,
                })
            }
        }
        setValidated(true);

    };

    function removeAdmin(indexToRemove){
        console.log(indexToRemove)
        const NewCandidateState = candidateState;
        NewCandidateState.splice(indexToRemove, 1);
        setCandidateState(NewCandidateState)
    }


    return (
        <div>
            <Navbar setActiveJob={setActiveJob} setAdminLoggedIn={setAdminLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn} jobOfferings={jobOfferings} adminLoggedIn={adminLoggedIn} candidateLoggedIn={candidateLoggedIn} />
            <Header activeJob={activeJob} />
            <Container>
                <H3>Settings</H3>
                <AdjustCandidateNameDiv>
                    <H5>How do you want your Candidates to be shown?</H5>
                    <form>
                        <RadioDiv>
                            <label>
                                <input type="radio" value="option1"
                                    checked={radioButtonsName[0]}
                                    onChange={handleAnimalChange} />
                                Animals
                            </label>
                        </RadioDiv>
                        <RadioDiv>
                            <label>
                                <input type="radio" value="option2"
                                    checked={radioButtonsName[1]}
                                    onChange={handleCountryChange} />
                                Cities
                            </label>
                        </RadioDiv>
                        <RadioDiv>
                            <label>
                                <input type="radio" value="option3"
                                    checked={radioButtonsName[2]}
                                    onChange={handleCitiesChange} />
                                Counties
                            </label>
                        </RadioDiv>
                    </form>
                </AdjustCandidateNameDiv>

                <AdjustColorDiv>
                    <H5>Choose ColorScheme</H5>
                    <form>
                        <RadioDiv>
                            <label>
                                <input type="radio" value="option1"
                                    checked={radioButtonsColor[0]}
                                    onChange={handleColor1Change} />
                                Gray/Blue
                            </label>
                        </RadioDiv>
                        <RadioDiv>
                            <label>
                                <input type="radio" value="option2"
                                    checked={radioButtonsColor[1]}
                                    onChange={handleColor2Change} />
                                Dark Blue
                            </label>
                        </RadioDiv>
                        <RadioDiv>
                            <label>
                                <input type="radio" value="option3"
                                    checked={radioButtonsColor[2]}
                                    onChange={handleColor3Change} />
                                Green/Nature
                            </label>
                        </RadioDiv>
                        <RadioDiv>
                            <label>
                                <input type="radio" value="option3"
                                    checked={radioButtonsColor[3]}
                                    onChange={handleColor4Change} />
                                Dark/Green
                            </label>
                        </RadioDiv>
                        <RadioDiv>
                            <label>
                                <input type="radio" value="option3"
                                    checked={radioButtonsColor[4]}
                                    onChange={handleColor5Change} />
                                Brown
                            </label>
                        </RadioDiv>
                        <RadioDiv>
                            <label>
                                <input type="radio" value="option3"
                                    checked={radioButtonsColor[5]}
                                    onChange={handleColor6Change} />
                                Pink
                            </label>
                        </RadioDiv>
                    </form>

                </AdjustColorDiv>

                <AddRecruiterDiv>
                    <H5>Add Recruiter</H5>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <CreateRecruiterRow>
                            <CreateRecruiterCol>
                                <FloatingLabel controlId="addRecruiterFirstName" label="First name">
                                    <Form.Control required type="Text" placeholder='"Patrik"' />
                                    <Form.Control.Feedback type="invalid">
                                        Everyone have a first name, right?
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </CreateRecruiterCol>
                            <CreateRecruiterCol>
                                <FloatingLabel controlId="addRecruiterLastName" label="Last name">
                                    <Form.Control required type="Text" placeholder='"Melander"' />
                                    <Form.Control.Feedback type="invalid">
                                        Everyone have a last name, right?
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </CreateRecruiterCol>
                        </CreateRecruiterRow>
                        <CreateRecruiterRow>
                            <CreateRecruiterCol>
                                <FloatingLabel controlId="adminMail" label="email">
                                    <Form.Control required type="Email" placeholder='"Melander"' />
                                    <Form.Control.Feedback type="invalid">
                                        This is needed to log in!
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </CreateRecruiterCol>
                            <CreateRecruiterCol>
                                <FloatingLabel controlId="adminDefaultPassword" label="password">
                                    <Form.Control required type="password" placeholder='"Melander"' />
                                    <Form.Control.Feedback type="invalid">
                                        This is needed to log in!
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </CreateRecruiterCol>
                        </CreateRecruiterRow>
                        <StyledButton type="submit" input="Add Recruiter" />
                    </Form>
                </AddRecruiterDiv>

                <RemoveRecruiterDiv>
                <H5>Your Recruters</H5>
                <ul>
                {candidateState.map((candidate, index) =>{
                    if(candidate.id.includes("admin")){
                        return(
                            <OneAdminDiv>
                                <li>{candidate.firstName}</li>
                                <StyledCloseBtn
                                onClick={() => removeAdmin(index)}/>
                            </OneAdminDiv>
                         )

                    }
                })}
                </ul>
                </RemoveRecruiterDiv>

                <ToDoDiv>
                    <h1>To Do</h1>
                    <ul>
                        <li>Remove Admin</li>
                        <li>Show Admin</li>
                        <li>Change Password</li>
                    </ul>
                </ToDoDiv>




            </Container>
            <Footer />
        </div>
    )
}

export default Settings;

const Container = styled.div`
    background-color: ${colorPicker.primary};    
    padding-bottom: 5%;
    margin-left 160px
`;

const AdjustCandidateNameDiv = styled.div`

`;
const RadioDiv = styled.div`

`;


const AdjustColorDiv = styled.div`

`;

const ToDoDiv = styled.div`

`;

const AddRecruiterDiv = styled.div`
    margin: 10px;
`;
const CreateRecruiterRow = styled.div`

`;
const CreateRecruiterCol = styled.div`

`;

const RemoveRecruiterDiv = styled.div`

`;
const OneAdminDiv = styled.div`
    display: flex;

`;

const H3 = styled.h3`
    display: flex;
    color: ${colorPicker.text};
    margin-left: 50px;
    margin-right: 400px;
    font-family: 'Trebuchet MS', sans-serif;
`;

const H5 = styled.h5`
    display: flex;
    color: ${colorPicker.text};
    margin-left: 50px;
    margin-right: 400px;
    font-family: 'Trebuchet MS', sans-serif;
`;

const StyledCloseBtn = styled(CloseO)`
  display: flex;
  margin-right: 80%;
  margin-left: auto;
  cursor: pointer;
  height: 28px;
  width: 28px;
  color: ${colorPicker.text};
`;