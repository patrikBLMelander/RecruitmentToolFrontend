import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { Rating } from "react-simple-star-rating";
import Resume from "../Resume";
import colorPicker from "../../testData/colorPicker";
import StyledButton from "../StyledButton"

let newId;
let counter = 0;

Modal.setAppElement("#root");

function ApplicantCardModal({
  candidate,
  candidateState,
  setCandidateState,
  activeJobId,
  nickName,
  colorScheme
}) {
  const [rating, setRating] = useState(
    candidate.rate.map((rateInMap) => {
      if (rateInMap.jobofferId === activeJobId) {
        return rateInMap.rate;
      } else {
        return 0;
      }
    })
  );

  const [modalIsOpen, setIsOpen] = useState(false);

  const handleRating = (rate) => {
    setRating(rate);
    let newCandidateState = candidateState;

    candidateState.map((candidateInMap, candidateIndex) => {
      if (candidateInMap.id === candidate.id) {
        let foundRate = false;
        candidateInMap.rate.map((rateInMap, rateIndex) => {
          if (rateInMap.jobofferId === activeJobId) {
            newCandidateState[candidateIndex].rate[rateIndex] = {
              id: rateInMap.id,
              rate: rate / 20,
              jobofferId: rateInMap.jobofferId,
            };

            foundRate = true;
          }
          return null;
        });
        if (!foundRate) {
          counter += 1;
          newId = "rateId" + counter;
          newCandidateState[candidateIndex].rate = [
            ...candidateInMap.rate,
            { id: newId, rate: rate / 20, jobofferId: activeJobId },
          ];
        }
      }
      return null;
    });
    setCandidateState(newCandidateState);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div>
        <h3 onClick={openModal}>{nickName[candidate.nickName]}</h3>
        <Rating
          size="31"
          onClick={handleRating}
          ratingValue={rating}
          allowHalfIcon="true"
        />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles, {backgroundColor: colorScheme.primary,}}
        contentLabel="CV modal"
      >
        <Container>
          <Resume
            presentation={candidate.presentation}
            jobExperienceState={candidate}
            candidateView={false}
            activeCandidate={candidate}
            colorScheme={colorScheme}
          />
        </Container>
        <BtnModalContainer>
          <StyledButton onClick={closeModal}>Close</StyledButton>
        </BtnModalContainer>
      </Modal>
    </div>
  );
}

export default ApplicantCardModal;

const customStyles = {
  content: {
    position: "absolute",
    width: "55%",
    height: "80%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};

const Container = styled.div`
  margin: 15px;
`;

const BtnModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
`;
