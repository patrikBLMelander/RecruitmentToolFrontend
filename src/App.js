import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import RecruitmentPage from './pages/RecruitmentPage'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Login from './pages/Login'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
    return(
        <Router> 
                <Navbar/>
                <Header/>
                <div>
                    <Routes>
                        <Route path="/home" element= {<Home/>}/>
                        <Route path="/recruitment-page" element= {<RecruitmentPage/>}/> 
                        <Route path="/settings" element= {<Settings/>}/> 
                        <Route path="/" exect element= {<Login/>}/> 
                    </Routes>
                </div>
        </Router>
    )
}
export default App;