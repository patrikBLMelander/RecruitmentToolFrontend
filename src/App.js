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
import AddResume from './components/AddResume';
import ApplicantSearch from './pages/CandidateSearch';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import candidateTestData from './testData/candidateTestData';
import Main from './pages/Main';


function App() {
    const [jobOfferings, setJobOfferings] = useState(jobOfferingsTestData);
    const [activeJob, setActiveJob] = useState({title:"",id:""})
    const [activeCandidate, setActiveCandidate] = useState("")
    const [activeAdmin, setActiveAdmin] = useState({ id: 'admin-1', 
    firstName: "Patrik",
    lastName: "Melander",
    email: "testmail1@gmail.com",
    password: "1234",
    phone: "0704011119",
    })
    const [adminLoggedIn, setAdminLoggedIn] = useState(false)
    const [candidateState, setCandidateState] = useState(candidateTestData);
    const [candidateLoggedIn, setCandidateLoggedIn] = useState(false)


    return(
        <Router> 
            <div>
                <Routes>
                    <Route path="/" element= {<Main activeAdmin={activeAdmin} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn} jobOfferings={jobOfferings}/>}/>
                    <Route path="/candidate/register" element= {<Register activeAdmin={activeAdmin} setCandidateState={setCandidateState} candidateState={candidateState} activeCandidate={activeCandidate} setActiveCandidate={setActiveCandidate} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn}/>}/>
                    <Route path="/candidate/add-resume" element= {<AddResume activeAdmin={activeAdmin} activeCandidate={activeCandidate} setCandidateState={setCandidateState} candidateState={candidateState} setActiveCandidate={setActiveCandidate} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn}/>}/>
                    <Route path="/candidate/my-page" element= {<CandidateMyPage activeAdmin={activeAdmin} setCandidateState={setCandidateState} candidateState={candidateState} activeCandidate={activeCandidate} setActiveCandidate={setActiveCandidate} jobOfferings={jobOfferings} activeJob={activeJob} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn}/>}/>
                    <Route path="/candidate/in-process" element= {<CandidateProcesses activeAdmin={activeAdmin} jobOfferings={jobOfferings} activeJob={activeJob} activeCandidate={activeCandidate} setCandidateState={setCandidateState} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn}/>}/>
                    <Route path="/home" element= {<Home activeAdmin={activeAdmin} activeCandidate={activeCandidate} jobOfferings={jobOfferings} setJobOfferings={setJobOfferings} setCandidateState={setCandidateState} setActiveCandidate={setActiveCandidate} setActiveJob={setActiveJob} activeJob={activeJob} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn}/>}/>
                    <Route path="/admin/recruitment-page" element= {<RecruitmentPage activeAdmin={activeAdmin} jobOfferings={jobOfferings} setJobOfferings={setJobOfferings} activeJob={activeJob} activeCandidate={activeCandidate} candidateState={candidateState} setCandidateState={setCandidateState} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn}/>}/> 
                    <Route path="/admin/add-job-offer-page" element= {<AddNewJobOffer activeAdmin={activeAdmin} jobOfferings={jobOfferings} setJobOfferings={setJobOfferings} activeJob={activeJob} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn}/>}/> 
                    <Route path="/admin/candidate-search" element= {<ApplicantSearch activeAdmin={activeAdmin} activeJob={activeJob} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn} />}/> 
                    <Route path="/admin/settings" element= {<Settings activeAdmin={activeAdmin} jobOfferings={jobOfferings}  activeJob={activeJob} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn}/>}/> 
                    <Route path="/login" exect element= {<Login activeAdmin={activeAdmin} setActiveAdmin={setActiveAdmin} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn} jobOfferings={jobOfferings} activeJob={activeJob} setActiveJob={setActiveJob}candidateState={candidateState} setActiveCandidate={setActiveCandidate}/>}/>
                </Routes>
            </div>
        </Router>
    )
}
export default App;