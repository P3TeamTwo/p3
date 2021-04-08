import React from 'react'
import './login.css'
import UserForm from '../../components/UserForm'
import { Grid } from '@material-ui/core';


const login = () => {

    return (
        <Grid className='loginContainer' container xs={12} sm={10}  lg={3} direction="column"
        alignItems="center" justify="center">

            <Grid item className="loginGrid">
                <h1>MindShare</h1>
                <h2>It's good to let it out</h2>
                <UserForm />
            </Grid>
        </Grid>
    )
}
export default login;
