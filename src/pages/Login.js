import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components'

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    height: 300px;
    width: 300px;


`;


function Login(props) {
    props.setLoggedIn(false)

    const [email, setEmail] = useState("")  
    const [password, setPassword] = useState("")
    
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const tryLogin = (event) => {
        event.preventDefault();
        
        if(email ==="Patrikjmelander@gmail.com" && password ==="1234"){
            props.setLoggedIn(true)
            navigate("/home")
        }

        
    };

    return(
        <Container  className="shadow-lg p-3 mb-5 bg-white rounded">
            <Form onSubmit={tryLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={email} onChange={handleEmailChange} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                Default email to use is patrikjmelander@gmail.com
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">

                <Form.Control value={password} onChange={handlePasswordChange} type="password" placeholder="Password" />
                <Form.Text className="text-muted">
                Default password to use is 1234
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </Container>
    )
}

export default Login;