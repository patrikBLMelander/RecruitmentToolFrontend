import React from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import ApplicantCard from './ApplicantCard';
import RemoveBtn from './RemoveList';


const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background-color:#449e5c;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const ApplicantCardList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : '#daf7e2')};
  flex-grow: 1;
  min-height: 100px;
`;

 function RecruitmentProcessStep (props) {
  return (
    <Draggable draggableId={props.id} index={props.index}>
      {provided => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          <Title {...provided.dragHandleProps}>
            {props.title}
          </Title>
          <Droppable droppableId={props.id} type="task">
            {(provided, snapshot) => (
              <ApplicantCardList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
               
               {props.applicants.map((applicant, index) =>{
                  
                  return(
           
                  <ApplicantCard applicantId={applicant} index={index} key={applicant}/>
                    

                  );
                })}


                {provided.placeholder}
                
              </ApplicantCardList>
            )}
          </Droppable>
          <RemoveBtn id={props.id} recruitmentSteps={props.recruitmentSteps} setRecruitmentSteps={props.setRecruitmentSteps}></RemoveBtn>
        </Container>
        
      )}
    </Draggable>
  );
  
}

export default RecruitmentProcessStep;