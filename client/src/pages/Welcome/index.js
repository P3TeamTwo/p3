import React from 'react'
import Button from '@material-ui/core/Button'
import './welcome.css'
import { useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Calendar from 'react-awesome-calendar';

const useStyle = makeStyles({
    root: {
        fontSize: '40px',
        color: 'black',
        padding: '5px 30px',
        borderRadius: '5',
        marginBottom: '20',
    },
    buttonLeft: {
        padding: '50px 50px 50px 50px',
        borderRadius: '15px',
        backgroundColor: '#ccffbd',
        color: 'black',
        fontSize: '30px',
        marginRight: '3rem',
        "&:hover": {
            backgroundColor: '#7eca9c',
            color: 'white'
        }
    },
    buttonRight: {
        padding: '50px 50px 50px 50px',
        borderRadius: '15px',
        backgroundColor: '#bbf1fa',
        color: 'black',
        fontSize: '30px',
        marginRight: '3rem',
        "&:hover": {
            backgroundColor: '#a4ebf3',
            color: 'white'
        }
    }
})

function WelcomeHeader() {
    const classes = useStyle();

    return <h1 className={classes.root}>Welcome to MindShare</h1>
}

function ButtonLeft() {
    const classes = useStyle();

    const history = useHistory();

    const directToDaily = () => {
        let path = '/Daily'
        history.push(path)
    }

    return <Button className={classes.buttonLeft} onClick={directToDaily}>Today's Reflection</Button>
}

function ButtonRight() {
    const classes = useStyle();

    return <Button className={classes.buttonRight}>My Reflections</Button>
}

const Welcome = () => {
    return (

        <div className="Container">
            <WelcomeHeader />
            <div className="container-main">
                <ButtonLeft />
                <ButtonRight />
            </div>
            <div> <Calendar /> </div>
        </div>
    )
}

export default Welcome
