import React,{useState} from "react";
import styled from 'styled-components'  
import { useNavigate } from "react-router-dom"; 
import Swal from 'sweetalert2';
import colorPicker from '../testData/colorPicker';
import Modal from 'react-modal';
import JobOfferPreview from './JobOfferPreview'
         
import { useRecoilState } from "recoil";
import { atomUser, atomJobOffers, atomCandidates, atomAdmin, atomActiveJob, atomIsAdmin } from "../atoms/atomStates";



                
function JobOfferCard({index, jobOfferingsInMap, totalCandidates}){
    
    const [user, setUser] = useRecoilState(atomUser);
    const [admin, setAdmin] = useRecoilState(atomAdmin);
    const [jobOffers, setJobOffers] = useRecoilState(atomJobOffers);
    const [activeJob, setActiveJob] = useRecoilState(atomActiveJob);
    const [isAdmin, setIsAdmin] = useRecoilState(atomIsAdmin);
    
    
    const navigate = useNavigate();
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }

    function setBtnText(){

        if(isAdmin){
            return "Candidate"
        }else { return "Apply"}
        
    }


    function setJobToWorkWith(event){
        
        if(isAdmin){
            setActiveJob({...activeJob,
                title: event.title,
                id: event.id
            })
            navigate("/admin/recruitment-page")
        }
        
        if(user.id === null){
            navigate("/candidate/register")
        }
        else{
            let alreadyApplied = false;
            
            jobOffers.jobOfferTestData[index].recruitmentSteps.map(recruitmentStepsInMap =>{
                recruitmentStepsInMap.candidateIds.map(candidateIdsInMap=>{
                    if(user.id === candidateIdsInMap){
                       
                        alreadyApplied=true
                        Swal.fire({
                            title: 'Not Applied!',
                            text: 'You have already applied for this role.',
                            icon: 'warning',
                            showConfirmButton: false,
                            timer: 3000
                        })
                    }
                    return null;
                })
                return null;
            })
            if(!alreadyApplied){
                Swal.fire({
                    title: 'Apply?',
                    text: 'Do you want to apply for this role',
                    icon: 'question',
                    showConfirmButton: true,
                    confirmButtonText: "Apply",
                    showCancelButton: true,
                    cancelButtonText: "Not now"
                }).then((result) => {
                    if (result.isConfirmed) {
                        let newJobOffering = jobOffers.jobOfferTestData
                        newJobOffering[index].recruitmentSteps[0].candidateIds = [...jobOffers.jobOfferTestData[index].recruitmentSteps[0].candidateIds, user.id]
            
                        setJobOffers.jobOfferTestData(newJobOffering)
                        navigate("/candidate/my-page")
                    } 
                })
            }
        }

    }
    return(
        <CardDiv key={index}>
            <Image src={jobOffers.jobOfferTestData[index].imageUrl} onClick={openModal}/>
            <CardBody>
                <StyledH4>{jobOffers.jobOfferTestData[index].title}</StyledH4>
                <PExpire>Expire: {jobOffers.jobOfferTestData[index].applyDate}</PExpire>
                <BtnContainer>
                <StyledButton onClick={() => setJobToWorkWith(jobOffers.jobOfferTestData[index])} variant="primary" >{setBtnText()}</StyledButton>
                </BtnContainer>
                <CadnidateInfoDiv>
                    <PNew show={isAdmin}>New: {jobOffers.jobOfferTestData[index].recruitmentSteps[0].candidateIds.length}</PNew>
                    <PTotal show={isAdmin}>Total: {totalCandidates}</PTotal>
                </CadnidateInfoDiv>
            </CardBody>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="JobOffer modal"
            >
                    <JobOfferPreview jobOffer={jobOfferingsInMap}/>
                    <BtnModalContainer>
                        <StyledButton onClick={() => setJobToWorkWith(jobOfferingsInMap)} variant="primary">{setBtnText()}</StyledButton>
                        <StyledButton onClick={closeModal} variant="primary">{"Close"}</StyledButton>
                    </BtnModalContainer>
            </Modal>
    </CardDiv>

    )
}

export default JobOfferCard;

const customStyles = {
    content: {
        backgroundColor: colorPicker.primary,
      position: 'absolute',
      width:'70%',
      height: '80%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const CardDiv = styled.div`
    display flex;
    flex-direction: column;
    justify-content:center;
    border-radius: 45px;
    box-shadow: 0px 8px 15px ${colorPicker.third};
    min-width: 350px;
    min-height: 300px;
    max-width: 350px;
    min-height: 300px;
    margin: 8px 8px 8px 8px
`;

const Image = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 45px 45px 0px 0px;

`;

const CardBody = styled.div`
    background-color: ${colorPicker.secondary};
    border-radius: 0px 0px 45px 45px;
`;

const CadnidateInfoDiv = styled.div`
    display flex;
    justify-content: center;
    
`;

const PNew = styled.p`
    text-shadow: 2px 2px 5px green;
    font-weight: bold;
    margin-right: 75px;
    color: #43d148;
    visibility: ${props => (
        props.show ? "visible" : "hidden")
    };
`;

const PTotal = styled.p`
    margin-left: 75px;
    font-weight: bold;
    color: ${colorPicker.fifth};
    visibility: ${props => (
        props.show ? "visible" : "hidden")
    };
`;

const PExpire = styled.p`
    font-weight: bold;
    margin-top: 0;
    margin-left: 10px;
    margin-bottom: 0;
    color: ${colorPicker.fifth};
`;            

const StyledH4 = styled.h4`
    margin-top: 8px;
    margin-left: 10px;
    color: ${colorPicker.fifth};
`;   

const BtnContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center

`;
const BtnModalContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5%;
`;


const StyledButton = styled.button`
    margin:4px;
    width: 140px;
    height: 45px;
    font-family: 'Roboto', sans-serif;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: ${colorPicker.text};
    background-color: ${colorPicker.third};
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px ${colorPicker.third};
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    &:hover {
        background-color: ${colorPicker.fourth};
        box-shadow: 0px 15px 20px ${colorPicker.fourth};
        color: ${colorPicker.text}
        transform: translateY(-7px);
    }
    
`;
                
        