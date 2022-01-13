import React from "react";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";
import CandidateCard from "./CandidateCard";
import RemoveBtn from "./RemoveList";
import colorPicker from "../testData/colorPicker";

function RecruitmentProcessStep({
  index,
  id,
  title,
  jobOfferings,
  setJobOfferings,
  activeJobId,
  candidates,
  candidateState,
  setCandidateState,
  nickName, 
  colorScheme
}) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Container inputColor={colorScheme} {...provided.draggableProps} ref={provided.innerRef}>
          <Title {...provided.dragHandleProps}>{title}</Title>
          <Droppable droppableId={id} type="task">
            {(provided, snapshot) => (
              <CandidateCardList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
                inputColor={colorScheme}
              >
                {candidates.map((candidate, index) => {
                  return (
                    <CandidateCard
                      candidateId={candidate}
                      index={index}
                      key={candidate}
                      candidateState={candidateState}
                      setCandidateState={setCandidateState}
                      activeJobId={activeJobId}
                      nickName={nickName}
                      colorScheme={colorScheme}
                    />
                  );
                })}

                {provided.placeholder}
              </CandidateCardList>
            )}
          </Droppable>
          <RemoveBtnDiv>
          <RemoveBtn
            id={id}
            jobOfferings={jobOfferings}
            setJobOfferings={setJobOfferings}
            candidates={candidates.length}
            activeJobId={activeJobId}
            colorScheme={colorScheme}
          />
          </RemoveBtnDiv>
        </Container>
      )}
    </Draggable>
  );
}

export default RecruitmentProcessStep;

const Container = styled.div`
  margin: 8px;
  border: 1px solid ${props => props.inputColor.fifth};
  background-color: ${props => props.inputColor.secondary};
  border-radius: 20px;
  color: ${props => props.inputColor.text};
  box-shadow: 0px 8px 15px ${props => props.inputColor.secondary};
  width: 220px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const CandidateCardList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) =>
    props.isDraggingOver ? props.inputColor.secondary : props.inputColor.third};
  flex-grow: 1;
  min-height: 100px;
`;

const RemoveBtnDiv = styled.div`
  display: flex;
  margin: 8px;
  justify-content:center;
`;
