import React, { useState } from "react";
import styled from 'styled-components';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './components/RecruitmentProcessSteps';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AddListBtn from './components/AddListBtn';


const Container = styled.div`
  background-image: linear-gradient(#82ad8e, #cbf2d6);
  display: flex;
  margin-left: 163px;
`;

function InnerList (props) {
    const { column, taskMap, index } = props;
    const tasks = column.taskIds.map(taskId => taskMap[taskId]);
    return <Column column={column} tasks={tasks} index={index} />;
  
}

function App (props){
    const [state, setState] = useState(initialData);

    const onDragEnd = result => {
        const { destination, source, draggableId, type } = result;

        if (!destination) {
        return;
        }

        if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
        ) {
        return;
        }

        if (type === 'column') {
        const newColumnOrder = Array.from(state.columnOrder);
        newColumnOrder.splice(source.index, 1);
        newColumnOrder.splice(destination.index, 0, draggableId);

        const newState = {
            ...state,
            columnOrder: newColumnOrder,
        };
        setState(newState);
        return;
        }
    

        const home = state.columns[source.droppableId];
        const foreign = state.columns[destination.droppableId];

        if (home === foreign) {
        const newTaskIds = Array.from(home.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newHome = {
            ...home,
            taskIds: newTaskIds,
        };

        const newState = {
            ...state,
            columns: {
            ...state.columns,
            [newHome.id]: newHome,
            },
        };

        setState(newState);
        return;
        }
    

        // moving from one list to another
        const homeTaskIds = Array.from(home.taskIds);
        homeTaskIds.splice(source.index, 1);
        const newHome = {
        ...home,
        taskIds: homeTaskIds,
        };

        const foreignTaskIds = Array.from(foreign.taskIds);
        foreignTaskIds.splice(destination.index, 0, draggableId);
        const newForeign = {
        ...foreign,
        taskIds: foreignTaskIds,
        };

        const newState = {
        ...state,
        columns: {
            ...state.columns,
            [newHome.id]: newHome,
            [newForeign.id]: newForeign,
        },
        };
        setState(newState);
    }

    return (
        
        <DragDropContext onDragEnd={onDragEnd} >
        <Navbar/>
        <Header/>
        <Droppable
            droppableId="all-columns"
            direction="horizontal"
            type="column"
        >
            {provided => (             
            <Container
                {...provided.droppableProps}
                ref={provided.innerRef}
            >

                {state.columnOrder.map((columnId, index) => {
                const column = state.columns[columnId];
                return (
                    <InnerList
                    key={column.id}
                    column={column}
                    taskMap={state.tasks}
                    index={index}
                    />
                );
                })}
                
                {provided.placeholder}
                <AddListBtn/>
            </Container>
            )}
        </Droppable>
        </DragDropContext>
    );
}


export default App;