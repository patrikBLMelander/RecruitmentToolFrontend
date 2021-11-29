import React,{useState} from "react";
import Modal from 'react-modal';
import styled from 'styled-components';
import {CloseO} from '@styled-icons/evil/CloseO';
import { Rating } from 'react-simple-star-rating'



const customStyles = {
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background-color:#d7dbe0;
  border-radius: 10px;


  display: flex;
  flex-direction: column;
`;

const StyledH4 = styled.h4`
    margin-block-start: 1.33em;
    margin-block-end: 0.3em;
    margin-inline-start: 10px;
    margin-inline-end: 0px;
`;

const StyledH5 = styled.h5`
    margin-block-start: 0.5em;
    margin-block-end: 0.1em;
    margin-inline-start: 20px;
    margin-inline-end: 0px;
`;


const StyledP = styled.p`
    margin-left: 25px;
    margin-right: 25px;
    margin-top: 10px;
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

  //ToDo: Loopa candidateState och kolla om den aktiva kandidaten har en ranking på detta jobb
  //sätt i så fall den rankingen som rateState

  //fixa metoden som sätter rateState så den kollar om det redan finns ett state och i så fall uppdatera det, 
  //finns det inte redan ett state ska ett nytt skapas med ett unikt id


  const [rating, setRating] = useState(0)
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleRating = (rate) => {
    setRating(rate)
    let newCandidateState = candidateState;

    candidateState.map((candidateInMap, index) =>{
      if(candidateInMap.id===candidate.id){
        newCandidateState[index].rate = [...candidateInMap.rate, {id:'test1', rate:rate, jobofferId:activeJobId}]
      }
    })
    console.log(newCandidateState)
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
            <StyledH4>Presentation</StyledH4>
            <StyledP>{candidate.presentation}</StyledP>
            <StyledH4>Arbetslivserfarenhet</StyledH4>
            {candidate.experience.map(experience =>(
                <div key = {experience}>
                    <StyledH5>{experience.title}</StyledH5>
                    <StyledH5>{experience.period}</StyledH5>
                    <StyledP>{experience.description}</StyledP>
                </div>
            ))}


        </Container>

        <StyledCloseBtn onClick={closeModal}></StyledCloseBtn>
      </Modal>
    </div>
  );
}

export default ApplicantCardModal;