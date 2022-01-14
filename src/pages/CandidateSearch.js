import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import StyledButton from "../components/StyledButton";
import { CloseO } from "@styled-icons/evil/CloseO";

function CandidateSearch({
  activeJob,
  adminLoggedIn,
  candidateLoggedIn,
  setAdminLoggedIn,
  setCandidateLoggedIn,
  candidateState,
  setCandidateState,
  setActiveJob,
  setNickName,
  setColorscheme,
  colorScheme,
  jobOfferings,
}) {
  const [validated, setValidated] = useState(false);

  const [searchResult, setSearchResult] = useState([]);

  function searchForCompetence(event) {
    event.preventDefault();
    if (event.currentTarget.checkValidity() === false) {
      event.stopPropagation();
    }else{
        setSearchResult([{firstName: "No matching candidate on this competence"}]);
        const CompetenceToSearch = event.currentTarget.competence.value;
        const YearsToSearch = event.currentTarget.years.value;
        let newSearchResult= [];

        candidateState.map((candidateInMap, index) => {
        candidateInMap.competencies.map((competenceInMap) => {
        const YearsToSearch = event.currentTarget.years.value;
            if (competenceInMap.name.includes(CompetenceToSearch)&&competenceInMap.years>=YearsToSearch) {
            newSearchResult = [...newSearchResult, candidateState[index]];
            setSearchResult(newSearchResult);
            }
        });
        });
    }
    setValidated(true);
    
  }

  console.log(searchResult)

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
        <H3>Candidate Search</H3>
        <RadioDiv>
          <SearchDiv>
            <H5>Search for Candidate</H5>
            
            <Form
              noValidate
              validated={validated}
              onSubmit={searchForCompetence}
            >
                <InputDiv>
              <FloatingLabel controlId="competence" label="Competence">
                <Form.Control required type="text" placeholder='"Java"' />
                <Form.Control.Feedback type="invalid">
                  This field can not be empty
                </Form.Control.Feedback>
              </FloatingLabel>
              <FloatingLabel controlId="years" label="Years">
                <Form.Control required type="number" placeholder='"Java"' />
                <Form.Control.Feedback type="invalid">
                  This field can not be empty
                </Form.Control.Feedback>
              </FloatingLabel>
              </InputDiv>

              <StyledButton
                type="submit"
                input="Search"
                colorScheme={colorScheme}
              />
            </Form>
          </SearchDiv>
          {searchResult.map(candidate =>{
              return(
             <div>
                  <p>{candidate.firstName}</p>
              </div>)
          })}
        </RadioDiv>
      </Container>
      <Footer colorScheme={colorScheme} />
    </div>
  );
}

export default CandidateSearch;

const Container = styled.div`
    background-color: ${(props) => props.inputColor.primary};
    color: ${(props) => props.inputColor.text};
    padding-bottom: 5%;
    margin-left 160px;
`;

const RadioDiv = styled.div`
  padding-top: 40px;
  display: flex;
`;

const LeftDiv = styled.div`
  border: 1px solid;
`;

const SearchDiv = styled.div`
  padding-bottom: 50px;
`;

const InputDiv = styled.div`
  display: flex;
`;
const ChangePasswordCol = styled.div`
  margin: 10px;
`;

const H3 = styled.h3`
  display: flex;
  margin-left: 50px;
  margin-right: 400px;
  font-family: "Trebuchet MS", sans-serif;
`;

const H5 = styled.h5`
  display: flex;
  margin-left: 50px;
  margin-right: 400px;
  font-family: "Trebuchet MS", sans-serif;
`;
