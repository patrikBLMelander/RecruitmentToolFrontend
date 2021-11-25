import React, { useState } from "react";
import jobOfferingsTestData from './testData/jobOfferingsTestData'
import Navbar from './components/Navbar';
import Header from './components/Header';
import RecruitmentPage from './pages/RecruitmentPage'
import Home from './pages/Home'
import AddNewJobOffer from './pages/AddNewJobOffer'
import Settings from './pages/Settings'
import Login from './pages/Login'
import Apply from './pages/Apply'
import ApplicantSearch from './pages/ApplicantSearch'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import applicantTestData from './testData/applicantTestData'


function App() {
    const [jobOfferings, setJobOfferings] = useState(jobOfferingsTestData);
    const [activeJob, setActiveJob] = useState({title:"",id:""})
    const [loggedIn, setLoggedIn] = useState(false)
    const [applicantState, setApplicantState] = useState(applicantTestData);


    return(
        <Router> 
            <Navbar jobOfferings={jobOfferings}/>
            <Header activeJob={activeJob}/>
            <div>
                <Routes>
                    <Route path="/applicant/register" element= {<Apply applicantState={applicantState} setApplicantState={setApplicantState}/>}/>
                    <Route path="/admin/home" element= {<Home jobOfferings={jobOfferings} setJobOfferings={setJobOfferings} setActiveJob={setActiveJob} activeJob={activeJob}/>}/>
                    <Route path="/admin/recruitment-page" element= {<RecruitmentPage jobOfferings={jobOfferings} setJobOfferings={setJobOfferings} activeJob={activeJob} applicantState={applicantState} setApplicantState={setApplicantState}/>}/> 
                    <Route path="/admin/add-job-offer-page" element= {<AddNewJobOffer jobOfferings={jobOfferings} setJobOfferings={setJobOfferings}/>}/> 
                    <Route path="/admin/applicant-search" element= {<ApplicantSearch/>}/> 
                    <Route path="/admin/settings" element= {<Settings/>}/> 
                    <Route path="/admin/login" exect element= {<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
                </Routes>
            </div>
        </Router>
    )
}
export default App;