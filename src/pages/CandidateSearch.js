import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function CandidateSearch({
  jobOfferings,
  adminLoggedIn,
  candidateLoggedIn,
  activeJob,
  setActiveJob,
  setAdminLoggedIn,
  setCandidateLoggedIn,
  colorScheme,
}) {
  return (
    <div>
      <Navbar
        colorScheme={colorScheme}
        setActiveJob={setActiveJob}
        setAdminLoggedIn={setAdminLoggedIn}
        setCandidateLoggedIn={setCandidateLoggedIn}
        jobOfferings={jobOfferings}
        adminLoggedIn={adminLoggedIn}
        candidateLoggedIn={candidateLoggedIn}
      />
      <Header colorScheme={colorScheme} activeJob={activeJob} />
      <Container inputColor={colorScheme}>
        <h1>To Do</h1>
        <ul>
          <li>
            make search function to search for any candidates in the system
          </li>
          <li>search for competences</li>
          <li>search for personal info</li>
        </ul>
      </Container>
      <Footer colorScheme={colorScheme} />
    </div>
  );
}

export default CandidateSearch;

const Container = styled.div`
  background-color: ${(props) => props.inputColor.primary};
  color: ${(props) => props.inputColor.text};
  display: flex;
  position: fixed;
  padding-bottom: 100%;
  padding-left: 163px;
  padding-top: 50px;
  z-index: 0;
  width: 100%;
`;
