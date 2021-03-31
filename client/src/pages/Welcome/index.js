import React from 'react'
import Button from '@material-ui/core/Button'
import './welcome.css'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../images/MINDSHARE.png'
import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';




const useStyle = makeStyles({
    root: {
        fontSize: '55px',
        color: 'black',
        borderRadius: '5',
        marginBottom: '10',
    },
    homeButton: {
        marginRight: "auto",
        maxWidth: '5%',
        height: '100%', 
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
        color: '#E5616D'
    },
    logoutButton: {
        marginLeft: "auto",
        backgroundColor: "#9ba4b4",
        width: '5%',
        height: '100%', 
    },

    buttonLeft: {
        padding: '80px 80px 80px 80px',
        borderRadius: '15px',
        backgroundColor: '#c8f4de',
        color: 'black',
        fontSize: '40px',
        top: "-180px",
        marginRight: '3rem',
        "&:hover": {
            backgroundColor: '#7eca9c',
            color: 'white'
        },
        boxShadow:  '0 9px 30px -5px #a6aa9c' 
    },
    buttonRight: {
        padding: '80px 80px 80px 80px',
        borderRadius: '15px',
        backgroundColor: '#bbf1fa',
        color: 'black',
        fontSize: '40px',
        top: "-180px",
        marginRight: '3rem',
        "&:hover": {
            backgroundColor: '#a4ebf3',
            color: 'white'
        },
        boxShadow:  '0 9px 30px -5px #a6aa9c'

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

function HomeButton() {
    const classes = useStyle();

    const history = useHistory();

    const directToHome = () => {
        let path = '/calendar'
        history.push(path)
    }

    return <img src={logo} className={classes.homeButton} onClick={directToHome}/>
}
function LogoutButton() {
    const classes = useStyle();

    const history = useHistory();

    const directToHome = () => {
        let path = '/welcome'
        history.push(path)
    }

    return <Button color="inherit" className={classes.logoutButton}>Logout</Button>
}

function Title() {
    const classes = useStyle();

    return <h3 className={classes.title} >MindShare</h3>
}


const Welcome = () => {

    return (

        <div style={{width: '100%'}}>
            <AppBar position="static">
                <Toolbar style={{backgroundColor: "#f5f5f5"}}>
                    <HomeButton />
                    <Title />
                    <LogoutButton />
                </Toolbar>
            </AppBar>  
            <div className="Container">
                <WelcomeHeader />
                <div className="typewriter">
                    <h3 className="talkLine">Welcome to your safe space, lets talk!</h3>
                </div>
                    <h4>MindShare is about noticing trends in your feelings and behaviors to allow you to make healthy choices for you and your wellbeing.</h4>
                <div className="container-main">
                    <ButtonLeft />
                    <ButtonRight />
                </div>
            </div>

        </div>
    )
}

export default Welcome
