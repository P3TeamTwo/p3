import React from 'react'
import './login.css'
import UserForm from '../../components/UserForm'


const login = () => {
return(
    <div className="loginContainer">
        <br></br>
        <h1>MindShare</h1>
        <h3>It's good to let it out</h3>
        <UserForm />
    </div>
)
}
export default login;
