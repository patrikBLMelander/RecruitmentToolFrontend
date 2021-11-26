import React from 'react';
import styled from 'styled-components'
import logo from '../logoipsum-logo-46.svg'
import { useNavigate } from "react-router-dom";


const AdminLoginBtn = styled.button`
    display: flex;
    background-color: black;
    color: white;
    font-size: 15px;
    padding: 8px 80px 8px 80px;
    border-radius: 5px;
    margin: 10px 10px;
    cursor: pointer;
    align-content: center;
    display: ${loggedIn => (loggedIn ? 'none' : '')};

    
`;

const Container = styled.div`
    display: flex;
    background-image: linear-gradient(#b7cced, #dadee6);
    hight: 400;
    padding-top: 16px;
    margin-top: 0;
    overflow: hidden;
    margin-bottom: 0px;
`;

const H3 = styled.h3`
    display: flex;
    color: #3b3d40;
    margin-top: 20px;
    margin-left: 50px;
    margin-right: 400px;
    font-family: 'Trebuchet MS', sans-serif;
`;

const Img = styled.img`
    display: flex;
    margin-left: 210px;
    margin-right: 400px;


`;



 function Header ({activeJob, loggedIn}) {

    const Navigate = useNavigate();

    function GoToAdminLogin(){
        Navigate("/admin/login")
    }


    return (
    <Container>
        <Img src={logo} alt="React Logo" />
        <H3>{activeJob.title}</H3>
        <form onSubmit={GoToAdminLogin}>
            <AdminLoginBtn  type="submit" value="AdminLogin">Admin</AdminLoginBtn>
        </form>
    </Container>
    )
       
}

export default Header
