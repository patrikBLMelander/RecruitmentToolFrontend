import React from 'react';
import { AiOutlineFolderAdd } from "react-icons/ai";
import styled from 'styled-components'
import { FaSmileBeam } from "react-icons/fa";
import { FcSettings } from "react-icons/fc";
import { IoIosPower } from "react-icons/io";

const Container = styled.div`
    position: fixed;
    text-align: center;
    background-color: #34523c;
    color: white;
    height: 100%;
    width: 160px;
    z-index: 1,
    top: 0;
    left: 0;
    overflow-x: hidden;
    padding-top: 16px;
`;


 function Navbar () {
 
    return (
    <Container>

        <h1><AiOutlineFolderAdd /></h1>
        <h1><FaSmileBeam /></h1>
        <h1><FcSettings /></h1>
        <h1><IoIosPower /></h1>

    </Container>
    )

   
    
}

export default Navbar;
