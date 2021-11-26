import React from 'react';
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const Container = styled.div`

    margin-left: 160px;

`;

function ApplicantSearch({jobOfferings, adminLoggedIn, applicantLoggedIn, activeJob}) {
    return(
        <div>
        <Navbar jobOfferings={jobOfferings} adminLoggedIn={adminLoggedIn} applicantLoggedIn={applicantLoggedIn}/>
        <Header activeJob={activeJob}/>
        <Container>
            <h1>To Do</h1>
            <ul>
            <li>make search function to search for any applicants in the system</li>
            </ul>
        </Container>
        </div>
    )
}

export default ApplicantSearch;