import React from "react";
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import colorPicker from '../testData/colorPicker';
import ApplicantCardModal from './Modal/ApplicantCardModal'

const Container = styled.div`
  border: 1px solid ${colorPicker.candidateCard.border};
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  color: ${colorPicker.candidateCard.text};
  background-color: ${props => (props.isDragging ? colorPicker.candidateCard.backgroundColorDrag : colorPicker.candidateCard.backgroundColor)};
`;

function CandidateCard ({index, candidateId, candidateState, setCandidateState, activeJobId}) {
 
    return (
      <Draggable draggableId={candidateId} index={index}>
         {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}

          >
          {candidateState.map( candidate => {
            if(candidate.id===candidateId){
              return (
                <ApplicantCardModal key={candidate.id} candidate = {candidate} candidateState={candidateState} setCandidateState={setCandidateState} activeJobId={activeJobId}/>

              )
            }else{ return null}

          })}

          </Container>
        )}
      </Draggable>
    );
  
}

export default CandidateCard;
