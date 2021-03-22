import React, { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'



const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUser] = useState('');

    const history = useHistory();

    const useStyles = makeStyles((theme) => ({
        form: {
            width: '40%',
            marginTop: '15vh',
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
                }
                if (response.data.success) {
                    localStorage.setItem("user", response.data.user);
                    history.push("/welcome");
                }
            })


    }

    const classes = useStyles();

    return (
        <>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleEmailChange}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handlePasswordChange}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={signIn}
            >
                Sign In
          </Button>
        </>
    );
}

export default LoginForm
