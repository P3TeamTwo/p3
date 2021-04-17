import React from 'react'
import Button from '@material-ui/core/Button'
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../images/MINDSHARE.png'


const useStyle = makeStyles({

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
        let path = '/welcome'
        history.push(path)
    }

    return <img src={logo} style={{height: "auto"}}className={classes.homeButton} onClick={directToHome} alt='logo'/>
}
function LogoutButton() {
    const classes = useStyle();

    const history = useHistory();

    
    const signOut = (e) => {
        e.preventDefault()

        axios({
            method: 'get',
            url: 'api/user/logout',
        })

            .then((response) => {
                localStorage.clear()
                history.push(response.data)
                
                    
            })

        }

    return <Button color="inherit" className={classes.logoutButton} onClick={signOut}>Logout</Button>
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