import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    background-image: linear-gradient(#82ad8e, #cbf2d6);
    hight: 400;
    padding-top: 16px;
    margin-left: 160px;
    margin-top: 0;
    overflow: hidden;
    margin-bottom: 8px;
`;

const H3 = styled.h3`
    display: flex;
    color: white;
    margin-left: 50px;
    margin-right: 400px;
    font-family: 'Trebuchet MS', sans-serif;
`;



export default class Header extends React.Component {
    render() {
      return (
        <Container>
            <H3>Company Name</H3>
            <H3>Name of the role you are recruting</H3>

        </Container>
        )
    }   
}


