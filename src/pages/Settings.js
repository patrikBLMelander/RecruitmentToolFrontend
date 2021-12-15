import React from 'react';
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import colorPicker from '../testData/colorPicker';

const Container = styled.div`
background-color: ${colorPicker.background};
color: ${colorPicker.text};
display: flex;
position: fixed;
padding-bottom: 100%;
padding-left: 163px;
padding-top: 50px;
z-index: 0;
width: 100%;
`;

function Settings({jobOfferings, activeJob, adminLoggedIn, candidateLoggedIn, setAdminLoggedIn, setCandidateLoggedIn}) {
    return(
        <div>
        <Navbar setAdminLoggedIn={setAdminLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn}jobOfferings={jobOfferings}  adminLoggedIn={adminLoggedIn} candidateLoggedIn={candidateLoggedIn}/>
        <Header activeJob={activeJob}/>
        <Container>
            <h1>To Do</h1>
            <ul>
            <li>Adjust "real name"/"Animal"</li>
            <li>Adjust picture or no picture on candidate</li>
            <li>Adjust color scheme</li>
            <li>Add new profile (recruiter)</li>
            <li>Set authority on profiles</li>
            </ul>
        </Container>
        <Footer/>
        </div>
    )
}

export default Settings;