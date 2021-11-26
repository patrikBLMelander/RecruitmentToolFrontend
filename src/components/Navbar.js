import React from 'react';

import styled from 'styled-components'
import { Link } from 'react-router-dom';
import {Home} from '@styled-icons/boxicons-regular/Home';
import {LogOutCircle} from '@styled-icons/boxicons-regular/LogOutCircle';
import {PersonSearch} from '@styled-icons/material/PersonSearch';
import {BearSmile} from '@styled-icons/remix-fill/BearSmile';
import {Settings} from '@styled-icons/evaicons-solid/Settings';
import {PeopleTeamAdd} from '@styled-icons/fluentui-system-regular/PeopleTeamAdd';
import {Briefcase} from '@styled-icons/boxicons-solid/Briefcase';
import {AddressCard} from '@styled-icons/fa-regular/AddressCard';

const Container = styled.div`
    position: fixed;
    text-align: center;
    background-color: #3b3d40;
    color: white;
    height: 100%;
    width: 160px;
    z-index: 1,
    top: 0;
    left: 0;
    overflow-x: hidden;
    padding-top: 16px;
`;
const StyledHomeBtn = styled(Home)`
    cursor: pointer;
    height: 40px;
    width: 40;
    color: white;

`; 


const StyledPersonSearchBtn = styled(PersonSearch)`
    cursor: pointer;
    height: 40px;
    width: 40;
    color: white;

`; 

const StyledBearSmileBtn = styled(BearSmile)`
    cursor: pointer;
    height: 40px;
    width: 40;
    color: white;

`; 
const StyledSettingsBtn = styled(Settings)`
    cursor: pointer;
    height: 40px;
    width: 40;
    color: white;

`; 

const StyledPeopleTeamAddBtn = styled(PeopleTeamAdd)`
    cursor: pointer;
    height: 40px;
    width: 40;
    color: white;

`;

const StyledLogOutCircleBtn = styled(LogOutCircle)`
    cursor: pointer;
    height: 40px;
    width: 40;
    color: white;
`; 


const StyledBriefcaseBtn = styled(Briefcase)`
    cursor: pointer;
    height: 40px;
    width: 40;
    color: white;
`; 
const StyledAddressCardBtn = styled(AddressCard)`
    cursor: pointer;
    height: 40px;
    width: 40;
    color: white;
`; 

 function Navbar ({adminLoggedIn}) {
     

    let render;

    if(adminLoggedIn===true){
        render = (
            <Container>
                <Link to="/home">  
                <h1><StyledHomeBtn /></h1>
                </Link>
        
                <Link to="/admin/recruitment-page">  
                <h1><StyledBearSmileBtn /></h1>
                </Link>
        
                <Link to="/admin/applicant-search">
                <h1><StyledPersonSearchBtn /></h1>
                </Link>
        
                <Link to="/admin/add-job-offer-page">
                <h1><StyledPeopleTeamAddBtn /></h1>
                </Link>
        
                <Link to="/admin/settings">
                <h1><StyledSettingsBtn /></h1>
                </Link>
        
                <Link to="/">
                <h1><StyledLogOutCircleBtn /></h1>
                </Link>
        
            </Container>
            )
    }else{
        render = ( 
            <Container>
                <Link to="/home">  
                <h1><StyledHomeBtn /></h1>
                </Link>
        
                <Link to="/applicant/in-process">
                <h1><StyledBriefcaseBtn /></h1>
                </Link>
        
        
                <Link to="/applicant/my-page">
                <h1><StyledAddressCardBtn /></h1>
                </Link>
        
                <Link to="/">
                <h1><StyledLogOutCircleBtn /></h1>
                </Link>
        
            </Container>
            )    
    }
    return render;
    
}

export default Navbar;
