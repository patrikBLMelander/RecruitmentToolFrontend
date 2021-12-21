import React from 'react';
import styled from 'styled-components'
import colorPicker from '../testData/colorPicker';



const Container = styled.div`
    color: ${colorPicker.text};
    font-family: 'Roboto', sans-serif; 
    text-align: center;
    background-color: ${colorPicker.primary};
    width: 80%;
    display: flex;
    border-style: double;
    border-color:  ${colorPicker.text};
    margin-bottom: 10%;
    margin-left: 10%;
    margin-top: 10%;
`;
const LeftDiv = styled.div`
    width: 25%;
    border-right: solid;
    border-color:  ${colorPicker.secondary};
    padding: 5px;
    margin: 5px;
`;
const RightDiv = styled.div`
    padding: 5px;
    width: 75%;
`;

const Preview = styled.div`
    border-bottom: solid;
    border-color:${colorPicker.secondary};
`;

const ContactInfo = styled.div`
    border-bottom: solid;
    border-top: solid;
    border-color:${colorPicker.secondary};
`;
const Title = styled.h1`
    margin-right: 15px;
    margin-top: 10px;
`;

const H5 = styled.h5`
    margin-right: 15px;
    margin-top: 10px;
`;

const Role = styled.p`
    
`;
const Competence = styled.p`
    
`;


const Competencies = styled.div`

`;

const StyledImg = styled.img`
    border-radius: 100%;
    text-align: center;
    margin: 15px;
`;


function JobOfferPreview ({jobOffer}) {

    console.log(jobOffer)
    let toRender;

    if (jobOffer===""){
        console.log("Renderar inget")
        toRender=(
            <div>
            </div>
        )
    }else{
        console.log("Renderar preview")
        toRender = (

            <Container>
                <LeftDiv>
                    <StyledImg src={jobOffer.imageUrl}></StyledImg>
                    <ContactInfo> 
                        <H5>Contact</H5>
                        <p>Patrik Melander</p>
                        <p>Tel: 0704 01 11 19</p>
                        <p>PatrikJMelander@gmail.com</p>
                    </ContactInfo> 
    
                    <Competencies> 
                        <H5>Requested Competencies</H5>
                        {jobOffer.competencies.map(competenceInmap =>{
                            if(jobOffer.competencies[0]===""){
                                return <p>no competencies specified</p>
                            }else{
                                return (<Competence key={competenceInmap.id}>{competenceInmap.name} - {competenceInmap.years} years</Competence>)
                            }     
                })} 
                </Competencies>
                </LeftDiv>
                <RightDiv>
                
                    <Title>{jobOffer.title}</Title>
                    <Preview>{jobOffer.preview} </Preview>
                    <H5>About the Company</H5>
                <p>{jobOffer.companyDescription} </p>
                <H5>Your Role</H5>
                <Role>{jobOffer.aboutRole}</Role>
                </RightDiv>
            </Container>
    
        )
    }
   return toRender;
   
}

export default JobOfferPreview;
