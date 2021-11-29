import React,{useState} from "react";
import Modal from 'react-modal';
import styled from 'styled-components';
import {CloseO} from '@styled-icons/evil/CloseO';

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


function ApplicantCardModal(props) {


  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div >
        <h3 onClick={openModal}>{props.candidate.nickName}</h3>
      <Modal
        isOpen={modalIsOpen}
        //onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="CV modal"
      >
        <Container>
            <StyledH4>Presentation</StyledH4>
            <StyledP>{props.candidate.presentation}</StyledP>
            <StyledH4>Arbetslivserfarenhet</StyledH4>
            {props.candidate.experience.map(experience =>(
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