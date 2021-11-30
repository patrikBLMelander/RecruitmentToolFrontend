import React from 'react';
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const Container = styled.div`

    margin-left: 160px;

`;

function CandidateSearch({jobOfferings, adminLoggedIn, candidateLoggedIn, activeJob , setAdminLoggedIn, setCandidateLoggedIn}) {
    return(
        <div>
        <Navbar setAdminLoggedIn={setAdminLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn}jobOfferings={jobOfferings} adminLoggedIn={adminLoggedIn} candidateLoggedIn={candidateLoggedIn}/>
        <Header activeJob={activeJob}/>
        <Container>
            <h1>To Do</h1>
            <ul>
            <li>make search function to search for any candidates in the system</li>
            <li>search for competences</li> 
            <li>search for personal info</li>
            </ul>
        </Container>
        </div>
    )
}

export default CandidateSearch;