import React from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Task from './ApplicantCard';

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
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : '#daf7e2')};
  flex-grow: 1;
  min-height: 100px;
`;

function InnerList (props){


  return props.tasks.map((task, index) => (
    <Task key={task.id} task={task} index={index} />
  ));

}

 function Column (props) {

  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {provided => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          <Title {...provided.dragHandleProps}>
            {props.column.title}
          </Title>
          <Droppable droppableId={props.column.id} type="task">
            {(provided, snapshot) => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                <InnerList tasks={props.tasks} />
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
  
}

export default Column;