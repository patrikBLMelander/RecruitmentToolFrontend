import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
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
                
function JobOfferCard({index, jobOfferings, setJobOfferings, jobOfferingsInMap, totalCandidates, activeJob, setActiveJob, adminLoggedIn, candidateLoggedIn, setCandidateLoggedIn, activeCandidate}){
    const navigate = useNavigate();

    let btnText = "Apply";
    if(adminLoggedIn===true){
        btnText="Candidates"
    }

    function setJobToWorkWith(event){
        
        if(candidateLoggedIn===false){
            navigate("/candidate/register")
        }
        if(candidateLoggedIn===true){

            //Lägg till kandidaten i de sökta jobbets lista 
            //"event.id" är jobbets id
            //"activeCabdidate.id" är den sökandes id
            
            let newJobOffering = jobOfferings
            newJobOffering[index].recruitmentSteps[0].applicantIds = [...jobOfferings[index].recruitmentSteps[0].applicantIds, activeCandidate.id]

            console.log(newJobOffering)
            setJobOfferings(newJobOffering)

            Swal.fire({
                title: 'Applied!',
                text: 'Make sure to update your experience',
                icon: 'success',
                showConfirmButton: false,
                timer: 3000
            })
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
        <Col key={index}>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={jobOfferingsInMap.imageUrl} />
            <Card.Body>
                <Card.Title>{jobOfferingsInMap.title}</Card.Title>
                <PExpire>
                Expire: {jobOfferingsInMap.applyDate}
                
                </PExpire>
                <div className="d-grid gap-2">
                <Button onClick={() => setJobToWorkWith(jobOfferingsInMap)} variant="primary">{btnText}</Button>
                </div>
                <Row xs={2}>
                <Col sm={5}>
                    <PNew show={adminLoggedIn}>
                        New: {jobOfferingsInMap.recruitmentSteps[0].applicantIds.length}
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
    </Col>

    )
}

export default JobOfferCard;
                
        