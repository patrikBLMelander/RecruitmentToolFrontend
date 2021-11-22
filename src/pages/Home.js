import React from 'react';
import styled from 'styled-components'

const Container = styled.div`

    margin-left: 160px;

`;

const H3 = styled.h3`
    display: flex;
    color: #3b3d40;
    margin-left: 50px;
    margin-right: 400px;
    font-family: 'Trebuchet MS', sans-serif;
`;

 function Home () {

    return (
    <Container>
        <H3>Welcome FIRSTNAME LASTNAME</H3>
        

    </Container>
    )
       
}

export default Home
