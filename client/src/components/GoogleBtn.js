import React from 'react'
import { Button, Paper, IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
// import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login'
import { FcGoogle } from 'react-icons/fc'


// Importing dotenv to be able to use our .env file in react
require('dotenv').config()

const LoginBtn = () => {

    const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

    const history = useHistory();


    const responseGoogle = (response) => {
        console.log(response);
        localStorage.setItem('user', response.data)
        history.push("/welcome");
    }
    const failresponseGoogle = (response) => {
        console.log(response);
    }
    return (
        <GoogleLogin
            clientId={CLIENT_ID}
            render={renderProps => (
                <IconButton
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    aria-label="google"
                    style = {{marginBottom:'10vh'}}
                    >
                    <FcGoogle size = {60} style ={{marginTop:'2vh'}}/>Sign in with Google
                </IconButton>
                // <button onClick={renderProps.onClick} disabled={renderProps.disabled}> Sign In </button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={failresponseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    );
}
export default LoginBtn