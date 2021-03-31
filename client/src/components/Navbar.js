import React from 'react'
import Button from '@material-ui/core/Button'

import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../images/MINDSHARE.png'


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
        
        '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.1)',
        } 
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

    toolbar: {
        backgroundColor: '#f5f5f5'
    }
})




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

    const logout = () => {
        let path = '/'
        history.push(path)
    }

    return <Button color="inherit" className={classes.logoutButton} onClick={logout}>Logout</Button>
}

function Title() {
    const classes = useStyle();

    return <h3 className={classes.title} >MindShare</h3>
}

const Navbar= () => {
    return (
        <AppBar position="static">
                <Toolbar style={{backgroundColor: "#f5f5f5"}}>
                    <HomeButton />
                    <Title />
                    <LogoutButton />
                </Toolbar>
            </AppBar> 
    )
}

export default Navbar;