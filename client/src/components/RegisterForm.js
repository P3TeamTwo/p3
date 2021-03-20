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


const RegisterForm = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [userData, setUser] = useState('');
    const [errorNotice, setError] = useState('');
    
    const history = useHistory();

    const useStyles = makeStyles((theme) => ({
        form: {
            width: '40%',
            marginTop: '15vh',
            marginLeft: '30%'
        },
        submit: {
            margin: theme.spacing(1, 0, 1),
        },
    }));

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handlePassword2Change = (e) => {
        setPassword2(e.target.value);
    }
    

    const signUp = (e) => {
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(password)
        console.log(password2)
        axios({
            method: 'post',
            url: 'api/user/register',
            data: {
                name: name,
                email: email,
                password: password,
                password2: password2
            }
        })
            .then((response) => {
                setError('This Email is already register')
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
                name="name"
                label="Your Name"
                type="name"
                id="name"
                autoFocus
                autoComplete="current-name"
                onChange={handleNameChange}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                
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
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password2"
                label="Re-enter Password"
                type="password2"
                id="password2"
                autoComplete="current-password"
                onChange={handlePassword2Change}
            />
                <p style = {{marginBottom:0}}>{errorNotice}</p>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={signUp}
            >
                Begin your Journal...
          </Button>
        </>
    );
}

export default RegisterForm