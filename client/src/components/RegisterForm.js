import React, { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'


const RegisterForm = () => {

    const [name, setName] = useState('Your Name');
    const [email, setEmail] = useState('Email Address');
    const [password, setPassword] = useState('Password');
    const [password2, setPassword2] = useState('Re-enter Password');
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

                for (const [key, value] of Object.entries(response.data)) {
                    if(value === 0){
                        localStorage.setItem("userId", response.data._id);
                        history.push("/welcome");
                    }
                    setError(value)
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
                name="name"
                label={name}
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
                label={email}
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
                label='Password'
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
                label='Re-enter Password'
                type="password"
                id="password2"
                autoComplete="current-password"
                onChange={handlePassword2Change}
            />
            <p style={{ marginBottom: 0 }}>{errorNotice}</p>
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