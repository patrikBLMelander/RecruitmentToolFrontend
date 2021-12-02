import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';    
import styled from 'styled-components'  
import { useNavigate } from "react-router-dom"; 
import Row from 'react-bootstrap/Row';   
import Swal from 'sweetalert2';
          

const PNew = styled.p`
    color: #17913c;
    visibility: ${props => (
        props.show ? "visible" : "hidden")
    };
`;

const PTotal = styled.p`
    color: #3b3d40;
    visibility: ${props => (
        props.show ? "visible" : "hidden")
    };
`;

const PExpire = styled.p`
    margin-top: 0;
    margin-bottom: 0;
    color: #3b3d40;
`;            

const StyledH4 = styled.h4`
    color: #3b3d40;
`;   

const CardDiv = styled.div`
    display flex;
    justify-content:center;
    
`;

const StyledButton = styled.button`
    margin:4px;
    width: 140px;
    height: 45px;
    font-family: 'Roboto', sans-serif;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #fff;
    background-color: #1e61d9;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px #b0bbcf;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    &:hover {
        background-color: #1e61d9;
        box-shadow: 0px 15px 20px #678fd6;
        color: #3b3d40;
        transform: translateY(-7px);
    }
    
`;


                
function JobOfferCard({index, jobOfferings, setJobOfferings, jobOfferingsInMap, totalCandidates, activeJob, setActiveJob, adminLoggedIn, candidateLoggedIn, setCandidateLoggedIn, activeCandidate}){
    const navigate = useNavigate();
 
    let btnText = "Apply";
    if(adminLoggedIn===true){
        btnText="Candidates"
    }

    function displayInfoAboutRole(){
        if(adminLoggedIn===false){
            Swal.fire({
                width:'60rem',
                title: jobOfferingsInMap.title,
                html: '<br/><h5>Short Intro Text</h5>'+
                jobOfferingsInMap.preview +
                '<br/><br/><h5>Company info</h5><br/>'+
                jobOfferingsInMap.companyDescription+
                '<br/><br/><h5>Role description</h5><br/>'+
                jobOfferingsInMap.aboutRole,
                confirmButtonText: 'Apply',
                showCancelButton: 'true'
            }).then((result) => {
                if (result.isConfirmed) {
                    setJobToWorkWith()
                }
            })
        }else return;

    }

    function setJobToWorkWith(event){
        
        if(candidateLoggedIn===false){
            navigate("/candidate/register")
        }
        if(candidateLoggedIn===true){
            let alreadyApplied = false;
            
            jobOfferings[index].recruitmentSteps.map(recruitmentStepsInMap =>{
                recruitmentStepsInMap.candidateIds.map(candidateIdsInMap=>{
                    if(activeCandidate.id === candidateIdsInMap){
                       
                        alreadyApplied=true
                        Swal.fire({
                            title: 'Not Applied!',
                            text: 'You have already applied for this role.',
                            icon: 'warning',
                            showConfirmButton: false,
                            timer: 3000
                        })
                    }
                    return null;
                })
                return null;
            })
            if(!alreadyApplied){
                Swal.fire({
                    title: 'Apply?',
                    text: 'Do you want to apply for this role',
                    icon: 'question',
                    showConfirmButton: true,
                    confirmButtonText: "Apply",
                    showCancelButton: true,
                    cancelButtonText: "Not now"
                }).then((result) => {
                    if (result.isConfirmed) {
                        let newJobOffering = jobOfferings
                        newJobOffering[index].recruitmentSteps[0].candidateIds = [...jobOfferings[index].recruitmentSteps[0].candidateIds, activeCandidate.id]
            
                        setJobOfferings(newJobOffering)
                        navigate("/candidate/my-page")
                    } 
                })
            }
        }
        if(adminLoggedIn===true){
            setActiveJob({...activeJob,
                title: event.title,
                id: event.id
            })
            navigate("/admin/recruitment-page")
        }
    }
    return(
        <CardDiv key={index}>
        <Card  style={{ width: '18rem', marginRight: '0px', position:'center' }}>
            <Card.Img variant="top" src={jobOfferingsInMap.imageUrl} onClick={displayInfoAboutRole}/>
            <Card.Body>
                <StyledH4>{jobOfferingsInMap.title}</StyledH4>
                <PExpire>
                Expire: {jobOfferingsInMap.applyDate}
                
                </PExpire>
                <div className="d-grid gap-2">
                <StyledButton onClick={() => setJobToWorkWith(jobOfferingsInMap)} variant="primary">{btnText}</StyledButton>
                </div>
                <Row xs={2}>
                <Col sm={5}>
                    <PNew show={adminLoggedIn}>
                        New: {jobOfferingsInMap.recruitmentSteps[0].candidateIds.length}
                    </PNew>
                    </Col>
                <Col sm={5}>
                    <PTotal show={adminLoggedIn}>
                    Total: {totalCandidates}
                    </PTotal>
                </Col>
                </Row>

            </Card.Body>
        </Card>
    </CardDiv>

    )
}

export default JobOfferCard;
                
        