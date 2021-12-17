import React from 'react';
import styled from 'styled-components'
import {CloseO} from '@styled-icons/evil/CloseO';
import colorPicker from '../testData/colorPicker';
import Swal from 'sweetalert2';

const OuterContainer = styled.div`
    color: ${colorPicker.text};
    font-family: 'Roboto', sans-serif; 
    text-align: center;
    background-color: ${colorPicker.primary};
    width: 100%;
    display: flex;
    border-style: double;
    border-color:  ${colorPicker.text};
`;
const LeftDiv = styled.div`
    width: 25%;
    border-right: solid;
    border-color:  ${colorPicker.secondary};
    padding: 5px;
`;
const RightDiv = styled.div`
    padding: 5px;
    width: 75%;
`;
const StyledImg = styled.img`
    border-radius: 100%;
    text-align: center;
    margin: 15px;
`;
const AboutMe = styled.div`
    border-top: solid;
    border-color:${colorPicker.secondary};
`;
const Experience = styled.div`
    border-bottom: solid;
    border-color:${colorPicker.secondary};
`;
const TitleAndPeriod = styled.div`
    display:flex;
    margin-left:10px;
`;
const JobDescription = styled.div`
    margin: 0px 15px 25px 15px;
    text-align: left;    
    
`;
const Skills = styled.div`
    margin-top: 8px;
    margin-left: 5%;
`;
const Skill1 = styled.div`
    display: flex;
    background-image: linear-gradient(to right, ${colorPicker.fifth} , ${colorPicker.fourth});
    width: 80%;
    margin-bottom: 4px;
`;
const Skill2 = styled.div`
    display: flex;
    background-image: linear-gradient(to right, ${colorPicker.fifth} , ${colorPicker.fourth});
    width: 56%;
    margin-bottom: 4px;
`;
const Skill3 = styled.div`
    display: flex;    
    background-image: linear-gradient(to right, ${colorPicker.fifth} , ${colorPicker.fourth});
    
    width: 75%;
    margin-bottom: 4px;
`;
const Skill4 = styled.div`
    display: flex;
    background-image: linear-gradient(to right, ${colorPicker.fifth} , ${colorPicker.fourth});
    width: 15%;
    margin-bottom: 4px;
`;
const Skill5 = styled.div`
    display: flex;
    background-image: linear-gradient(to right, ${colorPicker.fifth} , ${colorPicker.fourth});
    width: 45%;
    margin-bottom: 4px;
`;
const H3 = styled.h3`
    
`;
const H5 = styled.h5`
    
`;
const P = styled.p`
    
`;
const StyledCloseBtn = styled(CloseO)`
    display:flex;
    margin-left: auto; 
    margin-right: 0;
    cursor: pointer;
    height: 28px;
    width: 28px;
    color: #fff;
`; 


function Resume ({jobExperienceState, setJobExperienceState, presentation, candidateState, setCandidateState, setActiveCandidate, activeCandidate}) {

console.log(jobExperienceState)

    function removeExperience(experienceInMap){
        Swal.fire({
            title: 'Remove Experience',
            text: 'Do you want to remove this experience?',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true,
        }).then((result) => {

            if (result.isConfirmed) {
                let test = candidateState;
                candidateState.map((candidateStateInMap, cIndex) =>{
                    if(candidateState[cIndex].id===jobExperienceState.id){
   
                        candidateState[cIndex].experience.map(experienceToCheck =>{

                            if(experienceToCheck.id===experienceInMap.id){
                                test[cIndex].experience = [...candidateState[cIndex].experience.filter(experience => experience.id!==experienceInMap.id)]
    
                                setCandidateState(test)
                                setJobExperienceState(test[cIndex])
                                setActiveCandidate(test[cIndex])
                            }

                        })
                    }
                    
                }
                

            )}
        })
    }
    function removeEducation(educationInMap){
        Swal.fire({
            title: 'Remove Education',
            text: 'Do you want to remove this education?',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                let test = candidateState;
                candidateState.map((candidateStateInMap, cIndex) =>{

                    if(candidateState[cIndex].id===jobExperienceState.id){
   
                        candidateState[cIndex].education.map(educationToCheck =>{

                            if(educationToCheck.id===educationInMap.id){
                                test[cIndex].education = [...candidateState[cIndex].education.filter(education => education.id!==educationInMap.id)]
    
                                setCandidateState(test)
                                setJobExperienceState(test[cIndex])
                                setActiveCandidate(test[cIndex])
                            }

                        })
                    }
                    
                }
                

            )}
        })
    }





    return (
        <OuterContainer key={jobExperienceState.id}>
            <LeftDiv>
                <StyledImg src="https://picsum.photos/150?grayscale"></StyledImg>
                <AboutMe>
                    <H5>About me</H5>
                    <P>{presentation}</P>
                </AboutMe>
            </LeftDiv>
            <RightDiv>
                <H3>{jobExperienceState.nickName}</H3>
                <Experience>
                    <H5>Job Experience</H5>
                    {jobExperienceState.experience.map(experienceInMap =>{

                    return(
                    <div key={experienceInMap.id}>
                        <TitleAndPeriod>
                            <H5>{experienceInMap.title}</H5>
                            <H5>{experienceInMap.period}</H5>
                            <StyledCloseBtn onClick={() => removeExperience(experienceInMap)}/>
                        </TitleAndPeriod>
                        <JobDescription>
                            <P>{experienceInMap.description}</P>
                        </JobDescription>
                    </div>
                    )
                    })}
                </Experience>
                <Experience>
                <H5>Education</H5>
                    {jobExperienceState.education.map(educationsInMap =>{
                        return(
                            <div key={educationsInMap.id}>
                                <TitleAndPeriod>
                                    <H5>{educationsInMap.title}</H5>
                                    <H5>{educationsInMap.period}</H5>
                                    <StyledCloseBtn onClick={() => removeEducation(educationsInMap)}/>
                                </TitleAndPeriod>
                                <JobDescription>
                                    <P>{educationsInMap.description}</P>
                                </JobDescription>
                            </div>
                        )
                        })}
                </Experience>
                <Skills>
                    <Skill1>HTML</Skill1>
                    <Skill2>JavaScript</Skill2>
                    <Skill3>Java</Skill3>
                    <Skill4>Nice Guy</Skill4>
                    <Skill5>SQL</Skill5>
                </Skills>
                
                
            </RightDiv>
        </OuterContainer>
    )
    
}

export default Resume;
