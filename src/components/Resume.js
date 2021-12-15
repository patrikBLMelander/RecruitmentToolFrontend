import React from 'react';
import styled from 'styled-components'
import {CloseO} from '@styled-icons/evil/CloseO';
import colorPicker from '../testData/colorPicker';
import Swal from 'sweetalert2';

const OuterContainer = styled.div`
    color: #b5bcc7;
    font-family: 'Roboto', sans-serif; 
    text-align: center;
    background-color: #3b3d40;
    width: 100%;
    display: flex;
    border-style: solid;
    border-color:  #b5bcc7;
`;
const LeftDiv = styled.div`
    width: 25%;
    border-right: solid;
    border-color:  #b5bcc7;
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
`;
const Experience = styled.div`
    border-bottom: solid;
    border-color:  #b5bcc7;
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
    background-image: linear-gradient(to right, #0b234a , #769ede);
    width: 80%;
    margin-bottom: 4px;
`;
const Skill2 = styled.div`
    display: flex;
    background-image: linear-gradient(to right, #0b234a , #769ede);
    width: 56%;
    margin-bottom: 4px;
`;
const Skill3 = styled.div`
    display: flex;    
    background-image: linear-gradient(to right, #0b234a , #769ede);
    
    width: 75%;
    margin-bottom: 4px;
`;
const Skill4 = styled.div`
    display: flex;
    background-image: linear-gradient(to right, #0b234a , #769ede);
    width: 15%;
    margin-bottom: 4px;
`;
const Skill5 = styled.div`
    display: flex;
    background-image: linear-gradient(to right, #0b234a , #769ede);
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


function Resume ({jobExperienceState, setJobExperienceState, presentation, candidateState, setCandidateState, setActiveCandidate }) {

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
                                console.log(test[cIndex])
                                console.log(jobExperienceState)
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
                    <div>
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
                    <TitleAndPeriod>
                        <H5>Placeholder Title</H5>
                        <H5>Placeholder Period from - to</H5>
                    </TitleAndPeriod>
                    <JobDescription>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac tincidunt lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi ut rutrum augue. Duis ac magna quis nunc sagittis commodo sit amet non dui. Donec porta neque tellus. Quisque quis bibendum est, id egestas nisi. Curabitur pharetra malesuada laoreet. Sed eu elit elementum, laoreet sapien a, pretium magna. Etiam vitae lorem eleifend, consectetur mauris nec, elementum lectus. Phasellus dapibus leo at ante fringilla tempus.</P>
                    </JobDescription>
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
