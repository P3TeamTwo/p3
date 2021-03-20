import React, { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUser] = useState('');


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
        setEmail(e.target.value );
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
              console.log(response)
          })
          

    }

    const classes = useStyles();

    return (
        <div>
            <form className={classes.form} noValidate>
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
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick = {signIn}
                >
                    Sign In
          </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
              </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

export default LoginForm
