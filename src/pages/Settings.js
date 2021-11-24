import React from 'react';
import styled from 'styled-components'

const Container = styled.div`

    margin-left: 160px;

`;

function Settings() {
    return(
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
    )
}

export default Settings;