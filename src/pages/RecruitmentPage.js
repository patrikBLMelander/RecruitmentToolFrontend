import React, { useState } from "react";
import styled from 'styled-components';
import recruitmentStepsTestData from '../testData/recruitmentStepsTestData'
import applicantTestData from '../testData/applicantTestData'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import RecruitmentProcessSteps from '../components/RecruitmentProcessSteps';
import AddListBtn from '../components/AddListBtn';



const Container = styled.div`
background-image: linear-gradient(#f5f5f5, #e6e6e6);
    display: flex;
    margin-left: 163px;
`;

function RecruitmentPage (){
    const [applicantState, setApplicantState] = useState(applicantTestData);
    const [recruitmentSteps, setRecruitmentSteps] = useState(recruitmentStepsTestData);
    

     const onDragEnd = result => {
        const { destination, source, draggableId, type } = result;

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
                }else{ return null}
                
            })

            newRecruitmentSteps.splice(source.index, 1);
            newRecruitmentSteps.splice(destination.index, 0, RecInfoToPutIn);

            setRecruitmentSteps([...newRecruitmentSteps])

            return;
        }

        const home = source.droppableId;
        const foreign = destination.droppableId;



        // Om man flyttar kort i samma lista
        if (home === foreign) {
            let RecToReorder;
            recruitmentSteps.map(recruitmentStep =>{
                if(recruitmentStep.id === source.droppableId){
                    RecToReorder=recruitmentStep
                    return RecToReorder;
                }else{ return null}
            })

            RecToReorder.applicantIds.splice(source.index, 1);
            RecToReorder.applicantIds.splice(destination.index, 0, draggableId);

            setRecruitmentSteps([...recruitmentSteps])
            return;
        }
        //Flytta kort mellan listor
        let RecFrom;
        recruitmentSteps.map(recruitmentStep =>{
            if(recruitmentStep.id === source.droppableId){
                RecFrom=recruitmentStep
                return RecFrom;
            }else{ return null}
        })
        let RecTo;
        recruitmentSteps.map(recruitmentStep =>{
            if(recruitmentStep.id === destination.droppableId){
                RecTo=recruitmentStep
                return RecTo;
            }else{ return null}
        })

        RecFrom.applicantIds.splice(source.index, 1);
        RecTo.applicantIds.splice(destination.index, 0, draggableId);


        setRecruitmentSteps([...recruitmentSteps])
        return null;
     }


    return (
        <DragDropContext onDragEnd={onDragEnd} >
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


export default RecruitmentPage;