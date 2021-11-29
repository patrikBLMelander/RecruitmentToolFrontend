import React from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import CandidateCard from './CandidateCard';
import RemoveBtn from './RemoveList';


const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background-color:#6ea0e0;
  border-radius: 2px;
  width: 220px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  color: #edf0f2;
  padding: 8px;
`;
const CandidateCardList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? '#6992c7' : '#c8d2e0')};
  flex-grow: 1;
  min-height: 100px;
`;

 function RecruitmentProcessStep ({index, id, title, jobOfferings, setJobOfferings, activeJobId, candidates, candidateState, setCandidateState}) {
  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          <Title {...provided.dragHandleProps}>
            {title}
          </Title>
          <Droppable droppableId={id} type="task">
            {(provided, snapshot) => (
              <CandidateCardList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
               
               {candidates.map((candidate, index) =>{
                  return(
           
                  <CandidateCard 
                    candidateId={candidate} 
                    index={index} 
                    key={candidate}
                    candidateState={candidateState}
                    setCandidateState={setCandidateState} 
                    />
                    

                  );
                })}


                {provided.placeholder}
                
              </CandidateCardList>
            )}
          </Droppable>
          <RemoveBtn id={id} jobOfferings={jobOfferings} setJobOfferings={setJobOfferings} candidates={candidates.length} activeJobId={activeJobId}></RemoveBtn>
        </Container>
        
      )}
    </Draggable>
  );
  
}

export default RecruitmentProcessStep;