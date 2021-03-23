import React, { useState } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import GoogleBtn from './GoogleBtn'


const UserForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true);


    const history = useHistory();

    const useStyles = makeStyles((theme) => ({
        form: {
            width: '40%',
            marginTop: '12vh',
            marginLeft: '30%'
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const signIn = (e) => {
        e.preventDefault()
        console.log(email)
        console.log(password)
        axios({
            method: 'post',
            url: 'api/user/login',
            data: {
                email: email,
                password: password
            }
        })
            .then((response) => {

                switch (response.data) {
                    case "Incorrect Password":
                        alert('Incorrect Password')
                        break;
                    case "Email address not found":
                        alert('Email address not found')
                        break;
                    case "Not a valid email address":
                        alert('Not a valid email address')
                        break;
                    default: console.log('fail')
                }
                console.log(response)
                if (response.data.success) {
                    history.push("/welcome");
                }

            })


    }

    const classes = useStyles();

    return (
        <div>
            <form className={classes.form} noValidate>
                {(login) && <LoginForm />}
                {(!login) && <RegisterForm />}
                <Grid item xs>
                    <div onClick={() => setLogin(!login)}
                        style={{ cursor: 'pointer', fontSize:22 }}>
                        {(login) ? "Don't have an account? Sign Up" : "Go Back To Login?"}
                    </div>
                </Grid>
            </form>
            {(login) && <GoogleBtn />}
        </div>
    );
}

export default UserForm
