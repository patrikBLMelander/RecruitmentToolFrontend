import React from "react";
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import colorPicker from '../testData/colorPicker';
import ApplicantCardModal from './Modal/ApplicantCardModal'



function CandidateCard ({index, candidateId, candidateState, setCandidateState, activeJobId, nickName, colorScheme}) {
 
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
                <ApplicantCardModal key={candidate.id} candidate = {candidate} candidateState={candidateState} setCandidateState={setCandidateState} activeJobId={activeJobId} nickName={nickName} colorScheme={colorScheme}/>

              )
            }else{ return null}

          })}

          </Container>
        )}
      </Draggable>
    );
  
}

export default CandidateCard;

const Container = styled.div`
  border: 1px solid ${colorPicker.fifth};
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  color: ${colorPicker.text};
  background-color: ${props => (props.isDragging ? colorPicker.fourth : colorPicker.secondary)};
`;
