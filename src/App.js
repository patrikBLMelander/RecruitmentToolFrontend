import React, { useState } from "react";
import jobOfferingsTestData from './testData/jobOfferingsTestData';
import RecruitmentPage from './pages/RecruitmentPage';
import Home from './pages/Home';
import AddNewJobOffer from './pages/AddNewJobOffer';
import CandidateMyPage from './pages/CandidateMyPage'
import Settings from './pages/Settings';
import CandidateProcesses from './pages/CandidateProcesses';
import Login from './pages/Login';
import Register from './pages/Register';
import CandidateSearch from './pages/CandidateSearch';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import candidateTestData from './testData/candidateTestData';
import Main from './pages/Main';

function App() {
    const [jobOfferings, setJobOfferings] = useState(jobOfferingsTestData);
    const [activeJob, setActiveJob] = useState({title:"",id:""})
    const [activeCandidate, setActiveCandidate] = useState("")
    const [candidateState, setCandidateState] = useState(candidateTestData);
    const [candidateLoggedIn, setCandidateLoggedIn] = useState(false)
    const [adminLoggedIn, setAdminLoggedIn] = useState(false)


    return(
        <Router> 
            <div>
                <Routes>
                    <Route path="/" element= {<Main adminLoggedIn={adminLoggedIn} candidateLoggedIn={candidateLoggedIn} jobOfferings={jobOfferings}/>}/>
                    <Route path="/candidate/register" element= {<Register setCandidateState={setCandidateState} candidateState={candidateState} activeCandidate={activeCandidate} setActiveCandidate={setActiveCandidate} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn}/>}/>
                    <Route path="/candidate/my-page" element= {<CandidateMyPage setActiveJob={setActiveJob}  setCandidateState={setCandidateState} candidateState={candidateState} activeCandidate={activeCandidate} setActiveCandidate={setActiveCandidate} jobOfferings={jobOfferings} activeJob={activeJob} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn}/>}/>
                    <Route path="/candidate/in-process" element= {<CandidateProcesses setActiveJob={setActiveJob}jobOfferings={jobOfferings} activeJob={activeJob} activeCandidate={activeCandidate} setCandidateState={setCandidateState} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn}/>}/>
                    <Route path="/home" element= {<Home  activeCandidate={activeCandidate} jobOfferings={jobOfferings} setJobOfferings={setJobOfferings} setCandidateState={setCandidateState} setActiveCandidate={setActiveCandidate} setActiveJob={setActiveJob} activeJob={activeJob} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn}/>}/>
                    <Route path="/admin/recruitment-page" element= {<RecruitmentPage  jobOfferings={jobOfferings} setJobOfferings={setJobOfferings} activeJob={activeJob} setActiveJob={setActiveJob} activeCandidate={activeCandidate} candidateState={candidateState} setCandidateState={setCandidateState} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn}/>}/> 
                    <Route path="/admin/add-job-offer-page" element= {<AddNewJobOffer setActiveJob={setActiveJob} jobOfferings={jobOfferings} setJobOfferings={setJobOfferings} activeJob={activeJob} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn}/>}/> 
                    <Route path="/admin/candidate-search" element= {<CandidateSearch  activeJob={activeJob} setActiveJob={setActiveJob}adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn} />}/> 
                    <Route path="/admin/settings" element=  {<Settings setCandidateState={setCandidateState} candidateState={candidateState}  jobOfferings={jobOfferings}  activeJob={activeJob} adminLoggedIn={adminLoggedIn} setActiveJob={setActiveJob} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn}/>}/> 
                    <Route path="/login" exect element= {<Login adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn} jobOfferings={jobOfferings} activeJob={activeJob} setActiveJob={setActiveJob}candidateState={candidateState} setActiveCandidate={setActiveCandidate}/>}/>
                </Routes>
            </div>
        </Router>
    )
}
export default App;