import React from "react";
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : '#afc9b6')};
`;

function ApplicantCard (props) {
  //const [applicant, setApplicant] = useState(applicantTestData);
      
 
    return (
      <Draggable draggableId={props.applicantId} index={props.index}>
         {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
          {props.applicantState.map( applicant => {
            if(applicant.id===props.applicantId){
              return <h3 key={applicant.id}>{applicant.name}</h3>
            }

          })}

          </Container>
        )}
      </Draggable>
    );
  
}

export default ApplicantCard;
