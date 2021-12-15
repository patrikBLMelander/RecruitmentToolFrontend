import React,{useState} from "react";
import Modal from 'react-modal';
import styled from 'styled-components';
import {CloseO} from '@styled-icons/evil/CloseO';
import { Rating } from 'react-simple-star-rating'
import Resume from '../Resume';

let newId;
let counter=0;

const customStyles = {
  content: {
    position: 'absolute',
    width:'80%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Container = styled.div`
  margin: 8px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;


const StyledCloseBtn = styled(CloseO)`
    
    top: 10px;     
    cursor: pointer;
    height: 28px;
    width: 28px;
    opacity: 1;
    position: absolute;    
    z-index: 999;
    right: 10px;
    color: #222;
    text-decoration: none;
    text-align: center;
    line-height: 28px;
`; 

Modal.setAppElement('#root');


function ApplicantCardModal({candidate, candidateState, setCandidateState, activeJobId}) {

  const [rating, setRating] = useState(    candidate.rate.map(rateInMap =>{
    if (rateInMap.jobofferId === activeJobId){
      return rateInMap.rate
    }else {
      return 0;
  }}));

  const [modalIsOpen, setIsOpen] = useState(false);

  const handleRating = (rate) => {
    setRating(rate)
    let newCandidateState = candidateState;

    candidateState.map((candidateInMap, candidateIndex) =>{
      if(candidateInMap.id===candidate.id){
        let foundRate=false
        candidateInMap.rate.map((rateInMap, rateIndex) =>{
          if(rateInMap.jobofferId===activeJobId){
            newCandidateState[candidateIndex].rate[rateIndex] = {id:rateInMap.id ,rate:rate/20, jobofferId:rateInMap.jobofferId }
           
            foundRate=true
          }
          return null
        })
        if(!foundRate){
          counter +=1;
          newId="rateId"+counter;
          newCandidateState[candidateIndex].rate = [...candidateInMap.rate, {id:newId, rate:rate/20, jobofferId:activeJobId}]
        }

      }
      return null
    })
    setCandidateState(newCandidateState)
  }

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div >
        <div >
          <h3 onClick={openModal}>{candidate.nickName}</h3>
          <Rating size='31'
        onClick={handleRating}
        ratingValue={rating} allowHalfIcon='true'
      />
        </div>
       
      <Modal
        isOpen={modalIsOpen}
        //onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="CV modal"
      >
        <Container>

            <Resume presentation={candidate.presentation} jobExperienceState={candidate}/>


        </Container>

        <StyledCloseBtn onClick={closeModal}></StyledCloseBtn>
      </Modal>
    </div>
  );
}

export default ApplicantCardModal;