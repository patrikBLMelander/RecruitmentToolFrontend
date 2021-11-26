import React from 'react';
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const Container = styled.div`

    margin-left: 160px;

`;

function CandidateProcesses({jobOfferings, activeJob, adminLoggedIn, applicantLoggedIn}) {
    return(
        <div>
        <Navbar jobOfferings={jobOfferings}  adminLoggedIn={adminLoggedIn} applicantLoggedIn={applicantLoggedIn}/>
        <Header activeJob={activeJob}/>
        <Container>
            <h1>To Do</h1>
            <ul>
            <li>List all jobs this candidate applyed for</li>
            </ul>
        </Container>
        </div>
    )
}

export default CandidateProcesses;