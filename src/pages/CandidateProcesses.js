import React from 'react';
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import colorPicker from '../testData/colorPicker';

const Container = styled.div`
background-color: ${colorPicker.primary};
color: ${colorPicker.text};
display: flex;
position: fixed;
padding-bottom: 100%;
padding-left: 163px;
padding-top: 50px;
z-index: 0;
width: 100%;
`;

function CandidateProcesses({jobOfferings, activeJob, adminLoggedIn, candidateLoggedIn , setAdminLoggedIn, setCandidateLoggedIn}) {
    return(
        <div>
        <Navbar setAdminLoggedIn={setAdminLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn}jobOfferings={jobOfferings}  adminLoggedIn={adminLoggedIn} candidateLoggedIn={candidateLoggedIn}/>
        <Header activeJob={activeJob}/>
        <Container>
            <h1>To Do</h1>
            <ul>
            <li>List all jobs this candidate applyed for</li>
            </ul>
        </Container>
        <Footer/>
        </div>
    )
}

export default CandidateProcesses;