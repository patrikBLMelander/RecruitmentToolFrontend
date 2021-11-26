import React from 'react';
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const Container = styled.div`

    margin-left: 160px;

`;

function Settings({jobOfferings, activeJob, adminLoggedIn, applicantLoggedIn}) {
    return(
        <div>
        <Navbar jobOfferings={jobOfferings}  adminLoggedIn={adminLoggedIn} applicantLoggedIn={applicantLoggedIn}/>
        <Header activeJob={activeJob}/>
        <Container>
            <h1>To Do</h1>
            <ul>
            <li>Adjust "real name"/"Animal"</li>
            <li>Adjust picture or no picture on applicant</li>
            <li>Adjust color scheme</li>
            <li>Add new profile (recruiter)</li>
            <li>Set authority on profiles</li>
            </ul>
        </Container>
        </div>
    )
}

export default Settings;