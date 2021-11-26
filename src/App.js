import React, { useState } from "react";
import jobOfferingsTestData from './testData/jobOfferingsTestData';
import RecruitmentPage from './pages/RecruitmentPage';
import Home from './pages/Home';
import AddNewJobOffer from './pages/AddNewJobOffer';
import CandidateMyPage from './pages/CandidateMyPage'
import Settings from './pages/Settings';
import CandidateProcesses from './pages/CandidateProcesses';
import Login from './components/Login';
import Register from './pages/Register';
import AddResume from './components/AddResume';
import ApplicantSearch from './pages/ApplicantSearch';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import candidateTestData from './testData/candidateTestData';
import Main from './pages/Main';


function App() {
    const [jobOfferings, setJobOfferings] = useState(jobOfferingsTestData);
    const [activeJob, setActiveJob] = useState({title:"",id:""})
    const [activeCandidate, setActiveCandidate] = useState({ id: 'applicant-1', 
    nickName: 'Dog',
    firstName: "Patrik",
    lastName: "Melander",
    email: "testmail1@gmail.com",
    password: "1234",
    phone: "0704011119",
    presentation: 'Studerar Java - Nackademin, September 2020 – maj 2022 (pågående)Under utbildningen på Nackademin har vi än så länge läst kurserna ”Java-Utveckling”, ”Objektorienterad utveckling i Java”, ”Objektorienterad analys och design”, ”Funktionell programmering i Java och Kotlin”, ”Databasteknik och Java”. Samtliga färdigställda med högsta betyg. Kurser som jag även kommer ha läst innan min LIA är ”Klientutveckling”, ”Java backend 1”, ”Applikation Lifecycle Management” och ”Java backend 2”.',
    experience: [{title: 'Butikschef – Stadium', period:'Aug 2017 – Mars 2020', description: 'Som butikschef på Stadium hade jag huvudansvaret för försäljningen och personalen i butiken. I personalansvaret ingick bland annat schemaläggning, intro, utbildning, utvecklingssamtal samt individuella handlingsplaner. Jag jobbade kontinuerligt mot uppsatta försäljningsmål och butikens budget. Jag arbetade även i den dagliga driften tillsammans med mitt team där jag alltid såg till att som ledare vara en förebild på golvet. Jag värdesätter mycket energi, engagemang samt hög service hos mina medarbetare och jag är övertygad om att personalen är den avgörande anledningen till att kunden blir nöjd.', },
    {title: 'HR- ansvarig, Department manager', period:'Jan 2016 – aug 2017', description:'I januari 2016 tog jag över HR-ansvaret för hela Decathlon Sverige. En del av mitt HR-uppdrag var att hjälpa butikschefer och avdelningschefer att jobba mer effektiv med schemaläggning för att nå en så bra fpat (försäljning per arbetad timme) som möjligt. Jag gjorde analyser på vecka, månads och säsongsbasis för att säkerställa att de planerade rätt timmar på rätt tider. Jag coachade dem i schemaläggning och såg till att de alltid följde kollektivavtal och arbetsrätt. I maj 2016 öppnade Decathlon sin tredje butik i Sverige där jag ansvarade för hela rekryteringsprocessen av både avdelningschefer och säljare. Jag skötte den löneadministration som inte outsourcades till Visma. Jag ansvarade för utbildningar i ledarskap, sälj och rekrytering. Jag hade utöver detta det övergripande ansvaret för Decathlon Sveriges produktutbud gällande alpinskidåkning, både för utrustning och kläder.'}
    ]})
    const [adminLoggedIn, setAdminLoggedIn] = useState(false)
    const [candidateState, setCandidatetState] = useState(candidateTestData);
    const [candidateLoggedIn, setCandidateLoggedIn] = useState(false)


    return(
        <Router> 
            <div>
                <Routes>
                    <Route path="/" element= {<Main adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn} jobOfferings={jobOfferings}/>}/>
                    <Route path="/candidate/register" element= {<Register  setCandidatetState={setCandidatetState} activeCandidate={activeCandidate} setActiveCandidate={setActiveCandidate} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn}/>}/>
                    <Route path="/candidate/add-resume" element= {<AddResume activeCandidate={activeCandidate} setCandidatetState={setCandidatetState} candidateState={candidateState} setActiveCandidate={setActiveCandidate} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn}/>}/>
                    <Route path="/candidate/my-page" element= {<CandidateMyPage setCandidatetState={setCandidatetState} candidateState={candidateState} activeCandidate={activeCandidate} setActiveCandidate={setActiveCandidate} jobOfferings={jobOfferings} activeJob={activeJob} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn}/>}/>
                    <Route path="/candidate/in-process" element= {<CandidateProcesses jobOfferings={jobOfferings} activeJob={activeJob} activeCandidate={activeCandidate} setCandidatetState={setCandidatetState} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn}/>}/>
                    <Route path="/home" element= {<Home jobOfferings={jobOfferings} setJobOfferings={setJobOfferings} setCandidatetState={setCandidatetState} activeCandidate={activeCandidate} setActiveCandidate={setActiveCandidate} setActiveJob={setActiveJob} activeJob={activeJob} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn}/>}/>
                    <Route path="/admin/recruitment-page" element= {<RecruitmentPage jobOfferings={jobOfferings} setJobOfferings={setJobOfferings} activeJob={activeJob} activeCandidate={activeCandidate} setCandidatetState={setCandidatetState} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn}/>}/> 
                    <Route path="/admin/add-job-offer-page" element= {<AddNewJobOffer jobOfferings={jobOfferings} setJobOfferings={setJobOfferings} activeJob={activeJob} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn}/>}/> 
                    <Route path="/admin/applicant-search" element= {<ApplicantSearch activeJob={activeJob} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn} />}/> 
                    <Route path="/admin/settings" element= {<Settings jobOfferings={jobOfferings}  activeJob={activeJob} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn}/>}/> 
                    <Route path="/admin/login" exect element= {<Login adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} candidateLoggedIn={candidateLoggedIn} setCandidateLoggedIn={setCandidateLoggedIn} jobOfferings={jobOfferings} activeJob={activeJob} setActiveJob={setActiveJob}/>}/>
                </Routes>
            </div>
        </Router>
    )
}
export default App;