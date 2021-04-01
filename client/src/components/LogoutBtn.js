import React from 'react'
import { GoogleLogout } from 'react-google-login'
// Importing dotenv to be able to use our .env file in react
require('dotenv').config()


const LogoutBtn = () => {

    const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

    const onSuccess = (res) => {
        console.log('Logout made successfully!');
    }

    return (
        null
    )
}

export default LogoutBtn
