import React from 'react'
import Button from '@material-ui/core/Button'
import './welcome.css'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';


//import colourway buttons
import Colourways from '../../components/Colourways';
import Navbar from '../../components/Navbar'

const useStyle = makeStyles({

    buttonLeft: {
        padding: '50px 60px 50px 60px',
        borderRadius: '15px',
        backgroundColor: '#c8f4de',
        fontSize: '140%',
        "&:hover": {
            backgroundColor: '#7eca9c',
            color: 'white'
        },
        boxShadow: '0 9px 30px -5px #a6aa9c'
    },

    buttonRight: {
        padding: '50px 60px 50px 60px',
        borderRadius: '15px',
        backgroundColor: '#bbf1fa',
        fontSize: '140%',
        boxShadow: '0 9px 30px -5px #a6aa9c'
    },
    toolbar: {
        backgroundColor: '#f5f5f5'
    }
})

function ButtonLeft() {
    const classes = useStyle();
    const history = useHistory();

    const directToDaily = () => {
        let path = '/Daily'
        history.push(path)
    }

    return <Button className={classes.buttonLeft} onClick={directToDaily}>Enter Journal</Button>
}

function ButtonRight() {
    const classes = useStyle();
    const history = useHistory();

    const directToCalendar = () => {
        let path = '/calendar'
        history.push(path)
    }

    return <Button className={classes.buttonRight} onClick={directToCalendar}>My Reflections</Button>
}


const Welcome = () => {

    return (
        // inline styling ensuring that the container div fills the whole screen
        <div style={{ width: '100%', height: '100vh' }} >
            <Navbar />
            <div className="mainContainer">
                <h1 className="welcomeHeader">Welcome to MindShare</h1>

                <h2 className="intro">MindShare is about noticing trends in your feelings and behaviors to allow you to make healthy choices for you and your wellbeing.</h2>
                {/* holds the functionality for typrewriter */}
                <div className="typewriter">
                    {/* Defines the text to be typewritered out  */}
                    <h3 className="talkLine" style={{fontSize: "1.25em"}}>Welcome to your safe space, lets talk!</h3>
                </div>
                {/* Container for buttons */}
                <Grid container direction="row" spacing={3} alignItems="center" justify="center">
                    <Grid item>
                        <ButtonLeft />
                    </Grid>
                    <Grid item>
                        <ButtonRight />
                    </Grid>
                </Grid>
            </div>
            <Colourways />

        </div>
    )
}

export default Welcome
