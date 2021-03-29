import React from 'react'
import Button from '@material-ui/core/Button'
import './welcome.css'
import { useHistory } from 'react-router-dom'
import Calendar from '../../components/Calendar'

import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
    root: {
        fontSize: '55px',
        color: 'black',
        padding: '5px 30px',
        borderRadius: '5',
        marginBottom: '20',
    },
    buttonLeft: {
        padding: '130px 130px 130px 130px',
        borderRadius: '15px',
        backgroundColor: '#ccffbd',
        color: 'black',
        fontSize: '40px',
        top: "-80px",
        marginRight: '3rem',
        "&:hover": {
            backgroundColor: '#7eca9c',
            color: 'white'
        },
        boxShadow:  '0 9px 30px -5px #a6aa9c'

    },
    buttonRight: {
        padding: '130px 130px 130px 130px',
        borderRadius: '15px',
        backgroundColor: '#bbf1fa',
        color: 'black',
        fontSize: '40px',
        top: "-80px",
        marginRight: '3rem',
        "&:hover": {
            backgroundColor: '#a4ebf3',
            color: 'white'
        },
        boxShadow:  '0 9px 30px -5px #a6aa9c'

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

    const history = useHistory();

    const directToCalendar = () => {
        let path = '/calendar'
        history.push(path)
    }

    return <Button className={classes.buttonRight} onClick={directToCalendar}>My Reflections</Button>
}

const Welcome = () => {
    return (
        <div className="Container">
            <WelcomeHeader />
            <div className="container-main">
                <ButtonLeft />
                <ButtonRight />
            </div>
        </div>
    )
}

export default Welcome
