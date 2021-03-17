import React from 'react'
import { useHistory  } from 'react-router-dom'
// import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login'
// Importing dotenv to be able to use our .env file in react
require('dotenv').config()

const LoginBtn = () => {

    const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

    const history = useHistory();


    const responseGoogle = (response) => {
        console.log(response);
        history.push("/");
    }
    const failresponseGoogle = (response) => {
        console.log(response);
    }
    return (
        <GoogleLogin
            clientId={CLIENT_ID}
            render={renderProps => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled}> Sign In </button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={failresponseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    );
}
export default LoginBtn
