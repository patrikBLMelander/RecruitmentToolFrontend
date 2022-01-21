const START_URL = "https://exjobbrecruitment.herokuapp.com";
//const START_URL = "http://localhost:6000";

//Constants API
const BASE_API = "/recruitment/v1";
const PUBLIC = "/public";
const CANDIDATES = "/candidates";
const ADMIN = "/admin";
const CREATE = "/create";
const UPDATE = "/update";
const EXPERIENCE = "/experience";
const EDUCATION = "/education";
const COMPETENCE = "/competence";
const PRESENTATION = "/presentation";
const JOB_OFFER = "/job_offer";
const PERSONALITY = "/personality";
const PASSWORD = "/password";
const RATE = "/rate";
const COLOR = "/color";
const NICKNAME = "/nickname";
const DELETE = "/delete";
const RECRUITMENT = "/recruitment";


//public endpoints
const getAllJobOffers = START_URL+PUBLIC+JOB_OFFER;
const login = START_URL+"/login";
const register = START_URL+PUBLIC+CREATE;

// admin endpoints
const changNicknamePresentaion = START_URL+ADMIN+UPDATE+NICKNAME;
const createAdmin = START_URL+ADMIN+CREATE;
const getAllCAndidates = START_URL+ADMIN+CANDIDATES;
const createNewJobOffer = START_URL+ADMIN+JOB_OFFER+CREATE;
const getJobOfferDetails = START_URL+ADMIN+JOB_OFFER;
const addRecruitmentStep = START_URL+ADMIN+RECRUITMENT+UPDATE;
const deleteRecruitmentStep = START_URL+ADMIN+RECRUITMENT+DELETE;
const moveRecruitmentStep = START_URL+ADMIN+JOB_OFFER+UPDATE;
const setRate = START_URL+ADMIN+UPDATE+RATE;
const moveCandidate = START_URL+ADMIN+RECRUITMENT+CANDIDATES;

//candidate endpoints
const updatePresentation = START_URL+CANDIDATE+PRESENTATION
const addExperience = START_URL+CANDIDATE+EXPERIENCE;
const deleteExperience = START_URL+CANDIDATE+EXPERIENCE+DELETE;
const addEducation = START_URL+CANDIDATE+EDUCATION;
const deleteEducation = START_URL+CANDIDATE+EDUCATION+DELETE;
const addCompetence = START_URL+CANDIDATE+COMPETENCE;
const deleteCompetence = START_URL+CANDIDATE+COMPETENCE+DELETE;
const updatePersonality = START_URL+CANDIDATE+UPDATE+PERSONALITY;
const applyForJob = START_URL+CANDIDATE+JOB_OFFER;
const updatePassword = START_URL+CANDIDATE+UPDATE+PASSWORD;
const updateColor = START_URL+CANDIDATE+UPDATE+COLOR;