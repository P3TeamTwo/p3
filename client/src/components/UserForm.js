import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import GoogleBtn from './GoogleBtn'


const UserForm = () => {

    const [login, setLogin] = useState(true);

    const useStyles = makeStyles((theme) => ({
        form: {
            position: 'relative',
            width: '80%',
            top: "50%",
            left: "50%",
            transform: "translate(-50%)",
            textAlign: 'center',     
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
        formContainer: {
            display: "flex",
            flexDirection: 'column',
        }
    }));

    const classes = useStyles();

    return (
        <div className={classes.formContainer}>
            <form className={classes.form} noValidate>
                {(login) && <LoginForm />}
                {(!login) && <RegisterForm />}
                <Grid item xs>
                    <div onClick={() => setLogin(!login)}
                        style={{ cursor: 'pointer', fontSize:22, marginBottom: "30px" }}>
                        {(login) ? "Don't have an account? Sign Up" : "Go Back To Login?"}
                    </div>
                </Grid>
            </form>
            {(login) && <GoogleBtn />}
        </div>
    ); 
}

export default UserForm
