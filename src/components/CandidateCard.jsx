import React from "react";
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import ApplicantCardModal from './Modal/ApplicantCardModal'

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  color: #edf0f2;
  background-color: ${props => (props.isDragging ? '#adc3e0' : '#6ea0e0')};
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
