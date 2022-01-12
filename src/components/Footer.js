import React from 'react';
import styled from 'styled-components'
import colorPicker from '../testData/colorPicker';



 function Footer () {

    return (
    <Container>
        <H5>Copyright &copy; Patrik Melander</H5>
    </Container>
    )
       
}

export default Footer

const Container = styled.div`
    display: flex;
    position:fixed;
    z-index: 3;
    left: 0;
    bottom: 0;
    width: 100%;
    justify-content: center;
    background-color: ${colorPicker.fifth};
    hight: 400;
    padding-top: 16px;
    margin-top: 0;
    overflow: hidden;
    margin-bottom: 0px;
    
`;

const H5 = styled.h5`
    font-family: 'Roboto', sans-serif; 
    display: flex;
    color: ${colorPicker.text};
    margin-top: 20px;
    margin-bottom: 20px;
    
`;