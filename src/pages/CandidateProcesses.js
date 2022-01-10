import React from 'react';
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import colorPicker from '../testData/colorPicker';

import { useRecoilState } from "recoil";
import {atomUser} from "../atoms/atomStates";



function CandidateProcesses() {
    
    const [user, setUser] = useRecoilState(atomUser);

    return(
        <div>
        <Navbar/>
        <Header/>
        <Container>
            <h1>To Do</h1>
            <ul>
            <li>List all jobs this candidate applyed for</li>
            </ul>
        </Container>
        <Footer/>
        </div>
    )
}

export default CandidateProcesses;

const Container = styled.div`
background-color: ${colorPicker.primary};
color: ${colorPicker.text};
display: flex;
position: fixed;
padding-bottom: 100%;
padding-left: 163px;
padding-top: 50px;
z-index: 0;
width: 100%;
`;