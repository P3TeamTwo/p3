import React from 'react'
import Button from '@material-ui/core/Button'
import './welcome.css'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

//import colourway button
import Colourways from '../../components/Colourways';
import Navbar from '../../components/Navbar'
// import IconButton from '@material-ui/core/IconButton';

const useStyle = makeStyles({
    root: {
        fontSize: '55px',
        color: 'black',
        borderRadius: '5',
        marginBottom: '10',
    },
    buttonLeft: {
        padding: '50px 60px 50px 60px',
        borderRadius: '15px',
        backgroundColor: '#c8f4de',
        color: 'black',
        fontSize: '140%',
        ['@media (min-width:375px)']: { // eslint-disable-line no-useless-computed-key
            marginBottom: '1em',
        },
        ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            marginBottom: '0em',
        },


        "&:hover": {
            backgroundColor: '#7eca9c',
            color: 'white'
        },
        boxShadow: '0 9px 30px -5px #a6aa9c'
    },
    buttonRight: {
        padding: '50px 80px 50px 80px',
        borderRadius: '15px',
        backgroundColor: '#bbf1fa',
        color: 'black',
        fontSize: '140%',
        ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            marginLeft: '1em',
        },
        "&:hover": {
            backgroundColor: '#a4ebf3',
            color: 'white'
        },
        boxShadow: '0 9px 30px -5px #a6aa9c'

    },
    toolbar: {
        backgroundColor: '#f5f5f5'
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

        <div style={{ width: '100%' }}>
            <Navbar />
            <div className="Container">
                <WelcomeHeader />
                <h4>MindShare is about noticing trends in your feelings and behaviors to allow you to make healthy choices for you and your wellbeing.</h4>
                <div className="typewriter">
                    <h3 className="talkLine">Welcome to your safe space, lets talk!</h3>
                </div>
                <div className="container-main">
                    <ButtonLeft className="buttonLeft" />
                    <ButtonRight />
                </div>
            </div>
            <Colourways />

        </div>
    )
}

export default Welcome
