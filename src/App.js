import React, { useState } from "react";
import jobOfferingsTestData from './testData/jobOfferingsTestData'
import Navbar from './components/Navbar';
import Header from './components/Header';
import RecruitmentPage from './pages/RecruitmentPage'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Login from './pages/Login'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
    const [jobOfferings, setJobOfferings] = useState(jobOfferingsTestData);
    const [activeJob, setActiveJob] = useState({title:"",id:""})


    return(
        <Router> 
            <Navbar jobOfferings={jobOfferings}/>
            <Header activeJob={activeJob}/>
            <div>
                <Routes>
                    <Route path="/home" element= {<Home jobOfferings={jobOfferings} setJobOfferings={setJobOfferings} setActiveJob={setActiveJob} activeJob={activeJob}/>}/>
                    <Route path="/recruitment-page" element= {<RecruitmentPage jobOfferings={jobOfferings} setJobOfferings={setJobOfferings} activeJob={activeJob}/>}/> 
                    <Route path="/settings" element= {<Settings/>}/> 
                    <Route path="/" exect element= {<Login/>}/> 
                </Routes>
            </div>
        </Router>
    )
}
export default App;