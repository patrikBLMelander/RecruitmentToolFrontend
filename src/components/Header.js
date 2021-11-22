import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    background-image: linear-gradient(#b7cced, #dadee6);
    hight: 400;
    padding-top: 16px;
    margin-left: 160px;
    margin-top: 0;
    overflow: hidden;
    margin-bottom: 8px;
`;

const H3 = styled.h3`
    display: flex;
    color: #3b3d40;
    margin-left: 50px;
    margin-right: 400px;
    font-family: 'Trebuchet MS', sans-serif;
`;



 function Header () {

    return (
    <Container>
        <H3>Company LOGO</H3>
        <H3>ROLE</H3>
    </Container>
    )
       
}

export default Header
