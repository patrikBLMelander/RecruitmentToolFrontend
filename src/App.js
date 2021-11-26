import React, { useState } from "react";
import jobOfferingsTestData from './testData/jobOfferingsTestData';
import RecruitmentPage from './pages/RecruitmentPage';
import Home from './pages/Home';
import AddNewJobOffer from './pages/AddNewJobOffer';
import ApplicantMyPage from './pages/ApplicantMyPage'
import Settings from './pages/Settings';
import Login from './components/Login';
import Register from './pages/Register';
import AddResume from './components/AddResume';
import ApplicantSearch from './pages/ApplicantSearch';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import applicantTestData from './testData/applicantTestData';
import Main from './pages/Main';


function App() {
    const [jobOfferings, setJobOfferings] = useState(jobOfferingsTestData);
    const [activeJob, setActiveJob] = useState({title:"",id:""})
    const [activeApplicant, setActiveApplicant] = useState({title:"",id:""})
    const [adminLoggedIn, setAdminLoggedIn] = useState(false)
    const [applicantState, setApplicantState] = useState(applicantTestData);
    const [applicantLoggedIn, setApplicantLoggedIn] = useState(true)


    return(
        <Router> 
            <div>
                <Routes>
                    <Route path="/" element= {<Main adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} applicantLoggedIn={applicantLoggedIn} setApplicantLoggedIn={setApplicantLoggedIn} jobOfferings={jobOfferings} activeJob={activeJob}/>}/>
                    <Route path="/applicant/register" element= {<Register applicantState={applicantState} setApplicantState={setApplicantState} setActiveApplicant={setActiveApplicant} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} applicantLoggedIn={applicantLoggedIn} setApplicantLoggedIn={setApplicantLoggedIn}/>}/>
                    <Route path="/applicant/add-resume" element= {<AddResume applicantState={applicantState} setApplicantState={setApplicantState} activeApplicant={activeApplicant} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} applicantLoggedIn={applicantLoggedIn} setApplicantLoggedIn={setApplicantLoggedIn}/>}/>
                    <Route path="/applicant/my-page" element= {<ApplicantMyPage  jobOfferings={jobOfferings} activeJob={activeJob} applicantState={applicantState} setApplicantState={setApplicantState} activeApplicant={activeApplicant} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} applicantLoggedIn={applicantLoggedIn} setApplicantLoggedIn={setApplicantLoggedIn}/>}/>
                    <Route path="/home" element= {<Home jobOfferings={jobOfferings} setJobOfferings={setJobOfferings} applicantState={applicantState} setApplicantState={setApplicantState} activeApplicant={activeApplicant} setActiveJob={setActiveJob} activeJob={activeJob} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} applicantLoggedIn={applicantLoggedIn} setApplicantLoggedIn={setApplicantLoggedIn}/>}/>
                    <Route path="/admin/recruitment-page" element= {<RecruitmentPage jobOfferings={jobOfferings} setJobOfferings={setJobOfferings} activeJob={activeJob} applicantState={applicantState} setApplicantState={setApplicantState} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} applicantLoggedIn={applicantLoggedIn} setApplicantLoggedIn={setApplicantLoggedIn}/>}/> 
                    <Route path="/admin/add-job-offer-page" element= {<AddNewJobOffer jobOfferings={jobOfferings} setJobOfferings={setJobOfferings} activeJob={activeJob} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} applicantLoggedIn={applicantLoggedIn} setApplicantLoggedIn={setApplicantLoggedIn}/>}/> 
                    <Route path="/admin/applicant-search" element= {<ApplicantSearch activeJob={activeJob} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} applicantLoggedIn={applicantLoggedIn} setApplicantLoggedIn={setApplicantLoggedIn} />}/> 
                    <Route path="/admin/settings" element= {<Settings jobOfferings={jobOfferings}  activeJob={activeJob} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} applicantLoggedIn={applicantLoggedIn} setApplicantLoggedIn={setApplicantLoggedIn}/>}/> 
                    <Route path="/admin/login" exect element= {<Login adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} applicantLoggedIn={applicantLoggedIn} setApplicantLoggedIn={setApplicantLoggedIn} jobOfferings={jobOfferings} activeJob={activeJob} setActiveJob={setActiveJob}/>}/>
                </Routes>
            </div>
        </Router>
    )
}
export default App;