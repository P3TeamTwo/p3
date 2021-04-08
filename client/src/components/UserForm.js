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
            left: "50%",
            transform: "translate(-50%)",
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
        formContainer: {
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            margin: "auto",
        },
        noAccount: {
            fontSize: "20px",
            cursor: 'pointer',
            marginBottom: "30px"

        }
    }));

    const classes = useStyles();

    return (
        <Grid container className={classes.formContainer} xs={11} sm={10} lg={10}>
            <form className={classes.form} noValidate>
                {(login) && <LoginForm />}
                {(!login) && <RegisterForm />}
                <Grid item xs>
                    <div onClick={() => setLogin(!login)}
                    className={classes.noAccount}
                        >
                        {(login) ? "Don't have an account? Sign Up" : "Go Back To Login?"}
                    </div>
                </Grid>
            </form>
            {(login) && <GoogleBtn />}
        </Grid>
    ); 
}

export default UserForm
