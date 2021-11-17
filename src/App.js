import React, { useState } from "react";
import styled from 'styled-components';
import recruitmentStepsTestData from './testData/recruitmentStepsTestData'
import applicantTestData from './testData/applicantTestData'
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
    const [applicantState, setApplicantState] = useState(applicantTestData);
    const [recruitmentSteps, setRecruitmentSteps] = useState(recruitmentStepsTestData);
    

     const onDragEnd = result => {
        const { destination, source, draggableId, type } = result;
        console.log(destination)
        console.log(source)
        console.log(draggableId)
        console.log(type)

        //If you dop outside dropzone
        if (!destination) {
            return;
        }

        //If you pick up and drop on the same place
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
            ) {
            return;
        }

        //If you drag a list
        if (type === 'column') {

            const newRecruitmentSteps = [].concat(recruitmentSteps)

            let RecInfoToPutIn;
            recruitmentSteps.map(recruitmentStep =>{
                if(recruitmentStep.id ===draggableId){
                    RecInfoToPutIn=recruitmentStep
                    return RecInfoToPutIn;
                }
                
            })

            newRecruitmentSteps.splice(source.index, 1);
            newRecruitmentSteps.splice(destination.index, 0, RecInfoToPutIn);

            setRecruitmentSteps(newRecruitmentSteps)

            return;
        }
        
        //................................................. över detta säker


        const home = source.droppableId;
        const foreign = destination.droppableId;



            // Om man flyttar kort i samma lista
        if (home === foreign) {
            let RecToReorder;
            recruitmentSteps.map(recruitmentStep =>{
                if(recruitmentStep.id === source.droppableId){
                    RecToReorder=recruitmentStep
                    return RecToReorder;
                }
            })

            RecToReorder.applicantIds.splice(source.index, 1);
            RecToReorder.applicantIds.splice(destination.index, 0, draggableId);

            setRecruitmentSteps(recruitmentSteps)
            return;
        }
        //Flytta kort mellan listor




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
           
                  <RecruitmentProcessSteps title = 
                  {recruitmentStepsInMap.title} 
                    id={recruitmentStepsInMap.id} 
                    applicants={recruitmentStepsInMap.applicantIds} 
                    key={recruitmentStepsInMap.id}
                    index={index}
                    recruitmentSteps={recruitmentSteps} 
                    setRecruitmentSteps={setRecruitmentSteps}
                    applicantState={applicantState}
                    setApplicantState={setApplicantState} 
                    />
                
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