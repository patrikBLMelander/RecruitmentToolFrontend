import React, { useState } from "react";
import styled from 'styled-components';
import recruitmentStepsTestData from './testData/recruitmentStepsTestData'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import RecruitmentProcessSteps from './components/RecruitmentProcessSteps';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AddListBtn from './components/AddListBtn';



const Container = styled.div`
  background-image: linear-gradient(#82ad8e, #cbf2d6);
  display: flex;
  margin-left: 163px;
`;

function App (){

    const [recruitmentSteps, setRecruitmentSteps] = useState(recruitmentStepsTestData);

     const onDragEnd = result => {
        console.log(recruitmentStepsTestData)
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

                {recruitmentSteps.map((recruitmentStepsInMap, index) =>{
                  
                  return(
           
                  <RecruitmentProcessSteps title = {recruitmentStepsInMap.title} id={recruitmentStepsInMap.id} applicants={recruitmentStepsInMap.applicantIds} key={recruitmentStepsInMap.id} index={index}recruitmentSteps={recruitmentSteps} setRecruitmentSteps={setRecruitmentSteps}/>
                
                  );
                })}
                
                {provided.placeholder}
                <AddListBtn recruitmentSteps={recruitmentSteps} setRecruitmentSteps={setRecruitmentSteps}/>
            </Container>
            )}
        </Droppable>
        </DragDropContext>
    );
}


export default App;